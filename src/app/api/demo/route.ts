import { NextResponse } from "next/server";
import { validateDemoInput, type DemoPayload } from "@/lib/validations/demo";

// Maximum allowed payload size: 10 kB (10,240 bytes)
const MAX_PAYLOAD_SIZE = 10240;

// Simple in-memory rate limiter: Max 5 requests per IP per 15-minute sliding window
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestStore.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  ipRequestStore.set(ip, validTimestamps);
  return false;
}

// Helper to escape HTML special characters for safe server-generated HTML templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    // 1. Content-Type Header Enforcement (Remediation 4C-03)
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          error: "Unsupported media type. Please submit JSON.",
        },
        { status: 415 }
      );
    }

    // 2. Client IP Extraction & Rate Limiting Check
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many demo requests submitted. Please try again later.",
        },
        { status: 429 }
      );
    }

    // 3. Actual Request Body UTF-8 Byte Size Enforcement (Remediation 4C-02)
    let rawText = "";
    try {
      rawText = await request.text();
    } catch {
      return NextResponse.json(
        { success: false, error: "Unable to read request payload." },
        { status: 400 }
      );
    }

    const byteLength = new TextEncoder().encode(rawText).length;
    if (byteLength > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: "Request body exceeds maximum allowed size (10 kB).",
        },
        { status: 413 }
      );
    }

    // 4. Safe JSON Parsing
    let body: DemoPayload;
    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body payload." },
        { status: 400 }
      );
    }

    // 5. Honeypot Bot Trap Check
    if (body.b_hp && body.b_hp.trim() !== "") {
      // Bot detected: Silent fake success response without sending email
      return NextResponse.json({
        success: true,
        message: "Your demo request has been submitted successfully.",
      });
    }

    // 6. Independent Server-Side Input Validation
    const validation = validateDemoInput(body);
    if (!validation.isValid || !validation.sanitizedPayload) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form submission.",
          fieldErrors: validation.fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, organization, organizationType, requirements } =
      validation.sanitizedPayload;

    // 7. Environment Variables Check for Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.DEMO_RECIPIENT_EMAIL || "test-leads@example.com";
    const fromEmail =
      process.env.DEMO_FROM_EMAIL || "EduFlex Demo <onboarding@resend.dev>";

    // If Resend API key is missing or unconfigured placeholder
    if (
      !resendApiKey ||
      resendApiKey.includes("placeholder") ||
      resendApiKey.includes("re_123456789")
    ) {
      console.warn(
        "[Demo API] RESEND_API_KEY is not configured with a live provider credential. Lead captured locally for testing:",
        { name, email, organization, organizationType }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Lead delivery service is currently undergoing provider setup. Please contact sales directly or try again later.",
        },
        { status: 503 }
      );
    }

    // 8. Plain-Text Email Template (Unescaped for maximum readability in plain-text clients)
    const emailBodyText = `New EduFlex Demo Request

Name: ${name}
Work Email: ${email}
Organization: ${organization}
Organization Type: ${organizationType}

Requirements:
${requirements}

---
Submitted at: ${new Date().toISOString()}
Client IP: ${clientIp}
`;

    // 9. HTML Email Template with HTML Entity Escaping (Remediation 4C-01)
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedOrg = escapeHtml(organization);
    const escapedOrgType = escapeHtml(organizationType);
    const escapedReqs = escapeHtml(requirements);

    const emailBodyHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; color: #0f172a;">
  <h2 style="color: #10b981; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
    New EduFlex Demo Request
  </h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
      <td style="padding: 8px 0;">${escapedName}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Work Email:</td>
      <td style="padding: 8px 0;"><a href="mailto:${escapedEmail}">${escapedEmail}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Organization:</td>
      <td style="padding: 8px 0;">${escapedOrg}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Type:</td>
      <td style="padding: 8px 0;">${escapedOrgType}</td>
    </tr>
  </table>
  <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
    <h4 style="margin-top: 0; color: #334155;">Requirements:</h4>
    <p style="white-space: pre-wrap; margin-bottom: 0; color: #475569;">${escapedReqs}</p>
  </div>
  <p style="margin-top: 25px; font-size: 11px; color: #94a3b8;">
    Submitted via EduFlex Landing Page at ${new Date().toISOString()}
  </p>
</div>
`;

    // 10. Dispatch Outbound Email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        subject: `New EduFlex Demo Request - ${organization}`,
        text: emailBodyText,
        html: emailBodyHtml,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("[Demo API] Resend Provider Error:", resendError);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to process demo request at this time. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your demo request has been submitted successfully.",
    });
  } catch (error) {
    console.error("[Demo API] Unexpected Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

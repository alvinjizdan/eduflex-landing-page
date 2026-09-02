export interface DemoPayload {
  name?: string;
  email?: string;
  organization?: string;
  organizationType?: string;
  requirements?: string;
  b_hp?: string;
}

export interface ValidationResult {
  isValid: boolean;
  sanitizedPayload?: {
    name: string;
    email: string;
    organization: string;
    organizationType: string;
    requirements: string;
  };
  fieldErrors: Record<string, string>;
}

export const VALID_ORGANIZATION_TYPES = [
  "Educational Institution",
  "Corporate / Enterprise",
  "Government / Public Institution",
  "Technical Training",
  "Other",
] as const;

export function validateDemoInput(payload: DemoPayload): ValidationResult {
  const fieldErrors: Record<string, string> = {};

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const organization =
    typeof payload.organization === "string" ? payload.organization.trim() : "";
  const organizationType =
    typeof payload.organizationType === "string"
      ? payload.organizationType.trim()
      : "";
  const requirements =
    typeof payload.requirements === "string" ? payload.requirements.trim() : "";

  // Validate Name
  if (!name) {
    fieldErrors.name = "Please enter your full name.";
  } else if (name.length < 2) {
    fieldErrors.name = "Name must be at least 2 characters long.";
  } else if (name.length > 100) {
    fieldErrors.name = "Name cannot exceed 100 characters.";
  }

  // Validate Email
  if (!email) {
    fieldErrors.email = "Please enter your work email.";
  } else if (email.length < 5 || email.length > 255) {
    fieldErrors.email = "Please enter a valid work email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid work email address.";
  }

  // Validate Organization Name
  if (!organization) {
    fieldErrors.organization = "Please enter your organization name.";
  } else if (organization.length < 2) {
    fieldErrors.organization = "Organization name must be at least 2 characters long.";
  } else if (organization.length > 150) {
    fieldErrors.organization = "Organization name cannot exceed 150 characters.";
  }

  // Validate Organization Type Enum
  if (!organizationType) {
    fieldErrors.organizationType = "Please select an organization type.";
  } else if (
    !VALID_ORGANIZATION_TYPES.includes(
      organizationType as (typeof VALID_ORGANIZATION_TYPES)[number]
    )
  ) {
    fieldErrors.organizationType = "Please select a valid organization type.";
  }

  // Validate Requirements Text
  if (!requirements) {
    fieldErrors.requirements = "Please tell us briefly what you are looking to build.";
  } else if (requirements.length < 5) {
    fieldErrors.requirements = "Requirements must be at least 5 characters long.";
  } else if (requirements.length > 1000) {
    fieldErrors.requirements = "Requirements cannot exceed 1000 characters.";
  }

  const isValid = Object.keys(fieldErrors).length === 0;

  return {
    isValid,
    sanitizedPayload: isValid
      ? {
          name,
          email: email.toLowerCase(),
          organization,
          organizationType,
          requirements,
        }
      : undefined,
    fieldErrors,
  };
}

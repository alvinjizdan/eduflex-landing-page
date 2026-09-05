"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  SchoolIcon,
  FactoryIcon,
  ScaleIcon,
  ZapIcon,
  MonitorIcon,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const organizationTypeItems = [
  {
    value: "Educational Institution",
    label: "Educational Institution",
    icon: <SchoolIcon />,
  },
  {
    value: "Corporate / Enterprise",
    label: "Corporate / Enterprise",
    icon: <FactoryIcon />,
  },
  {
    value: "Government / Public Institution",
    label: "Government / Public Institution",
    icon: <ScaleIcon />,
  },
  {
    value: "Technical Training",
    label: "Technical Training",
    icon: <ZapIcon />,
  },
  {
    value: "Other",
    label: "Other",
    icon: <MonitorIcon />,
  },
];

interface FormData {
  name: string;
  email: string;
  organization: string;
  organizationType: string;
  requirements: string;
  b_hp: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  organization?: string;
  organizationType?: string;
  requirements?: string;
}

export function DemoForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    organizationType: "",
    requirements: "",
    b_hp: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid work email address.";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Please enter your organization name.";
    }

    if (!formData.organizationType) {
      newErrors.organizationType = "Please select an organization type.";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please tell us briefly what you are looking to build.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (serverError) {
      setServerError(null);
    }
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }

        // Controlled user-facing status code error mapping (Section 4D-02 & 4D-14)
        if (response.status === 413) {
          setServerError(
            "Your request is too large. Please shorten your requirements and try again."
          );
        } else if (response.status === 415 || response.status === 400) {
          setServerError(
            data.error || "Please check your information and try again."
          );
        } else if (response.status === 429) {
          setServerError(
            "Too many requests. Please wait a moment and try again."
          );
        } else if (response.status >= 500) {
          setServerError(
            "We couldn't send your request right now. Please try again later."
          );
        } else {
          setServerError(
            data.error || "Something went wrong while sending your request. Please try again."
          );
        }
      }
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === "AbortError") {
        setServerError(
          "The request timed out. Please check your connection and try again."
        );
      } else {
        setServerError(
          "We couldn't connect to the server. Please check your connection and try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-emerald-500/40 text-left space-y-5 shadow-card"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-h3 text-slate-900 dark:text-slate-100 font-bold">
              Demo Request Submitted
            </h4>
            <p className="text-body-small text-emerald-600 dark:text-emerald-400 font-medium">
              Your request has been submitted successfully.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3 text-xs text-slate-700 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-200">Submitted Demo Profile:</p>
          <ul className="space-y-1 font-mono text-slate-700 dark:text-slate-300">
            <li>
              <strong className="text-slate-600 dark:text-slate-400 font-sans">Name:</strong> {formData.name}
            </li>
            <li>
              <strong className="text-slate-600 dark:text-slate-400 font-sans">Email:</strong> {formData.email}
            </li>
            <li>
              <strong className="text-slate-600 dark:text-slate-400 font-sans">Organization:</strong> {formData.organization} ({formData.organizationType})
            </li>
            <li>
              <strong className="text-slate-600 dark:text-slate-400 font-sans">Requirements:</strong> {formData.requirements}
            </li>
          </ul>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <span className="font-semibold text-slate-900 dark:text-slate-300">Next Steps:</span> The EduFlex team can follow up using the information you provided at <strong className="text-slate-900 dark:text-slate-200">{formData.email}</strong>.
        </p>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setServerError(null);
            setFormData({
              name: "",
              email: "",
              organization: "",
              organizationType: "",
              requirements: "",
              b_hp: "",
            });
          }}
          className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded cursor-pointer"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      {/* Honeypot Bot Trap Field (Hidden from human users & screen readers) */}
      <input
        type="text"
        name="b_hp"
        value={formData.b_hp}
        onChange={handleChange}
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
        autoComplete="off"
      />

      {/* Global Server Error Alert */}
      {serverError && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-600 dark:text-red-400 text-xs leading-relaxed animate-in fade-in-0"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Error</p>
            <p>{serverError}</p>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-1.5">
        <label htmlFor="demo-name" className="block text-xs font-semibold text-slate-900 dark:text-slate-200">
          Full Name <span className="text-emerald-600 dark:text-emerald-400">*</span>
        </label>
        <input
          id="demo-name"
          name="name"
          type="text"
          disabled={isSubmitting}
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "demo-name-error" : undefined}
          placeholder="Enter your full name"
          className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {errors.name && (
          <p id="demo-name-error" className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Work Email */}
      <div className="space-y-1.5">
        <label htmlFor="demo-email" className="block text-xs font-semibold text-slate-900 dark:text-slate-200">
          Work Email <span className="text-emerald-600 dark:text-emerald-400">*</span>
        </label>
        <input
          id="demo-email"
          name="email"
          type="email"
          disabled={isSubmitting}
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "demo-email-error" : undefined}
          placeholder="you@organization.com"
          className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {errors.email && (
          <p id="demo-email-error" className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Organization Name & Type Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Organization Name */}
        <div className="space-y-1.5">
          <label htmlFor="demo-org" className="block text-xs font-semibold text-slate-900 dark:text-slate-200">
            Organization Name <span className="text-emerald-600 dark:text-emerald-400">*</span>
          </label>
          <input
            id="demo-org"
            name="organization"
            type="text"
            disabled={isSubmitting}
            value={formData.organization}
            onChange={handleChange}
            aria-invalid={!!errors.organization}
            aria-describedby={errors.organization ? "demo-org-error" : undefined}
            placeholder="Organization name"
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.organization && (
            <p id="demo-org-error" className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.organization}
            </p>
          )}
        </div>

        {/* Organization Type */}
        <div className="space-y-1.5">
          <label htmlFor="demo-org-type" className="block text-xs font-semibold text-slate-900 dark:text-slate-200">
            Organization Type <span className="text-emerald-600 dark:text-emerald-400">*</span>
          </label>
          <Combobox
            id="demo-org-type"
            items={organizationTypeItems}
            value={formData.organizationType}
            onValueChange={(val) => {
              if (isSubmitting) return;
              setFormData((prev) => ({ ...prev, organizationType: val }));
              if (serverError) setServerError(null);
              if (errors.organizationType) {
                setErrors((prev) => ({ ...prev, organizationType: undefined }));
              }
            }}
          >
            <ComboboxInput
              id="demo-org-type"
              placeholder="Select organization type"
              aria-invalid={!!errors.organizationType}
              aria-describedby={errors.organizationType ? "demo-org-type-error" : undefined}
            />
            <ComboboxContent>
              <ComboboxEmpty>No organization types found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem
                    key={item.value}
                    value={item.value}
                    className="flex items-center gap-2"
                  >
                    <span className="shrink-0 text-emerald-600 dark:text-emerald-400 [&>svg]:size-4">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          {errors.organizationType && (
            <p id="demo-org-type-error" className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.organizationType}
            </p>
          )}
        </div>
      </div>

      {/* Requirements Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="demo-reqs" className="block text-xs font-semibold text-slate-900 dark:text-slate-200">
          What are you looking to build? <span className="text-emerald-600 dark:text-emerald-400">*</span>
        </label>
        <textarea
          id="demo-reqs"
          name="requirements"
          rows={3}
          disabled={isSubmitting}
          value={formData.requirements}
          onChange={handleChange}
          aria-invalid={!!errors.requirements}
          aria-describedby={errors.requirements ? "demo-reqs-error" : undefined}
          placeholder="Tell us briefly about your learning structure, users, practical training needs, or deployment requirements."
          className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {errors.requirements && (
          <p id="demo-reqs-error" className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.requirements}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        variant="primary"
        size="lg"
        type="submit"
        disabled={isSubmitting}
        className="w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Request...</span>
          </>
        ) : (
          <>
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
        By submitting this form, you’re asking the EduFlex team to discuss your organization’s learning requirements. We’ll use the information you provide for that conversation.
      </p>
    </form>
  );
}


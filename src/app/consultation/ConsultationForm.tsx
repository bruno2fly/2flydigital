"use client";

import { useId, useState, type FormEvent } from "react";

type ApiResponse = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

type FieldName = "name" | "email" | "phone" | "company" | "message";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  phoneDisplay: string;
  phoneHref: string;
};

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ConsultationForm({ phoneDisplay, phoneHref }: Props) {
  const formId = useId();
  const [values, setValues] = useState<Record<FieldName, string>>(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<FieldName, string>>
  >({});

  function updateField(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setServerError(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as ApiResponse;

      if (response.ok && data.ok) {
        setStatus("success");
        setValues(initialValues);
        return;
      }

      if (data.fieldErrors) {
        setFieldErrors(data.fieldErrors);
      }
      setServerError(data.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setServerError(
        "Network error. Please try again or call us directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="bg-accent-gradient flex h-14 w-14 items-center justify-center rounded-full text-white shadow-accent-glow">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-black leading-tight text-text sm:text-3xl">
          Got it — your message is on the way.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
          We will reach out within one business day. If it is urgent, call us and we will pick
          up directly.
        </p>
        <div className="mt-7 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={phoneHref}
            className="bg-accent-gradient shadow-accent-glow inline-flex min-h-12 w-full items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition hover:brightness-110 sm:w-auto"
          >
            Call Now {phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-bold text-text transition hover:border-accent/40 hover:text-accent sm:w-auto"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      <header>
        <h2 className="text-2xl font-black leading-tight text-text sm:text-3xl">
          Tell us about your business
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Quick form. We read every one personally.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          error={fieldErrors.name}
          onChange={(value) => updateField("name", value)}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          error={fieldErrors.email}
          onChange={(value) => updateField("email", value)}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={values.phone}
          error={fieldErrors.phone}
          onChange={(value) => updateField("phone", value)}
        />
        <Field
          label="Company"
          name="company"
          autoComplete="organization"
          value={values.company}
          error={fieldErrors.company}
          onChange={(value) => updateField("company", value)}
        />
      </div>

      <TextareaField
        label="What do you need help with?"
        name="message"
        required
        rows={5}
        value={values.message}
        error={fieldErrors.message}
        onChange={(value) => updateField("message", value)}
        placeholder="A few sentences about your business, current marketing, and what you want to improve."
      />

      {status === "error" && serverError && (
        <div
          role="alert"
          className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        >
          {serverError}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="bg-accent-gradient shadow-accent-glow inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Book My Free Consultation"}
        </button>
        <a
          href={phoneHref}
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-bold text-text transition hover:border-accent/40 hover:text-accent"
        >
          Call Now {phoneDisplay}
        </a>
      </div>

      <p className="text-xs leading-5 text-muted">
        We will only use this to follow up about your consultation. No spam, ever.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: FieldName;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  value,
  error,
  onChange,
}: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-text placeholder:text-muted/60 transition focus:outline-none focus:ring-2 focus:ring-accent/30 ${
          error
            ? "border-rose-300 focus:border-rose-400"
            : "border-border focus:border-accent/60"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}

type TextareaFieldProps = Omit<FieldProps, "type"> & {
  rows?: number;
  placeholder?: string;
};

function TextareaField({
  label,
  name,
  required,
  value,
  error,
  onChange,
  rows = 4,
  placeholder,
}: TextareaFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`block w-full resize-y rounded-lg border bg-white px-3.5 py-2.5 text-sm leading-6 text-text placeholder:text-muted/60 transition focus:outline-none focus:ring-2 focus:ring-accent/30 ${
          error
            ? "border-rose-300 focus:border-rose-400"
            : "border-border focus:border-accent/60"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}

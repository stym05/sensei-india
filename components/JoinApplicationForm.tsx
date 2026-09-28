"use client";

import { FormEvent, useMemo, useState } from "react";

const fieldStyles =
  "w-full border-0 border-b border-slate-200 bg-transparent px-0 py-2 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-600 focus:ring-0";

const roles = ["Online Educator", "Academic Counsellor", "Curriculum Specialist"] as const;

type Application = {
  name: string;
  email: string;
  role: string;
  expertise: string;
  experience: string;
  location: string;
  profile: string;
  message: string;
};

const emptyApplication: Application = {
  name: "",
  email: "",
  role: "Online Educator",
  expertise: "",
  experience: "",
  location: "",
  profile: "",
  message: "",
};

export default function JoinApplicationForm({ destinationEmail }: { destinationEmail: string }) {
  const [application, setApplication] = useState(emptyApplication);
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const subject = `Join Sensei India - ${application.role} - ${application.name}`;
  const body = useMemo(
    () =>
      [
        "Hello Sensei India team,",
        "",
        `I would like to express interest in the ${application.role} opportunity.`,
        "",
        `Name: ${application.name}`,
        `Email: ${application.email}`,
        `Expertise / subjects: ${application.expertise}`,
        `Experience: ${application.experience}`,
        `Location and time zone: ${application.location}`,
        application.profile ? `CV / profile link: ${application.profile}` : "CV / profile link: I will attach my CV to this email.",
        "",
        "Additional information:",
        application.message || "Not provided.",
        "",
        "Thank you.",
      ].join("\n"),
    [application],
  );

  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(destinationEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlookHref = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(destinationEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const mailHref = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  function updateField(field: keyof Application, value: string) {
    setApplication((current) => ({ ...current, [field]: value }));
    setPrepared(false);
    setCopied(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
  }

  async function copyApplication() {
    await navigator.clipboard.writeText(`${subject}\n\n${body}`);
    setCopied(true);
  }

  return (
    <form onSubmit={handleSubmit} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-1 border-b border-slate-100 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <h2 className="font-(family-name:--font-sora) text-sm font-bold text-slate-950">Your application</h2>
          <p className="mt-0.5 text-xs text-slate-500">Share the essentials. This takes about 3 minutes.</p>
        </div>
        <span className="mt-1 w-fit rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-blue-700 sm:mt-0">Join Sensei India</span>
      </div>

      <div className="p-4 sm:p-5">
        <fieldset>
          <legend className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">Interested role</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {roles.map((role) => {
              const selected = application.role === role;
              return (
                <button key={role} type="button" aria-pressed={selected} onClick={() => updateField("role", role)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 ${selected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"}`}>
                  {role}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        <Field label="Full name" htmlFor="join-name" required>
          <input id="join-name" required autoComplete="name" value={application.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your full name" className={fieldStyles} />
        </Field>
        <Field label="Email address" htmlFor="join-email" required>
          <input id="join-email" required type="email" autoComplete="email" value={application.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" className={fieldStyles} />
        </Field>
        <Field label="Experience" htmlFor="join-experience" required>
          <input id="join-experience" required value={application.experience} onChange={(event) => updateField("experience", event.target.value)} placeholder="e.g. 5 years" className={fieldStyles} />
        </Field>
        <Field label="Subjects or expertise" htmlFor="join-expertise" required>
          <input id="join-expertise" required value={application.expertise} onChange={(event) => updateField("expertise", event.target.value)} placeholder="e.g. Mathematics, IB DP" className={fieldStyles} />
        </Field>
        <Field label="Location and time zone" htmlFor="join-location" required>
          <input id="join-location" required value={application.location} onChange={(event) => updateField("location", event.target.value)} placeholder="e.g. Delhi, IST" className={fieldStyles} />
        </Field>
        <Field label="CV, LinkedIn or portfolio" htmlFor="join-profile" hint="Optional">
            <input id="join-profile" type="url" value={application.profile} onChange={(event) => updateField("profile", event.target.value)} placeholder="https://..." className={fieldStyles} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Brief introduction" htmlFor="join-message" hint="Optional">
            <textarea id="join-message" rows={2} value={application.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Your teaching approach and availability" className={`${fieldStyles} resize-y`} />
          </Field>
        </div>
      </div>

        <div className="mt-4 flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-4 text-slate-400">Your information stays in your browser until you open an email service.</p>
          <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200">
            Prepare application <span aria-hidden="true">→</span>
          </button>
        </div>

      {prepared && (
        <div className="mt-4 flex flex-col gap-3 border-t border-emerald-100 bg-emerald-50 px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between" role="status" aria-live="polite">
          <div>
            <p className="text-xs font-bold text-emerald-900">Draft ready — remember to attach your CV.</p>
            <a href={mailHref} className="mt-1 inline-flex text-[11px] font-semibold text-emerald-800 underline underline-offset-2">Use another email app</a>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <a href={gmailHref} target="_blank" rel="noreferrer" className="rounded-md bg-white px-3 py-2 text-[11px] font-bold text-slate-700 ring-1 ring-slate-200 transition hover:text-blue-700">Gmail</a>
            <a href={outlookHref} target="_blank" rel="noreferrer" className="rounded-md bg-white px-3 py-2 text-[11px] font-bold text-slate-700 ring-1 ring-slate-200 transition hover:text-blue-700">Outlook</a>
            <button type="button" onClick={copyApplication} className="rounded-md bg-white px-3 py-2 text-[11px] font-bold text-slate-700 ring-1 ring-slate-200 transition hover:text-blue-700">{copied ? "Copied ✓" : "Copy"}</button>
          </div>
        </div>
      )}
      </div>
    </form>
  );
}

function Field({ label, htmlFor, children, required = false, hint }: { label: string; htmlFor: string; children: React.ReactNode; required?: boolean; hint?: string }) {
  return (
    <div className="grid gap-0.5">
      <label htmlFor={htmlFor} className="text-[11px] font-bold text-slate-600">
        {label}{required && <span className="ml-0.5 text-blue-600">*</span>}{hint && <span className="ml-1 font-medium text-slate-400">({hint})</span>}
      </label>
      {children}
    </div>
  );
}

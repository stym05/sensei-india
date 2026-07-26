"use client";

import { FormEvent, useState } from "react";

const fieldStyles =
  "w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    // Replace this with your API route or server action.
    setSent(true);
    form.reset();
  }

  function handleFormChange() {
    if (sent) {
      setSent(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      className="rounded-4xl border border-slate-200 bg-white p-6 shadow-xl shadow-sky-100/70 sm:p-8"
    >
      <div className="mb-7">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
          Contact us
        </p>

        <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          How can we help?
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Share your query and our team will get back to you as soon as
          possible.
        </p>
      </div>

      {sent && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
        >
          <span
            aria-hidden="true"
            className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 font-bold text-white"
          >
            ✓
          </span>

          <div>
            <p className="font-bold">Message submitted successfully.</p>

            <p className="mt-1 text-emerald-700">
              Connect this form to your backend to start receiving enquiries.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label
            htmlFor="contact-name"
            className="text-sm font-bold text-slate-800"
          >
            Full name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            className={fieldStyles}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-email"
            className="text-sm font-bold text-slate-800"
          >
            Email address
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldStyles}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-subject"
            className="text-sm font-bold text-slate-800"
          >
            Subject
            <span className="ml-1 font-medium text-slate-400">
              (optional)
            </span>
          </label>

          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What is your enquiry about?"
            className={fieldStyles}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-message"
            className="text-sm font-bold text-slate-800"
          >
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder="Tell us how we can help you..."
            className={`${fieldStyles} min-h-36 resize-y`}
          />
        </div>

        <button
          type="submit"
          className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-slate-300/60 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
        >
          Send Message

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          By submitting this form, you agree to be contacted regarding your
          enquiry.
        </p>
      </div>
    </form>
  );
}
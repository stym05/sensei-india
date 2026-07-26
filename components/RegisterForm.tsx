"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { courses } from "@/data/site";

const fieldStyles =
  "w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100";

const learningModes = [
  "Online",
  "Offline",
  "Hybrid",
  "Home Tutor",
] as const;

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    // Replace this section with your API route or server action.
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-4xl rounded-4xl border border-emerald-200 bg-white p-5 shadow-2xl shadow-emerald-100/60 sm:p-8">
        <div
          role="status"
          aria-live="polite"
          className="rounded-3xl bg-emerald-50 px-6 py-10 text-center sm:px-10"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-3xl font-bold text-white shadow-lg shadow-emerald-200">
            ✓
          </div>

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-700">
            Enquiry submitted
          </p>

          <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Registration received successfully
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Thank you for sharing your learning requirements. Our admissions
            team will review your enquiry and contact you with suitable course
            or tutor options.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl rounded-4xl border border-slate-200 bg-white p-5 shadow-2xl shadow-sky-100/70 sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
          Student registration
        </p>

        <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Tell us about your learning needs
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Share your course, subject and learning preferences so our team can
          recommend a suitable tutor or programme.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 md:grid-cols-2"
      >
        <div className="grid gap-2">
          <label
            htmlFor="student-name"
            className="text-sm font-bold text-slate-800"
          >
            Full name
          </label>

          <input
            id="student-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter student name"
            className={fieldStyles}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="student-phone"
            className="text-sm font-bold text-slate-800"
          >
            Phone number
          </label>

          <input
            id="student-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={fieldStyles}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="student-email"
            className="text-sm font-bold text-slate-800"
          >
            Email address
          </label>

          <input
            id="student-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="student@example.com"
            className={fieldStyles}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="student-level"
            className="text-sm font-bold text-slate-800"
          >
            Class or learning level
          </label>

          <input
            id="student-level"
            name="level"
            type="text"
            required
            placeholder="Class 10, Class 12, Beginner..."
            className={fieldStyles}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="student-course"
            className="text-sm font-bold text-slate-800"
          >
            Course or training interest
          </label>

          <select
            id="student-course"
            name="course"
            required
            defaultValue=""
            className={fieldStyles}
          >
            <option value="" disabled>
              Choose a course
            </option>

            {courses.map((course) => (
              <option
                key={course.title}
                value={course.title}
              >
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="learning-mode"
            className="text-sm font-bold text-slate-800"
          >
            Preferred learning mode
          </label>

          <select
            id="learning-mode"
            name="mode"
            required
            defaultValue=""
            className={fieldStyles}
          >
            <option value="" disabled>
              Choose a learning mode
            </option>

            {learningModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2 md:col-span-2">
          <label
            htmlFor="learning-goal"
            className="text-sm font-bold text-slate-800"
          >
            Message or learning goal
            <span className="ml-1 font-medium text-slate-400">
              (optional)
            </span>
          </label>

          <textarea
            id="learning-goal"
            name="message"
            rows={5}
            placeholder="Tell us about your subject, target exam, preferred timing or tutor requirements."
            className={`${fieldStyles} min-h-36 resize-y`}
          />
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
          <input
            id="registration-consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-sky-500 accent-sky-500 focus:ring-sky-500"
          />

          <label
            htmlFor="registration-consent"
            className="text-sm leading-6 text-slate-600"
          >
            I agree to be contacted by Sensei India and accept the{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-and-conditions"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800"
            >
              Terms &amp; Conditions
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          className="group inline-flex w-fit items-center justify-center justify-self-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-sky-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 md:col-span-2"
        >
          Submit Student Registration

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p className="text-center text-xs leading-5 text-slate-500 md:col-span-2">
          Your information will only be used to assist with your course or
          tutor enquiry.
        </p>
      </form>
    </div>
  );
}
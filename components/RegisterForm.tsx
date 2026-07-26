"use client";

import { FormEvent, useState } from "react";
import { courses } from "@/data/site";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-sky-100 sm:p-8">
      {submitted ? (
        <div className="rounded-3xl bg-emerald-50 p-8 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-3xl text-white">✓</div>
          <h2 className="mt-5 text-3xl font-black text-slate-950">Registration received!</h2>
          <p className="mt-3 text-slate-600">This frontend demo captured your details locally. Connect this form to an API, CRM, or email service for production.</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white">Submit another enquiry</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-slate-700">Full Name<input required className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal" placeholder="Student name" /></label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Phone Number<input required className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal" placeholder="+91..." /></label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Email Address<input type="email" required className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal" placeholder="student@email.com" /></label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Class / Level<input required className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal" placeholder="Class 10, Class 12, Beginner..." /></label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Course / Training Interest<select required className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal"><option value="">Choose course</option>{courses.map((course) => <option key={course.title}>{course.title}</option>)}</select></label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Preferred Mode<select required className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal"><option>Online</option><option>Offline</option><option>Hybrid</option><option>Home Tutor</option></select></label>
          <label className="md:col-span-2 grid gap-2 text-sm font-bold text-slate-700">Message / Learning Goal<textarea className="focus-ring min-h-32 rounded-2xl border border-slate-200 px-4 py-3 font-normal" placeholder="Tell us your subject, target exam, timing preference, or tutor requirement." /></label>
          <label className="md:col-span-2 flex items-start gap-3 text-sm text-slate-600"><input required type="checkbox" className="mt-1" /> I agree to be contacted by Sensei India and accept the Privacy Policy and Terms & Conditions.</label>
          <button className="md:col-span-2 rounded-2xl bg-sky-500 px-6 py-4 text-sm font-black text-white shadow-lg shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-600">Submit Student Registration</button>
        </form>
      )}
    </div>
  );
}

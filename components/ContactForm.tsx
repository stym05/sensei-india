"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-sky-100">
      {sent && <div className="mb-5 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">Thanks! Your message is ready for backend integration.</div>}
      <div className="grid gap-4">
        <input required placeholder="Name" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <input required type="email" placeholder="Email" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <input placeholder="Subject" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <textarea required placeholder="How can we help?" className="focus-ring min-h-32 rounded-2xl border border-slate-200 px-4 py-3" />
        <button className="rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white hover:bg-sky-600">Send Message</button>
      </div>
    </form>
  );
}

"use client";

import { useMemo, useState } from "react";
import { tutors } from "@/data/site";

export default function TutorSearch() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("All");
  const [location, setLocation] = useState("All");

  const filtered = useMemo(() => {
    return tutors.filter((tutor) => {
      const text = `${tutor.name} ${tutor.subject} ${tutor.location}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      const matchesMode = mode === "All" || tutor.mode === mode;
      const matchesLocation = location === "All" || tutor.location === location;
      return matchesQuery && matchesMode && matchesLocation;
    });
  }, [query, mode, location]);

  const locations = ["All", ...Array.from(new Set(tutors.map((t) => t.location)))];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="glass rounded-[2rem] p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <input className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Search by tutor, subject or city..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <select className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" value={mode} onChange={(e) => setMode(e.target.value)}>
            {['All','Online','Offline','Hybrid'].map((item) => <option key={item}>{item}</option>)}
          </select>
          <select className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" value={location} onChange={(e) => setLocation(e.target.value)}>
            {locations.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm font-bold text-slate-600">Showing {filtered.length} tutor(s)</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tutor) => (
          <article key={tutor.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-slate-950">{tutor.name}</h3>
                <p className="mt-1 text-sm font-bold text-sky-700">{tutor.subject}</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-black text-amber-700">★ {tutor.rating}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{tutor.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">{tutor.experience}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{tutor.location}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{tutor.mode}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{tutor.price}</span>
            </div>
            <a href="/register" className="mt-6 inline-flex w-full justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-sky-600">Book Demo Class</a>
          </article>
        ))}
      </div>
    </section>
  );
}

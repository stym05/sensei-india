import Link from "next/link";

import SectionTitle from "@/components/SectionTitle";

const chapters = [
  {
    number: "01",
    title: "A simple idea in Dehradun",
    text: "Sensei India began with the belief that the right teacher can make a difficult subject feel understandable. Families needed more than a list of tutors—they needed thoughtful guidance towards an educator who could connect with the learner.",
  },
  {
    number: "02",
    title: "A classroom without borders",
    text: "Online learning made it possible to carry the personal attention of Indian tutoring to learners around the world. Our approach respects local curricula, family schedules, languages and time zones while keeping the learning relationship human.",
  },
  {
    number: "03",
    title: "Personal before standard",
    text: "We begin with the learner’s current level, goals and preferred way of learning. Tutor recommendations, demo sessions and learning plans follow that understanding rather than forcing every student into the same programme.",
  },
  {
    number: "04",
    title: "Building for lasting progress",
    text: "Our ambition is to grow a trusted global academy where learners receive clear teaching, families receive dependable communication and educators have the support to do their best work.",
  },
];

export default function OurStoryPage() {
  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto mb-8 max-w-7xl">
        <Link href="/about" className="text-sm font-bold text-primary-700 transition hover:text-primary-900">← About Sensei India</Link>
      </div>

      <SectionTitle
        eyebrow="Our Story"
        title="From Indian roots to learning without borders"
        text="The Sensei India story is about combining personal teaching, academic care and worldwide online access."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-px bg-slate-200 md:grid-cols-2">
        {chapters.map((chapter) => (
          <article key={chapter.title} className="bg-white p-7 sm:p-9">
            <span className="text-xs font-extrabold text-primary-500">{chapter.number}</span>
            <h2 className="mt-4 font-(family-name:--font-sora) text-2xl font-bold text-slate-950">{chapter.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{chapter.text}</p>
          </article>
        ))}
      </div>

      <section className="mx-auto mt-12 max-w-6xl bg-primary-950 p-8 text-center text-white sm:p-12">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-300">Where our story goes next</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-(family-name:--font-sora) text-3xl font-bold sm:text-4xl">
          A worldwide academy built one trusted learning relationship at a time
        </h2>
        <Link href="/register" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-500 transition hover:-translate-y-0.5 hover:bg-primary-50">
          Begin Your Enquiry <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}

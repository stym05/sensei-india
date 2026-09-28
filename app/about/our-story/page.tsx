import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Sensei India",
  description: "Discover how Sensei India grew from a simple idea in Dehradun into a learner-first online academy supporting families worldwide.",
};

const chapters = [
  {
    number: "01",
    label: "The beginning",
    title: "A simple idea in Dehradun",
    text: "Sensei India began with a clear belief: the right teacher can make even a difficult subject feel understandable. Families needed more than a list of tutors—they needed thoughtful guidance towards an educator who could truly connect with the learner.",
  },
  {
    number: "02",
    label: "The classroom expands",
    title: "Learning without borders",
    text: "Online learning allowed the personal attention of Indian tutoring to reach learners around the world. We adapt to curricula, family schedules, languages and time zones while keeping every learning relationship human.",
  },
  {
    number: "03",
    label: "Our approach",
    title: "The learner comes first",
    text: "We begin with each learner’s current level, goals and preferred way of learning. Tutor recommendations, demo sessions and learning plans follow that understanding—not a standard template.",
  },
  {
    number: "04",
    label: "What comes next",
    title: "Progress built on trust",
    text: "We are building a dependable global academy where learners receive clear teaching, families receive honest communication and educators have the support to do their best work.",
  },
] as const;

const principles = ["Personal teaching", "Curriculum-aware guidance", "Worldwide access"] as const;

export default function OurStoryPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[#f8f9ff] px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8 lg:pb-16">
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(#c7d2fe_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
        <div className="absolute -right-32 top-8 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-slate-500 transition hover:text-primary-700">
            <span aria-hidden="true">←</span> About Sensei India
          </Link>

          <div className="mt-7 grid items-center gap-6 lg:grid-cols-[0.82fr_1.36fr_0.82fr] lg:gap-7">
            <div className="relative mx-auto hidden w-full max-w-[17rem] lg:block">
              <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary-100 to-cyan-100" aria-hidden="true" />
              <Image src="/images/our-story-welcome-guide.png" alt="Sensei India tutor welcoming learners" width={1024} height={1365} priority className="relative mx-auto h-auto w-full object-contain drop-shadow-[0_22px_20px_rgba(30,64,175,0.2)]" sizes="272px" />
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-600 sm:text-xs">Our story</p>
              <h1 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Rooted in India.<br />Built for learners everywhere.
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Sensei India brings personal teaching, academic care and worldwide online access together in one learner-first experience.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-slate-200 pt-4">
                {principles.map((principle) => (
                  <span key={principle} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 sm:text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />{principle}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-[0.8fr_1.2fr] items-end gap-3 lg:block">
              <div className="relative mx-auto w-full max-w-[10rem] lg:hidden">
                <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary-100 to-cyan-100" aria-hidden="true" />
                <Image src="/images/our-story-welcome-guide.png" alt="Sensei India tutor welcoming learners" width={1024} height={1365} priority className="relative h-auto w-full object-contain drop-shadow-[0_18px_16px_rgba(30,64,175,0.18)]" sizes="160px" />
              </div>

              <div className="relative mx-auto w-full max-w-md rounded-2xl border border-primary-100 bg-white p-4 shadow-lg shadow-primary-100/50 sm:p-5">
              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border-[10px] border-amber-100" aria-hidden="true" />
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">Our journey</p>
              <div className="mt-4 grid gap-3 sm:flex sm:items-center lg:grid">
                <div className="shrink-0">
                  <p className="font-(family-name:--font-sora) text-base font-bold sm:text-lg">Dehradun</p>
                  <p className="mt-0.5 text-xs text-slate-500">Where it began</p>
                </div>
                <div className="relative hidden h-px flex-1 bg-primary-200 sm:block lg:hidden">
                  <span className="absolute -left-0.5 -top-1 h-2.5 w-2.5 rounded-full bg-primary-600 ring-4 ring-primary-100" />
                  <span className="absolute -right-0.5 -top-1 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-100" />
                  <span className="absolute left-1/2 top-[-0.7rem] -translate-x-1/2 bg-white px-2 text-sm text-primary-500" aria-hidden="true">→</span>
                </div>
                <span className="text-primary-500 sm:hidden lg:inline" aria-hidden="true">↓</span>
                <div className="shrink-0 sm:text-right lg:text-left">
                  <p className="font-(family-name:--font-sora) text-base font-bold sm:text-lg">Worldwide</p>
                  <p className="mt-0.5 text-xs text-slate-500">Where we teach</p>
                </div>
              </div>
              <p className="mt-4 rounded-lg bg-primary-50 px-3 py-2.5 text-xs font-semibold leading-5 text-primary-950 sm:text-sm">
                One thoughtful learning relationship at a time.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 border-b border-slate-200 pb-7 sm:grid-cols-[0.6fr_1fr] sm:items-end sm:gap-12">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-600 sm:text-xs">How we got here</p>
              <h2 className="mt-2.5 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.035em] sm:text-3xl">A story shaped around the learner</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 sm:justify-self-end sm:text-base sm:leading-7">
              Our tools and reach have evolved, but the central idea has stayed the same: understand the learner before designing the learning.
            </p>
          </div>

          <ol className="relative mt-2 sm:mt-4">
            <span className="absolute bottom-8 left-[1.15rem] top-8 w-px bg-slate-200 sm:left-1/2" aria-hidden="true" />
            {chapters.map((chapter, index) => (
              <li key={chapter.title} className="relative grid gap-3 py-6 pl-14 sm:grid-cols-2 sm:gap-16 sm:pl-0 sm:py-8">
                <span className="absolute left-0 top-7 grid h-9 w-9 place-items-center rounded-full border-4 border-white bg-primary-600 text-[10px] font-extrabold text-white shadow-sm sm:left-1/2 sm:top-9 sm:-translate-x-1/2">
                  {chapter.number}
                </span>

                <div className={index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:col-start-2 sm:pl-8"}>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary-600">{chapter.label}</p>
                  <h3 className="mt-2 font-(family-name:--font-sora) text-lg font-bold tracking-[-0.02em] sm:text-xl">{chapter.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-slate-600">{chapter.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl bg-slate-950 px-5 py-7 text-white sm:px-8 sm:py-9 lg:flex-row lg:items-center">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-300">The next chapter</p>
            <h2 className="mt-2 max-w-2xl font-(family-name:--font-sora) text-xl font-bold leading-tight sm:text-2xl">
              Your learning journey can become part of our story.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">Tell us what the learner needs and our academic team will help you find the right next step.</p>
          </div>
          <Link href="/register" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-primary-50 hover:text-primary-700">
            Begin an enquiry <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

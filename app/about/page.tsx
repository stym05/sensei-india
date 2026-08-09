import Link from "next/link";

import SectionTitle from "@/components/SectionTitle";

const aboutPages = [
  {
    number: "01",
    eyebrow: "Our Story",
    title: "From Dehradun to a worldwide classroom",
    text: "Discover why Sensei India was created and how our learner-first approach connects families with thoughtful educators.",
    href: "/about/our-story",
  },
  {
    number: "02",
    eyebrow: "Founder & Team",
    title: "The people behind every learning match",
    text: "Meet the vision, academic coordination and educator community that shape the Sensei India experience.",
    href: "/about/founder-team",
  },
  {
    number: "03",
    eyebrow: "Join Us",
    title: "Help learners move forward with confidence",
    text: "Explore opportunities for educators, academic counsellors and curriculum specialists who share our values.",
    href: "/about/join-us",
  },
];

const principles = [
  "Understand the learner before recommending a tutor",
  "Respect curricula, cultures and time zones",
  "Communicate clearly with learners and families",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        eyebrow="About Sensei India"
        title="An Indian academy with a global learning community"
        text="We connect learners worldwide with experienced educators through personal tutoring, curriculum-aware guidance and dependable academic support."
      />

      <section className="mx-auto mt-12 grid max-w-7xl gap-px bg-slate-200 lg:grid-cols-3">
        {aboutPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex min-h-80 flex-col bg-white p-7 transition hover:bg-primary-50 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-(family-name:--font-sora) text-xs font-extrabold text-primary-500">
                {page.number}
              </span>
              <span aria-hidden="true" className="text-xl text-primary-300 transition-transform group-hover:translate-x-1">→</span>
            </div>
            <p className="mt-12 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">
              {page.eyebrow}
            </p>
            <h2 className="mt-3 font-(family-name:--font-sora) text-2xl font-bold leading-tight text-slate-950">
              {page.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{page.text}</p>
            <span className="mt-auto pt-8 text-sm font-bold text-primary-700">Explore {page.eyebrow}</span>
          </Link>
        ))}
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl border border-slate-200 bg-white lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">Our purpose</p>
          <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Make personal teaching accessible beyond geography
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Sensei India brings the depth and dedication of Indian teaching to
            learners across the world. We begin with the learner’s curriculum,
            current understanding and goals, then coordinate a tutor and
            learning plan designed around those needs.
          </p>
        </div>

        <div className="grid gap-px bg-primary-800">
          {principles.map((principle, index) => (
            <div key={principle} className="flex items-center gap-4 bg-primary-950 p-6 text-white">
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/15 text-xs font-extrabold text-primary-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold leading-6 text-white/80">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-6 border border-primary-100 bg-primary-50 p-7 sm:p-9 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">Start a conversation</p>
          <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold text-slate-950 sm:text-3xl">
            Looking for the right learning support?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Tell our academic team about the learner’s curriculum, subject and goals.
          </p>
        </div>
        <Link href="/register" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-600">
          Request a Demo <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}

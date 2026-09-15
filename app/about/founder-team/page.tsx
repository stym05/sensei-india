import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rohit Walia | Founder of Sensei India",
  description:
    "Meet Rohit Walia, Founder and Education Mentor at SenseiIndia.com, and learn about his approach to personalised academic coaching.",
};

const expertiseGroups = [
  {
    label: "School learning",
    items: ["K–1 to K–12", "Subject-specific coaching", "School examination preparation"],
  },
  {
    label: "Entrance preparation",
    items: ["Foundation courses", "JEE preparation", "NEET preparation", "Competitive examinations"],
  },
  {
    label: "Advanced learning",
    items: ["Engineering Mathematics", "Advanced Mathematics & Science", "Entrance examination preparation"],
  },
];

const curricula = [
  "CBSE",
  "ICSE",
  "IB",
  "IGCSE",
  "Australian Curriculum",
  "American Curriculum",
  "UK Curriculum",
  "Other global curricula",
];

const approach = [
  {
    number: "01",
    title: "Understand the learner",
    text: "Begin with the student’s goals, syllabus, strengths and learning gaps.",
  },
  {
    number: "02",
    title: "Build the right plan",
    text: "Shape the pace, teaching method and resources around individual needs.",
  },
  {
    number: "03",
    title: "Strengthen fundamentals",
    text: "Develop conceptual clarity, analytical thinking and problem-solving skills.",
  },
  {
    number: "04",
    title: "Review and progress",
    text: "Use regular feedback and examination strategy to build lasting confidence.",
  },
];

export default function FounderTeamPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[#f6f8fc]">
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary-600 via-primary-400 to-sky-300" aria-hidden="true" />
        <div className="absolute -right-48 top-8 h-112 w-112 rounded-full bg-primary-100/70 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <Link
            href="/about"
            className="founder-reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 transition hover:gap-3 hover:text-primary-700"
          >
            <span aria-hidden="true">←</span> About Sensei India
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-20">
            <div className="max-w-2xl">
              <Eyebrow>Founder & Education Mentor</Eyebrow>
              <h1 className="founder-reveal founder-delay-1 mt-5 font-(family-name:--font-sora) text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Rohit Walia
              </h1>
              <p className="founder-reveal founder-delay-2 mt-6 max-w-xl text-xl font-semibold leading-8 tracking-[-0.015em] text-slate-700 sm:text-2xl sm:leading-9">
                Helping students learn with clarity, confidence and direction.
              </p>
              <p className="founder-reveal founder-delay-2 mt-5 max-w-xl text-base leading-8 text-slate-600">
                Founder of SenseiIndia.com, a global academic coaching and mentoring
                platform providing personalised support across school education,
                international curricula and competitive examinations.
              </p>

              <div className="founder-reveal founder-delay-3 mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-300 pt-6">
                <Stat value="10+ years" label="Teaching & mentoring" />
                <span className="hidden h-9 w-px bg-slate-300 sm:block" aria-hidden="true" />
                <Stat value="Worldwide" label="Academic support" />
                <span className="hidden h-9 w-px bg-slate-300 sm:block" aria-hidden="true" />
                <Stat value="1:1 & group" label="Learning formats" />
              </div>
            </div>

            <figure className="founder-reveal founder-delay-2 group relative mx-auto w-full max-w-lg lg:ml-auto">
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border border-primary-200 bg-primary-50" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#801b9a] shadow-2xl shadow-slate-300/70">
                <Image
                  src="/images/rohit-walia-founder.png"
                  alt="Rohit Walia, Founder and Education Mentor at Sensei India"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="founder-portrait-image object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="font-(family-name:--font-sora) text-lg font-semibold">Education should feel personal.</p>
                  <p className="mt-1.5 text-xs text-white/65">New Delhi · Teaching students worldwide</p>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.38fr_1fr] lg:gap-24">
          <div>
            <Eyebrow>Profile</Eyebrow>
            <h2 className="mt-4 max-w-xs font-(family-name:--font-sora) text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">
              Engineering discipline meets educational empathy.
            </h2>
          </div>

          <div>
            <p className="max-w-4xl font-(family-name:--font-sora) text-xl font-semibold leading-9 tracking-[-0.02em] text-slate-800 sm:text-2xl sm:leading-10">
              A Mechanical Engineering graduate from Jamia Millia Islamia, New
              Delhi, Rohit brings more than a decade of teaching and mentoring
              experience to Sensei India.
            </p>
            <div className="mt-8 grid gap-6 text-base leading-8 text-slate-600 sm:grid-cols-2 sm:gap-10">
              <p>
                His approach combines conceptual clarity, structured learning and
                personalised attention. Every programme is built around how a
                student learns—not only what they need to study.
              </p>
              <p>
                Students are encouraged to understand ideas deeply, approach
                problems analytically and develop the confidence to become
                independent learners.
              </p>
            </div>
            <dl className="mt-10 grid gap-y-5 border-y border-slate-200 py-6 sm:grid-cols-3 sm:gap-x-8">
              <Credential term="Education" detail="Mechanical Engineering" />
              <Credential term="Institution" detail="Jamia Millia Islamia" />
              <Credential term="Experience" detail="10+ years in education" />
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow light>Academic expertise</Eyebrow>
              <h2 className="mt-4 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                Support for every stage of learning.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              From early school years to advanced mathematics and competitive
              preparation, every programme is aligned with the learner’s level,
              goals and examination requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3 md:gap-0">
            {expertiseGroups.map((group, index) => (
              <article key={group.label} className={`md:px-8 ${index === 0 ? "md:pl-0" : "md:border-l md:border-white/15"}`}>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-300">{group.label}</p>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-24">
            <div>
              <Eyebrow>Learning formats</Eyebrow>
              <h2 className="mt-4 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                Personal when needed. Collaborative when valuable.
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-0">
              <article className="sm:pr-10">
                <span className="font-(family-name:--font-sora) text-sm font-bold text-primary-600">01</span>
                <h3 className="mt-5 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.025em]">One-to-one tuition</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Focused sessions shaped around the student’s goals, syllabus,
                  examination pattern and pace. Each learner receives direct
                  attention and a learning plan designed for their needs.
                </p>
              </article>
              <article className="border-t border-slate-200 pt-10 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
                <span className="font-(family-name:--font-sora) text-sm font-bold text-primary-600">02</span>
                <h3 className="mt-5 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.025em]">Group tuition</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Expert-led sessions where students discuss ideas, solve
                  challenging problems and strengthen concepts through structured,
                  collaborative learning.
                </p>
              </article>
            </div>
          </div>

          <p className="mt-12 border-l-2 border-primary-400 pl-5 text-sm leading-7 text-slate-600 sm:ml-[calc(29%+1rem)] sm:max-w-3xl sm:text-base">
            Support can focus on one subject or extend to complete academic
            mentoring, foundation study, international curriculum support and
            competitive examination preparation.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f6f8fc] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:items-center lg:gap-20">
            <div>
              <Eyebrow>Global curricula</Eyebrow>
              <h2 className="mt-4 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Teaching across borders</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Methods adapt to each syllabus, academic level and learning objective.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {curricula.map((item) => (
                <li key={item} className="rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Eyebrow>Mentoring approach</Eyebrow>
            <h2 className="mt-4 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              A clear route from potential to progress.
            </h2>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {approach.map((item, index) => (
              <li key={item.number} className={`relative lg:px-8 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-slate-200"}`}>
                <span className="font-(family-name:--font-sora) text-xs font-bold text-primary-600">{item.number}</span>
                <h3 className="mt-4 font-(family-name:--font-sora) text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">Student progress</p>
              <p className="mt-3 font-(family-name:--font-sora) text-xl font-bold">Strong foundations open doors.</p>
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Rohit has guided students from diverse academic backgrounds toward
              improved school performance, entrance examinations and competitive
              programmes. Students mentored through his programmes have progressed
              toward IITs, JEE-related opportunities and other reputed academic pathways.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary-600 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
          <span className="absolute -right-4 -top-28 font-serif text-[20rem] leading-none text-white/8" aria-hidden="true">“</span>
          <div className="relative grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:gap-14">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-100">Founder’s philosophy</p>
              <p className="mt-3 text-sm text-primary-100/70">Rohit Walia</p>
            </div>
            <blockquote className="font-(family-name:--font-sora) text-xl font-semibold leading-relaxed tracking-[-0.025em] sm:text-2xl lg:text-3xl">
              “Every student has the potential to excel. With the right teacher,
              strong fundamentals, personalised guidance and consistent effort,
              every learner can move closer to their highest potential.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f6f8fc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Global vision</Eyebrow>
            <h2 className="mt-4 max-w-4xl font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
              The right teacher. The right guidance.<br className="hidden sm:block" /> The right learning strategy.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Sensei India’s mission is to make expert, personalised education
              accessible regardless of country, curriculum, stream or academic level.
            </p>
          </div>
          <Link href="/register" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-600">
            Start your learning journey
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] ${light ? "text-primary-300" : "text-primary-700"}`}>
      <span className={`h-px w-7 ${light ? "bg-primary-400" : "bg-primary-500"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-(family-name:--font-sora) text-sm font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
    </div>
  );
}

function Credential({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">{term}</dt>
      <dd className="mt-1.5 text-sm font-bold text-slate-800">{detail}</dd>
    </div>
  );
}

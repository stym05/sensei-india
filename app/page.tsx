import Image from "next/image";
import Link from "next/link";

import FaqAccordion from "@/components/FaqAccordion";
import LearningProgramsCarousel from "@/components/LearningProgramsCarousel";
import SectionTitle from "@/components/SectionTitle";
import { features } from "@/data/features";
import { courses, faqs } from "@/data/site";

const studyPaths = [
  { code: "01", icon: "book", title: "School learning", detail: "Grades 1–12", text: "Core subjects, homework support and exam preparation.", tone: "bg-blue-50 text-blue-700" },
  { code: "02", icon: "globe", title: "International curricula", detail: "IB · IGCSE · GCSE", text: "Curriculum-aware guidance and assessment preparation.", tone: "bg-violet-50 text-violet-700" },
  { code: "03", icon: "target", title: "Entrance preparation", detail: "JEE · NEET", text: "Concept building, problem-solving and structured practice.", tone: "bg-amber-50 text-amber-700" },
  { code: "04", icon: "code", title: "Future skills", detail: "English · Coding", text: "Practical communication and digital skills for every level.", tone: "bg-emerald-50 text-emerald-700" },
] as const;

const workflow = [
  { title: "Share the learning goal", text: "Tell us the subject, curriculum, level, schedule and areas that need support." },
  { title: "Get a tutor match", text: "Our academic team recommends an educator suited to the learner’s needs." },
  { title: "Attend a demo class", text: "Experience the teaching approach and discuss a personalised learning plan." },
  { title: "Learn and improve", text: "Continue with structured lessons, guided practice and ongoing feedback." },
] as const;

const platformHighlights = [
  { value: "10+", label: "Years of teaching experience", tone: "bg-amber-50 border-amber-100", accent: "text-amber-700" },
  { value: "10+", label: "Academic mock tests", tone: "bg-rose-50 border-rose-100", accent: "text-rose-700" },
  { value: "8", label: "Curricula and boards supported", tone: "bg-cyan-50 border-cyan-100", accent: "text-cyan-700" },
  { value: "25+", label: "Practice papers and worksheets", tone: "bg-violet-50 border-violet-100", accent: "text-violet-700" },
] as const;

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-[#f8f7ff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute -left-24 top-4 -z-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-200/45 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(#a5b4fc_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl items-center gap-7 sm:gap-9 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-blue-700 shadow-sm backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-xs">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-100 text-[10px]" aria-hidden="true">✦</span>
              Personalised learning, built around you
            </p>
            <h1 id="hero-heading" className="mt-4 font-(family-name:--font-sora) text-[2.15rem] font-bold leading-[1.1] tracking-[-0.045em] text-slate-950 sm:mt-5 sm:text-5xl lg:text-[3.5rem]">
              Your goals. The right teacher.
              <span className="block text-blue-600">A clear path forward.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Live online tutoring for school subjects, international curricula,
              entrance examinations and future-ready skills—guided by experienced
              educators from India.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
              <Link href="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Book a free demo <span aria-hidden="true">→</span>
              </Link>
              <Link href="/courses" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Explore programmes
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2.5 border-t border-slate-200 pt-4 text-xs font-semibold text-slate-600 sm:mt-8 sm:gap-x-6 sm:gap-y-3 sm:pt-5 sm:text-sm">
              <li className="flex items-center gap-2"><CheckIcon /> Curriculum-aligned</li>
              <li className="flex items-center gap-2"><CheckIcon /> Flexible schedules</li>
              <li className="flex items-center gap-2"><CheckIcon /> Regular feedback</li>
            </ul>
          </div>

          <HeroTutorGuide />
        </div>
      </section>

      <section aria-labelledby="study-paths-heading" className="border-b border-slate-200 bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Explore by learning goal</p>
              <h2 id="study-paths-heading" className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.03em] text-slate-950 sm:text-3xl">Find the right academic support</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">Start with the learner’s stage and goal. We’ll help refine the subject, level and study plan.</p>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-4">
            {studyPaths.map((path) => (
              <Link key={path.title} href="/courses" className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${path.tone}`}><StudyPathIcon kind={path.icon} /></span>
                  <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500" aria-hidden="true">→</span>
                </div>
                <h3 className="mt-4 font-(family-name:--font-sora) text-base font-bold text-slate-950 sm:mt-5 sm:text-lg">{path.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-blue-600">{path.detail}</p>
                <p className="mt-2.5 text-sm leading-6 text-slate-600 sm:mt-3">{path.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="relative mx-auto max-w-7xl">
          <Image src="/images/tutor-guide-book.png" alt="Tutor presenting the available learning programmes" width={1033} height={1522} className="absolute -left-10 -top-12 hidden h-52 w-auto object-contain drop-shadow-[0_20px_20px_rgba(30,64,175,0.2)] xl:block" sizes="140px" />
          <SectionTitle eyebrow="Learning programmes" title="Structured support for every stage" text="Flexible programmes built around curriculum requirements, learning gaps and academic goals." />
          <LearningProgramsCarousel courses={courses.slice(0, 6)} />
          <div className="mt-6 text-center sm:mt-7">
            <Link href="/courses" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto">View all programmes <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14" aria-labelledby="platform-highlights-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Growing with purpose</p>
            <h2 id="platform-highlights-heading" className="mt-2 font-(family-name:--font-sora) text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-3xl">
              A focused platform built for better learning
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              We are building thoughtfully—starting with experienced teaching,
              essential programmes and personalised academic support.
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {platformHighlights.map((item) => (
              <div key={item.label} className={`flex min-h-32 flex-col items-center justify-center rounded-2xl border p-3.5 text-center sm:min-h-40 sm:p-5 ${item.tone}`}>
                <dt className="order-2 mt-2 max-w-44 text-xs font-semibold leading-5 text-slate-600 sm:text-sm">{item.label}</dt>
                <dd className={`order-1 font-(family-name:--font-sora) text-[1.75rem] font-bold tracking-[-0.04em] sm:text-4xl ${item.accent}`}>{item.value}</dd>
              </div>
            ))}
          </dl>

        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">How it works</p>
            <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl">From enquiry to confident learning</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">A simple, guided process designed to help families make the right academic decision.</p>
          </div>
          <ol className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {workflow.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-600">Step {index + 1}</span>
                  {index < workflow.length - 1 && <span className="hidden text-slate-300 lg:block" aria-hidden="true">→</span>}
                </div>
                <h3 className="mt-3 font-(family-name:--font-sora) text-base font-bold text-slate-950 sm:mt-4 sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-7 sm:gap-9 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Frequently asked questions</p>
            <h2 className="mt-2 max-w-md font-(family-name:--font-sora) text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-3xl">Clear answers before you begin</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:mt-4 sm:leading-7">Learn about tutor matching, supported curricula, demo sessions, international access and fees.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900 sm:mt-6">Ask another question <span aria-hidden="true">→</span></Link>
          </div>
          <FaqAccordion faqs={faqs.slice(0, 4)} />
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <div className="relative mx-auto max-w-7xl overflow-visible rounded-2xl bg-blue-600 px-5 py-7 text-white shadow-lg shadow-blue-100 sm:px-8 sm:py-9 lg:px-10">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" aria-hidden="true" />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto_auto] lg:gap-8">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-100">Start learning</p>
              <h2 className="mt-2 font-(family-name:--font-sora) text-xl font-bold tracking-[-0.03em] sm:text-2xl lg:text-3xl">Build the right learning plan today.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">Share the learner’s curriculum, subject and goals. Our academic team will help you choose the right next step.</p>
            </div>
            <Image src="/images/tutor-guide-point.png" alt="Tutor pointing towards the learning actions" width={1009} height={1558} className="hidden h-56 w-auto self-center object-contain drop-shadow-[0_20px_18px_rgba(30,58,138,0.42)] lg:-my-16 lg:block" sizes="145px" />
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href={features.tutorDirectory ? "/find-tutors" : "/contact"} className="inline-flex items-center justify-center rounded-xl border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{features.tutorDirectory ? "Meet our tutors" : "Talk to our team"}</Link>
              <Link href="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600">Book a free demo <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon() {
  return <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-100 text-[10px] text-blue-700" aria-hidden="true">✓</span>;
}

function StudyPathIcon({ kind }: { kind: string }) {
  if (kind === "globe") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.2 2.2 3.3 4.9 3.3 8S14.2 17.8 12 20c-2.2-2.2-3.3-4.9-3.3-8S9.8 6.2 12 4Z" />
      </svg>
    );
  }

  if (kind === "target") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="11" cy="13" r="7" /><circle cx="11" cy="13" r="3" /><path d="m13 11 6-6m-3 0h3v3" />
      </svg>
    );
  }

  if (kind === "code") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5c3.2-.7 5.8-.1 8 1.8 2.2-1.9 4.8-2.5 8-1.8v13c-3.2-.7-5.8-.1-8 1.8-2.2-1.9-4.8-2.5-8-1.8v-13Z" /><path d="M12 7.3v13" />
    </svg>
  );
}

function HeroTutorGuide() {
  return (
    <div className="relative mx-auto w-full max-w-[33rem] px-4 pt-3 sm:px-8 lg:px-4">
      <div className="absolute right-5 top-8 h-24 w-24 rounded-full border-[15px] border-amber-200/65" aria-hidden="true" />
      <div className="absolute bottom-20 left-5 h-20 w-20 rounded-full bg-blue-300/40 blur-lg" aria-hidden="true" />

      <Image
        src="/images/tutor-guide-explain.png"
        alt="Friendly tutor welcoming learners and presenting their study options"
        width={1101}
        height={1429}
        priority
        className="relative mx-auto h-auto w-[78%] object-contain drop-shadow-[0_28px_26px_rgba(30,64,175,0.24)] sm:w-[72%]"
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 360px, 280px"
      />

      <div className="absolute left-0 top-24 hidden rounded-2xl border border-blue-100 bg-white px-3.5 py-3 shadow-lg shadow-blue-200/60 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-50 text-rose-500" aria-hidden="true">▶</span>
          <span><strong className="block text-xs text-slate-900">Live classes</strong><span className="text-[10px] text-slate-500">Learn and ask doubts</span></span>
        </div>
      </div>

      <div className="absolute bottom-7 right-0 hidden rounded-2xl border border-blue-100 bg-white px-3.5 py-3 shadow-lg shadow-blue-200/60 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-600" aria-hidden="true">✓</span>
          <span><strong className="block text-xs text-slate-900">Personal plan</strong><span className="text-[10px] text-slate-500">Made for your goals</span></span>
        </div>
      </div>

      <div className="relative mx-auto -mt-5 flex w-fit items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-bold text-violet-700 shadow-md">
        <span aria-hidden="true">✦</span> Your learning guide
      </div>
    </div>
  );
}

function TutorIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem] pt-5 lg:pt-0" role="img" aria-label="Illustration of a tutor teaching mathematics online">
      <div className="absolute left-0 top-16 z-10 hidden rounded-xl border border-blue-100 bg-white px-3.5 py-3 shadow-lg shadow-blue-200/50 sm:left-2 sm:top-20 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-rose-50 text-base" aria-hidden="true">▶</span>
          <span><strong className="block text-xs text-slate-900">Live learning</strong><span className="text-[10px] text-slate-500">Ask doubts instantly</span></span>
        </div>
      </div>

      <div className="absolute bottom-12 right-0 z-10 hidden rounded-xl border border-blue-100 bg-white px-3.5 py-3 shadow-lg shadow-blue-200/50 sm:right-3 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-sm font-bold text-emerald-600" aria-hidden="true">✓</span>
          <span><strong className="block text-xs text-slate-900">Concept complete</strong><span className="text-[10px] text-slate-500">Ready for practice</span></span>
        </div>
      </div>

      <svg viewBox="0 0 620 500" className="h-auto w-full" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="hero-panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dbeafe" />
            <stop offset="1" stopColor="#ede9fe" />
          </linearGradient>
          <linearGradient id="teacher-shirt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#1e40af" />
          </linearGradient>
        </defs>

        <rect x="34" y="20" width="552" height="448" rx="56" fill="url(#hero-panel)" />
        <circle cx="515" cy="84" r="38" fill="#fff" opacity=".55" />
        <circle cx="80" cy="406" r="48" fill="#fff" opacity=".42" />
        <path d="M76 118h322v238H76z" fill="#fff" stroke="#bfdbfe" strokeWidth="6" />
        <path d="M96 140h282v196H96z" fill="#eff6ff" />

        <path d="M126 276c34-62 61-82 94-61 30 19 50-9 83-49" fill="none" stroke="#2563eb" strokeWidth="7" strokeLinecap="round" />
        <circle cx="126" cy="276" r="8" fill="#2563eb" /><circle cx="220" cy="215" r="8" fill="#2563eb" /><circle cx="303" cy="166" r="8" fill="#2563eb" />
        <path d="M118 300h198" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
        <path d="M119 169h70M119 187h45" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
        <text x="251" y="300" fill="#475569" fontSize="22" fontWeight="700">y = mx + c</text>

        <ellipse cx="453" cy="438" rx="93" ry="16" fill="#c7d2fe" opacity=".7" />
        <path d="M421 270c-31 11-43 45-39 94l7 76h116l4-85c3-48-17-78-49-86Z" fill="url(#teacher-shirt)" />
        <path d="M405 307c-22 12-42 30-61 57" fill="none" stroke="#f2bd91" strokeWidth="20" strokeLinecap="round" />
        <path d="m344 364-24 19" fill="none" stroke="#f2bd91" strokeWidth="14" strokeLinecap="round" />
        <circle cx="317" cy="386" r="10" fill="#f2bd91" />
        <path d="M471 305c26 13 39 34 45 66" fill="none" stroke="#f2bd91" strokeWidth="20" strokeLinecap="round" />
        <circle cx="518" cy="376" r="11" fill="#f2bd91" />

        <path d="M420 260c8 16 23 24 41 22 17-2 28-13 32-30l3-30c1-31-18-52-48-52-31 0-48 22-44 52Z" fill="#f2bd91" />
        <path d="M402 218c-6-38 14-65 50-65 35 0 56 26 46 64-9-5-17-16-19-29-17 16-39 24-65 22l-2 24c-7-2-10-8-10-16Z" fill="#1e293b" />
        <path d="M424 222c7-5 14-5 21 0M466 220c7-4 13-4 19 1" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <circle cx="437" cy="224" r="2.5" fill="#1e293b" /><circle cx="476" cy="224" r="2.5" fill="#1e293b" />
        <path d="M451 231v12M438 252c11 8 23 8 34 0" fill="none" stroke="#a85f46" strokeWidth="3" strokeLinecap="round" />
        <path d="M407 220c-12-3-17 5-11 17 3 6 8 9 15 8M493 219c12-3 16 6 10 17-3 6-7 8-13 8" fill="#f2bd91" />
        <path d="m429 277 21 24 23-25" fill="#fff" opacity=".95" />

        <path d="M388 437h46l-8 31h-49zM469 437h42l12 31h-48z" fill="#172554" />
        <path d="M78 378h276" stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
        <path d="M112 380v64M322 380v64" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
        <path d="M140 359h91l12 19H128z" fill="#f59e0b" />
        <path d="M155 341h86l-10 18h-91z" fill="#60a5fa" />
        <path d="M246 342h80l11 36h-94z" fill="#fff" stroke="#cbd5e1" strokeWidth="4" />
        <path d="M258 354h54M260 364h42" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

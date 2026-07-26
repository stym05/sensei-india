import Link from "next/link";

import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import { courses, faqs, site } from "@/data/site";

const highlights = [
  {
    number: "01",
    title: "1:1 Mentoring",
    text: "Personal attention from verified educators.",
  },
  {
    number: "02",
    title: "Weekly Tests",
    text: "Regular assessments to measure improvement.",
  },
  {
    number: "03",
    title: "Tutor Matching",
    text: "Find the right tutor for every learning goal.",
  },
  {
    number: "04",
    title: "Progress Reports",
    text: "Clear performance insights for students and parents.",
  },
];

const learningPlan = [
  {
    title: "Physics demo with Rahul",
    subject: "Physics",
    time: "10:00 AM",
  },
  {
    title: "Maths worksheet review",
    subject: "Mathematics",
    time: "12:30 PM",
  },
  {
    title: "Biology mock test",
    subject: "Biology",
    time: "3:00 PM",
  },
  {
    title: "English fluency drill",
    subject: "English",
    time: "5:30 PM",
  },
];

const workflow = [
  {
    title: "Search",
    text: "Explore tutors by subject, class, exam or preferred location.",
  },
  {
    title: "Compare",
    text: "Review courses, learning modes and teaching experience.",
  },
  {
    title: "Register",
    text: "Submit a simple student enquiry with your requirements.",
  },
  {
    title: "Start Learning",
    text: "Get a callback, attend a demo and begin your classes.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="hero-grid relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
              </span>

              Admissions open for new batches
            </div>

            <h1
              id="hero-heading"
              className="mt-7 max-w-4xl font-(family-name:--font-sora) text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              Learn better with the{" "}
              <span className="relative whitespace-nowrap text-sky-600">
                right guidance.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 18"
                  className="absolute -bottom-2 left-0 h-3 w-full text-sky-300"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 14C82 2 199 2 317 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-2xl font-(family-name:--font-manrope) text-base leading-8 text-slate-600 sm:text-lg">
              {site.tagline} Discover expert tutors, compare courses and
              register for school coaching or entrance exam preparation—all in
              one simple platform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/find-tutors"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-(family-name:--font-manrope) text-sm font-bold text-white shadow-xl shadow-slate-300/60 transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Find Your Tutor
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-4 font-(family-name:--font-manrope) text-sm font-bold text-slate-950 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Register as Student
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-xs font-extrabold text-sky-700 transition group-hover:bg-sky-500 group-hover:text-white">
                      {item.number}
                    </span>

                    <p className="font-(family-name:--font-sora) text-sm font-bold text-slate-950 sm:text-base">
                      {item.title}
                    </p>
                  </div>

                  <p className="mt-3 hidden text-sm leading-6 text-slate-500 sm:block">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-10 rotate-3 rounded-[3rem] bg-sky-300/30 blur-sm"
            />

            <div className="floaty rounded-4xl border border-white/10 bg-slate-950 p-3 shadow-2xl shadow-slate-400/40 sm:rounded-[2.75rem] sm:p-5">
              <div className="rounded-[1.6rem] border border-white/10 bg-linear-to-br from-white/15 to-white/5 p-5 text-white sm:rounded-[2.25rem] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-sky-200">
                      Learning Dashboard
                    </p>

                    <h2 className="mt-2 font-(family-name:--font-sora) text-3xl font-bold tracking-tight sm:text-4xl">
                      Today&apos;s Plan
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-white/10 px-3 py-2 text-center">
                    <p className="text-xs font-semibold text-slate-300">
                      Completed
                    </p>

                    <p className="mt-0.5 font-(family-name:--font-sora) text-lg font-bold">
                      3/4
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-sky-400" />
                </div>

                <div className="mt-6 space-y-3">
                  {learningPlan.map((item, index) => (
                    <div
                      key={item.title}
                      className="group flex items-center gap-4 rounded-2xl border border-transparent bg-white p-4 text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sm font-extrabold text-sky-700 transition group-hover:bg-sky-500 group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold sm:text-base">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-500">
                          {item.subject}
                        </p>
                      </div>

                      <p className="shrink-0 text-xs font-bold text-slate-500">
                        {item.time}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-xs font-medium text-slate-300">
                      Weekly progress
                    </p>

                    <p className="mt-1 font-bold">Excellent performance</p>
                  </div>

                  <span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-400/15 font-(family-name:--font-sora) font-bold text-emerald-300">
                    92%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section
        aria-labelledby="courses-heading"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <SectionTitle
          eyebrow="Popular Courses"
          title="Programs designed for real outcomes"
          text="Browse school coaching, entrance preparation and skill-based training with flexible online, offline and hybrid learning options."
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Explore all courses
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-slate-900 to-sky-900 p-7 text-white sm:rounded-[2.75rem] sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          />

          <div className="relative">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky-300">
                Simple learning journey
              </p>

              <h2 className="mt-4 font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                From tutor search to your first class.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                A smooth and transparent process designed for students and
                parents.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/12"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-400 font-(family-name:--font-sora) text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>

                    {index < workflow.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-sky-300"
                      >
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-(family-name:--font-sora) text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="Frequently Asked Questions"
          title="Everything you need to know"
          text="Important details students and parents usually check before choosing a tutor or enrolling in a course."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 open:border-sky-200 open:shadow-lg sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-(family-name:--font-sora) font-bold text-slate-950 focus-visible:outline-none">
                <span className="flex items-center gap-4">
                  <span className="hidden text-sm font-bold text-sky-500 sm:inline">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {faq.q}
                </span>

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-xl text-slate-600 transition duration-300 group-open:rotate-45 group-open:bg-sky-500 group-open:text-white">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 sm:ml-10">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-4xl border border-sky-100 bg-sky-50 p-8 text-center sm:p-12 lg:flex-row lg:text-left">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky-600">
              Start your journey
            </p>

            <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ready to find the right tutor?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Tell us what you want to learn and we will help you find a
              suitable course or educator.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Register Now
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
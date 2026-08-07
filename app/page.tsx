import Image from "next/image";
import Link from "next/link";

import CourseCard from "@/components/CourseCard";
import HomeSectionDivider from "@/components/HomeSectionDivider";
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
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="hero-grid relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      >
        <Image
          src="/images/institute-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[67%_center]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-primary-950 via-primary-950/88 to-primary-900/20"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-6xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-white shadow-sm backdrop-blur-md sm:px-4 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-200 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>

              <span>Admissions open for new batches</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-5 max-w-5xl font-(family-name:--font-sora) text-[2.15rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              Learn better with the{" "}
              <span className="relative mt-1 inline-block text-primary-200 sm:mt-0 sm:whitespace-nowrap">
                right guidance.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 18"
                  className="absolute -bottom-2 left-0 h-3 w-full text-primary-300/80"
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

            <p className="mt-6 max-w-3xl font-(family-name:--font-manrope) text-sm leading-7 text-white/75 sm:mt-7 sm:text-lg sm:leading-8">
              {site.tagline} Discover expert tutors, compare courses and
              register for school coaching or entrance exam preparation—all in
              one simple platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link
                href="/find-tutors"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-(family-name:--font-manrope) text-sm font-bold text-primary-500 shadow-xl shadow-primary-950/30 transition duration-300 hover:-translate-y-1 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 sm:w-auto sm:px-7 sm:py-4"
              >
                Find Your Tutor
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/register"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-(family-name:--font-manrope) text-sm font-bold text-white shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 sm:w-auto sm:px-7 sm:py-4"
              >
                Register as Student
              </Link>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/15 bg-primary-950/35 p-4 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-primary-950/50 hover:shadow-lg sm:rounded-3xl sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/12 text-xs font-extrabold text-primary-100 transition group-hover:bg-white group-hover:text-primary-500">
                    {item.number}
                  </span>

                  <h2 className="font-(family-name:--font-sora) text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h2>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomeSectionDivider variant="learning" />

      {/* Courses */}
      <section className="px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <SectionTitle
          eyebrow="Popular Courses"
          title="Programs designed for real outcomes"
          text="Browse school coaching, entrance preparation and skill-based training with flexible online, offline and hybrid learning options."
        />

        <div className="mx-auto mt-9 grid max-w-7xl grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/courses"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            Explore all courses
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <HomeSectionDivider variant="progress" />

      {/* Workflow */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-slate-900 to-primary-900 p-5 text-white sm:p-7 lg:p-9">
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary-400/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl"
          />

          <div className="relative">
            {/* Section heading */}
            <div className="max-w-xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-300">
                Simple learning journey
              </p>

              <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                From tutor search to your first class.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                A smooth and transparent process designed for students and
                parents.
              </p>
            </div>

            {/* Workflow cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4">
              {workflow.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary-300/40 hover:bg-white/12"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-400 font-(family-name:--font-sora) text-xs font-bold text-slate-950">
                      {index + 1}
                    </span>

                    {index < workflow.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-base text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-primary-300"
                      >
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-(family-name:--font-sora) text-base font-bold sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HomeSectionDivider variant="questions" />

      {/* FAQ */}
<section className="px-4 pb-14 pt-6 sm:px-6 sm:pb-18 sm:pt-8 lg:px-8 lg:pb-20">
  <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
    {/* FAQ introduction */}
    <div className="lg:sticky lg:top-28">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600 sm:text-sm">
        Frequently Asked Questions
      </p>

      <h2 className="mt-3 max-w-md font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
        Everything you need to know
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
        Find answers to the most common questions students and parents ask
        before selecting a tutor or enrolling in a course.
      </p>

      <Link
        href="/contact"
        className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary-700 transition hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4"
      >
        Still have a question?

        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>

    {/* FAQ accordion */}
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <details
          key={faq.q}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 open:border-primary-200 open:shadow-xl open:shadow-primary-100/70"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-(family-name:--font-sora) text-sm font-bold leading-6 text-slate-950 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 sm:px-6 sm:py-6 sm:text-base">
            <span className="flex min-w-0 items-center gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-50 text-xs font-bold text-primary-700 transition duration-300 group-open:bg-primary-500 group-open:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{faq.q}</span>
            </span>

            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-xl font-normal text-slate-500 transition duration-300 group-open:rotate-45 group-open:border-primary-500 group-open:bg-primary-500 group-open:text-white">
              +
            </span>
          </summary>

          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 sm:ml-13">
              {faq.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>

{/* Final CTA */}
<section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl border border-primary-200/70 bg-linear-to-r from-primary-50 via-white to-primary-50 px-6 py-8 shadow-xl shadow-primary-100/50 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
    <div
      aria-hidden="true"
      className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary-300/20 blur-3xl"
    />

    <div
      aria-hidden="true"
      className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-primary-300/20 blur-3xl"
    />

    <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
      <div className="max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600 sm:text-sm">
          Start your journey
        </p>

        <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
          Ready to find the right tutor?
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Share your learning goals and preferences, and we will help you find
          a suitable tutor, course or training programme.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link
          href="/find-tutors"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          Browse Tutors
        </Link>

        <Link
          href="/register"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-200 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          Register Now

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>    </main>
  );
}

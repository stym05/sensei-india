import Link from "next/link";

import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    number: "01",
    title: "Student-first learning",
    text: "Every course and tutor match is designed around the student’s level, goals and preferred learning style.",
  },
  {
    number: "02",
    title: "Trusted guidance",
    text: "Students and parents receive clear support while choosing tutors, courses, batches and learning modes.",
  },
  {
    number: "03",
    title: "Visible progress",
    text: "Regular assessments, feedback and progress reports make academic improvement easier to understand.",
  },
];

const learningJourney = [
  {
    title: "Discover",
    text: "Explore tutors and courses based on subject, class, exam and location.",
  },
  {
    title: "Connect",
    text: "Speak with our team and discuss your learning requirements.",
  },
  {
    title: "Experience",
    text: "Attend a demo class before selecting the right tutor or program.",
  },
  {
    title: "Progress",
    text: "Learn consistently with tests, feedback and performance tracking.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-sky-100/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-72 -z-10 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl"
      />

      <SectionTitle
        eyebrow="About Us"
        title="A learning platform built around clarity, care and measurable progress"
        text="Sensei India connects students with experienced tutors and structured learning programmes designed to make quality coaching easier to discover and access."
      />

      {/* Introduction */}
      <section
        aria-labelledby="about-introduction-heading"
        className="mx-auto mt-12 grid max-w-7xl items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-xl shadow-sky-100/60 sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
            Our purpose
          </p>

          <h2
            id="about-introduction-heading"
            className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl"
          >
            Making coaching simpler for students and more transparent for
            parents.
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <p>
              Finding the right tutor or coaching programme can often feel
              confusing. Sensei India brings tutor discovery, course comparison
              and student registration into one clear and accessible platform.
            </p>

            <p>
              We focus on a student-friendly learning journey: understand the
              requirement, discover suitable options, connect with a mentor,
              attend a demo class and begin learning with regular guidance.
            </p>

            <p>
              Our goal is not only to help students enrol in a course, but also
              to support consistent improvement through structured classes,
              assessments, feedback and progress tracking.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/find-tutors"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Find a Tutor

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Mission card */}
        <aside className="relative overflow-hidden rounded-4xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/50 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
          />

          <div className="relative flex h-full flex-col">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-300">
              Our mission
            </p>

            <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
              Help every student learn with confidence.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              We aim to make personalised and structured education accessible
              by connecting students with educators who understand their goals
              and learning needs.
            </p>

            <div className="mt-auto pt-10">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-sm font-medium leading-6 text-slate-300">
                  “The right guidance can transform confusion into clarity and
                  effort into measurable progress.”
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Values */}
      <section
        aria-labelledby="about-values-heading"
        className="mx-auto mt-20 max-w-7xl"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
            What guides us
          </p>

          <h2
            id="about-values-heading"
            className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl"
          >
            Learning built on trust and clarity
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Our platform is shaped around the needs of students, parents and
            educators.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 sm:p-7"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 font-(family-name:--font-sora) text-sm font-bold text-sky-700 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">
                {value.number}
              </span>

              <h3 className="mt-5 font-(family-name:--font-sora) text-xl font-bold text-slate-950">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Learning journey */}
      <section
        aria-labelledby="learning-journey-heading"
        className="mx-auto mt-20 max-w-7xl"
      >
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-slate-900 to-sky-900 p-7 text-white sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
          />

          <div className="relative">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-300">
                How it works
              </p>

              <h2
                id="learning-journey-heading"
                className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.03em] sm:text-4xl"
              >
                A clearer path from search to progress
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                We simplify each step so students and parents can make informed
                learning decisions.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {learningJourney.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/12"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-400 font-(family-name:--font-sora) text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>

                    {index < learningJourney.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-sky-300"
                      >
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-(family-name:--font-sora) text-lg font-bold">
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

      {/* Final CTA */}
      <section className="mx-auto mt-16 max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-sky-100 bg-sky-50 p-7 sm:p-9 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
              Start learning
            </p>

            <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Ready to find the right learning support?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Explore tutors and courses or speak with our admissions team for
              personalised guidance.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Contact Our Team

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
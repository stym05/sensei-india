import Link from "next/link";

import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    number: "01",
    title: "Learner-first teaching",
    text: "Every recommendation begins with the learner’s curriculum, current understanding, goals and preferred way of learning.",
  },
  {
    number: "02",
    title: "Indian roots, global reach",
    text: "Our India-based team coordinates online tutoring for families worldwide while respecting local curricula and time zones.",
  },
  {
    number: "03",
    title: "Consistent partnership",
    text: "Clear communication, purposeful practice and regular feedback keep learners, families and tutors aligned.",
  },
];

const learningJourney = [
  {
    title: "Discover",
    text: "Share the learner’s curriculum, subject, current level, goals and availability.",
  },
  {
    title: "Connect",
    text: "Our academic team reviews the requirement and recommends a suitable educator.",
  },
  {
    title: "Experience",
    text: "Attend a demo to experience the tutor’s communication and teaching approach.",
  },
  {
    title: "Progress",
    text: "Follow a structured plan with practice, feedback and periodic learning reviews.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-primary-100/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-72 -z-10 h-96 w-96 rounded-full bg-primary-100/70 blur-3xl"
      />

      <SectionTitle
        eyebrow="About Us"
        title="An Indian academy helping learners succeed worldwide"
        text="Sensei India connects school students and lifelong learners with experienced educators for personalised, curriculum-aware tutoring across countries and time zones."
      />

      {/* Introduction */}
      <section
        aria-labelledby="about-introduction-heading"
        className="mx-auto mt-12 grid max-w-7xl items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-xl shadow-primary-100/60 sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-600">
            Our purpose
          </p>

          <h2
            id="about-introduction-heading"
            className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl"
          >
            Personalised teaching should feel accessible, dependable and
            genuinely human.
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <p>
              Sensei India was created in Dehradun with a simple belief: the
              right teacher can make even a difficult subject feel approachable.
              We help families move beyond generic classes by understanding the
              learner before recommending a tutor.
            </p>

            <p>
              Our academy supports learners in India and abroad through live
              online classes, while selected in-person and hybrid options may be
              available in India. Tutor matching considers curriculum, subject,
              level, language, schedule and learning preferences.
            </p>

            <p>
              From foundational school support to international curricula,
              entrance preparation and future skills, our aim is to create a
              learning relationship built on clarity, consistency and confidence.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/find-tutors"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
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
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Mission card */}
        <aside className="relative overflow-hidden rounded-4xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/50 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
          />

          <div className="relative flex h-full flex-col">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-300">
              Our mission
            </p>

            <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
              Connect every learner with teaching that makes sense to them.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              We bring the depth and dedication of Indian teaching to a global
              community, combining personal attention with flexible online
              access and curriculum-aware academic support.
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
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-600">
            What guides us
          </p>

          <h2
            id="about-values-heading"
            className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl"
          >
            The principles behind every learner match
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We want every family to understand who they are learning with, why
            the plan fits and what comes next.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100 sm:p-7"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-50 font-(family-name:--font-sora) text-sm font-bold text-primary-700 transition duration-300 group-hover:bg-primary-500 group-hover:text-white">
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
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-slate-900 to-primary-900 p-7 text-white sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl"
          />

          <div className="relative">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-300">
                How it works
              </p>

              <h2
                id="learning-journey-heading"
                className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.03em] sm:text-4xl"
              >
                A considered journey, not a one-size-fits-all package
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                From the first conversation to ongoing lessons, each step is
                designed around the learner rather than a standard batch.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {learningJourney.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary-300/40 hover:bg-white/12"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-400 font-(family-name:--font-sora) text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>

                    {index < learningJourney.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-primary-300"
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
        <div className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-primary-100 bg-primary-50 p-7 sm:p-9 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-600">
              Start learning
            </p>

            <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Looking for a tutor who understands your curriculum?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Share the learner’s goals with our India-based academic team and
              receive guidance for online tutoring anywhere in the world.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-200 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            Speak With Our Team

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

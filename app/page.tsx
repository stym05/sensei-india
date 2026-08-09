import Link from "next/link";

import FaqAccordion from "@/components/FaqAccordion";
import HomeSectionDivider from "@/components/HomeSectionDivider";
import LearningProgramsCarousel from "@/components/LearningProgramsCarousel";
import SectionTitle from "@/components/SectionTitle";
import { features } from "@/data/features";
import { courses, faqs, site, testimonials } from "@/data/site";

const highlights = [
  {
    number: "01",
    title: "Personal Tutoring",
    text: "Lessons shaped around the learner’s pace, curriculum and goals.",
  },
  {
    number: "02",
    title: "Global Curricula",
    text: "Support for Indian and international school programmes.",
  },
  {
    number: "03",
    title: "Thoughtful Matching",
    text: "Tutor recommendations based on subject, level and learning style.",
  },
  {
    number: "04",
    title: "Visible Progress",
    text: "Feedback and review points that keep families informed.",
  },
];

const workflow = [
  {
    title: "Share Your Goal",
    text: "Tell us the curriculum, subject, level, time zone and learning need.",
  },
  {
    title: "Meet Your Match",
    text: "Receive tutor recommendations selected for the learner’s requirements.",
  },
  {
    title: "Attend a Demo",
    text: "Experience the tutor’s teaching approach before confirming a plan.",
  },
  {
    title: "Learn & Progress",
    text: "Begin structured lessons with practice, feedback and ongoing support.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="hero-grid relative isolate aspect-[9/16] overflow-hidden px-4 py-8 sm:aspect-auto sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      >
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/institute-hero.png"
          tabIndex={-1}
          className="homepage-hero-video absolute inset-0 -z-20 h-full w-full object-cover object-center"
        >
          <source src="/videos/homepage-hero.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-primary-950 via-primary-950/88 to-primary-900/20"
        />

        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center sm:block sm:h-auto">
          <div className="max-w-6xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white shadow-sm backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-200 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>

              <span>Online tutoring available worldwide</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-4 max-w-5xl font-(family-name:--font-sora) text-[1.9rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:mt-5 sm:text-5xl lg:text-6xl"
            >
              World-class learning with the{" "}
              <span className="relative mt-1 inline-block text-primary-200 sm:mt-0 sm:whitespace-nowrap">
                right tutor.
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

            <p className="mt-4 max-w-3xl font-(family-name:--font-manrope) text-[13px] leading-6 text-white/75 sm:mt-7 sm:text-lg sm:leading-8">
              {site.tagline} Learn with experienced educators across school
              subjects, international curricula, entrance preparation and
              future-ready skills.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-9 sm:flex sm:gap-3">
              <Link
                href={features.tutorDirectory ? "/find-tutors" : "/register"}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-3 py-3 font-(family-name:--font-manrope) text-xs font-bold text-primary-500 shadow-xl shadow-primary-950/30 transition duration-300 hover:-translate-y-1 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 sm:w-auto sm:gap-2 sm:px-7 sm:py-4 sm:text-sm"
              >
                {features.tutorDirectory ? "Find Your Tutor" : "Request a Demo"}
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href={features.tutorDirectory ? "/register" : "/courses"}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 py-3 font-(family-name:--font-manrope) text-xs font-bold text-white shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 sm:w-auto sm:px-7 sm:py-4 sm:text-sm"
              >
                {features.tutorDirectory ? "Request a Demo" : "Explore Programmes"}
              </Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group rounded-none border border-white/15 bg-primary-950/35 p-3 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-primary-950/50 hover:shadow-lg sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/12 text-[10px] font-extrabold text-primary-100 transition group-hover:bg-white group-hover:text-primary-500 sm:h-9 sm:w-9 sm:text-xs">
                    {item.number}
                  </span>

                  <h2 className="font-(family-name:--font-sora) text-xs font-bold text-white sm:text-base">
                    {item.title}
                  </h2>
                </div>

                <p className="mt-3 hidden text-sm leading-6 text-white/65 sm:block">
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
          eyebrow="Learning Programmes"
          title="Support for every stage of learning"
          text="Choose from school tutoring, international curricula, entrance preparation and future skills—with teaching adapted to each learner’s needs."
        />

        <LearningProgramsCarousel courses={courses.slice(0, 6)} />

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/courses"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            Explore all programmes
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <HomeSectionDivider variant="progress" />

      {/* Workflow */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-none bg-linear-to-br from-slate-950 via-slate-900 to-primary-900 p-5 text-white sm:p-7 lg:p-9">
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
                How learning begins
              </p>

              <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                A thoughtful path from enquiry to progress.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                Our India-based academic team coordinates personalised tutoring
                for learners and families across time zones.
              </p>
            </div>

            {/* Workflow cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4">
              {workflow.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-none border border-white/10 bg-white/8 p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary-300/40 hover:bg-white/12"
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

      {/* Testimonials */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionTitle
          eyebrow="Learner Stories"
          title="Guidance that families can feel"
          text="Families choose Sensei India for attentive teaching, dependable communication and learning plans shaped around the student."
        />

        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={`${testimonial.name}-${testimonial.location}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-none border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100"
            >
              <span className="font-(family-name:--font-sora) text-5xl leading-none text-primary-200 transition group-hover:text-primary-300">
                “
              </span>

              <blockquote className="mt-1 flex-1 text-sm leading-7 text-slate-600">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-500 text-xs font-extrabold text-white">
                  {testimonial.initials}
                </span>
                <span>
                  <strong className="block text-sm text-slate-950">{testimonial.name}</strong>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {testimonial.subject} · {testimonial.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
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
        Find answers about international access, tutor matching, curricula,
        demo sessions and enrolment.
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
    <FaqAccordion faqs={faqs} />
  </div>
</section>

{/* Final CTA */}
<section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-none border border-primary-200/70 bg-linear-to-r from-primary-50 via-white to-primary-50 px-6 py-8 shadow-xl shadow-primary-100/50 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
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
          Ready to build a better learning plan?
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Tell us where the learner is now and where they want to go. Our
          counsellor will help identify the right tutor and next step.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link
          href={features.tutorDirectory ? "/find-tutors" : "/contact"}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          {features.tutorDirectory ? "Meet Our Tutors" : "Talk to Our Team"}
        </Link>

        <Link
          href="/register"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-200 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          Request a Demo

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

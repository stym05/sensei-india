import Link from "next/link";

import FaqAccordion from "@/components/FaqAccordion";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

const opportunities = [
  {
    title: "Online Educators",
    type: "Teaching",
    mode: "Remote · Flexible",
    text: "Teach school subjects, international curricula, entrance examinations, languages or future skills through focused live lessons.",
    idealFor: "Subject experts who can explain clearly, adapt thoughtfully and build learner confidence.",
  },
  {
    title: "Academic Counsellors",
    type: "Learner Success",
    mode: "India · Remote/Hybrid",
    text: "Understand enquiries, communicate with families and coordinate suitable tutors, demo sessions and learning plans.",
    idealFor: "Education professionals with empathy, organisation and confident communication.",
  },
  {
    title: "Curriculum Specialists",
    type: "Academic Quality",
    mode: "Remote · Project-based",
    text: "Support curriculum mapping, programme design, assessment resources and academic quality across education systems.",
    idealFor: "Curriculum-aware educators and content specialists with strong attention to detail.",
  },
];

const benefits = [
  { number: "01", title: "Teach across borders", text: "Work with learners from different countries, curricula and academic contexts." },
  { number: "02", title: "Keep learning personal", text: "Focus on individual understanding instead of delivering a fixed one-size-fits-all class." },
  { number: "03", title: "Work with flexibility", text: "Coordinate availability around suitable online schedules and learner time zones." },
  { number: "04", title: "Receive coordination support", text: "Our team helps with learner requirements, demos, communication and scheduling." },
];

const qualities = [
  "Strong subject knowledge or relevant academic expertise",
  "Clear, patient and respectful communication",
  "Reliable internet, suitable teaching setup and punctuality",
  "Preparation aligned with the learner’s curriculum and goals",
  "Professional communication with learners and guardians",
  "A genuine commitment to learner safety and progress",
];

const applicationSteps = [
  { title: "Introduce yourself", text: "Email your profile, experience, subjects, location, time zone and availability." },
  { title: "Academic conversation", text: "Discuss your expertise, teaching approach and the learners you are best suited to support." },
  { title: "Review and demonstration", text: "Complete relevant verification and, where requested, a short teaching demonstration." },
  { title: "Suitable opportunities", text: "We contact you when a learner requirement or academy role aligns with your profile." },
];

const joinFaqs = [
  { q: "Can educators apply from outside India?", a: "Yes. Online educators may express interest from any country, subject to suitable expertise, reliable availability and the ability to support the curricula and time zones required by our learners." },
  { q: "Do I need prior online teaching experience?", a: "Prior online experience is helpful but not always essential. Strong subject knowledge, clear communication, preparation and confidence using basic online teaching tools are important." },
  { q: "Does submitting a profile guarantee an opportunity?", a: "No. An application is an expression of interest. Opportunities depend on current learner requirements, curriculum fit, availability, review and successful completion of any required verification or demonstration." },
  { q: "What should I include in my email?", a: "Include your CV or professional profile, subjects and levels taught, qualifications, teaching experience, languages, location, time zone, weekly availability and preferred type of role." },
];

export default function JoinUsPage() {
  const applicationHref = `mailto:${site.email}?subject=Join Sensei India - Expression of Interest`;

  return (
    <main className="overflow-hidden pb-20">
      <section className="bg-primary-950 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/about" className="text-sm font-bold text-primary-200 transition hover:text-white">
            ← About Sensei India
          </Link>

          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 border border-white/15 bg-white/8 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Expressions of interest welcome
              </div>
              <h1 className="mt-5 max-w-4xl font-(family-name:--font-sora) text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Do work that helps learners believe in themselves.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Join an India-based academy building thoughtful learning
                relationships with students and families around the world.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={applicationHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-500 transition hover:-translate-y-0.5 hover:bg-primary-50">
                  Send Your Profile <span aria-hidden="true">→</span>
                </a>
                <a href="#opportunities" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  Explore Opportunities
                </a>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
              {["Worldwide learners", "Flexible online work", "Learner-first culture"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 bg-white/6 p-5 backdrop-blur">
                  <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/15 text-xs font-extrabold text-primary-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opportunities" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionTitle
          eyebrow="Ways to contribute"
          title="Find where your strengths can make a difference"
          text="We welcome expressions of interest across teaching, learner support and academic quality. Availability depends on current academy and learner requirements."
        />

        <div className="mx-auto mt-10 grid max-w-7xl gap-px bg-slate-200 lg:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <article key={opportunity.title} className="group flex h-full flex-col bg-white p-7 transition hover:bg-primary-50 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-extrabold text-primary-500">{String(index + 1).padStart(2, "0")}</span>
                <span className="border border-primary-100 bg-primary-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
                  {opportunity.type}
                </span>
              </div>
              <h2 className="mt-8 font-(family-name:--font-sora) text-2xl font-bold text-slate-950">{opportunity.title}</h2>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-primary-600">{opportunity.mode}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">{opportunity.text}</p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">Ideal for</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{opportunity.idealFor}</p>
              </div>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Sensei India - ${opportunity.title}`)}`}
                className="mt-auto pt-7 text-sm font-bold text-primary-700 transition group-hover:translate-x-1"
              >
                Express interest →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionTitle
          eyebrow="Why Sensei India"
          title="A thoughtful place to do education work"
          text="We are building a culture where expertise matters, communication is respected and every decision begins with the learner."
        />

        <div className="mx-auto mt-10 grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="bg-white p-6 sm:p-7">
              <span className="font-(family-name:--font-sora) text-xs font-extrabold text-primary-500">{benefit.number}</span>
              <h2 className="mt-5 font-(family-name:--font-sora) text-lg font-bold text-slate-950">{benefit.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl border border-slate-200 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-primary-950 p-8 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-300">What we value</p>
            <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold">Clarity, care and professional responsibility</h2>
            <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
              Expertise is essential, but effective education also depends on
              empathy, preparation, reliability and the ability to create a
              safe space for questions.
            </p>
          </div>
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
            {qualities.map((quality) => (
              <div key={quality} className="flex items-start gap-4 bg-white p-5 sm:p-6">
                <span className="grid h-8 w-8 shrink-0 place-items-center bg-primary-50 text-xs font-extrabold text-primary-700">✓</span>
                <p className="pt-1 text-sm font-semibold leading-6 text-slate-700">{quality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionTitle
          eyebrow="Application journey"
          title="A clear and respectful process"
          text="Our review process helps us understand where your experience fits while setting honest expectations about available opportunities."
        />

        <div className="mx-auto mt-10 grid max-w-7xl gap-px bg-primary-200 sm:grid-cols-2 lg:grid-cols-4">
          {applicationSteps.map((step, index) => (
            <article key={step.title} className="bg-white p-6 sm:p-7">
              <span className="grid h-10 w-10 place-items-center bg-primary-500 font-(family-name:--font-sora) text-xs font-extrabold text-white">{index + 1}</span>
              <h2 className="mt-5 font-(family-name:--font-sora) text-lg font-bold text-slate-950">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">Joining FAQs</p>
            <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">Before you introduce yourself</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">A few useful details about eligibility, experience and the expression-of-interest process.</p>
          </div>
          <FaqAccordion faqs={joinFaqs} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-primary-950 px-7 py-12 text-center text-white sm:px-10 sm:py-16">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-300">Introduce yourself</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-(family-name:--font-sora) text-3xl font-bold sm:text-4xl">Tell us how you would like to contribute</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">Email your CV or profile with your expertise, experience, location, time zone and availability. We will respond when a suitable opportunity aligns with your background.</p>
        <a href={applicationHref} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-500 transition hover:-translate-y-0.5 hover:bg-primary-50">Email Your Profile <span aria-hidden="true">→</span></a>
      </section>
    </main>
  );
}

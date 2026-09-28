import Image from "next/image";
import Link from "next/link";

import FaqAccordion from "@/components/FaqAccordion";
import JoinApplicationForm from "@/components/JoinApplicationForm";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

const opportunities = [
  {
    title: "Online Educators",
    type: "Teaching",
    mode: "Remote · Flexible",
    text: "Teach school subjects, international curricula, entrance examinations or future skills through focused live lessons.",
  },
  {
    title: "Academic Counsellors",
    type: "Learner Success",
    mode: "India · Remote/Hybrid",
    text: "Support families, coordinate tutors and help shape suitable learning plans.",
  },
  {
    title: "Curriculum Specialists",
    type: "Academic Quality",
    mode: "Remote · Project-based",
    text: "Support curriculum mapping, assessment resources and academic quality across education systems.",
  },
] as const;

const applicationSteps = [
  { title: "Introduce yourself", text: "Share your profile, subjects, experience, time zone and availability." },
  { title: "Conversation and review", text: "Discuss your expertise and complete any relevant checks or teaching demonstration." },
  { title: "Suitable opportunities", text: "We contact you when a learner or academy requirement matches your profile." },
] as const;

const joinFaqs = [
  { q: "Can educators apply from outside India?", a: "Yes. Online educators may express interest from any country, subject to suitable expertise, reliable availability and the ability to support the curricula and time zones required by our learners." },
  { q: "Do I need prior online teaching experience?", a: "Prior online experience is helpful but not always essential. Strong subject knowledge, clear communication, preparation and confidence using basic online teaching tools are important." },
  { q: "Does submitting a profile guarantee an opportunity?", a: "No. An application is an expression of interest. Opportunities depend on current learner requirements, curriculum fit, availability, review and successful completion of any required verification or demonstration." },
] as const;

export default function JoinUsPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f8f7ff] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(#a5b4fc_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />

        <div className="mx-auto max-w-7xl">
          <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500 transition hover:text-blue-700">← About Sensei India</Link>

          <div className="relative mt-4 grid items-center gap-5 sm:mt-6 sm:gap-7 lg:grid-cols-[0.68fr_1fr] lg:gap-10">
            <div className="order-2 mx-auto w-full max-w-sm max-sm:absolute max-sm:bottom-0 max-sm:left-[-0.75rem] max-sm:w-[46%] max-sm:max-w-[180px] sm:relative sm:max-w-md lg:order-1 lg:max-w-lg">
              <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-blue-200/75 to-cyan-100/70 sm:h-[74%] sm:w-[74%]" aria-hidden="true" />
              <div className="absolute left-1 top-10 hidden h-16 w-16 rounded-full border-[11px] border-amber-200/75 sm:block sm:h-20 sm:w-20" aria-hidden="true" />
              <Image src="/images/join-us-guide-present.png" alt="Educator presenting opportunities to join Sensei India" width={1028} height={1530} priority className="relative mx-auto h-auto w-[82%] object-contain drop-shadow-[0_20px_18px_rgba(30,64,175,0.2)] sm:w-[58%] lg:w-[64%]" sizes="(min-width: 1024px) 310px, (min-width: 640px) 270px, 160px" />
              <div className="absolute bottom-8 left-0 hidden rounded-2xl rounded-br-sm border border-blue-100 bg-white px-4 py-3 shadow-xl shadow-blue-200/60 sm:block">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-600">Join our community</p>
                <p className="mt-0.5 text-xs font-semibold text-slate-700">Teach · Support · Create</p>
              </div>
            </div>

            <div className="order-1 max-w-3xl lg:order-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-blue-700 shadow-sm sm:px-3.5 sm:py-2 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" /> Expressions of interest welcome
              </p>
              <h1 className="mt-3.5 font-(family-name:--font-sora) text-[1.85rem] font-bold leading-[1.12] tracking-[-0.04em] text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl">
                Do meaningful work that helps learners grow.
              </h1>
              <p className="mt-3.5 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
                Connect your expertise with learners and families around the world.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
                <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Send your profile <span aria-hidden="true">→</span></a>
                <a href="#opportunities" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">Explore opportunities</a>
              </div>
              <ul className="mt-5 flex min-h-48 flex-col content-start gap-2 border-t border-slate-200 pl-[46%] pt-3.5 text-xs font-semibold text-slate-600 sm:mt-6 sm:min-h-0 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:pl-0 sm:text-sm">
                <li>✓ Worldwide learners</li><li>✓ Flexible online work</li><li>✓ Learner-first culture</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section id="opportunities" className="scroll-mt-20 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="Ways to contribute" title="Find where your strengths fit" text="Explore teaching, learner support and academic quality opportunities based on current academy requirements." />
        <div className="mx-auto mt-6 grid max-w-7xl gap-3 sm:mt-7 lg:grid-cols-3 lg:gap-4">
          {opportunities.map((opportunity, index) => (
            <article key={opportunity.title} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-extrabold text-blue-500">{String(index + 1).padStart(2, "0")}</span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700">{opportunity.type}</span>
              </div>
              <h2 className="mt-4 font-(family-name:--font-sora) text-lg font-bold text-slate-950">{opportunity.title}</h2>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-blue-600">{opportunity.mode}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{opportunity.text}</p>
              <a href="#apply" className="mt-auto pt-6 text-sm font-bold text-blue-700 transition group-hover:translate-x-1">Express interest →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">Application journey</p>
            <h2 className="mt-2.5 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl">A clear and respectful process</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">We review each profile carefully and set honest expectations about suitable opportunities.</p>
          </div>
          <ol className="mt-6 grid gap-3 sm:mt-7 md:grid-cols-3 lg:gap-4">
            {applicationSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-xs font-extrabold text-white">{index + 1}</span>
                <h3 className="mt-3.5 font-(family-name:--font-sora) text-base font-bold text-slate-950 sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">Joining FAQs</p>
            <h2 className="mt-2.5 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl">Before you introduce yourself</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">Useful details about eligibility, experience and the expression-of-interest process.</p>
          </div>
          <FaqAccordion faqs={joinFaqs} />
        </div>
      </section>

      <section id="apply" className="scroll-mt-20 px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
        <div className="mx-auto grid max-w-7xl items-start gap-7 rounded-2xl bg-blue-50 p-5 sm:p-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10 lg:p-9">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">Introduce yourself</p>
            <h2 className="mt-2 font-(family-name:--font-sora) text-xl font-bold text-slate-950 sm:text-2xl">Prepare your application</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">Complete the form once, then open a ready-to-send draft in Gmail or Outlook. Attach your CV before sending.</p>
          </div>
          <JoinApplicationForm destinationEmail={site.email} />
        </div>
      </section>
    </main>
  );
}

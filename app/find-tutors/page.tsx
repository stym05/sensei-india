import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import TutorSearch from "@/components/TutorSearch";
import { features } from "@/data/features";

const heroProof = [
  { icon: "✓", value: "Experienced", label: "Subject educators", position: "left-[5%] top-[15%]" },
  { icon: "◎", value: "Goal-led", label: "Tutor matching", position: "left-[8%] bottom-[16%]" },
  { icon: "◷", value: "Time-zone ready", label: "Worldwide online lessons", position: "right-[5%] top-[16%]" },
  { icon: "▷", value: "Demo first", label: "Meet before enrolling", position: "right-[8%] bottom-[15%]" },
];

const searchBenefits = [
  "Experienced educators",
  "Worldwide online lessons",
  "Curriculum-based matching",
];

export default function FindTutorsPage() {
  if (!features.tutorDirectory) {
    redirect("/register");
  }

  return (
    <main className="relative overflow-hidden pb-16 sm:pb-20">
      <section
        aria-labelledby="find-tutors-heading"
        className="px-3 pt-3 sm:px-5 sm:pt-5 lg:px-6"
      >
        <div className="relative mx-auto min-h-116 max-w-[1440px] overflow-hidden rounded-none bg-primary-950 shadow-2xl shadow-primary-950/25 sm:min-h-128 lg:min-h-136">
          <Image
            src="/images/find-tutors-hero.png"
            alt="Two expert tutors in a modern learning studio"
            fill
            priority
            sizes="100vw"
            className="teacher-hero-image object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,11,32,.74)_0%,rgba(8,11,32,.54)_32%,rgba(8,11,32,.08)_72%)]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary-950/80 via-transparent to-primary-950/25" />

          <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

          {heroProof.map((item, index) => (
            <div
              key={item.label}
              className={`hero-float-card absolute z-10 hidden items-center gap-3 rounded-none border border-white/15 bg-primary-950/55 p-3.5 text-white shadow-xl backdrop-blur-xl lg:flex ${item.position}`}
              style={{ animationDelay: `${index * -1.1}s` }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/12 text-base font-black text-primary-100">
                {item.icon}
              </span>
              <span>
                <strong className="block text-sm font-extrabold">{item.value}</strong>
                <span className="mt-0.5 block text-xs text-white/60">{item.label}</span>
              </span>
            </div>
          ))}

          <div className="relative z-10 mx-auto flex min-h-116 max-w-xl flex-col items-center justify-center px-5 pb-24 pt-12 text-center sm:min-h-128 sm:px-8 sm:pb-28 lg:min-h-136">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-100 backdrop-blur-md sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,.12)]" />
              Global tutor network
            </div>

            <h1
              id="find-tutors-heading"
              className="mt-5 font-(family-name:--font-sora) text-[2rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-[2.65rem] lg:text-5xl"
            >
              Find a tutor who understands{" "}
              <span className="text-primary-200">how you learn.</span>
            </h1>

            <p className="mt-4 max-w-lg text-[13px] leading-6 text-white/70 sm:text-sm sm:leading-7">
              Connect with India-based educators for school subjects,
              international curricula, entrance exams and future skills—wherever
              you live.
            </p>

            <a
              href="#tutor-directory"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-extrabold text-primary-500 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 sm:px-6 sm:text-sm"
            >
              Explore Educators
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-1">↓</span>
            </a>

            <div className="mt-6 flex max-w-md flex-wrap justify-center gap-1.5 lg:hidden">
              {searchBenefits.map((benefit) => (
                <span key={benefit} className="rounded-full border border-white/15 bg-white/8 px-2.5 py-1.5 text-[10px] font-semibold text-white/75 backdrop-blur sm:text-xs">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="tutor-directory" className="relative z-20 -mt-10 scroll-mt-24 sm:-mt-14">
        <TutorSearch />
      </div>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative overflow-hidden rounded-none bg-primary-950 p-7 text-white shadow-2xl shadow-primary-950/15 sm:p-9 lg:p-11">
          <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl transition duration-700 group-hover:scale-125" />
          <div aria-hidden="true" className="absolute -bottom-28 left-1/3 h-60 w-60 rounded-full bg-white/8 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-200">
                Academic matching support
              </p>

              <h2 className="mt-2 font-(family-name:--font-sora) text-xl font-bold tracking-tight sm:text-2xl">
                Let us shortlist the right educators.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                Share the learner’s curriculum, subject, time zone and goals.
                Our counsellor will recommend suitable tutors for a demo.
              </p>
            </div>

            <Link
              href="/contact"
              className="group/link inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-500 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
            >
              Get Guidance
              <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/site";

export default function CoursesPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f8f7ff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute -left-28 top-0 -z-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(#a5b4fc_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl items-center gap-7 sm:gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-14">
          <div className="max-w-3xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">Tutoring programmes</p>
            <h1 className="mt-3 font-(family-name:--font-sora) text-[2.1rem] font-bold leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.4rem]">
              Learning support for every academic goal
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              From school foundations to senior secondary subjects, competitive
              exams and future skills, every programme adapts to the learner’s
              curriculum, pace and goals.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
              <Link href="#programmes" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Explore programmes <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/register" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Request a demo
              </Link>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-slate-200 pt-4 text-xs font-semibold text-slate-600 sm:mt-8 sm:text-sm">
              <li>✓ Indian & international curricula</li>
              <li>✓ Personalised study plans</li>
              <li>✓ Online worldwide</li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-blue-200/75 to-cyan-100/70 blur-sm" aria-hidden="true" />
            <div className="absolute right-1 top-10 h-16 w-16 rounded-full border-[11px] border-amber-200/75 sm:h-20 sm:w-20" aria-hidden="true" />
            <Image
              src="/images/course-guide-present.png"
              alt="Course guide presenting the available tutoring programmes"
              width={1030}
              height={1527}
              priority
              className="relative mx-auto h-auto w-[62%] object-contain drop-shadow-[0_28px_25px_rgba(30,64,175,0.24)] sm:w-[66%] lg:w-[74%]"
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 300px, 220px"
            />
            <div className="absolute bottom-8 right-0 hidden rounded-2xl rounded-bl-sm border border-blue-100 bg-white px-4 py-3 shadow-xl shadow-blue-200/60 sm:block">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-600">Find your fit</p>
              <p className="mt-0.5 text-xs font-semibold text-slate-700">School · Entrance · Skills</p>
            </div>
          </div>
        </div>
      </section>

      <section id="programmes" className="scroll-mt-20 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">Choose your learning path</p>
            <h2 className="mt-2.5 font-(family-name:--font-sora) text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl">Explore all programmes</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">Compare subjects, levels and learning formats to find a suitable starting point.</p>
          </div>

          <div className="mt-7 grid gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>

          <section className="mt-10 overflow-hidden rounded-2xl bg-primary-950 p-6 text-white sm:mt-12 sm:p-8 lg:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="max-w-3xl">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary-200">A plan made for the learner</p>
                <h2 className="mt-2 font-(family-name:--font-sora) text-xl font-bold sm:text-2xl">Not sure which programme fits?</h2>
                <p className="mt-3 text-sm leading-6 text-white/65 sm:leading-7">Tell us the curriculum, subject, current level and goal. Our counsellor will recommend a suitable tutor and next step.</p>
              </div>
              <Link href="/register" className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary-600 transition hover:bg-primary-50 sm:w-auto">
                Request a demo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import { courses } from "@/data/site";

export default function CoursesPage() {
  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        eyebrow="Tutoring Programmes"
        title="Learning support for Indian and international curricula"
        text="From school foundations to senior secondary subjects, competitive exams and future skills, our programmes are adapted to the learner—not delivered as a fixed template."
      />

      <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <section className="mx-auto mt-14 max-w-7xl overflow-hidden rounded-none bg-primary-950 p-7 text-white sm:p-10">
        <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-200">
              A plan made for the learner
            </p>
            <h2 className="mt-3 font-(family-name:--font-sora) text-2xl font-bold sm:text-3xl">
              Not sure which programme fits?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Tell us the curriculum, subject, current level and goal. Our
              counsellor will recommend a suitable tutor, learning format and
              next step. Fees are shared after the counselling discussion.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-500 transition hover:-translate-y-1 hover:bg-primary-50"
          >
            Request a Demo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

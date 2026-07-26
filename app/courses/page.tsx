import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import { courses } from "@/data/site";

export default function CoursesPage() {
  return <main className="px-4 py-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="Course Catalog" title="Choose your desired course or training" text="Each program includes structured classes, practice, doubt support and progress tracking." /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{courses.map((course) => <CourseCard key={course.title} course={course} />)}</div></main>;
}

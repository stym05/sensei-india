export type Course = { title: string; category: string; duration: string; mode: string; level: string; description: string };
export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-100">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">{course.category}</span>
      </div>
      <h3 className="mt-5 text-xl font-black text-slate-950">{course.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>
      <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600">
        <span className="rounded-2xl bg-slate-50 p-3" title="Plan duration">{course.duration}</span>
        <span className="rounded-2xl bg-slate-50 p-3" title="Learning mode">{course.mode}</span>
        <span className="rounded-2xl bg-slate-50 p-3" title="Learning level">{course.level}</span>
      </div>
    </article>
  );
}

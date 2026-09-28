export type Course = { title: string; category: string; duration: string; mode: string; level: string; description: string };
export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg hover:shadow-slate-200/70 sm:p-5 lg:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-primary-700">{course.category}</span>
        <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-primary-500" aria-hidden="true">→</span>
      </div>
      <h3 className="mt-4 font-(family-name:--font-sora) text-lg font-bold leading-snug tracking-[-0.025em] text-slate-950 sm:mt-5 sm:text-xl">{course.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-6 text-slate-600 sm:mt-3">{course.description}</p>
      <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 text-center text-[10px] font-bold leading-4 text-slate-600 sm:mt-6 sm:text-[11px]">
        <span className="grid min-h-14 place-items-center bg-slate-50 px-2 py-2" title="Plan duration">{course.duration}</span>
        <span className="grid min-h-14 place-items-center bg-slate-50 px-2 py-2" title="Learning mode">{course.mode}</span>
        <span className="grid min-h-14 place-items-center bg-slate-50 px-2 py-2" title="Learning level">{course.level}</span>
      </div>
    </article>
  );
}

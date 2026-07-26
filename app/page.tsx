import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import { courses, faqs, site } from "@/data/site";

const stats = ["1:1 mentoring", "Weekly tests", "Tutor matching", "Progress reports"];

export default function Home() {
  return (
    <main>
      <section className="hero-grid overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-sky-700 shadow-sm">Admissions open for new batches</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">Best Coaching Classes for School Students and Entrance Exams.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{site.tagline} Search expert tutors, compare courses, and register for your desired coaching program in a smooth workflow.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/find-tutors" className="rounded-full bg-slate-950 px-7 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-sky-600">Search Tutors</Link>
              <Link href="/register" className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-black text-slate-950 transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-700">Register as Student</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item) => <div key={item} className="rounded-2xl bg-white p-4 text-center text-sm font-black shadow-sm">{item}</div>)}
            </div>
          </div>
          <div className="relative">
            <div className="floaty rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl">
              <div className="rounded-[2rem] bg-white/10 p-6">
                <p className="text-sm font-bold text-sky-200">Learning Dashboard</p>
                <h2 className="mt-3 text-3xl font-black">Today&apos;s Plan</h2>
                {['Physics demo with Rahul', 'Maths worksheet review', 'Biology mock test', 'English fluency drill'].map((item, index) => (
                  <div key={item} className="mt-4 flex items-center justify-between rounded-2xl bg-white p-4 text-slate-950">
                    <span className="font-bold">{item}</span><span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-700">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Popular Courses" title="Programs designed for outcomes" text="Browse school coaching, entrance preparation and skill-based training with flexible online, offline and hybrid options." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => <CourseCard key={course.title} course={course} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 to-sky-900 p-8 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div><p className="font-black text-sky-200">Easy workflow</p><h2 className="mt-3 text-4xl font-black">Search → Select → Register → Start learning</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Search tutors by subject/location', 'Compare courses and learning mode', 'Submit student enquiry form', 'Get callback and demo class'].map((step) => <div key={step} className="rounded-3xl bg-white/10 p-5 font-bold">{step}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Common student questions" text="Important details students and parents usually check before enrolling." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((faq) => <details key={faq.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><summary className="cursor-pointer font-black text-slate-950">{faq.q}</summary><p className="mt-3 text-sm leading-6 text-slate-600">{faq.a}</p></details>)}
        </div>
      </section>
    </main>
  );
}

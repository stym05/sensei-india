import SectionTitle from "@/components/SectionTitle";
import TutorSearch from "@/components/TutorSearch";

const searchBenefits = [
  "Verified educators",
  "Online, offline and hybrid",
  "Subject-based matching",
];

export default function FindTutorsPage() {
  return (
    <main className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-sky-100/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-72 -z-10 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl"
      />

      <section
        aria-labelledby="find-tutors-heading"
        className="px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle
          eyebrow="Tutor Search"
          title="Find the right tutor for your learning goals"
          text="Search expert educators by subject, preferred learning mode and location to find a tutor who matches your academic needs."
        />

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {searchBenefits.map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="grid h-5 w-5 place-items-center rounded-full bg-sky-100 text-xs font-bold text-sky-700"
              >
                ✓
              </span>

              {benefit}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 sm:mt-14">
        <TutorSearch />
      </div>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-sky-100 bg-sky-50 p-7 sm:p-9 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
              Need assistance?
            </p>

            <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Not sure which tutor to choose?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Share your class, subject and preferred learning mode with our
              admissions team, and we will help you find a suitable educator.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Get Guidance
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
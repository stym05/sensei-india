import Image from "next/image";
import Link from "next/link";

const teamGroups = [
  {
    number: "01",
    code: "AC",
    title: "Academic Coordination",
    text: "Listens to each learner requirement, understands the curriculum and turns an enquiry into a clear academic brief.",
    focus: "Requirement discovery",
  },
  {
    number: "02",
    code: "TC",
    title: "Tutor Community",
    text: "Brings subject expertise, patient explanation and curriculum-aware teaching to learners across countries and time zones.",
    focus: "Personal teaching",
  },
  {
    number: "03",
    code: "LS",
    title: "Learner Support",
    text: "Coordinates demos, schedules and communication so families and tutors can focus on a dependable learning experience.",
    focus: "Ongoing coordination",
  },
  {
    number: "04",
    code: "CQ",
    title: "Curriculum & Quality",
    text: "Translates boards, grade systems and academic goals into suitable resources, expectations and quality standards.",
    focus: "Academic alignment",
  },
];

const workingModel = [
  { title: "Listen", text: "Understand the learner before discussing solutions." },
  { title: "Match", text: "Connect expertise, curriculum and learning style." },
  { title: "Support", text: "Keep communication clear from demo to regular lessons." },
  { title: "Review", text: "Use feedback to strengthen the learning relationship." },
];

const leadershipPrinciples = [
  {
    title: "Trust before scale",
    text: "Growth should never come at the cost of learner safety, academic honesty or dependable communication.",
  },
  {
    title: "Clarity over complexity",
    text: "Families deserve straightforward guidance, realistic expectations and a clear understanding of the next step.",
  },
  {
    title: "People make progress possible",
    text: "Technology supports access, but thoughtful educators and engaged learners create meaningful academic change.",
  },
];

export default function FounderTeamPage() {
  return (
    <main className="overflow-hidden pb-20">
      {/* Editorial hero */}
      <section className="relative bg-primary-950 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <svg
          aria-hidden="true"
          viewBox="0 0 900 500"
          className="absolute -right-40 top-1/2 h-[130%] -translate-y-1/2 text-white/6"
          fill="none"
        >
          <circle cx="450" cy="250" r="86" stroke="currentColor" />
          <circle cx="450" cy="250" r="150" stroke="currentColor" />
          <circle cx="450" cy="250" r="220" stroke="currentColor" />
          <path d="M70 250h760M450 0v500" stroke="currentColor" />
          <path d="M180 75 720 425M720 75 180 425" stroke="currentColor" />
        </svg>

        <div className="relative mx-auto max-w-7xl">
          <Link href="/about" className="text-sm font-bold text-primary-200 transition hover:text-white">
            ← About Sensei India
          </Link>

          <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center py-3 lg:py-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-300">
                Founder & Team
              </p>
              <h1 className="mt-4 max-w-4xl font-(family-name:--font-sora) text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                A shared belief in teaching that feels personal.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Sensei India combines a founder-led education vision with
                academic coordinators, curriculum specialists and committed
                educators working around each learner.
              </p>
            </div>

            <figure className="relative min-h-112 overflow-hidden border border-white/15 sm:min-h-128">
              <Image
                src="/images/founder-vision.png"
                alt="Representative founder vision in a modern academy setting"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary-950 via-primary-950/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="font-(family-name:--font-sora) text-base font-bold text-white">Founder’s vision</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">Sensei India · Dehradun</p>
                </div>
                <span className="border border-white/20 bg-primary-950/55 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60 backdrop-blur">
                  Representative image
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Founder vision */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl border border-slate-200 bg-white lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative flex min-h-80 items-end overflow-hidden bg-primary-50 p-7 sm:p-10">
            <span aria-hidden="true" className="absolute -right-4 -top-10 font-(family-name:--font-sora) text-[15rem] font-bold leading-none text-primary-100">“</span>
            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">Founder’s vision</p>
              <p className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-tight text-primary-950 sm:text-4xl">
                Education should travel farther than geography.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-lg font-semibold leading-8 text-slate-800">
              Founded in Dehradun, Sensei India grew from a simple observation:
              families were not only searching for subject knowledge—they were
              searching for a teacher who could understand the learner.
            </p>
            <div className="mt-6 grid gap-5 text-sm leading-7 text-slate-600 sm:grid-cols-2 sm:text-base">
              <p>
                The academy was shaped to make thoughtful Indian teaching
                available beyond location, while respecting each learner’s
                curriculum, culture, language, pace and time zone.
              </p>
              <p>
                That vision continues to guide every decision: listen before
                recommending, communicate before assuming and place the quality
                of the learning relationship before scale.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
              <span className="h-px w-12 bg-primary-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-700">Founder, Sensei India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team ecosystem */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">The team ecosystem</p>
              <h2 className="mt-3 max-w-3xl font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Different expertise, aligned around one learner
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Strong tutoring depends on more than the live class. Each team
                function supports a clear, coordinated academic experience.
              </p>
            </div>
            <div className="hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-600 lg:flex">
              <span className="h-px w-16 bg-primary-300" />
              One connected team
            </div>
          </div>

          <figure className="relative mt-10 aspect-[4/3] overflow-hidden sm:aspect-[16/8] lg:aspect-[16/6]">
            <Image
              src="/images/academic-team.png"
              alt="Representative academic team collaborating on learner support"
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary-950/75 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-white sm:p-7">
              <div>
                <p className="font-(family-name:--font-sora) text-lg font-bold sm:text-xl">Planning around the learner</p>
                <p className="mt-1 hidden text-sm text-white/65 sm:block">Academic insight, tutor expertise and learner support in one conversation.</p>
              </div>
              <span className="shrink-0 border border-white/20 bg-primary-950/55 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60 backdrop-blur">
                Representative image
              </span>
            </figcaption>
          </figure>

          <div className="relative z-10 -mt-6 grid gap-px bg-slate-200 sm:mx-6 sm:-mt-10 sm:grid-cols-2 lg:mx-10 lg:grid-cols-4">
            {teamGroups.map((group) => (
              <article key={group.title} className="group flex min-h-76 flex-col bg-white p-6 shadow-lg shadow-slate-300/20 transition duration-300 hover:-translate-y-1 hover:bg-primary-950 sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center bg-primary-50 font-(family-name:--font-sora) text-xs font-extrabold text-primary-700 transition group-hover:bg-white/10 group-hover:text-primary-100">
                    {group.code}
                  </span>
                  <span className="text-xs font-extrabold text-primary-300 transition group-hover:text-white/35">{group.number}</span>
                </div>
                <h3 className="mt-8 font-(family-name:--font-sora) text-xl font-bold text-slate-950 transition group-hover:text-white">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 transition group-hover:text-white/60">{group.text}</p>
                <div className="mt-auto border-t border-slate-100 pt-5 transition group-hover:border-white/10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary-600 transition group-hover:text-primary-300">Primary focus</p>
                  <p className="mt-2 text-sm font-bold text-slate-700 transition group-hover:text-white/85">{group.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Working model */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">How we work together</p>
            <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">A simple rhythm behind every learner match</h2>
          </div>

          <div className="relative mt-10 grid gap-px bg-primary-200 sm:grid-cols-2 lg:grid-cols-4">
            {workingModel.map((step, index) => (
              <article key={step.title} className="relative bg-primary-50 p-6 sm:p-7">
                <span className="grid h-10 w-10 place-items-center bg-primary-500 font-(family-name:--font-sora) text-xs font-extrabold text-white">{index + 1}</span>
                <h3 className="mt-5 font-(family-name:--font-sora) text-xl font-bold text-primary-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                {index < workingModel.length - 1 && (
                  <span aria-hidden="true" className="absolute -right-3 top-7 z-10 hidden h-6 w-6 place-items-center bg-white text-primary-400 shadow-sm lg:grid">→</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership principles */}
      <section className="bg-primary-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-300">Leadership principles</p>
              <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-[-0.035em] sm:text-4xl">What keeps the academy grounded</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">The standards that guide how we grow, communicate and serve learners worldwide.</p>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {leadershipPrinciples.map((principle, index) => (
                <article key={principle.title} className="bg-white/5 p-6 backdrop-blur sm:p-7">
                  <span className="text-xs font-extrabold text-primary-300">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-(family-name:--font-sora) text-lg font-bold">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-7 border border-primary-100 bg-primary-50 p-7 sm:p-10 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-600">Become part of the story</p>
          <h2 className="mt-3 font-(family-name:--font-sora) text-2xl font-bold text-slate-950 sm:text-3xl">Bring your expertise to a global learning community</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Explore opportunities for educators, academic counsellors and curriculum specialists.</p>
        </div>
        <Link href="/about/join-us" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-600">
          Explore Join Us <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}

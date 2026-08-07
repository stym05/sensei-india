import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

const lastUpdated = "27 July 2026";

const terms = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    body: `By accessing, browsing, registering with, or otherwise using ${site.name}, you confirm that you have read, understood, and agreed to comply with these Terms and Conditions, our Privacy Policy, and any additional policies applicable to the services offered through the platform.`,
  },
  {
    id: "eligibility",
    number: "02",
    title: "Eligibility and Account Responsibility",
    body: `Users must be legally capable of entering into an agreement under the laws applicable in their country of residence. Where a student is below the legal age of consent, registration and service-related decisions must be completed or authorised by a parent or legal guardian.`,
  },
  {
    id: "registration",
    number: "03",
    title: "Student Registration",
    body: `Students, parents, and guardians must provide complete, accurate, and current information while submitting a registration or enquiry. ${site.name} may contact the student or guardian to verify the submitted information, understand the student's academic requirements, and recommend suitable tutors, courses, or learning programmes.`,
  },
  {
    id: "tutor-information",
    number: "04",
    title: "Tutor Profiles and Information",
    body: `Tutor qualifications, experience, subjects, fees, ratings, schedules, teaching modes, and availability are presented to help users make informed decisions. Although reasonable efforts may be taken to review tutor information, users should independently evaluate all relevant details before confirming a tutor or learning arrangement.`,
  },
  {
    id: "enrolment",
    number: "05",
    title: "Enrolment and Service Availability",
    body: `Submitting a registration, enquiry, or tutor request does not guarantee admission, placement, or tutor availability. Enrolment and tutor allocation may depend on eligibility, location, curriculum, subject requirements, schedules, language preferences, payment confirmation, and the availability of suitable educators.`,
  },
  {
    id: "classes",
    number: "06",
    title: "Classes and Learning Arrangements",
    body: `Class schedules, teaching methods, learning modes, course duration, and academic expectations will be communicated before the learning arrangement begins. Students are responsible for attending scheduled sessions on time, completing assigned work, and maintaining the equipment and internet connection required for online classes.`,
  },
  {
    id: "payments",
    number: "07",
    title: "Fees and Payments",
    body: `Course fees, tutor charges, payment schedules, taxes, promotional offers, and any additional costs will be communicated before enrolment or booking confirmation. A service will be considered confirmed only after the required payment and verification process has been completed.`,
  },
  {
    id: "cancellations",
    number: "08",
    title: "Cancellations and Refunds",
    body: `Cancellation, rescheduling, and refund eligibility may vary according to the selected tutor, course, programme, or service. Users should review the applicable terms before making payment. Refund requests, where eligible, must be submitted through the authorised support channel within the specified period.`,
  },
  {
    id: "conduct",
    number: "09",
    title: "User Conduct",
    body: `Users must communicate respectfully and use the platform only for legitimate educational purposes. Users must not provide false information, impersonate another person, harass students, tutors, or staff, misuse registration forms, distribute unlawful content, interfere with platform operations, or attempt to gain unauthorised access to any account or system.`,
  },
  {
    id: "intellectual-property",
    number: "10",
    title: "Intellectual Property",
    body: `The platform design, branding, written content, graphics, learning resources, software, and other materials owned or licensed by ${site.name} are protected by applicable intellectual property laws. These materials may not be reproduced, modified, distributed, or commercially used without prior written permission.`,
  },
  {
    id: "outcomes",
    number: "11",
    title: "Educational Outcomes",
    body: `${site.name} facilitates access to tutors, courses, and academic support services but does not guarantee specific grades, examination results, admissions, employment opportunities, or other academic outcomes. Results may vary according to attendance, participation, individual ability, tutor suitability, preparation, and continued student effort.`,
  },
  {
    id: "liability",
    number: "12",
    title: "Limitation of Liability",
    body: `${site.name} will take reasonable measures to maintain accurate information and dependable platform services. However, to the extent permitted by law, the platform will not be liable for indirect losses, interrupted access, third-party actions, inaccurate user-submitted information, or circumstances beyond its reasonable control.`,
  },
  {
    id: "privacy",
    number: "13",
    title: "Privacy and Personal Information",
    body: `Personal information submitted through the platform will be handled in accordance with our Privacy Policy and applicable data-protection requirements. Users are responsible for reviewing the Privacy Policy to understand how their information may be collected, used, stored, and protected.`,
  },
  {
    id: "third-party-services",
    number: "14",
    title: "Third-Party Services",
    body: `The platform may include links, payment facilities, communication tools, or services operated by third parties. ${site.name} is not responsible for the availability, security, content, or independent practices of third-party platforms. Users should review the applicable third-party terms before using those services.`,
  },
  {
    id: "changes",
    number: "15",
    title: "Changes to These Terms",
    body: `These Terms and Conditions may be revised periodically to reflect changes in our services, technology, operational practices, or legal obligations. Updated terms will be published on this page, and continued use of the platform after an update will constitute acceptance of the revised terms.`,
  },
  {
    id: "governing-law",
    number: "16",
    title: "Governing Law and Disputes",
    body: `These Terms and Conditions will be governed by the laws applicable to ${site.name}. Any dispute arising from the use of the platform or its services should first be raised with our support team so that a reasonable resolution may be attempted.`,
  },
];

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden bg-slate-50/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Terms & Conditions"
          title="Terms governing the use of Sensei India"
          text={`Please review these terms carefully before accessing ${site.name}, submitting a registration, selecting a tutor, or enrolling in an educational service.`}
        />

        <section className="mt-10 overflow-hidden rounded-4xl border border-primary-100 bg-white shadow-xl shadow-primary-100/50">
          <div className="grid gap-6 bg-linear-to-br from-primary-50 via-white to-primary-50 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-600">
                Important information
              </p>

              <h2 className="mt-3 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Your agreement with {site.name}
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                These terms explain the rights, responsibilities, and
                conditions that apply to students, parents, guardians, tutors,
                and other users of our educational platform.
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Last updated
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">
                On this page
              </p>

              <nav
                aria-label="Terms and conditions sections"
                className="mt-4"
              >
                <ul className="grid gap-1">
                  {terms.map((term) => (
                    <li key={term.id}>
                      <a
                        href={`#${term.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-primary-50 hover:text-primary-700"
                      >
                        <span className="text-xs font-bold text-slate-300 transition group-hover:text-primary-500">
                          {term.number}
                        </span>

                        <span>{term.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <div className="grid gap-5">
            {terms.map((term) => (
              <section
                id={term.id}
                key={term.id}
                className="scroll-mt-28 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/60 sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-100 text-xs font-extrabold text-primary-700">
                    {term.number}
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-sora) text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                      {term.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {term.body}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="mt-8 overflow-hidden rounded-4xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-400">
                Need clarification?
              </p>

              <h2 className="mt-3 font-(family-name:--font-sora) text-2xl font-bold tracking-tight sm:text-3xl">
                Contact our support team
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                For questions regarding these terms, enrolment conditions,
                payments, tutor arrangements, or use of the platform, please
                contact us by email.
              </p>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-primary-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/40 sm:w-fit"
            >
              {site.email}

              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          By continuing to use {site.name}, you acknowledge that you have
          reviewed and accepted these Terms and Conditions.
        </p>
      </div>
    </main>
  );
}
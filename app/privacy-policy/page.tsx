import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

const sections = [
  {
    title: "Information We Receive",
    body: "When you submit an enquiry or registration, we may receive the learner’s name, age or education level, curriculum, subjects, learning goals, country, time zone, language preferences and scheduling needs, together with parent or guardian contact information where relevant.",
  },
  {
    title: "How We Use Information",
    body: "We use submitted information to understand the learning requirement, respond to enquiries, recommend tutors, coordinate demo sessions, support enrolment, communicate service updates and improve the academic experience.",
  },
  {
    title: "Children and Guardian Involvement",
    body: "Where a learner is below the applicable age of consent, a parent or legal guardian should submit or approve the enquiry and remain involved in decisions about tutoring, communication and enrolment.",
  },
  {
    title: "Tutor and Service Coordination",
    body: "Relevant learning details may be shared with shortlisted tutors, authorised team members and service providers only when needed to evaluate a match, arrange classes, communicate with the family or operate the service.",
  },
  {
    title: "International Learners",
    body: "Because Sensei India supports learners worldwide from India, information may be accessed or processed across borders for tutor matching, scheduling and service delivery. We aim to limit access to what is reasonably necessary for those purposes.",
  },
  {
    title: "Data Retention and Security",
    body: "We retain enquiry and learning information for as long as reasonably needed to provide support, maintain records and meet applicable obligations. We use reasonable organisational and technical safeguards, although no online service can guarantee absolute security.",
  },
  {
    title: "Your Choices",
    body: `You may request access to, correction of or deletion of personal information by contacting ${site.email}. Some records may need to be retained where required for legitimate operational or legal reasons.`,
  },
  {
    title: "Updates to This Policy",
    body: "We may update this policy as our tutoring services, operating practices or applicable requirements change. The latest version will remain available on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        eyebrow="Privacy Policy"
        title={`How ${site.name} handles learner information`}
        text="This policy explains how information submitted by learners, parents, guardians and tutors may be used to coordinate education services from India to families worldwide."
      />

      <div className="mx-auto mt-10 grid max-w-4xl gap-4">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className="rounded-none border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-50 text-xs font-extrabold text-primary-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-(family-name:--font-sora) text-lg font-bold text-slate-950 sm:text-xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {section.body}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

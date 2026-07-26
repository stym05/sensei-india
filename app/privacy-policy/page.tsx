import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

const sections = [
  ["Information We Collect", "We may collect student name, parent/guardian contact details, email, phone number, class, course interest, tutor preference, messages, and technical usage data needed to improve the website."],
  ["How We Use Information", "We use information to respond to enquiries, process registration requests, arrange demo classes, recommend tutors/courses, provide support, improve services, and send important admission updates."],
  ["Data Sharing", "We do not sell personal data. Details may be shared only with authorized staff, selected tutors, service providers, or legal authorities when necessary."],
  ["Student Safety", "Tutor profiles should be verified before production use. For minors, parent or guardian consent should be collected before enrollment."],
  ["Your Choices", "Users can request access, correction, or deletion of their details by contacting the admissions team."],
  ["Security", "Reasonable technical and organizational safeguards should be used. No website can guarantee absolute security."],
];

export default function PrivacyPage() {
  return <main className="px-4 py-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="Privacy Policy" title="How {site.name} handles student and tutor information" text="This starter policy is included for website completeness. Please review it with a legal professional before production use." /><div className="mx-auto mt-10 grid max-w-4xl gap-4">{sections.map(([title, body]) => <section key={title} className="rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-black text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{body}</p></section>)}</div></main>;
}

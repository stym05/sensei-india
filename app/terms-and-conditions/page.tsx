import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

const terms = [
  ["Acceptance of Terms", `By using ${site.name}, users agree to these website terms, privacy practices, and applicable service rules.`],
  ["Registration", "Students must provide accurate contact and learning details. The coaching team may contact students or guardians for admission follow-up."],
  ["Tutor Listings", "Tutor details, fees, ratings, and availability are displayed for information and should be verified before final booking."],
  ["Payments and Refunds", "Course fees, payment schedules, discounts, refunds, and cancellations should be confirmed in writing at admission time."],
  ["User Conduct", "Users must not submit false information, misuse forms, harass tutors/staff, or attempt to disrupt the website."],
  ["Limitation of Liability", "The website is provided as an informational and registration platform. Final educational outcomes depend on student effort, attendance, course fit, and other factors."],
  ["Contact", `For questions about these terms, contact ${site.email}.`],
];

export default function TermsPage() {
  return <main className="px-4 py-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="Terms & Conditions" title="Website usage and enrollment terms" text="These sample terms cover common coaching website requirements. Review with a legal professional before launch." /><div className="mx-auto mt-10 grid max-w-4xl gap-4">{terms.map(([title, body]) => <section key={title} className="rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-black text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{body}</p></section>)}</div></main>;
}

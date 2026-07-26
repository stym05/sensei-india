import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function ContactPage() {
  return <main className="px-4 py-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="Contact" title="Need help choosing a tutor or course?" text="Contact our admissions team for batches, fees, demos and course guidance." /><div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-2"><div className="rounded-[2rem] bg-slate-950 p-8 text-white"><h2 className="text-2xl font-black">Contact Details</h2><div className="mt-6 grid gap-4 text-slate-200"><p><b>Phone:</b> {site.phone}</p><p><b>Email:</b> {site.email}</p><p><b>Address:</b> {site.address}</p><p><b>Working Hours:</b> {site.hours}</p></div></div><ContactForm /></div></main>;
}

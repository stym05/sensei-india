import SectionTitle from "@/components/SectionTitle";
import TutorSearch from "@/components/TutorSearch";

export default function FindTutorsPage() {
  return <main className="py-16"><SectionTitle eyebrow="Tutor Search" title="Find expert tutors by subject, mode and location" text="Use simple filters to match with the right educator for your learning goal." /><div className="mt-10"><TutorSearch /></div></main>;
}

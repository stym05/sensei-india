import RegisterForm from "@/components/RegisterForm";
import SectionTitle from "@/components/SectionTitle";

export default function RegisterPage() {
  return <main className="px-4 py-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="Student Registration" title="Register for your desired course or training" text="Submit your learning details and our team can connect you with the right course or tutor." /><div className="mt-10"><RegisterForm /></div></main>;
}

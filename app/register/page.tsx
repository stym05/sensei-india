import RegisterForm from "@/components/RegisterForm";
import SectionTitle from "@/components/SectionTitle";

const registrationBenefits = [
  "Personal course guidance",
  "Flexible learning modes",
  "Demo class assistance",
];

export default function RegisterPage() {
  return (
    <main className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-primary-100/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-72 -z-10 h-96 w-96 rounded-full bg-primary-100/70 blur-3xl"
      />

      <section className="px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Student Registration"
          title="Start your learning journey with the right guidance"
          text="Share your academic goals and learning preferences, and our team will help you find a suitable course, tutor or training programme."
        />

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {registrationBenefits.map((benefit) => (
            <div
              key={benefit}
              className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="grid h-5 w-5 place-items-center rounded-full bg-primary-100 text-xs font-bold text-primary-700"
              >
                ✓
              </span>

              {benefit}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <RegisterForm />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-500">
          Submitting this form does not confirm admission or require payment.
          Our team will contact you to discuss the available options.
        </p>
      </section>
    </main>
  );
}
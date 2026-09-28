import Image from "next/image";

import RegisterForm from "@/components/RegisterForm";
import SectionTitle from "@/components/SectionTitle";

const registrationBenefits = [
  "Worldwide online tutoring",
  "Curriculum-aware matching",
  "Demo session support",
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
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Learning Enquiry"
            title="Tell us what the learner needs"
            text="Students and families worldwide can share their curriculum, subject, goals and schedule. Our India-based team will recommend a suitable tutor and arrange the next step."
          />

          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-[6.5rem_1fr] items-center gap-3 sm:mt-8 sm:grid-cols-[8rem_1fr] sm:gap-5 lg:block lg:max-w-4xl">
            <div className="relative lg:absolute lg:-bottom-5 lg:left-0 lg:w-44">
              <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary-100 to-cyan-100" aria-hidden="true" />
              <Image
                src="/images/our-story-welcome-guide.png"
                alt="Sensei India tutor welcoming learning enquiries"
                width={1024}
                height={1365}
                priority
                className="relative h-auto w-full object-contain drop-shadow-[0_16px_15px_rgba(30,64,175,0.18)]"
                sizes="(min-width: 1024px) 176px, (min-width: 640px) 128px, 104px"
              />
            </div>

            <div className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-3">
              {registrationBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm sm:px-4 sm:text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-100 text-xs font-bold text-primary-700"
                  >
                    ✓
                  </span>

                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <RegisterForm />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-500">
          Submitting an enquiry does not confirm enrolment or require payment.
          Programme details and applicable fees are discussed during counselling.
        </p>
      </section>
    </main>
  );
}

import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

const contactDetails = [
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: EmailIcon,
  },
  {
    label: "Address",
    value: site.address,
    icon: LocationIcon,
  },
  {
    label: "Working hours",
    value: site.hours,
    icon: ClockIcon,
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <SectionTitle
        eyebrow="Contact"
        title="Need help choosing a tutor or course?"
        text="Connect with our admissions team for course guidance, batch schedules, fees, demo classes and tutor recommendations."
      />

      <section
        aria-label="Contact information and enquiry form"
        className="mx-auto mt-12 grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        {/* Contact information */}
        <aside className="relative overflow-hidden rounded-4xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/50 sm:p-9 lg:sticky lg:top-28">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-300">
              Get in touch
            </p>

            <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold tracking-tight sm:text-4xl">
              We&apos;re here to guide you.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Tell us about your learning goals and our team will help you find
              the most suitable tutor, course or study plan.
            </p>

            <div className="mt-8 grid gap-3">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-primary-300 transition group-hover:bg-primary-400 group-hover:text-slate-950">
                      <Icon />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                        {detail.label}
                      </span>

                      <span className="mt-1 block text-sm font-semibold leading-6 text-white">
                        {detail.value}
                      </span>
                    </span>
                  </>
                );

                if (detail.href) {
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={detail.label}
                    className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-primary-400/20 bg-primary-400/10 p-5">
              <p className="font-(family-name:--font-sora) font-bold text-white">
                Looking for a demo class?
              </p>

              <p className="mt-2 text-sm leading-6 text-primary-100">
                Mention your class, subject and preferred learning mode in the
                enquiry form for faster assistance.
              </p>
            </div>
          </div>
        </aside>

        {/* Enquiry form */}
        <ContactForm />
      </section>
    </main>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.45 19.45 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
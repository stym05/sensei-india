import Link from "next/link";

import { site } from "@/data/site";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/courses" },
  { label: "Find Tutors", href: "/find-tutors" },
  { label: "Learning Enquiry", href: "/register" },
  { label: "Contact", href: "/contact" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourusername",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/yourusername",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/yourcompany",
    icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@yourchannel",
    icon: YouTubeIcon,
  },
] as const;

type FooterLink = {
  readonly label: string;
  readonly href: string;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
  const brandInitial = site.name.trim().charAt(0).toUpperCase();

  return (
    <footer className="mt-12 border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              aria-label={`${site.name} home`}
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-500 font-(family-name:--font-sora) text-base font-bold text-white transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
                <span className="relative z-10">SI</span>

              </span>

              <span className="font-(family-name:--font-sora) text-xl font-bold tracking-tight">
                {site.name}
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              {site.tagline} Explore school subjects, international curricula,
              entrance preparation and future skills with experienced educators.
            </p>

            <div className="mt-4 flex flex-col gap-1.5 text-sm">
              <a
                href={phoneHref}
                className="w-fit text-slate-400 transition hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                {site.phone}
              </a>

              <a
                href={`mailto:${site.email}`}
                className="w-fit break-all text-slate-400 transition hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                {site.email}
              </a>
            </div>
          </div>

          <FooterLinkGroup
            title="Explore"
            ariaLabel="Footer navigation"
            links={exploreLinks}
          />

          <FooterLinkGroup
            title="Legal"
            ariaLabel="Legal pages"
            links={legalLinks}
          />
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {currentYear} {site.name}. All rights reserved.
          </p>

          <nav aria-label="Social media links">
            <ul className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow ${site.name} on ${label}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:bg-primary-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  ariaLabel,
  links,
}: {
  title: string;
  ariaLabel: string;
  links: readonly FooterLink[];
}) {
  return (
    <div>
      <h2 className="font-(family-name:--font-sora) text-sm font-bold text-white">
        {title}
      </h2>

      <nav aria-label={ariaLabel} className="mt-4">
        <ul className="space-y-2.5">
          {links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <Link
                href={link.href}
                className="inline-flex text-sm text-slate-400 transition duration-200 hover:translate-x-0.5 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M13.5 22v-9h3l.5-3h-3.5V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.5-.1-1.4-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v9h3.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M6.5 8.5H3.4V21h3.1V8.5ZM5 3A2 2 0 1 0 5 7a2 2 0 0 0 0-4ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.5H9.5V21h3.1v-6.2c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21H20v-7.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

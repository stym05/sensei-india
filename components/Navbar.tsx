"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { site } from "@/data/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/courses" },
  { label: "Find Tutors", href: "/find-tutors" },
  { label: "Enquire", href: "/register" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label={`${site.name} home`}
            className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-3"
          >
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-slate-950 text-sm font-black text-white shadow-md shadow-slate-300 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <span className="relative z-10">SI</span>

              <span
                aria-hidden="true"
                className="absolute inset-0 translate-y-full bg-linear-to-br from-primary-400 to-primary-600 transition-transform duration-300 group-hover:translate-y-0"
              />
            </span>

            <span className="font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-xl">
              {site.name}
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-0.5 md:flex">
            {links.map(({ label, href }) => {
              const isActive = isActiveLink(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative rounded-full px-3.5 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    isActive
                      ? "bg-primary-50 text-primary-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {label}

                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 -bottom-px h-0.5 origin-left rounded-full bg-primary-500 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/register"
            className="hidden items-center justify-center rounded-full bg-primary-500 px-4.5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary-200 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 md:inline-flex"
          >
            Request Demo
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 md:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  isMenuOpen
                    ? "translate-y-1.75 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-1.75 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  isMenuOpen
                    ? "scale-x-0 opacity-0"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-3.5 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  isMenuOpen
                    ? "-translate-y-1.75 -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl shadow-slate-200/50">
              <div className="flex flex-col gap-0.5">
                {links.map(({ label, href }) => {
                  const isActive = isActiveLink(href);

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-primary-50 text-primary-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      <span>{label}</span>

                      <span
                        aria-hidden="true"
                        className={`transition-transform ${
                          isActive
                            ? "translate-x-0 text-primary-500"
                            : "-translate-x-1 text-slate-300"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/register"
                onClick={closeMenu}
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

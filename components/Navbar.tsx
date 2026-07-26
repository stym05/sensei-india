"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { site } from "@/data/site";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Find Tutors", href: "/find-tutors" },
  { label: "Register", href: "/register" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4"
          >
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-slate-950 text-lg font-black text-white shadow-lg shadow-slate-300 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <span className="relative z-10">B</span>

              <span
                aria-hidden="true"
                className="absolute inset-0 translate-y-full bg-gradient-to-br from-sky-400 to-indigo-600 transition-transform duration-300 group-hover:translate-y-0"
              />
            </span>

            <span className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
              {site.name}
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map(({ label, href }) => {
              const isActive = isActiveLink(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative rounded-full px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {label}

                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-sky-500 transition-transform duration-300 ${
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
            className="hidden rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 md:inline-flex"
          >
            Enroll Now
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:hidden"
          >
            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0.5 h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                  isMenuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[18px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
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
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50">
              <div className="flex flex-col gap-1">
                {links.map(({ label, href }) => {
                  const isActive = isActiveLink(href);

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-sky-50 text-sky-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      <span>{label}</span>

                      <span
                        aria-hidden="true"
                        className={`transition-transform ${
                          isActive
                            ? "translate-x-0 text-sky-500"
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
                className="mt-3 flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
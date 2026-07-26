"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { tutors } from "@/data/site";

const modes = ["All", "Online", "Offline", "Hybrid"] as const;

type TutorMode = (typeof modes)[number];

const fieldStyles =
  "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100";

export default function TutorSearch() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<TutorMode>("All");
  const [location, setLocation] = useState("All");

  const locations = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(tutors.map((tutor) => tutor.location)),
      ).sort(),
    ],
    [],
  );

  const filteredTutors = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tutors.filter((tutor) => {
      const searchableText = [
        tutor.name,
        tutor.subject,
        tutor.location,
        tutor.mode,
        tutor.bio,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery === "" ||
        searchableText.includes(normalizedQuery);

      const matchesMode =
        mode === "All" || tutor.mode === mode;

      const matchesLocation =
        location === "All" || tutor.location === location;

      return matchesQuery && matchesMode && matchesLocation;
    });
  }, [query, mode, location]);

  const hasActiveFilters =
    query.trim() !== "" ||
    mode !== "All" ||
    location !== "All";

  function clearFilters() {
    setQuery("");
    setMode("All");
    setLocation("All");
  }

  return (
    <section
      aria-labelledby="tutor-search-heading"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      {/* Search panel */}
      <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-5 shadow-xl shadow-sky-100/60 sm:p-7">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-sky-100/70 blur-3xl"
        />

        <div className="relative">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
                Tutor directory
              </p>

              <h2
                id="tutor-search-heading"
                className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
              >
                Find the right tutor
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Search by tutor name, subject or location and filter
                by your preferred learning mode.
              </p>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="self-start rounded-full px-4 py-2 text-sm font-bold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:self-auto"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div className="grid gap-2">
              <label
                htmlFor="tutor-search"
                className="text-sm font-bold text-slate-800"
              >
                Search tutors
              </label>

              <div className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                </span>

                <input
                  id="tutor-search"
                  type="search"
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  placeholder="Name, subject or city..."
                  className={`${fieldStyles} pl-12 pr-11`}
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="learning-mode"
                className="text-sm font-bold text-slate-800"
              >
                Learning mode
              </label>

              <select
                id="learning-mode"
                value={mode}
                onChange={(event) =>
                  setMode(event.target.value as TutorMode)
                }
                className={fieldStyles}
              >
                {modes.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All modes" : item}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="tutor-location"
                className="text-sm font-bold text-slate-800"
              >
                Location
              </label>

              <select
                id="tutor-location"
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
                className={fieldStyles}
              >
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item === "All"
                      ? "All locations"
                      : item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Result summary */}
      <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p
          aria-live="polite"
          className="text-sm font-semibold text-slate-600"
        >
          Showing{" "}
          <span className="font-extrabold text-slate-950">
            {filteredTutors.length}
          </span>{" "}
          {filteredTutors.length === 1 ? "tutor" : "tutors"}
        </p>

        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {query.trim() && (
              <FilterTag
                label={`Search: ${query.trim()}`}
                onRemove={() => setQuery("")}
              />
            )}

            {mode !== "All" && (
              <FilterTag
                label={mode}
                onRemove={() => setMode("All")}
              />
            )}

            {location !== "All" && (
              <FilterTag
                label={location}
                onRemove={() => setLocation("All")}
              />
            )}
          </div>
        )}
      </div>

      {/* Tutor results */}
      {filteredTutors.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTutors.map((tutor) => {
            const initials = tutor.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={`${tutor.name}-${tutor.subject}-${tutor.location}`}
                className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 font-(family-name:--font-sora) text-sm font-bold text-white transition duration-300 group-hover:bg-sky-500">
                      {initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-(family-name:--font-sora) text-lg font-bold text-slate-950">
                        {tutor.name}
                      </h3>

                      <p className="mt-1 truncate text-sm font-bold text-sky-700">
                        {tutor.subject}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-label={`Rated ${tutor.rating} out of 5`}
                    className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-sm font-extrabold text-amber-700"
                  >
                    <span aria-hidden="true">★</span>
                    {tutor.rating}
                  </span>
                </div>

                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                  {tutor.bio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <TutorTag label={tutor.experience} />
                  <TutorTag label={tutor.location} />
                  <TutorTag label={tutor.mode} />
                </div>

                <div className="mt-auto pt-6">
                  <div className="mb-4 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-medium text-slate-500">
                      Starting from
                    </span>

                    <span className="font-(family-name:--font-sora) font-bold text-slate-950">
                      {tutor.price}
                    </span>
                  </div>

                  <Link
                    href="/register"
                    className="group/button inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    Book Demo Class

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 rounded-4xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl shadow-sm">
            🔍
          </div>

          <h3 className="mt-5 font-(family-name:--font-sora) text-xl font-bold text-slate-950">
            No tutors found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
            Try changing your search term, learning mode or
            location to discover more tutors.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Reset all filters
          </button>
        </div>
      )}
    </section>
  );
}

function TutorTag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
      {label}
    </span>
  );
}

function FilterTag({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700">
      <span className="max-w-48 truncate">{label}</span>

      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label} filter`}
        className="grid h-5 w-5 shrink-0 place-items-center rounded-full transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        ×
      </button>
    </span>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useDeferredValue,
  useMemo,
  useState,
} from "react";

import { tutors } from "@/data/site";

const modes = ["All", "Online", "Offline", "Hybrid"] as const;
const popularSubjects = ["Mathematics", "Physics", "Biology", "Chemistry", "English", "Coding"];

type TutorMode = (typeof modes)[number];

type TutorProfile = {
  name: string;
  subject: string;
  location: string;
  mode: string;
  bio: string;
  experience: string;
  rating: number | string;
  photo?: string;
  qualification?: string;
  languages?: string[];
  students?: number;
  reviews?: number;
  verified?: boolean;
};

const tutorProfiles = tutors as TutorProfile[];

const fieldStyles =
  "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition hover:border-slate-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100";

export default function TutorSearch() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<TutorMode>("All");
  const [location, setLocation] = useState("All");

  const deferredQuery = useDeferredValue(query);
  const isSearching = query !== deferredQuery;

  const locations = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          tutorProfiles.map((tutor) => tutor.location),
        ),
      ).sort(),
    ],
    [],
  );

  const filteredTutors = useMemo(() => {
    const normalizedQuery = deferredQuery
      .trim()
      .toLowerCase();

    return tutorProfiles.filter((tutor) => {
      const searchableText = [
        tutor.name,
        tutor.subject,
        tutor.location,
        tutor.mode,
        tutor.bio,
        tutor.experience,
        tutor.qualification,
        ...(tutor.languages ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery === "" ||
        searchableText.includes(normalizedQuery);

      const matchesMode =
        mode === "All" || tutor.mode === mode;

      const matchesLocation =
        location === "All" ||
        tutor.location === location;

      return (
        matchesQuery &&
        matchesMode &&
        matchesLocation
      );
    });
  }, [deferredQuery, mode, location]);

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
      <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/95 p-5 shadow-2xl shadow-primary-950/12 backdrop-blur-xl transition duration-500 hover:shadow-primary-950/18 sm:p-7">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary-100/70 blur-3xl"
        />

        <div className="relative">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600 sm:text-sm">
                Educator directory
              </p>

              <h2
                id="tutor-search-heading"
                className="mt-2 font-(family-name:--font-sora) text-xl font-bold tracking-tight text-slate-950 sm:text-2xl"
              >
                Explore tutors by learning need
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Search by subject, teaching mode or location. For international
                curricula, share the exact requirement in your enquiry.
              </p>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="self-start rounded-full px-4 py-2 text-sm font-bold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 sm:self-auto"
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
                  <SearchIcon />
                </span>

                <input
                  id="tutor-search"
                  type="search"
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  placeholder="Tutor name, subject or location..."
                  className={`${fieldStyles} pl-12 pr-11`}
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
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
                  setMode(
                    event.target.value as TutorMode,
                  )
                }
                className={fieldStyles}
              >
                {modes.map((item) => (
                  <option key={item} value={item}>
                    {item === "All"
                      ? "All modes"
                      : item}
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

          <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
            <span className="shrink-0 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
              Popular
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSubjects.map((subject) => {
                const isActive = query.toLowerCase() === subject.toLowerCase();

                return (
                  <button
                    key={subject}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setQuery(isActive ? "" : subject)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                      isActive
                        ? "border-primary-500 bg-primary-500 text-white shadow-md shadow-primary-200"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                    }`}
                  >
                    {subject}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Results summary */}
      <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p
          aria-live="polite"
          className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-opacity ${isSearching ? "opacity-50" : "opacity-100"}`}
        >
          Showing
          <span className="grid h-8 min-w-8 place-items-center rounded-full bg-primary-50 px-2 font-extrabold text-primary-700">
            {filteredTutors.length}
          </span>
          {filteredTutors.length === 1
            ? "tutor profile"
            : "tutor profiles"}
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
                onRemove={() =>
                  setLocation("All")
                }
              />
            )}
          </div>
        )}
      </div>

      {/* Tutor profiles */}
      {filteredTutors.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTutors.map((tutor, index) => (
            <TutorCard
              key={`${tutor.name}-${tutor.subject}-${tutor.location}`}
              tutor={tutor}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-4xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-slate-500 shadow-sm">
            <SearchIcon className="h-6 w-6" />
          </div>

          <h3 className="mt-5 font-(family-name:--font-sora) text-lg font-bold text-slate-950 sm:text-xl">
            No tutors found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
            Try a different subject, teaching mode or location. You can also
            send an enquiry for a personalised tutor match.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            Reset all filters
          </button>
        </div>
      )}
    </section>
  );
}

function TutorCard({
  tutor,
  index,
}: {
  tutor: TutorProfile;
  index: number;
}) {
  const initials = tutor.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const registrationHref = `/register?tutor=${encodeURIComponent(
    tutor.name,
  )}&subject=${encodeURIComponent(tutor.subject)}`;

  return (
    <article
      className="tutor-card-enter group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-100"
      style={{ animationDelay: `${Math.min(index, 5) * 70}ms` }}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-0 bg-linear-to-r from-transparent via-primary-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      {/* Photograph */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        {tutor.photo ? (
          <Image
            src={tutor.photo}
            alt={`${tutor.name}, ${tutor.subject} tutor`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center bg-linear-to-br from-slate-100 to-primary-100">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-slate-950 font-(family-name:--font-sora) text-2xl font-bold text-white shadow-xl">
              {initials}
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-950/60 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {tutor.verified && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-bold text-primary-700 shadow-sm backdrop-blur">
              <span
                aria-hidden="true"
                className="grid h-4 w-4 place-items-center rounded-full bg-primary-500 text-[10px] text-white"
              >
                ✓
              </span>
              Verified
            </span>
          )}

          <span className="rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
            {tutor.mode}
          </span>
        </div>

        <span
          aria-label={`Rated ${tutor.rating} out of 5`}
          className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-extrabold text-amber-700 shadow-lg"
        >
          <span aria-hidden="true">★</span>
          {tutor.rating}

          {tutor.reviews !== undefined && (
            <span className="font-medium text-slate-400">
              ({tutor.reviews})
            </span>
          )}
        </span>
      </div>

      {/* Profile content */}
      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="font-(family-name:--font-sora) text-lg font-bold tracking-tight text-slate-950">
            {tutor.name}
          </h3>

          <p className="mt-1 text-sm font-bold text-primary-700">
            {tutor.subject}
          </p>

          {tutor.qualification && (
            <p className="mt-2 text-sm font-medium text-slate-500">
              {tutor.qualification}
            </p>
          )}
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
          {tutor.bio}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4">
          <ProfileDetail
            label="Experience"
            value={tutor.experience}
          />

          <ProfileDetail
            label="Location"
            value={tutor.location}
          />

          {tutor.languages?.length ? (
            <ProfileDetail
              label="Languages"
              value={tutor.languages.join(", ")}
            />
          ) : null}

          {tutor.students !== undefined && (
            <ProfileDetail
              label="Students taught"
              value={`${tutor.students}+`}
            />
          )}
        </div>

        <div className="mt-auto pt-5">
          <div className="mb-4 flex justify-end border-t border-slate-100 pt-5">
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
              Demo available
            </span>
          </div>

          <Link
            href={registrationHref}
            className="group/button inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            Enquire For DEMO

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProfileDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-1 truncate text-xs font-bold text-slate-700 sm:text-sm">
        {value}
      </p>
    </div>
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
    <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-bold text-primary-700">
      <span className="max-w-48 truncate">
        {label}
      </span>

      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label} filter`}
        className="grid h-5 w-5 shrink-0 place-items-center rounded-full transition hover:bg-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      >
        ×
      </button>
    </span>
  );
}

function SearchIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

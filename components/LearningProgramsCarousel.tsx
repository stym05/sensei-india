"use client";

import { useEffect, useRef, useState } from "react";

import CourseCard, { type Course } from "@/components/CourseCard";

export default function LearningProgramsCarousel({
  courses,
}: {
  courses: readonly Course[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    function updateCarousel() {
      if (!track) {
        return;
      }

      const firstSlide = track.firstElementChild as HTMLElement | null;

      if (!firstSlide) {
        return;
      }

      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
      const step = firstSlide.offsetWidth + gap;
      const nextVisibleCount = Math.max(1, Math.round(track.clientWidth / step));

      setVisibleCount(nextVisibleCount);
      setActiveIndex(
        Math.min(
          Math.round(track.scrollLeft / step),
          Math.max(0, courses.length - nextVisibleCount),
        ),
      );
    }

    const resizeObserver = new ResizeObserver(updateCarousel);
    resizeObserver.observe(track);
    track.addEventListener("scroll", updateCarousel, { passive: true });
    updateCarousel();

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updateCarousel);
    };
  }, [courses.length]);

  const lastIndex = Math.max(0, courses.length - visibleCount);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    const firstSlide = track?.firstElementChild as HTMLElement | null;

    if (!track || !firstSlide) {
      return;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const boundedIndex = Math.min(Math.max(index, 0), lastIndex);

    track.scrollTo({
      left: boundedIndex * (firstSlide.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="mx-auto mt-9 max-w-7xl sm:mt-12">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold text-slate-500 sm:text-sm">
          Swipe or use the arrows to explore programmes
        </p>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous learning programmes"
            disabled={activeIndex === 0}
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next learning programmes"
            disabled={activeIndex >= lastIndex}
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Learning programmes carousel"
        className="carousel-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-5 lg:gap-6"
      >
        {courses.map((course) => (
          <div
            key={course.title}
            className="w-[86%] shrink-0 snap-start sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_3rem)/3)]"
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-2" aria-label="Carousel position">
        {Array.from({ length: lastIndex + 1 }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show programme group ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => scrollToIndex(index)}
            className={`h-1.5 transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-primary-500"
                : "w-3 bg-primary-100 hover:bg-primary-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

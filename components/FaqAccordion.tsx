"use client";

import { useEffect, useRef, useState } from "react";

type Faq = {
  q: string;
  a: string;
};

export default function FaqAccordion({ faqs }: { faqs: readonly Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={accordionRef} className="space-y-2.5 sm:space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-question-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <article
            key={faq.q}
            className={`overflow-hidden rounded-xl border bg-white transition duration-300 ${
              isOpen
                ? "border-primary-200 shadow-xl shadow-primary-100/70"
                : "border-slate-200 shadow-sm hover:border-primary-100"
            }`}
          >
            <h3>
              <button
                id={questionId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-4 text-left font-(family-name:--font-sora) text-sm font-bold leading-6 text-slate-950 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 sm:gap-5 sm:px-5 sm:py-5 sm:text-base"
              >
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[11px] font-bold transition duration-300 sm:h-9 sm:w-9 sm:rounded-xl sm:text-xs ${
                      isOpen
                        ? "bg-primary-500 text-white"
                        : "bg-primary-50 text-primary-700"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{faq.q}</span>
                </span>

                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-lg font-normal transition duration-300 sm:h-9 sm:w-9 sm:text-xl ${
                    isOpen
                      ? "rotate-45 border-primary-500 bg-primary-500 text-white"
                      : "border-slate-200 bg-white text-slate-500"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <p className="border-t border-slate-100 pt-3.5 text-sm leading-6 text-slate-600 sm:ml-12 sm:pt-4 sm:leading-7">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

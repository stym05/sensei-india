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
    <div ref={accordionRef} className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-question-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <article
            key={faq.q}
            className={`overflow-hidden rounded-none border bg-white transition duration-300 ${
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
                className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left font-(family-name:--font-sora) text-sm font-bold leading-6 text-slate-950 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 sm:px-6 sm:py-6 sm:text-base"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold transition duration-300 ${
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
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-xl font-normal transition duration-300 ${
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
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 sm:ml-13">
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

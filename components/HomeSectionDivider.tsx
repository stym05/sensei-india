type DividerVariant = "learning" | "progress" | "questions";

const illustrations: Record<DividerVariant, React.ReactNode> = {
  learning: (
    <>
      <path d="m82 42 34-16 34 16-34 16-34-16Z" fill="currentColor" opacity=".16" />
      <path d="m91 47 25 12 25-12v18c-15 10-35 10-50 0V47Z" fill="currentColor" opacity=".28" />
      <path d="M150 42v25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="150" cy="70" r="4" fill="currentColor" />
      <path d="M37 65c16-19 29-24 48-23M155 42c20 0 33 8 48 24" stroke="currentColor" strokeWidth="2" strokeDasharray="5 8" opacity=".3" />
      <circle cx="31" cy="70" r="9" fill="currentColor" opacity=".12" />
      <path d="M27 70h8M31 66v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M205 62h24v18h-24z" fill="currentColor" opacity=".12" />
      <path d="m205 62 12 9 12-9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  progress: (
    <>
      <path d="M66 72h25V56h25V40h25V24h26" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity=".16" />
      <path d="m159 17 14 7-14 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="68" cy="72" r="10" fill="currentColor" opacity=".25" />
      <circle cx="116" cy="40" r="7" fill="currentColor" opacity=".18" />
      <path d="M197 29c0-8 6-14 14-14s14 6 14 14c0 6-3 10-8 13v7h-12v-7c-5-3-8-7-8-13Z" fill="currentColor" opacity=".13" />
      <path d="M205 54h12M208 59h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 27h28M50 13v28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".35" />
    </>
  ),
  questions: (
    <>
      <path d="M91 30h86a17 17 0 0 1 17 17v11a17 17 0 0 1-17 17h-45l-19 13 4-13H91a17 17 0 0 1-17-17V47a17 17 0 0 1 17-17Z" fill="currentColor" opacity=".12" />
      <path d="M112 48c2-8 9-12 18-12 11 0 18 6 18 14 0 10-12 11-12 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="136" cy="79" r="3" fill="currentColor" />
      <path d="M47 58c9-13 16-18 29-22M194 37c13 4 21 10 28 22" stroke="currentColor" strokeWidth="2" strokeDasharray="4 7" opacity=".3" />
      <circle cx="40" cy="67" r="8" fill="currentColor" opacity=".18" />
      <circle cx="230" cy="67" r="8" fill="currentColor" opacity=".18" />
    </>
  ),
};

export default function HomeSectionDivider({
  variant,
}: {
  variant: DividerVariant;
}) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-20 max-w-7xl overflow-hidden sm:h-24">
      <svg
        viewBox="0 0 1200 96"
        className="absolute inset-0 h-full w-full text-primary-500"
        preserveAspectRatio="none"
      >
        <path
          d="M0 56c130-30 240-30 355 0s221 30 337 0 241-30 508 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity=".14"
        />
        <path
          d="M0 66c130-30 240-30 355 0s221 30 337 0 241-30 508 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity=".08"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 grid h-18 w-64 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-linear-to-r from-transparent via-primary-50 to-transparent text-primary-500 sm:w-72">
        <svg viewBox="0 0 260 96" className="h-full w-full" fill="none">
          {illustrations[variant]}
        </svg>
      </div>
    </div>
  );
}

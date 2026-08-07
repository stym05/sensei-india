export default function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary-600 sm:text-sm">{eyebrow}</p>
      <h2 className="mt-3 font-(family-name:--font-sora) text-3xl font-bold leading-[1.15] tracking-[-0.035em] text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{text}</p>
    </div>
  );
}

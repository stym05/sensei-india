export default function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-600 sm:text-xs">{eyebrow}</p>
      <h2 className="mt-2.5 font-(family-name:--font-sora) text-2xl font-bold leading-[1.18] tracking-[-0.035em] text-slate-950 sm:mt-3 sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">{text}</p>
    </div>
  );
}

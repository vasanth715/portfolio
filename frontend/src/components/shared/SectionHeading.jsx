import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
    </Reveal>
  );
}

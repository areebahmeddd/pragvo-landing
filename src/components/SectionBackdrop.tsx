type BackdropStrength = "hero" | "soft" | "standard" | "muted" | "clear";

export type ReadableTint = "none" | "hero" | "content";

const readableTintClass: Record<Exclude<ReadableTint, "none">, string> = {
  hero: "bg-gradient-to-b from-slate-950/72 via-slate-950/58 to-slate-950/88",
  content:
    "bg-gradient-to-b from-slate-950/68 via-slate-950/52 to-slate-950/84",
};

const veil: Record<Exclude<BackdropStrength, "clear">, string> = {
  hero: "bg-gradient-to-b from-white/86 via-white/80 to-white/90",
  soft: "bg-gradient-to-br from-white/88 via-white/84 to-white/92",
  standard: "bg-gradient-to-b from-white/91 via-white/88 to-white/94",
  muted: "bg-gradient-to-b from-white/93 via-white/91 to-white/[0.97]",
};

export default function SectionBackdrop({
  imageSrc,
  strength = "standard",
  readableTint = "none",
  fixedCover = false,
}: {
  imageSrc: string;
  strength?: BackdropStrength;
  readableTint?: ReadableTint;
  fixedCover?: boolean;
}) {
  const fixedCoverClass = fixedCover ? "md:bg-fixed" : "";
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat ${fixedCoverClass}`}
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden
      />
      {strength !== "clear" && (
        <div
          className={`pointer-events-none absolute inset-0 ${veil[strength]}`}
          aria-hidden
        />
      )}
      {strength !== "clear" && (
        <div
          className="from-brand-blue/[0.05] to-brand-blue/[0.03] pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent"
          aria-hidden
        />
      )}
      {readableTint !== "none" && (
        <div
          className={`pointer-events-none absolute inset-0 ${readableTintClass[readableTint]} ${fixedCoverClass}`}
          aria-hidden
        />
      )}
    </>
  );
}

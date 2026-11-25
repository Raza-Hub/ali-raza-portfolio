import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "split",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "split" | "stack";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

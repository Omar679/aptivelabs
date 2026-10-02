import type { ReactNode } from "react";

// Infinite horizontal loop; pauses on hover.
export default function Marquee({ children, speed = 40, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  return (
    <div
      className={`marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] ${className}`}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      <div className="marquee-track flex w-max items-center">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>{children}</div>
      </div>
    </div>
  );
}

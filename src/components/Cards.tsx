"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { icons } from "./icons";
import { useRef, type ReactNode } from "react";
import type { Service } from "@/content/site";

export { icons };

// Card with a soft green spotlight that follows the cursor (hover reveal pattern).
export function SpotlightCard({ children, className = "", href }: { children: ReactNode; className?: string; href?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const inner = (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group relative h-full overflow-hidden rounded-2xl border border-line bg-ink/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-signal/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--x,50%) var(--y,50%), rgba(43,212,125,0.14), transparent 60%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
  return href ? (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function ServiceCard({ s, featured = false }: { s: Service; featured?: boolean }) {
  const Icon = icons[s.icon];
  return (
    <SpotlightCard href={`/services/${s.slug}/`} className={featured ? "bg-steel/40" : ""}>
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className="relative grid h-12 w-12 place-items-center rounded-full bg-steel text-white">
            <Icon size={22} strokeWidth={1.6} />
            <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ink bg-signal" />
          </span>
          <span className="font-mono text-xs text-haze">{s.n}</span>
        </div>
        <h3 className="mt-8 text-2xl font-semibold">{s.name}</h3>
        <p className="mt-3 flex-1 text-haze">{s.short}</p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal">
          Learn more
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </SpotlightCard>
  );
}

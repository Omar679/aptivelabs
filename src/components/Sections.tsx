import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import Marquee from "./Marquee";
import { Reveal, SplitText } from "./Reveal";

export function Button({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  const base = "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-signal text-carbon hover:shadow-[0_0_40px_rgba(43,212,125,0.5)]"
      : "border border-white/20 text-white hover:border-signal hover:text-signal";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

// Inner-page hero: glow, grid texture, eyebrow and word-by-word headline.
export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="grid-bg absolute inset-0" />
      <div className="glow -top-40 right-[-10%] h-[32rem] w-[32rem]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <SplitText text={title} className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl" />
        {lead && (
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-haze md:text-xl">{lead}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.35}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, light = false }: { eyebrow: string; title: string; lead?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className={`eyebrow ${light ? "!text-signal-deep" : ""}`}>{eyebrow}</p>
      </Reveal>
      <SplitText as="h2" text={title} className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl" />
      {lead && (
        <Reveal delay={0.15}>
          <p className={`mt-6 text-lg leading-relaxed ${light ? "text-graphite" : "text-haze"}`}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

// Big scrolling tagline band.
export function TextBand({ text = "Built here. Built properly." }: { text?: string }) {
  return (
    <section className="border-y border-line bg-ink py-10 md:py-14" aria-label={text}>
      <Marquee speed={36}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-8 text-5xl font-semibold tracking-tight md:text-8xl">
            <span className="text-white">{text}</span>
            <span className="mx-10 inline-block h-4 w-4 rounded-full bg-signal md:h-6 md:w-6" />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]">{text}</span>
            <span className="mx-10 inline-block h-4 w-4 rounded-full bg-signal md:h-6 md:w-6" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export function CTA({ title = "Tell us what needs to work.", lead = "We will assess it and send you a clear proposal.", button = "Request a quote" }) {
  return (
    <section className="px-4 py-24 md:py-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-steel/30 px-6 py-20 text-center md:py-28">
        <div className="grid-bg absolute inset-0" />
        <div className="glow left-1/2 top-1/2 h-96 w-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <div className="relative">
          <p className="eyebrow">Next step</p>
          <SplitText as="h2" text={title} className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-haze">{lead}</p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact/">{button}</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ClientLogo({ k, name, variant = "white", className = "h-10" }: { k: string; name: string; variant?: "white" | "dark"; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/clients/${k}-${variant}.png`} alt={name} className={`w-auto object-contain ${className}`} loading="lazy" />;
}

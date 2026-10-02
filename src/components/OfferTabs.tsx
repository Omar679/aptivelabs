"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

type Offer = { title: string; body: string; items: string[] };

// Pill tabs with a sliding highlight; panel content swaps with a soft rise.
export default function OfferTabs({ offers }: { offers: Offer[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const o = offers[i];
  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2">
        {offers.map((x, k) => (
          <button
            key={x.title}
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${k === i ? "text-carbon" : "text-haze hover:text-white"}`}
          >
            {k === i && <motion.span layoutId="offer-pill" className="absolute inset-0 rounded-full bg-signal" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
            <span className="relative">
              <span className="mr-2 font-mono text-xs opacity-70">{String(k + 1).padStart(2, "0")}</span>
              {x.title}
            </span>
          </button>
        ))}
      </div>
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-line bg-steel/20 p-8 md:p-12">
        <div className="glow -right-24 -top-24 h-72 w-72 opacity-60" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr]"
          >
            <div>
              <h3 className="text-3xl font-semibold md:text-4xl">{o.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-haze">{o.body}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {o.items.map((it, k) => (
                <motion.li
                  key={it}
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + k * 0.04 }}
                  className="flex gap-3 rounded-xl border border-line bg-ink/60 p-4"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-signal" />
                  <span>{it}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

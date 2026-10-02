"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Tabbed step-by-step: auto-advances with a progress bar; click any step to jump.
export default function ProcessTabs({ steps, interval = 5500 }: { steps: [string, string][]; interval?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setI((x) => (x + 1) % steps.length), interval);
    return () => clearTimeout(t);
  }, [i, paused, reduce, steps.length, interval]);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <ol className="flex flex-col" role="tablist">
        {steps.map(([t], k) => (
          <li key={t}>
            <button
              role="tab"
              aria-selected={k === i}
              onClick={() => setI(k)}
              className={`group relative w-full overflow-hidden border-b border-line py-5 text-left transition-colors ${k === i ? "text-white" : "text-haze hover:text-white"}`}
            >
              <span className="mr-5 font-mono text-sm text-signal">{String(k + 1).padStart(2, "0")}</span>
              <span className="text-xl font-semibold md:text-2xl">{t}</span>
              <span className="absolute bottom-0 left-0 h-px w-full bg-line" />
              {k === i && (
                <motion.span
                  key={`bar-${i}-${paused}`}
                  className="absolute bottom-0 left-0 h-[2px] bg-signal"
                  initial={{ width: reduce || paused ? "100%" : "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: reduce || paused ? 0 : interval / 1000, ease: "linear" }}
                />
              )}
            </button>
          </li>
        ))}
      </ol>
      <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-line bg-steel/30 p-8 md:p-12">
        <div className="glow -right-24 -top-24 h-72 w-72" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="font-mono text-7xl font-medium text-signal/90 md:text-8xl">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-6 text-3xl font-semibold md:text-4xl">{steps[i][0]}</h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-haze">{steps[i][1]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

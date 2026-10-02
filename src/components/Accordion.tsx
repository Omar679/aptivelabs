"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Accordion({ items, light = false }: { items: [string, string][]; light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const border = light ? "border-carbon/15" : "border-line";
  return (
    <div className={`border-t ${border}`}>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className={`border-b ${border}`}>
            <button
              className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold md:text-xl"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {q}
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-current/20">
                <Plus size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={`max-w-2xl pb-6 text-base leading-relaxed ${light ? "text-graphite" : "text-haze"}`}>{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

"use client";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

// Scroll-linked: four separate vendors drift in from the corners and lock into one accountable team.
const vendors = [
  { label: "Software vendor", x: -170, y: -120 },
  { label: "Network contractor", x: 170, y: -120 },
  { label: "CCTV installer", x: -170, y: 120 },
  { label: "Repair technician", x: 170, y: 120 },
];

function Chip({ v, p, i }: { v: (typeof vendors)[number]; p: MotionValue<number>; i: number }) {
  const x = useTransform(p, [0, 0.55], [v.x * 1.25, v.x * 0.42]);
  const y = useTransform(p, [0, 0.55], [v.y * 1.25, v.y * 0.42]);
  const opacity = useTransform(p, [0, 0.15, 0.55, 0.75], [0.3, 1, 1, 0]);
  const rotate = useTransform(p, [0, 0.55], [i % 2 ? 6 : -6, 0]);
  return (
    <motion.div style={{ x, y, opacity, rotate }} className="absolute left-1/2 top-1/2 -ml-[78px] -mt-[22px] w-[156px]">
      <div className="rounded-full border border-line bg-ink px-4 py-2.5 text-center font-mono text-xs text-haze">{v.label}</div>
    </motion.div>
  );
}

export default function Converge() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const coreScale = useTransform(scrollYProgress, [0.45, 0.8], reduce ? [1, 1] : [0.6, 1]);
  const coreOpacity = useTransform(scrollYProgress, [0.45, 0.8], reduce ? [1, 1] : [0, 1]);
  const ring = useTransform(scrollYProgress, [0.6, 1], [0.6, 1.5]);
  const ringOpacity = useTransform(scrollYProgress, [0.6, 0.85, 1], [0, 0.6, 0]);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-0 rounded-full border border-dashed border-line" />
      <div className="absolute inset-[18%] rounded-full border border-line/70" />
      {!reduce && vendors.map((v, i) => <Chip key={v.label} v={v} p={scrollYProgress} i={i} />)}
      <motion.div style={{ scale: ring, opacity: ringOpacity }} className="absolute inset-[30%] rounded-full border-2 border-signal" />
      <motion.div style={{ scale: coreScale, opacity: coreOpacity }} className="absolute inset-[30%] grid place-items-center rounded-full bg-steel shadow-[0_0_80px_rgba(43,212,125,0.35)]">
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/aptive-mark-color-on-dark.svg" alt="" className="mx-auto h-12 w-12" />
          <p className="mt-3 text-sm font-semibold">One accountable team</p>
        </div>
      </motion.div>
    </div>
  );
}

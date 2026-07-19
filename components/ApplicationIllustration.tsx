"use client";

import { motion } from "framer-motion";

// Gentle infinite bob — wrap in an outer entrance motion.div so both can run.
const bob = (delay: number, distance = 10, duration = 4) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export default function ApplicationIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M70 330 C 110 230, 290 250, 330 80"
          stroke="#A11312"
          strokeWidth="2.5"
          strokeDasharray="2 12"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>


      <motion.div
        className="absolute left-2 top-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.4 }}
      >
        <motion.div {...bob(0, 12, 5)} className="h-9 w-9 rounded-full bg-[#A11312]" />
      </motion.div>


      <motion.div
        className="absolute right-4 top-2"
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.55 }}
      >
        <motion.div {...bob(0.6, 14, 6)} className="h-12 w-12 rounded-xl border-2 border-black bg-[#F8DBFF]" />
      </motion.div>


      <motion.div
        className="absolute right-1 top-1/2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.7 }}
      >
        <motion.svg
          width="34" height="34" viewBox="0 0 24 24" fill="#ECCA0A"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <path d="M12 0c.7 5.8 5.5 10.6 11.3 11.3v1.4C17.5 13.4 12.7 18.2 12 24c-.7-5.8-5.5-10.6-11.3-11.3v-1.4C6.5 10.6 11.3 5.8 12 0z" />
        </motion.svg>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-6"
        initial={{ opacity: 0, scale: 0, rotate: 20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.8 }}
      >
        <motion.div {...bob(0.3, 10, 5.5)} className="h-8 w-8 rounded-lg border-2 border-black bg-[#FDD4BF]" />
      </motion.div>


      <motion.div
        className="absolute bottom-12 right-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.9 }}
      >
        <motion.div {...bob(1, 12, 6.5)} className="h-6 w-6 rounded-full border-2 border-black bg-[#C1D3FF]" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <motion.div
          {...bob(0, 8, 5)}
          className="relative rounded-2xl border-2 border-black bg-white p-5 shadow-[0_8px_0_0_rgba(0,0,0,0.9)]"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-[#A11312]" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 w-20 rounded-full bg-gray-800" />
              <div className="h-2 w-14 rounded-full bg-gray-300" />
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="h-2 w-full rounded-full bg-gray-200" />
            <div className="h-2 w-5/6 rounded-full bg-gray-200" />
            <div className="h-2 w-2/3 rounded-full bg-gray-200" />
          </div>

          <div className="mt-5 flex h-9 items-center justify-center rounded-full border-2 border-black bg-[#ECCA0A] shadow-[0_3px_0_0_rgba(0,0,0,0.85)]">
            <div className="h-2 w-16 rounded-full bg-black/80" />
          </div>
          <motion.div
            className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#CCFFDE] shadow-[0_3px_0_0_rgba(0,0,0,0.85)]"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 12, delay: 1.1 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
}

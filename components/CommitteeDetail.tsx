"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { type Committee, detailImages } from "@/lib/committees";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function CommitteeDetail({ committee }: { committee: Committee }) {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-black">{committee.name}</h1>
          <p className="mt-4 mx-auto max-w-md text-sm md:text-base text-gray-500 leading-relaxed">
            {committee.intro}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-12 md:my-16 border-t border-[#E7E7E7]" />

        {/* Body */}
        <div className="flex flex-col gap-12">

          {/* About this role */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="font-semibold text-black mb-3">About this role</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{committee.about}</p>
          </motion.div>

          {/* What you'll be doing */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
          >
            <h2 className="font-semibold text-black mb-3">What you&apos;ll be doing</h2>
            <ul className="flex flex-col gap-2">
              {committee.responsibilities.map((r) => (
                <li key={r} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Experience + gallery */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
          >
            <h2 className="font-semibold text-black mb-2">{committee.experienceTitle}</h2>
            <p className="mb-6 max-w-xl text-sm text-gray-500 leading-relaxed">
              {committee.experienceDescription}
            </p>
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {detailImages.map((src) => (
                <div key={src} className="relative aspect-4/3 rounded-2xl overflow-hidden">
                  <Image src={src} alt={committee.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              ))}
            </div>

            {/* Mobile auto-scrolling slider */}
            <div className="md:hidden -mx-6 overflow-hidden">
              <motion.div
                className="flex gap-3 w-max px-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 16, ease: "linear", repeat: Infinity }}
              >
                {[...detailImages, ...detailImages].map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="relative h-32 w-44 shrink-0 rounded-2xl overflow-hidden"
                  >
                    <Image src={src} alt={committee.name} fill sizes="176px" className="object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Join Committee
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

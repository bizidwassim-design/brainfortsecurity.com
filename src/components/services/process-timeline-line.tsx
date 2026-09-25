"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Thin gold progress line that fills in as the process steps scroll into view. */
export function ProcessTimelineLine() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="mt-14 hidden h-px w-full overflow-hidden rounded-full bg-border lg:block"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-primary to-secondary"
        style={{ transformOrigin: "0% 50%" }}
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
    </div>
  );
}

"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type AnimatedEntranceProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function AnimatedEntrance({ delay = 0, className, children }: AnimatedEntranceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

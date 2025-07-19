"use client";

import React from "react";
import { motion } from "motion/react";

export const Sportlight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: 1.0, // now animates last
      }}
      className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(130%_130%_at_50%_10%,#000_50%,#D9DBF1_150%)]"
    />
  );
};

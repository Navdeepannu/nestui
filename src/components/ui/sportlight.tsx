"use client";

import React from "react";
import { motion } from "motion/react";

export const Sportlight = () => {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
        filter: "blur(20px)",
      }}
      animate={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      }}
      className="pointer-events-none absolute z-[-2] h-screen w-full bg-[linear-gradient(to_top,rgba(0,163,255,0)_0%,rgba(0,163,255,0.05)_30%,rgba(0,163,255,0.15)_60%,rgba(0,163,255,0.25)_80%,rgba(0,163,255,0.3)_100%)]"
      style={{
        willChange: "transform, opacity, filter",
      }}
    ></motion.div>
  );
};

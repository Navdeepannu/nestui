"use client";
import React from "react";
import { motion } from "motion/react";
export const Sportlight = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2,
      }}
      className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.25)_0,rgba(0,163,255,0.1)_50%,rgba(0,163,255,0)_100%)]"
    ></motion.div>
  );
};

"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react"; // Use framer-motion, not motion/react
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.8,
  initialDelay = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  initialDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
          y: 0,
        },
        {
          duration,
          delay: stagger(0.05),
          ease: "easeIn",
        },
      );
    }, initialDelay * 500);

    return () => clearTimeout(timeout);
  }, [scope, animate, filter, duration, initialDelay]);

  return (
    <div className={cn("", className)}>
      <motion.div
        ref={scope}
        className="flex flex-wrap justify-center text-neutral-600 dark:text-neutral-400"
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{
              filter: filter ? "blur(4px)" : "none",
              marginRight: "0.4ch",
              y: 0,
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

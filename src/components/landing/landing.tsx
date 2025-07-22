"use client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/basic/container";
import {
  IconArrowRight,
  IconBrandFramerMotion,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconStar,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import { Sportlight } from "@/components/ui/sportlight";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { TextGenerateEffect } from "./text-generate-effect";

export default function Landing() {
  return (
    <motion.div
      className="relative z-10 overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Container className="text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <Link
            href="https://github.com/navdeepannu/"
            target="_blank"
            className="mb-2 inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Badge
                variant="outline"
                className="border-[1px] border-neutral-400 transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <IconStar className="text-yellow-300" />
                </motion.div>
                Star on Github
              </Badge>
            </motion.div>
          </Link>
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl dark:text-neutral-100"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Ship fast and{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, color: "#rgb(163 163 163)" }}
            animate={{
              opacity: 1,
              color: [
                "#rgb(163 163 163)",
                "#rgb(59 130 246)",
                "#rgb(163 163 163)",
              ],
            }}
            transition={{
              delay: 0.4,
              duration: 0.4,
              color: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              },
            }}
          >
            beautifully
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-6 max-w-lg text-lg font-extralight text-neutral-600 dark:text-neutral-400"
        >
          <TextGenerateEffect
            initialDelay={0.7}
            duration={0.5}
            words="Ship polished, responsive interfaces with ready-made components."
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.0,
            duration: 0.4,
            type: "spring",
            stiffness: 150,
          }}
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link href="/components/button">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-neutral-200 to-neutral-300 font-semibold shadow-lg transition-all duration-300 hover:from-neutral-100 hover:to-neutral-200"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <IconWorld />
                </motion.div>
                Browse Components
              </Button>
            </motion.div>
          </Link>
          <Link href="/docs/introduction">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
                borderColor: "#3b82f6",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-900"
              >
                Documentation
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                >
                  <IconArrowRight />
                </motion.div>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-700 dark:text-neutral-300"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            <TechIcon
              icon={<IconBrandNextjs size={40} stroke="black" />}
              label="Next.js"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.45,
              duration: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            <TechIcon
              icon={
                <IconBrandTailwind
                  size={40}
                  stroke="0"
                  className="text-sky-300"
                  fill="#74d4ff"
                />
              }
              label="TailwindCSS"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            <TechIcon
              icon={
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <IconBrandReact
                    size={40}
                    stroke="black"
                    className="text-[#58c4dc]"
                  />
                </motion.div>
              }
              label="React"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.55,
              duration: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            <TechIcon
              icon={
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                >
                  <IconBrandFramerMotion
                    size={40}
                    stroke="black"
                    className="text-[#fff42b]"
                  />
                </motion.div>
              }
              label="Motion"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            <TechIcon
              icon={
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="size-10"
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <rect width="256" height="256" fill="none" />
                  <motion.line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.7, duration: 0.4 }}
                  />
                  <motion.line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.75, duration: 0.4 }}
                  />
                </motion.svg>
              }
              label="shadcn/ui"
            />
          </motion.div>
        </motion.div>

        <Sportlight />
      </Container>
    </motion.div>
  );
}

const TechIcon = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <motion.div
    className="flex flex-col items-center gap-2 rounded-lg p-4"
    whileHover={{
      scale: 1.1,
      y: -5,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <motion.div
      whileHover={{ rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <motion.span
      initial={{ opacity: 0.7 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.span>
  </motion.div>
);

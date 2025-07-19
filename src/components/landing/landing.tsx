"use client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
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
    <div className="relative z-10 bg-black">
      <Container className="text-center">
        {/* Badge */}
        {/* improve this . */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
        >
          <Link
            href="https://github.com/navdeepannu/"
            target="_blank"
            className="mb-2 inline-block"
          >
            <Badge
              variant="outline"
              className="border-[1px] border-neutral-400"
            >
              <IconStar className="text-yellow-300" />
              Star on Github
            </Badge>
          </Link>
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl dark:text-neutral-100"
        >
          Ship fast and beautifully
        </motion.h1>

        {/* Subheading */}
        <div className="mt-6 max-w-lg text-lg font-extralight text-neutral-600 dark:text-neutral-400">
          <TextGenerateEffect
            initialDelay={0.2}
            duration={0.6}
            words="Ship polished, responsive interfaces with ready-made components."
          ></TextGenerateEffect>
        </div>
        {/* cta  */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link href="/components">
            <Button
              size="lg"
              className="bg-neutral-200 font-semibold hover:bg-neutral-50"
            >
              <IconWorld />
              Browse Components
            </Button>
          </Link>
          <Link href="/docs/introduction">
            <Button variant="outline" size="lg">
              Documentation
              <IconArrowRight />
            </Button>
          </Link>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, x: -10, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-700 dark:text-neutral-300"
        >
          <TechIcon
            icon={<IconBrandNextjs size={40} stroke="black" />}
            label="Next.js"
          />
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
          <TechIcon
            icon={
              <IconBrandReact
                size={40}
                stroke="black"
                className="text-[#58c4dc]"
              />
            }
            label="React"
          />
          <TechIcon
            icon={
              <IconBrandFramerMotion
                size={40}
                stroke="black"
                className="text-[#fff42b]"
              />
            }
            label="Motion"
          />
          <TechIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="size-10"
              >
                <rect width="256" height="256" fill="none" />
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            }
            label="shadcn/ui"
          />
        </motion.div>

        <Sportlight />
      </Container>
    </div>
  );
}

const TechIcon = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-2">
    {icon}
    <span>{label}</span>
  </div>
);

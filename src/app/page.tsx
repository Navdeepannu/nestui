import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import {
  IconArrowRight,
  IconBrandFramerMotion,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconChevronRight,
  IconStar,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import { Sportlight } from "@/components/ui/sportlight";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="relative">
      <Container className="text-center">
        <Sportlight />

        {/* Badge */}
        {/* improve this . */}
        <Link
          href="https://github.com/navdeepannu/"
          target="_blank"
          className="mb-2"
        >
          <Badge variant="outline" className="border-[1px] border-neutral-400">
            <IconStar className="text-yellow-300" />
            Star on Github
          </Badge>
        </Link>

        {/* heading */}
        <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl dark:text-neutral-100">
          Ship fast and beautifully.
        </h1>
        {/* Subheading */}
        <p className="mt-6 max-w-xl text-xl text-neutral-600 dark:text-neutral-400">
          Ship polished, responsive interfaces with ready-made components.
        </p>
        {/* cta  */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
        </div>
        {/* Tech stack */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
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
        </div>
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

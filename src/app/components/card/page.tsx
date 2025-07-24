"use client";
import React from "react";
import { ComponentLayout } from "@/components/docsLayout/ComponentLayout";
import { BlogCard } from "@/components/ui/showcase/card";

const cardComponentCode = `"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
  glareEffect?: boolean;
  perspective?: number;
}

const Card = ({
  className,
  children,
  intensity = 0.5,
  glareEffect = true,
  perspective = 1000,
}: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [intensity * 10, -intensity * 10]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-intensity * 10, intensity * 10]
  );

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const glareBackground = useMotionTemplate\`radial-gradient(circle at \${glareX}% \${glareY}%, rgba(255,255,255,0.15) 0%, transparent 50%)\`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900",
        "transition-shadow duration-300 ease-out",
        isHovered && "shadow-2xl shadow-black/10 dark:shadow-black/30",
        className
      )}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {glareEffect && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-xl"
          style={{
            background: glareBackground,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            opacity: { duration: 0.3 },
          }}
        />
      )}

      <motion.div
        className="relative z-0"
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-xl border border-transparent"
        animate={{
          borderColor: isHovered
            ? "rgba(59, 130, 246, 0.3)"
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export { Card };`;

const cardDemo = `import { ProductCard } from "@/components/ui/showcase/card";

export function CardDemo() {
  return (
    <ProductCard
      image="/wireless-headphones.jpg"
      title="Wireless Headphones"
      price="$199.99"
      description="Premium wireless headphones with noise cancellation and superior sound quality."
      className="max-w-sm"
    />
  );
}`;
export default function Page() {
  return (
    <ComponentLayout
      title="Blog Card"
      description="Minimalist Blog Card components. "
      preview={
        <BlogCard
          title="Minimalism"
          excerpt="Minimalism is a tool that can assist you in finding freedom. Freedom from fear. Freedom from worry. Freedom from overwhelm. Freedom from guilt.
Freedom from depression. Freedom from the trappings of the consumer culture we've bullt our lives around."
          author="Sarah Chen"
          date="Jul 25"
          readTime="5 min read"
          image="https://images.unsplash.com/photo-1492714673295-07efb43ddaf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          category="Design"
        />
      }
      code={cardDemo}
      installation={{
        packages: ["motion", "clsx", "tailwind-merge"],
        files: [
          {
            name: "components/ui/card.tsx",
            content: cardComponentCode,
            language: "tsx",
          },
        ],
      }}
      props={[
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          description: "The size of the loading indicator",
        },
        {
          name: "className",
          type: "string",
          description:
            "Additional CSS classes to apply to the loading component",
        },
      ]}
      nextComponent={{
        name: "Button",
        href: "/components/button",
      }}
    />
  );
}

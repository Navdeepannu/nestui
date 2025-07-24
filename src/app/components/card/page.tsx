"use client";
import React from "react";
import { ComponentLayout } from "@/components/docsLayout/ComponentLayout";
import { BlogCard } from "@/components/ui/showcase/card";

const cardComponentCode = `"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconShare3 } from "@tabler/icons-react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-200/50 bg-white dark:border-neutral-800/50 dark:bg-neutral-900",
        "shadow-lg shadow-neutral-900/5 transition-shadow duration-300 ease-out hover:shadow-xl dark:shadow-red-500",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BlogCard = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  category,
}: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="max-w-xl bg-neutral-50 dark:bg-neutral-800">
        <div className="relative flex h-96">
          {/* Left Image Section */}
          <motion.div
            className="relative w-1/3 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full rounded-l-xl object-cover"
            />
          </motion.div>

          {/* Right Content Section */}
          <div className="flex w-2/3 flex-col justify-between p-10">
            {/* Date and Read Time */}
            <div className="mb-4 text-xs font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              {date} • {readTime}
            </div>

            {/* Title and Excerpt */}
            <div className="flex-1">
              <motion.h3
                className="mb-6 text-4xl leading-tight font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {title}
              </motion.h3>

              <motion.div
                className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {excerpt && excerpt.length > 0 && (
                  <>
                    <span className="text-3xl font-semibold tracking-wide text-neutral-900 dark:text-neutral-100">
                      {excerpt.charAt(0)}
                    </span>
                    <span className="text-sm">
                      {excerpt.slice(1).split(" ").slice(0, 29).join(" ")}
                      {excerpt.split(" ").length > 20 ? "..." : ""}
                    </span>
                  </>
                )}
              </motion.div>
            </div>

            {/* Author and Continue Reading */}
            <motion.div
              className="mt-10 border-t border-neutral-200 pt-6 dark:border-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                  By {author}
                </div>
                <motion.button
                  className="flex cursor-pointer items-center space-x-2 text-xs font-medium tracking-wider text-neutral-500 uppercase transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Continue Reading</span>
                  <motion.svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Share Icon */}
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <motion.button
              className="cursor-pointer rounded-full bg-white/80 p-2 backdrop-blur-sm transition-transform hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-700"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <IconShare3 className="text-neutral-400" />
            </motion.button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export { Card, BlogCard };`;

const cardDemo = `import { BlogCard } from "@/components/ui/showcase/card";

export function CardDemo() {
  return (
    <BlogCard
      title="On Minimalism"
      excerpt="Minimalism is a tool that can assist you in finding freedom. Freedom from fear. Freedom from worry. Freedom from overwhelm. Freedom from guilt. Freedom from depression. Freedom from the trappings of the consumer culture we've built our lives around."
      author="Sarah Chen"
      date="May 26, 2015"
      readTime="5 min read"
      image="https://images.unsplash.com/photo-1492714673295-07efb43ddaf8?q=80&w=2940&auto=format&fit=crop"
      category="Philosophy"
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
        />
      }
      code={cardDemo}
      installation={{
        packages: ["motion", "clsx", "tailwind-merge", "@tabler/icons-react"],
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
          name: "title",
          type: "string",
          description: "The title of the blog post",
        },
        {
          name: "excerpt",
          type: "string",
          description: "The excerpt or preview text of the blog post",
        },
        {
          name: "author",
          type: "string",
          description: "The author name of the blog post",
        },
        {
          name: "date",
          type: "string",
          description: "The publication date",
        },
        {
          name: "readTime",
          type: "string",
          description: "Estimated reading time",
        },
        {
          name: "image",
          type: "string",
          description: "URL of the blog post image",
        },
        {
          name: "category",
          type: "string",
          description: "The category of the blog post",
        },
      ]}
      nextComponent={{
        name: "Button",
        href: "/components/button",
      }}
    />
  );
}

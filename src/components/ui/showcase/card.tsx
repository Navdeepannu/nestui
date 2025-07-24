"use client";

import React from "react";
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
    <Card className="max-w-xl bg-neutral-50 dark:bg-neutral-800">
      <div className="relative flex h-96">
        {/* Left Image Section */}
        <div className="relative w-1/3 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-l-xl object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex w-2/3 flex-col justify-between p-10">
          {/* Date */}
          <div className="mb-4 text-xs font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            {date}
          </div>

          {/* Remaining Title */}
          <div className="flex-1">
            <h3 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>

            <div className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
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
            </div>
          </div>

          {/* Continue Reading */}
          <div className="mt-10 border-t border-neutral-200 pt-6 dark:border-neutral-700">
            <button className="flex cursor-pointer items-center space-x-2 text-xs font-medium tracking-wider text-neutral-500 uppercase transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
              <span>Continue Reading</span>
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Share Icon */}
        <div className="absolute top-4 right-4">
          <button className="cursor-pointer rounded-full bg-white/80 p-2 backdrop-blur-sm transition-transform hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-700">
            <IconShare3 className="text-neutral-400" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export { Card, BlogCard };

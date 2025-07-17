import React from "react";

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

export function TabButton({ active, children, className = "", ...props }: TabButtonProps) {
  return (
    <button
      type="button"
      className={`font-mono text-xs px-2 py-1 rounded transition-colors border
        ${active
          ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-neutral-600 font-semibold"
          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function FileNamePill({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-block font-mono text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
} 
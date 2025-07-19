import React from "react";

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

export function TabButton({
  active,
  children,
  className = "",
  ...props
}: TabButtonProps) {
  return (
    <button
      type="button"
      className={`rounded border px-2 py-1 font-mono text-xs transition-transform ${
        active
          ? "border-neutral-300 bg-neutral-200 font-semibold text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
          : "border-transparent bg-neutral-100 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
      } ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}

export function FileNamePill({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-block rounded border border-neutral-200 bg-neutral-100 px-2 py-1 font-mono text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

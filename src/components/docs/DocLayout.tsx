"use client";
import React, { useState, useEffect } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

export function DocLayout({
  title,
  description,
  steps,
  children,
}: {
  title: string;
  description?: string;
  steps?: Array<{
    title: string;
    content: React.ReactNode;
    code?: string;
    promptBlock?: React.ReactNode;
    language?: string;
  }>;
  children?: React.ReactNode;
}) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="text-foreground mt-10 ml-0 max-w-4xl px-4 font-sans">
      <h1 className="text-foreground mb-1 text-4xl font-extrabold tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground mb-10 max-w-xl text-base leading-relaxed font-light">
          {description}
        </p>
      )}
      {steps && (
        <div className="relative">
          {/* Single vertical line spanning all steps */}
          <span className="absolute top-3 bottom-7 left-5 z-0 w-px bg-neutral-300 dark:bg-neutral-800" />
          <ol className="relative z-10 mb-10 space-y-10 pl-8">
            {steps.map((step, idx) => (
              <li key={idx} className="relative pl-4">
                <span className="absolute top-3 left-[-17.5px] h-3 w-3 rounded-full bg-neutral-400 dark:bg-neutral-500" />

                <div className="pb-8">
                  <h2 className="mb-2 text-base font-normal tracking-tight md:text-lg">
                    {step.title}
                  </h2>
                  <div className="text-foreground mb-3 pl-1 text-base leading-relaxed font-light break-words">
                    {step.content}
                  </div>
                  {step.code && mounted && (
                    <div className="group relative mt-2 ml-1">
                      <div className="border-border max-w-full min-w-0 overflow-x-auto rounded-lg border shadow-sm shadow-neutral-50">
                        <SyntaxHighlighter
                          language={step.language || "tsx"}
                          style={resolvedTheme === "dark" ? vscDarkPlus : prism}
                          customStyle={{
                            borderRadius: "0.5rem",
                            fontSize: "0.95em",
                            padding: "1rem",
                            background: "muted",
                            color: "foreground",
                            margin: 0,
                          }}
                          className="select-all"
                        >
                          {step.code}
                        </SyntaxHighlighter>
                      </div>

                      <button
                        className="absolute top-2 right-2 cursor-pointer items-center justify-center rounded-md bg-transparent p-1 transition-colors duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        onClick={() => {
                          navigator.clipboard.writeText(step.code!);
                          setCopiedIdx(idx);
                          setTimeout(() => setCopiedIdx(null), 2500);
                        }}
                        aria-label="Copy code"
                      >
                        {copiedIdx === idx ? (
                          <IconCheck size={18} className="text-neutral-400" />
                        ) : (
                          <IconCopy
                            size={18}
                            className="text-muted-foreground"
                          />
                        )}
                      </button>
                    </div>
                  )}
                  {step.promptBlock && (
                    <div className="mt-4 ml-1 max-w-full overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-100 p-4 font-mono text-sm whitespace-pre-line text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-200">
                      {step.promptBlock}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
      {children}
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import {
  IconCheck,
  IconCopy,
  IconCode,
  IconEye,
  IconArrowRight,
  IconArrowLeft,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";

interface ComponentLayoutProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  installation?: {
    packages: string[];
    registryUrl?: string;
    files?: Array<{
      name: string;
      content: string;
      language?: string;
    }>;
  };
  props?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }>;
  prevComponent?: {
    name: string;
    href: string;
  };
  nextComponent?: {
    name: string;
    href: string;
  };
}

export function ComponentLayout({
  title,
  description,
  preview,
  code,
  installation,
  props,
  prevComponent,
  nextComponent,
}: ComponentLayoutProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [isInstallationCodeExpanded, setIsInstallationCodeExpanded] =
    useState(false);
  const [installationMethod, setInstallationMethod] = useState<
    "cli" | "manual"
  >("cli");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set page title automatically based on component title
  usePageTitle(title);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(index);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h1>
        <p className="text-muted-foreground mb-10 max-w-xl text-base leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Preview/Code Section */}
      <div className="mb-12">
        {/* Tab Buttons */}
        <div className="border-accent mb-6 border-b">
          <div className="-mb-px flex items-center gap-0">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "preview"
                  ? "border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              <IconEye size={16} />
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "code"
                  ? "border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              <IconCode size={16} />
              Code
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="border-accent overflow-hidden rounded-lg border">
          {activeTab === "preview" ? (
            <div className="bg-background flex min-h-[300px] items-center justify-center p-8">
              {preview}
            </div>
          ) : (
            <div className="relative h-[300px] overflow-hidden">
              <div className="h-full overflow-auto">
                {mounted && (
                  <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      minHeight: "100%",
                      backgroundColor: "#1c242c",
                    }}
                    showLineNumbers
                  >
                    {code}
                  </SyntaxHighlighter>
                )}
              </div>
              <button
                className="hover:bg-background absolute top-2 right-2 rounded-md p-2 transition-colors"
                onClick={() => copyToClipboard(code, 0)}
                aria-label="Copy code"
              >
                {copiedIdx === 0 ? (
                  <IconCheck size={16} className="text-green-500" />
                ) : (
                  <IconCopy size={16} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Installation Section */}
      {installation && (
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Installation</h2>

          {/* Installation Method Toggle */}
          <div className="border-accent mb-6 border-b">
            <div className="-mb-px flex items-center gap-0">
              <button
                onClick={() => setInstallationMethod("cli")}
                className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  installationMethod === "cli"
                    ? "border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
              >
                CLI
              </button>
              <button
                onClick={() => setInstallationMethod("manual")}
                className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  installationMethod === "manual"
                    ? "border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
              >
                Manual
              </button>
            </div>
          </div>

          {installationMethod === "cli" ? (
            /* CLI Installation */
            <div className="space-y-6">
              {/* Registry URL */}
              {installation.registryUrl ? (
                <div>
                  <h3 className="mb-3 text-lg font-medium">
                    Run the CLI command
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Copy and paste the following command in your terminal:
                  </p>
                  <div className="relative">
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                      {installation.registryUrl}
                    </div>
                    <button
                      className="hover:bg-background absolute top-2 right-2 rounded-md p-2 transition-colors"
                      onClick={() =>
                        copyToClipboard(installation.registryUrl!, 102)
                      }
                    >
                      {copiedIdx === 102 ? (
                        <IconCheck size={16} className="text-green-500" />
                      ) : (
                        <IconCopy size={16} />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-muted-foreground text-sm">
                  CLI installation not available for this component. Please use
                  manual installation.
                </div>
              )}
            </div>
          ) : (
            /* Manual Installation */
            <div className="space-y-6">
              {/* Step 1: Install packages */}
              <div>
                <h3 className="mb-3 text-lg font-medium">
                  1. Install the packages
                </h3>
                <div className="relative">
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    npm install {installation.packages.join(" ")}
                  </div>
                  <button
                    className="hover:bg-background absolute top-2 right-2 rounded-md p-2 transition-colors"
                    onClick={() =>
                      copyToClipboard(
                        `npm install ${installation.packages.join(" ")}`,
                        201,
                      )
                    }
                  >
                    {copiedIdx === 201 ? (
                      <IconCheck size={16} className="text-green-500" />
                    ) : (
                      <IconCopy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Step 2: Add utils */}
              <div>
                <h3 className="mb-3 text-lg font-medium">
                  2. Add the utils file
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Create{" "}
                  <code className="bg-muted rounded px-2 py-1 text-sm">
                    lib/utils.ts
                  </code>{" "}
                  and add the following code:
                </p>
                <div className="relative">
                  <div className="border-accent relative overflow-hidden rounded-lg border">
                    {mounted && (
                      <SyntaxHighlighter
                        language="typescript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          fontSize: "14px",
                          lineHeight: "1.5",
                          backgroundColor: "#1c242c",
                        }}
                        showLineNumbers
                      >
                        {`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
                      </SyntaxHighlighter>
                    )}
                    <button
                      className="hover:bg-background absolute top-2 right-2 rounded-md p-2 transition-colors"
                      onClick={() =>
                        copyToClipboard(
                          `import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`,
                          200,
                        )
                      }
                    >
                      {copiedIdx === 200 ? (
                        <IconCheck size={16} className="text-green-500" />
                      ) : (
                        <IconCopy size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3: Copy files */}
              {installation.files && installation.files.length > 0 && (
                <div>
                  <h3 className="mb-3 text-lg font-medium">
                    3. Copy the source code
                  </h3>
                  {installation.files.map((file, index) => (
                    <div key={index} className="mb-4">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-sm font-medium">{file.name}</span>
                      </div>
                      <div className="border-accent relative overflow-hidden rounded-lg border">
                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            isInstallationCodeExpanded
                              ? "max-h-none"
                              : "max-h-[200px]"
                          } overflow-hidden`}
                        >
                          {mounted && (
                            <SyntaxHighlighter
                              language={file.language || "tsx"}
                              style={vscDarkPlus}
                              customStyle={{
                                margin: 0,
                                borderRadius: 0,
                                fontSize: "14px",
                                lineHeight: "1.5",
                                backgroundColor: "#1c242c",
                              }}
                              showLineNumbers
                            >
                              {file.content}
                            </SyntaxHighlighter>
                          )}
                        </div>

                        {/* Gradient overlay when collapsed */}
                        {!isInstallationCodeExpanded && (
                          <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t to-transparent" />
                        )}

                        {/* Animated Expand/Collapse Card */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={
                              isInstallationCodeExpanded ? "collapse" : "expand"
                            }
                            onClick={() =>
                              setIsInstallationCodeExpanded(
                                !isInstallationCodeExpanded,
                              )
                            }
                            className={`group absolute left-1/2 -translate-x-1/2 cursor-pointer ${
                              isInstallationCodeExpanded ? "bottom-6" : "top-30"
                            }`}
                          >
                            <motion.div className="border-accent rounded-xl border px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300 dark:bg-black">
                              <div className="flex items-center gap-1">
                                <motion.span
                                  className="text-foreground text-sm font-medium dark:text-neutral-300"
                                  layout
                                >
                                  {isInstallationCodeExpanded
                                    ? "Collapse"
                                    : "Expand"}
                                </motion.span>
                                {isInstallationCodeExpanded ? (
                                  <IconChevronUp
                                    size={16}
                                    className="text-muted-foreground"
                                  />
                                ) : (
                                  <IconChevronDown
                                    size={16}
                                    className="text-muted-foreground"
                                  />
                                )}
                              </div>
                            </motion.div>
                          </motion.div>
                        </AnimatePresence>

                        {/* Copy button */}
                        <button
                          className="hover:bg-background absolute top-2 right-2 rounded-md p-2 transition-colors"
                          onClick={() =>
                            copyToClipboard(file.content, index + 202)
                          }
                        >
                          {copiedIdx === index + 202 ? (
                            <IconCheck size={16} className="text-green-200" />
                          ) : (
                            <IconCopy size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Props Section */}
      {props && props.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Props</h2>
          <div className="border-accent overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="p-4 text-left font-medium">Name</th>
                  <th className="p-4 text-left font-medium">Type</th>
                  <th className="p-4 text-left font-medium">Default</th>
                  <th className="p-4 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop, index) => (
                  <tr key={index} className="border-accent border-t">
                    <td className="p-4">
                      <code className="bg-muted rounded px-2 py-1 text-sm">
                        {prop.name}
                        {prop.required && (
                          <span className="ml-1 text-red-500">*</span>
                        )}
                      </code>
                    </td>
                    <td className="p-4">
                      <code className="bg-muted rounded px-2 py-1 text-sm text-blue-200">
                        {prop.type}
                      </code>
                    </td>
                    <td className="p-4">
                      {prop.default ? (
                        <code className="bg-muted rounded px-2 py-1 text-sm">
                          {prop.default}
                        </code>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="text-muted-foreground p-4 text-sm">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Navigation */}
      {(prevComponent || nextComponent) && (
        <div className="flex items-center justify-between">
          {prevComponent ? (
            <Link href={prevComponent.href}>
              <Button variant="outline" className="flex items-center gap-2">
                <IconArrowLeft size={16} />
                Previous: {prevComponent.name}
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextComponent && (
            <Link href={nextComponent.href}>
              <Button variant="outline" className="flex items-center gap-2">
                Next: {nextComponent.name}
                <IconArrowRight size={16} />
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

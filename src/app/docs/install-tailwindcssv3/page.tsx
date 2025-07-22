"use client";
import React, { useState } from "react";
import { DocLayout } from "@/components/docsLayout/DocLayout";
import { TabButton, FileNamePill } from "@/components/ui/TabButton";

const installCommands = {
  npm: "npm install -D tailwindcss@3 postcss autoprefixer && npx tailwindcss init -p",
  pnpm: "pnpm add -D tailwindcss@3 postcss autoprefixer && npx tailwindcss init -p",
  yarn: "yarn add -D tailwindcss@3 postcss autoprefixer && npx tailwindcss init -p",
  bun: "bun add -d tailwindcss@3 postcss autoprefixer && npx tailwindcss init -p",
};

const createProjectCommands = {
  npm: "npx create-next-app@latest my-app --typescript --eslint && cd my-app",
  pnpm: "pnpm dlx create-next-app@latest my-app --typescript --eslint && cd my-app",
  yarn: "yarn create next-app my-app --typescript --eslint && cd my-app",
  bun: "bunx create-next-app@latest my-app --typescript --eslint && cd my-app",
};

export default function Page() {
  const [selectedTab, setSelectedTab] = useState<
    "npm" | "pnpm" | "yarn" | "bun"
  >("npm");

  return (
    <DocLayout
      title="Install Tailwind CSS v3"
      description="Install Tailwind CSS v3 with React or Next.js. These steps work for both React and Next.js projects."
      steps={[
        {
          title: "Create a new project",
          content: (
            <div className="">
              <div className="mb-2 flex gap-2">
                {(["npm", "pnpm", "yarn", "bun"] as const).map((tab) => (
                  <TabButton
                    key={tab}
                    active={selectedTab === tab}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </TabButton>
                ))}
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                For React, you can also use{" "}
                <FileNamePill>npx create-react-app my-app</FileNamePill> or your
                preferred setup.
              </p>
            </div>
          ),
          code: createProjectCommands[selectedTab],
        },
        {
          title: "Install Tailwind CSS v3",
          content: (
            <div className="">
              <div className="mb-2 flex gap-2">
                {(["npm", "pnpm", "yarn", "bun"] as const).map((tab) => (
                  <TabButton
                    key={tab}
                    active={selectedTab === tab}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </TabButton>
                ))}
              </div>
            </div>
          ),
          code: installCommands[selectedTab],
        },
        {
          title: "Configure your template paths",
          content: (
            <div className="mb-2">
              <FileNamePill className="mb-2">tailwind.config.js</FileNamePill>
            </div>
          ),
          code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Or for Next.js:
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
          language: "javascript",
        },
      ]}
    />
  );
}

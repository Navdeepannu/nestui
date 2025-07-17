"use client";
import React, { useState } from "react";
import { DocLayout } from "@/components/docs/DocLayout";
import { TabButton, FileNamePill } from "@/components/ui/TabButton";

const installCommands = {
  npm: "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
  pnpm: "pnpm add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
  yarn: "yarn add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
  bun: "bun add -d tailwindcss postcss autoprefixer && npx tailwindcss init -p",
};

const createProjectCommands = {
    npm: "npx create-next-app@latest my-app --typescript --eslint && cd my-app",
    pnpm: "pnpm dlx create-next-app@latest my-app --typescript --eslint && cd my-app",
    yarn: "yarn create next-app my-app --typescript --eslint && cd my-app",
    bun : "bunx create-next-app@latest my-app --typescript --eslint && cd my-app"
}

export default function Page() {
  const [selectedTab, setSelectedTab] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm");

  return (
    <DocLayout
      title="Install Tailwind CSS"
      description="Install Tailwind CSS v4 with Next.js"
      steps={[
        {
          title: "Create a new project",
          content: (
            <div className="">
              <div className="flex gap-2 mb-2">
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
          code: createProjectCommands[selectedTab],
        },
        {
          title: "Install Tailwind CSS",
          content: (
              <div className="flex gap-2 mb-2">
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
          ),
          code: installCommands[selectedTab],
        },
        {
          title: "Configure your template paths",
          content: (
            <div className="mb-2">
              <FileNamePill className="mb-2">tailwind.config.ts</FileNamePill>
            </div>
          ),
          code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using 'src' directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
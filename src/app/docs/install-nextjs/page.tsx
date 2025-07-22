"use client";
import React, { useState } from "react";
import { DocLayout } from "@/components/docsLayout/DocLayout";
import { TabButton } from "@/components/ui/TabButton";

const installCommands = {
  npm: "npx create-next-app@latest",
  pnpm: "pnpm create next-app",
  yarn: "yarn create next-app",
  bun: "bun create next-app",
};

export default function Page() {
  const [selectedTab, setSelectedTab] = useState<
    "npm" | "pnpm" | "yarn" | "bun"
  >("npm");

  return (
    <DocLayout
      title="Install Next.js"
      description="Install Next.js with Create Next App."
      steps={[
        {
          title: "Create a new project",
          content: (
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
          ),
          code: installCommands[selectedTab],
        },
        {
          title: "As you install, the following prompts will appear:",
          content: "",
          promptBlock: (
            <>
              {`What is your project named? my-app
                Would you like to use TypeScript? No / Yes
                Would you like to use ESLint? No / Yes
                Would you like to use Tailwind CSS? No / Yes
                Would you like to use \`src/\` directory? No / Yes
                Would you like to use App Router? (recommended) No / Yes
                Would you like to customize the default import alias (@/*)? No / Yes
                What import alias would you like configured? @/*`}
            </>
          ),
        },
        {
          title: "Start the development server",
          content:
            "Once your project is created, navigate to the project directory and start the development server.",
          code: `cd my-app
npm run dev`,
          language: "bash",
        },
      ]}
    />
  );
}

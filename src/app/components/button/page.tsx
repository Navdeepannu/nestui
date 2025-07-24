"use client";
import React from "react";
import { ComponentLayout } from "@/components/docsLayout/ComponentLayout";

export default function Page() {
  return (
    <ComponentLayout
      title="Button"
      description="Animated loading components using Framer Motion. Perfect for indicating loading states in your application."
      preview="asdf"
      code="adf"
      installation={{
        packages: ["motion", "clsx", "tailwind-merge"],
        files: [
          {
            name: "components/ui/loading.tsx",
            content: "// Button component code here",
            language: "tsx",
          },
        ],
      }}
      nextComponent={{
        name: "Button",
        href: "/components/button",
      }}
    />
  );
}

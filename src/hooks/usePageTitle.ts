"use client";
import { useEffect, useState } from "react";

export function usePageTitle(title: string) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Set the title only after component is mounted to avoid hydration issues
      document.title = title.includes("Nest UI") ? title : `${title} - Nest UI`;
    }
  }, [title, mounted]);
}

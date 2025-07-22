"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RedirectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Handle URL redirects
    if (pathname === "/components") {
      router.replace("/components/loading");
      return;
    }

    if (pathname === "/docs") {
      router.replace("/docs/introduction");
      return;
    }
  }, [router, pathname]);

  // Don't render anything during redirect
  if (pathname === "/components" || pathname === "/docs") {
    return null;
  }

  return <>{children}</>;
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useEffect } from "react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpenAction,
}: {
  sidebarOpen: boolean;
  setSidebarOpenAction: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpenAction(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpenAction]);
  const gettingStartedLinks = [
    { href: "/docs/introduction", label: "Introduction" },
    { href: "/docs/install-nextjs", label: "Install Next.js" },
    { href: "/docs/install-tailwindcssv4", label: "Install Tailwind CSS v4" },
    { href: "/docs/install-tailwindcssv3", label: "Install Tailwind CSS v3" },
  ];
  const componentLinks = [
    { href: "/components/button", label: "Button" },
    { href: "/components/card", label: "Card" },
  ];

  const renderLinks = (links: { href: string; label: string }[]) =>
    links.map((link) => {
      const isActive = pathname === link.href;
      return (
        <li key={link.href} className="relative">
          <Link
            href={link.href}
            className={`group relative flex w-full items-center rounded-lg border px-2 py-3 text-sm transition-all duration-300 ${
              isActive
                ? "border-zinc-300 bg-zinc-100 text-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-neutral-50"
                : "text-muted-foreground border-transparent hover:bg-zinc-100 hover:text-neutral-950 dark:hover:bg-zinc-900 dark:hover:text-neutral-50"
            }`}
            onClick={() => setSidebarOpenAction(false)}
          >
            {/* Left accent bar (active only) */}
            {isActive && (
              <span className="relative h-[10px] w-[4px] rounded bg-[rgba(0,163,255,0.8)] opacity-100 transition-all duration-300 dark:bg-[rgba(0,163,255,0.3)]" />
            )}
            <span className="relative z-10 flex-1 pl-3">{link.label}</span>
          </Link>
        </li>
      );
    });

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar-desktop border-sidebar-accent w-64 border-r px-8 py-10">
        <nav className="flex h-full flex-col items-start justify-start">
          <ul className="w-full space-y-1">
            <li>
              <p className="mb-4 font-light tracking-wide text-neutral-500">
                Getting Started
              </p>
            </li>
            {renderLinks(gettingStartedLinks)}
            <li className="mt-8">
              <p className="mb-4 font-light tracking-wide text-neutral-500">
                Components
              </p>
            </li>
            {renderLinks(componentLinks)}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            className="sidebar-mobile-overlay fixed inset-0 z-50 bg-black/40"
          >
            <div
              ref={sidebarRef}
              className="dark:bg-background absolute top-0 left-0 h-full w-80 border-r border-zinc-200 bg-white shadow-xl dark:border-zinc-700"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-700">
                <Link
                  href="/"
                  className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
                >
                  NEST UI
                </Link>
                <button
                  onClick={() => setSidebarOpenAction(false)}
                  className="cursor-pointer rounded-lg border border-neutral-700 p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <IconX size={20} className="text-neutral-300" />
                </button>
              </div>

              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <p className="mb-4 font-light tracking-wide text-neutral-500">
                      Getting Started
                    </p>
                  </li>
                  {renderLinks(gettingStartedLinks)}
                  <li className="mt-8">
                    <p className="mb-4 font-light tracking-wide text-neutral-500">
                      Components
                    </p>
                  </li>
                  {renderLinks(componentLinks)}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

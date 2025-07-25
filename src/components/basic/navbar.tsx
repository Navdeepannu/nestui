"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  IconSunLow,
  IconMoonStars,
  IconBrandGithub,
  IconMenu2,
  IconMoon,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { SearchDialog } from "./search-dialog";

export const Navbar = ({
  setSidebarOpenAction,
}: {
  setSidebarOpenAction: (open: boolean) => void;
}) => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Docs", href: "/docs/introduction" },
    { title: "Components", href: "/components" },
    { title: <IconBrandGithub />, href: "https://github.com/navdeepannu" },
  ];

  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (pathname === "/") {
      setTheme("dark");
    }
  }, [pathname, setTheme]);

  const isNavActive = (itemHref: string) => {
    if (itemHref === "/docs/introduction") return pathname.startsWith("/docs");
    if (itemHref === "/components") return pathname.startsWith("/components");
    return pathname === itemHref;
  };

  return (
    <div className="border-border fixed top-0 right-0 left-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <nav className="mx-auto flex h-14 items-center justify-between">
        {/* Logo */}
        <div className="flex items-stretch pl-4">
          <Link
            href="/"
            className="text-foreground text-xl font-light tracking-tight"
          >
            NEST UI
          </Link>
        </div>

        {pathname === "/" && (
          <div className="pr-4 max-[999px]:block min-[1000px]:hidden">
            <Link
              href="https://github.com/navdeepannu"
              target="blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <IconBrandGithub size={26} />
            </Link>
          </div>
        )}

        {/* Right section (mobile only icons on non-root path) */}
        {pathname !== "/" && (
          <div className="flex items-center gap-4 pr-4 max-[999px]:flex min-[1000px]:hidden">
            <Link
              href="https://github.com/navdeepannu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground rounded-lg"
            >
              <IconBrandGithub size={24} />
            </Link>

            {mounted && resolvedTheme === "dark" ? (
              <IconSunLow
                className="text-foreground cursor-pointer"
                size={24}
                onClick={() => setTheme("light")}
              />
            ) : (
              <IconMoonStars
                className="text-foreground cursor-pointer hover:rotate-45"
                size={24}
                onClick={() => setTheme("dark")}
              />
            )}

            {/* Mobile Sidebar Menu Button */}
            <button
              aria-label="Menu"
              className="text-foreground cursor-pointer transition-colors"
              onClick={() => setSidebarOpenAction(true)}
            >
              <IconMenu2 size={26} />
            </button>
          </div>
        )}

        {/* Desktop Navigation */}
        <ul className="text-muted-foreground text-md divide-border hidden items-stretch divide-x min-[1000px]:flex dark:divide-zinc-800">
          {/* Search dialog  */}
          {pathname !== "/" && (
            <li className="flex items-center px-5">
              <SearchDialog />
            </li>
          )}

          {navItems.map((item, idx) => (
            <li key={idx} className="group relative flex items-center">
              <Link
                href={item.href}
                className={`group-hover:text-foreground flex h-full items-center px-5 py-4 transition-colors ${
                  isNavActive(item.href) ? "text-foreground" : ""
                }`}
              >
                {item.title}
              </Link>
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 bg-neutral-400 opacity-0 transition-all duration-400 group-hover:w-full group-hover:opacity-100 ${
                  isNavActive(item.href) ? "w-full opacity-100" : ""
                }`}
              ></div>
            </li>
          ))}

          {/* Theme Toggle */}
          {pathname !== "/" && (
            <li className="divide-border flex items-center gap-4 divide-x px-5 py-2 dark:divide-zinc-800">
              {mounted && resolvedTheme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 360, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 380 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <IconSunLow
                    className="hover:text-foreground cursor-pointer"
                    size={26}
                    onClick={() => setTheme("light")}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: -45 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <IconMoon
                    className="hover:text-foreground cursor-pointer"
                    size={26}
                    onClick={() => setTheme("dark")}
                  />
                </motion.div>
              )}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

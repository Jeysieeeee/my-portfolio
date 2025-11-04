"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const links = [
    { href: "/about", label: "About" },
    { href: "/works", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

   useEffect(() => {
      setMounted(true);
      const savedTheme = localStorage.getItem("theme");
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
  
      const currentTheme =
        savedTheme === "dark" || (!savedTheme && prefersDark)
          ? "dark"
          : "light";
  
      setTheme(currentTheme);
      document.documentElement.classList.toggle("dark", currentTheme === "dark");
    }, []);
  
      useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    // Render nothing (or placeholder) until mounted, avoids mismatch
    return (
      <button
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10"
      />
    );
  }
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar panel */}
          <motion.aside
            className="fixed right-0 top-0 h-full w-64 bg-background-light dark:bg-background-dark z-50 shadow-xl flex flex-col p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold">Menu</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    pathname === link.href
                      ? "text-[#5b8291] font-medium"
                      : "text-foreground hover:text-primary dark:hover:text-accent-dark",
                    "text-base font-medium transition-colors"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="w-full bg-accent-1 dark:bg-accent-2 dark:text-[#2E424D] font-semibold hover:opacity-90 transition text-text-dark ">
                Toggle Theme
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

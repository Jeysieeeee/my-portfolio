"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/works", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

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
              <Button className="w-full bg-[#98DAD9] text-[#2E424D] font-semibold hover:opacity-90 transition">
                Toggle Theme
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

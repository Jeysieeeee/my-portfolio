"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Header() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-6 text-accent-light dark:text-accent-dark">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold">JCPG</h2>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className={cn(
                pathname === "/about" && "text-[#5b8291] font-medium",
                "text-sm font-medium hover:text-primary dark:hover:text-accent-dark transition-colors"
              )}
              href="/about"
            >
              About
            </Link>
            <Link
              className={cn(
                pathname === "/works" && "text-[#5b8291] font-medium",
                "text-sm font-medium hover:text-primary dark:hover:text-accent-dark transition-colors"
              )}
              href="/works"
            >
              Projects
            </Link>
            <Link
              className={cn(
                pathname === "/contact" && "text-[#5b8291] font-medium",
                "text-sm font-medium hover:text-primary dark:hover:text-accent-dark transition-colors"
              )}
              href="/contact"
            >
              Contact
            </Link>
          </nav>

          {/* Theme Button */}
          {/* <Button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-text-light dark:text-text-dark hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
            <Sun className="size-5" />
          </Button> */}
          <ThemeToggle/>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}

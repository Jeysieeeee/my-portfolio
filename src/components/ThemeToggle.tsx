"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";


export function ThemeToggle() {
  // Step 1: Don't decide theme during SSR
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Step 2: Once mounted (client-side), load the real theme
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

  // Step 3: Update when user toggles
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
    <Button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center transition-colors"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}

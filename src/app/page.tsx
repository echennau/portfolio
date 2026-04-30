"use client";

import Hero from "../components/hero/Hero";
import { useTheme } from "../components/ThemeProvider";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <button
        className="fixed"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle theme ({theme})
      </button>
      <Hero />
    </main>
  );
}

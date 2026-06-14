"use client";

import Hero from "../components/hero/Hero";
import { Section } from "../components/layout/Section";
import { useTheme } from "../components/ThemeProvider";
import { ReactLenis } from "lenis/react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <ReactLenis root>
      <main>
        <button
          className="fixed"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle theme ({theme})
        </button>
        <Section className="h-screen">
          <Hero />
        </Section>
        <Section className="h-128 bg-red-300">
          <h1 className="text-8xl text-blue-800">content</h1>
        </Section>
        <Section className="h-128 bg-blue-300">
          <h1 className="text-8xl text-blue-800">content</h1>
        </Section>
        <Section className="h-128 bg-green-300">
          <h1 className="text-8xl text-blue-800">content</h1>
        </Section>
        <Section className="h-128 bg-purple-300">
          <h1 className="text-8xl text-blue-800">content</h1>
        </Section>
      </main>
    </ReactLenis>
  );
}

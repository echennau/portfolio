"use client";

import { useTheme } from "@teispace/next-themes";
import { ReactLenis } from "lenis/react";
import Landing from "../sections/landing/Landing";
import About from "../sections/about/about";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import NavBar from "../components/custom/NavBar";
import { NavBarHoverProvider } from "../context/NavBarHoverContext";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <NavBarHoverProvider>
    <ReactLenis root>
      <NavBar />
      <main className="overflow-x-hidden">
        <button
          className="fixed z-50"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle theme ({theme})
        </button>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </main>
    </ReactLenis>
    </NavBarHoverProvider>
  );
}

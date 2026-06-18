"use client";

import { useTheme } from "@teispace/next-themes";
import { ReactLenis } from "lenis/react";
import Landing from "../sections/landing/Landing";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import NavBar from "../components/custom/NavBar";
import { NavBarHoverProvider } from "../context/NavBarHoverContext";

export default function Home() {
  return (
    <NavBarHoverProvider>
      <ReactLenis root>
        <NavBar />
        <main>
          <Landing />
          <About />
          <Projects />
          <Contact />
        </main>
      </ReactLenis>
    </NavBarHoverProvider>
  );
}

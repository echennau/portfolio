"use client"

import { useTheme } from "../components/ThemeProvider"
import { ReactLenis } from "lenis/react"
import Landing from "../sections/landing/Landing"
import Bio from "../sections/bio/Bio"
import Projects from "../sections/projects/Projects"
import Contact from "../sections/contact/Contact"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <ReactLenis root>
      <main className="overflow-x-hidden">
        <button
          className="fixed z-50"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle theme ({theme})
        </button>
        <Landing />
        <Bio />
        <Projects />
        <Contact />
      </main>
    </ReactLenis>
  )
}

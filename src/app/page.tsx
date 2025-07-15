"use client";

import Landing from "../components/landing/Landing";
import Bio from "../components/bio/Bio";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import { useThemeClass } from "../contexts/ThemeContext";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <div
      className={`${useThemeClass()} flex flex-col py-2 md:py-12 xl:py-24 gap-y-12`}
    >
      <Landing />
      <Bio />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <Contact />
    </div>
  );
}

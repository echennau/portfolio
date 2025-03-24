import Landing from "./components/landing/Landing";
import Bio from "./components/bio/Bio";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="h-[5000px] flex flex-col md:py-12 xl:py-24 gap-y-12">
      <Landing />
      <Bio />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}

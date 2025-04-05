import React from "react";
import projects from "../../../data/projects.json";
import ProjectCard from "./ProjectCard";
import FadeInDiv from "../utils/FadeInDiv";

const Projects = () => {
  const projectCards = projects.projects.map((p, i) => (
    <ProjectCard key={i} projectData={p} />
  ));

  return (
    <div
      id="projects"
      className="px-2 sm:px-16 md:px-24 lg:px-32 xl:px-64 flex flex-wrap gap-6 flex-col items-center w-full scroll-mt-24"
    >
      <FadeInDiv direction="up">
        <span className="text-6xl font-bold text-center">Projects</span>
      </FadeInDiv>
      <div className="flex gap-4 flex-wrap justify-center md:justify-around w-full">
        {projectCards}
      </div>
    </div>
    // <div className="px-2 md:px-64 flex flex-wrap gap-12 justify-center items-center">
    //   {projectCards}
    // </div>
  );
};

export default Projects;

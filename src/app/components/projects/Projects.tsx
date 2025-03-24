import React from "react";
import projects from "../../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectCards = projects.projects.map((p) => (
    <ProjectCard key={p.title} projectData={p} />
  ));

  return (
    <div className="px-2 md:px-64 flex flex-wrap gap-12 justify-center items-center">
      {projectCards}
    </div>
  );
};

export default Projects;

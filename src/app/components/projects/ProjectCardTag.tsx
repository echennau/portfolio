"use client";

import { Theme, useTheme } from "@/app/contexts/ThemeContext";
import React from "react";

type ProjectCardTag = {
  name: string;
};

const ProjectCardTag = ({ name }: ProjectCardTag) => {
  // TODO: make these interactive and search projects by tag
  const themeClass =
    useTheme().theme === Theme.LIGHT ? "bg-secondary/60" : "bg-primary/60";

  return (
    <div
      className={`${themeClass} bg-accent/30 transition text-xs p-1.5 rounded-2xl`}
      //   style={{ background: color }}
    >
      {name}
    </div>
  );
};

export default ProjectCardTag;

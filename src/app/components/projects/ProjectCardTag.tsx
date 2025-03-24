import React from "react";

type ProjectCardTag = {
  name: string;
  color: string;
};

const ProjectCardTag = ({ name, color }: ProjectCardTag) => {
  return (
    <div className="rounded-full text-white p-2" style={{ background: color }}>
      {name}
    </div>
  );
};

export default ProjectCardTag;

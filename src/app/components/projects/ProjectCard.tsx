import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";
import ProjectCardTag from "./ProjectCardTag";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  projectData: {
    link: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
  };
};

const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <Link
      href={projectData.link}
      className="hover:cursor-pointer hover:translate-y-2 transform transition duration-500 card-wrapper w-96 lg:w-[550px] h-[400px]"
    >
      <Card className="card-content border-none p-0 overflow-hidden outline-none rounded-2xl">
        <div className="">
          <CardHeader className="p-0 h-64 overflow-hidden justify-center">
            <Image
              width={600}
              height={350}
              alt={projectData.title}
              src={projectData.image}
            />
          </CardHeader>
          <CardDescription className="flex flex-col p-4">
            <span className="hover:cursor-pointer text-2xl font-bold text-black">
              {projectData.title}
            </span>
            <span className="text-base">{projectData.description}</span>
            <div className="w-full flex gap-2 mt-2">
              {projectData.tags.map((tag) => (
                <ProjectCardTag key={tag} name={tag} color={"#0f0"} />
              ))}
            </div>
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;

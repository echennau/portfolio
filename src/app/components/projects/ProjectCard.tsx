"use client";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";
import ProjectCardTag from "./ProjectCardTag";
import Image from "next/image";
import Link from "next/link";
import { Theme, useTheme } from "@/app/contexts/ThemeContext";
import FadeInDiv from "../utils/FadeInDiv";

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
  const cardSizing =
    "w-[310px] h-[300px] md:w-[420px] md:h-[360px] lg:w-[360px] lg:h-[320px] xl:w-[440px] xl:h-[400px] lg:my-2 xl:my-4";

  const cardClass =
    useTheme().theme === Theme.DARK ? "text-secondary bg-black" : "bg-white";

  return (
    <FadeInDiv
      className={
        cardSizing +
        " group hover:cursor-pointer hover:translate-y-0.5 transform transition duration-500"
      }
      direction="up"
    >
      <Link
        href={projectData.link}
        className={`rounded-2xl outline-offset-4 ${
          useTheme().theme === Theme.DARK
            ? "focus:outline-black"
            : "focus:outline-white"
        }`}
      >
        <Card
          className={`${cardClass} border-none p-0 overflow-hidden outline-none rounded-2xl h-full flex flex-col shadow-xl`}
        >
          <CardHeader
            className={`p-0 overflow-hidden justify-center flex-1 ${cardClass}`}
          >
            <Image
              width={600}
              height={350}
              alt={projectData.title}
              src={projectData.image}
              className=""
            />
          </CardHeader>
          <CardDescription className={`${cardClass} flex flex-col p-4`}>
            <span className="text-2xl w-fit font-bold leading-none border-b-[1px] border-b-transparent group-hover:border-b-accent transition-all duration-300">
              {projectData.title}
            </span>
            <span className="text-base">{projectData.description}</span>
            <div className="w-full flex gap-2 mt-2">
              {projectData.tags.map((tag) => (
                <ProjectCardTag key={tag} name={tag} />
              ))}
            </div>
          </CardDescription>
        </Card>
      </Link>
    </FadeInDiv>
  );
};

export default ProjectCard;

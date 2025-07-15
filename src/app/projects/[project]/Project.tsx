"use client";

import React from "react";
import Image from "next/image";
import { Theme, useTheme, useThemeClass } from "@/contexts/ThemeContext";
import Markdown from "react-markdown";

import projects from "../../../data/projects.json";

type ProjectProps = {
  mdFileText: string;
  project: (typeof projects.projects)[number];
};

function Project({ mdFileText, project }: ProjectProps) {
  const themeClass = useThemeClass();

  const markdownThemeClass =
    useTheme().theme === Theme.LIGHT
      ? "bg-white text-primary"
      : "bg-black text-secondary";

  const imageSrc = `/data/projects/${project.id}/image.png`;

  return (
    <div
      className={`${themeClass} px-2 sm:px-16 md:px-24 lg:px-32 xl:px-64 flex flex-col items-center flex-1 gap-y-8 py-8`}
    >
      <div
        className={`shadow-2xl rounded-2xl w-fit h-fit min-w-96 min-h-96 p-4 md:p-8 transition flex justify-center items-center bg-white z-20`}
      >
        <Image
          src={imageSrc}
          alt={project.title}
          width={500}
          height={500}
          priority
          className="rounded-xl size-auto"
        />
      </div>
      <span className="text-6xl font-bold my-4">{project.title}</span>
      <div className={`${markdownThemeClass} w-full rounded-xl p-6 shadow-2xl`}>
        <Markdown
          components={{
            h1: ({ children }) => (
              <div>
                <h1 className="text-3xl font-bold mb-2">{children}</h1>
                <hr className="w-full border-gray-300 mb-4" />
              </div>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold mb-2">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold mb-2">{children}</h3>
            ),
            p: ({ children }) => <p className="text-lg mb-2">{children}</p>,
            ul: ({ children }) => (
              <ul className="list-disc ml-4 mb-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-4 mb-2">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-2">{children}</li>,
            a: ({ href, children }) => (
              <a href={href} className="text-blue-600 hover:text-blue-800">
                {children}
              </a>
            ),
            // img: (x) => {
            //   console.log(x);
            //   const { src, alt } = x;
            //   return (
            //     <img
            //       src={
            //         "https://github.com/3than0ls/terrain-gen/blob/master/assets/sample.png"
            //       }
            //       alt={alt!}
            //       width={500}
            //       height={500}
            //     />
            //   );
            //   return;
            // },
            code: ({ children }) => (
              <code className={`${markdownThemeClass} rounded"`}>
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className={`${markdownThemeClass} rounded`}>{children}</pre>
            ),
          }}
        >
          {mdFileText}
        </Markdown>
      </div>
    </div>
  );
}

export default Project;

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Theme, useTheme, useThemeClass } from "@/app/contexts/ThemeContext";
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

  return (
    <div
      className={`${themeClass} px-2 sm:px-16 md:px-24 lg:px-32 xl:px-64 flex flex-col items-center flex-1 gap-y-8 py-8`}
    >
      <div
        className={`shadow-2xl rounded-2xl w-fit h-fit p-4 md:p-8 flex justify-center items-center bg-white z-20`}
      >
        <Image
          src={project.image}
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
            img: ({ src, alt }) => (
              <Image src={src!} alt={alt!} className="mb-2" />
            ),
            code: ({ children }) => (
              <code className="bg-gray-100 p-2 rounded">{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-100 p-4 rounded">{children}</pre>
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

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FiFile, FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Bio = () => {
  return (
    <div className="px-4 overflow-scroll py-1 no-scrollbar z-20">
      <Card className="w-fit hover:scale-[103%] transition duration-500 mx-auto shadow-glow rounded-xl">
        <CardHeader className="pb-2">
          <CardTitle className="flex justify-between">
            <span>Ethan Chennault</span>
            <span className="text-gray-400">ethanolchennault@gmail.com</span>
          </CardTitle>
          <CardDescription>
            Student at University of California, Irvine
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-x-12 pt-0 text-base md:text-lg">
          <div className="w-[400px] md:w-[500px] leading-tight">
            Hi, I&apos;m Ethan! I have a passion for web applications, and I
            have experience in fullstack development, SQL/NoSQL databases, and
            cloud infrastructure. I&apos;m looking to expand and apply my
            skillset in the professional environment, and am excited to meet new
            people.
          </div>
          <div className="flex flex-col gap-y-1 text-gray-400 underline text-left">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/echennau/"
              className="hover:cursor-pointer flex items-center hover:text-gray-400/50 transition duration-300"
            >
              <FiLinkedin className="mr-2 text-gray-500 size-5" />
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/echennau"
              className="hover:cursor-pointer flex items-center hover:text-gray-400/50 transition duration-300"
            >
              <FiGithub className="mr-2 text-gray-500 size-5" />
              GitHub
            </a>
            <Link
              href="/data/Ethan Chennault Resume.pdf"
              target="_blank"
              className="hover:cursor-pointer flex items-center hover:text-gray-400/50 transition duration-300"
            >
              <FiFile className="mr-2 text-gray-500 size-5" />
              Resume
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bio;

"use client";

import React from "react";
import { Theme, useTheme, useThemeClass } from "../contexts/ThemeContext";
import { FiLinkedin, FiGithub, FiGlobe } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  const footerClass =
    useTheme().theme === Theme.DARK
      ? "bg-black text-secondary"
      : "bg-white text-primary";

  return (
    <div
      className={`${footerClass} shadow-2xl w-full py-8  px-2 sm:px-16 lg:px-32 xl:px-64 flex justify-between`}
    >
      <div>ethanolchennault@gmail.com</div>
      <div className="flex justify-end gap-x-2 md:gap-x-8 underline text-gray-400">
        <a
          href="https://www.linkedin.com/in/echennau/"
          className="hover:cursor-pointer flex items-center text-gray-500 hover:text-gray-500/50 transition duration-300"
        >
          <FiLinkedin className="size-5" />
          <span className="hidden md:block ml-2">LinkedIn</span>
        </a>
        <a
          href="https://github.com/3than0ls"
          className="hover:cursor-pointer flex items-center text-gray-500 hover:text-gray-500/50 transition duration-300"
        >
          <FiGithub className="size-5" />
          <span className="hidden md:block ml-2">GitHub</span>
        </a>
        <Link
          href="/"
          className="hover:cursor-pointer flex items-center text-gray-500 hover:text-gray-500/50 transition duration-300"
        >
          <FiGlobe className="size-5" />
          <span className="hidden md:block ml-2">Website</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

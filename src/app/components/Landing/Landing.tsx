"use client";

import Image from "next/image";
import React from "react";
import Blob from "./Blob";
import { Theme, useTheme } from "@/app/contexts/ThemeContext";

const Landing = () => {
  const landingTextClass =
    useTheme().theme == Theme.LIGHT
      ? "bg-black"
      : "from-white via-accent brightness-100 to-secondary ";

  return (
    <div className="px-2 md:px-64 flex flex-col xl:flex-row xl:justify-between justify-center xl:items-start items-center gap-y-16">
      <div
        className={`font-bold flex flex-col text-center xl:text-left bg-gradient-to-r ${landingTextClass} bg-clip-text text-transparent`}
      >
        <span className="text-8xl md:text-9xl">Hello, </span>
        <span className="text-6xl md:text-8xl text-accent/25">
          I&apos;m Ethan Chennault.
        </span>
        <span className="text-4xl md:text-4xl mt-4 text-accent/25">
          Let&apos;s connect.
        </span>
      </div>

      <div className="flex relative flex-grow min-w-32 max-w-80 justify-center items-center overflow-visible">
        <div className="absolute p-8 flex justify-center items-center overflow-visible">
          <Blob />
        </div>
        <div className="shadow-2xl rounded-2xl p-4 md:p-8 flex justify-center items-center bg-secondary w-full">
          <Image
            className="rounded-2xl min-w-64 shadow-glow "
            width={800}
            height={800}
            src="/landing.jpg"
            alt="Ethan"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

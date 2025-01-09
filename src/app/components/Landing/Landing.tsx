import Image from "next/image";
import React from "react";
import Blob from "./Blob";

const Landing = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between justify-center xl:items-start items-center gap-y-16">
      <div className="font-bold flex flex-col text-center xl:text-left bg-gradient-to-r from-white via-accent brightness-110 to-secondary bg-clip-text text-transparent">
        <span className="text-8xl md:text-9xl">Hello, </span>
        <span className="text-6xl md:text-8xl text-accent/25">
          I&apos;m Ethan Chennault.
        </span>
        <span className="text-4xl md:text-4xl mt-4 text-accent/25">
          Let&apos;s connect.
        </span>
      </div>

      <div className="flex relative flex-grow min-w-32 max-w-80 justify-center items-center">
        <div className="rounded-2xl p-8 flex justify-center items-center bg-secondary overflow-hidden">
          <Blob />
          <Image
            className="rounded-2xl min-w-64 "
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

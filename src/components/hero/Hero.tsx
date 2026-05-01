"use client";
import React from "react";
import Flicker from "./variants/flicker/Flicker";
import { useStatic } from "./variants/static/useStatic";
import Camo from "./variants/static/Static";

interface HeroProps {
  variant?: "default";
}

const Hero = ({ variant = "default" }: HeroProps) => {
  let hero;
  if (variant === "default") {
    hero = <Flicker />;
  }
  const bg = useStatic();

  return (
    <div className="w-full h-screen overflow-hidden bg-default flex flex-col justify-center items-center">
      {/* <div className="w-full h-full relative">
        <div className="w-full h-full bg-primary absolute" />
        <div
          className="w-full h-full absolute"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "cover",
            pointerEvents: "none",
          }}
        />
      </div> */}
      {/* <Camo /> */}
      {hero}
    </div>
  );
};

export default Hero;

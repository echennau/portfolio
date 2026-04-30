import React from "react";
import Flicker from "./variants/Flicker";

interface HeroProps {
  variant?: "default";
}

const Hero = ({ variant = "default" }: HeroProps) => {
  let hero;
  if (variant === "default") {
    hero = <Flicker />;
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-default flex flex-col justify-center items-center">
      {hero}
    </div>
  );
};

export default Hero;

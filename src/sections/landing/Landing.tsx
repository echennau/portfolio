"use client";
import React from "react";
import Flicker from "./variants/flicker/Flicker";
import { useStatic } from "./variants/static/useStatic";
import Laser from "./variants/laser/Laser";
import { Section } from "@/components/layout/Section";

interface LandingProps {
  variant?: "default";
}

const Landing = ({ variant = "default" }: LandingProps) => {
  let landing;
  if (variant === "default") {
    landing = <Flicker />;
  }
  const bg = useStatic();

  return (
    <Section className="w-full h-screen overflow-hidden p-0 bg-default flex flex-col justify-center items-center">
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
      <div className="w-full h-full absolute">
        <Laser />
      </div>
      <Flicker />
    </Section>
  );
};

export default Landing;

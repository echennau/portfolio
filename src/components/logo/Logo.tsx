"use client";

import { Theme, useTheme, useThemeClass } from "@/contexts/ThemeContext";
import Image from "next/image";
import React from "react";
import LogoE from "./LogoE";
import LogoC from "./LogoC";

const keyframes = `
@keyframes slideRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(85%);
  }
}
`;

const Logo = () => {
  const fillColor =
    useTheme().theme === Theme.DARK ? "fill-secondary" : "fill-primary";

  return (
    <div className={`group relative size-[22px]`}>
      <style>
        {`
          @keyframes slideRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(42.5%);
            }
          }
          .animate-slideRight {
            animation: slideRight 1s ease 1s forwards;
          }
            
          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-42.5%);
            }
          }
          .animate-slideLeft {
            animation: slideLeft 1s ease 1s forwards;
          }
        `}
      </style>
      <LogoE
        className={`absolute ${fillColor} transition-all duration-1000 animate-slideLeft inset-0 group-hover:-top-[5px] group-hover:fill-accent`}
      />
      <LogoC
        className={`absolute ${fillColor} transition-all duration-1000 animate-slideRight inset-0 group-hover:top-[5px] group-hover:fill-accent`}
      />
    </div>
  );
};

export default Logo;

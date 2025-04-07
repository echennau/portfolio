"use client";

import React, { useEffect, useState } from "react";
import { Theme, useTheme, useThemeClass } from "../contexts/ThemeContext";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import Logo from "./logo/Logo";

const NavbavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className={`py-2 rounded-md text-lg md:text-2xl hover:cursor-pointer group ${className}`}
      href={href}
      //   onClick={onClick}
    >
      <div className="border-b border-b-transparent group-hover:border-b-accent transition-colors duration-300">
        {children}
      </div>
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { theme } = useTheme();
  const border =
    theme === Theme.DARK ? "border-secondary shadow-glow" : "shadow-xl";

  return (
    <div
      className={`overflow-x-auto px-4 z-50 sm:px-16 lg:px-32 xl:px-64 gap-x-12 text-lg flex md:justify-center border-b items-center sticky top-0 w-full transition- duration-300 ${
        isScrolled ? `h-16 ${border}` : "h-24 border-transparent shadow-none"
      }
       ${useThemeClass()}
      `}
    >
      {/* <NavbavLink href="#a">About</NavbavLink> */}
      <Link href="/" className="flex items-center justify-center">
        <Logo />
      </Link>
      <NavbavLink href="/#experience">Experience</NavbavLink>
      <NavbavLink href="/#projects">Projects</NavbavLink>
      {/* <NavbavLink href="#a">Skills</NavbavLink> */}
      <ThemeSwitch />
      <NavbavLink className="ml-auto" href="/#contact">
        Contact
      </NavbavLink>
    </div>
  );
};

export default Navbar;

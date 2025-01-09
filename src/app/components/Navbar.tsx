"use client";

import React, { useEffect, useState } from "react";

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
      className={`py-2 rounded-md text-lg md:text-2xl hover:cursor-pointer group transition-all duration-300 ${className}`}
      href={href}
    >
      <div className="border-b border-b-transparent group-hover:border-b-accent transition-all duration-300">
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

  return (
    <div
      className={`z-50 px-2 md:px-64 gap-x-12 text-lg flex justify-center bg-primary border-b items-center sticky top-0 w-full transition-all duration-300 ${
        isScrolled
          ? "h-16 border-secondary shadow-navbar"
          : "h-24 border-transparent shadow-none"
      }`}
    >
      <NavbavLink href="#a">About</NavbavLink>
      <NavbavLink href="#a">Experience</NavbavLink>
      <NavbavLink href="#a">Projects</NavbavLink>
      <NavbavLink href="#a">Skills</NavbavLink>
      <NavbavLink className="ml-auto" href="#a">
        Contact
      </NavbavLink>
    </div>
  );
};

export default Navbar;

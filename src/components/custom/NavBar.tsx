"use client"
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react"
import { User, FolderCode, Mail } from "lucide-react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useTheme } from "@teispace/next-themes";
import { AnimatePresence } from "motion/react";
import { useNavBarHover } from "../../context/NavBarHoverContext";
import { useLenis } from "lenis/react";

const NAVBAR_ICON_SIZE = 24;

interface NavLinkProps {
  href: string;
  text: string;
  children: React.ReactNode;
}
const NavLink = ({ href, children, text }: NavLinkProps) => {
  const { setHoveredLabel } = useNavBarHover();
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    lenis?.scrollTo(href, { duration: 1.2 });
    history.pushState(null, "", href);
  };

  return (
    <AnimatePresence>
    <motion.a
      className="flex items-center py-4 px-8"
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHoveredLabel(text)}
      onMouseLeave={() => setHoveredLabel(null)}
    >
      {children}
    </motion.a>
    </AnimatePresence>
  );
};

const links: NavLinkProps[] = [
  {
    href: "#about",
    text: "about",
    children: <User size={NAVBAR_ICON_SIZE} />,
  },
  {
    href: "#projects",
    text: "projects",
    children: <FolderCode size={NAVBAR_ICON_SIZE} />,
  },
  {
    href: "#contact",
    text: "contact",
    children: <Mail size={NAVBAR_ICON_SIZE} />,
  },
];

const ThemeToggle = () => {
  const { setHoveredLabel } = useNavBarHover();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    // TODO: FIX NEXTJS SSR ISSUE WITH THIS
    <AnimatedThemeToggler
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      className="px-8 py-8"
      size={NAVBAR_ICON_SIZE}
      onMouseEnter={() => setHoveredLabel('theme')}
      onMouseLeave={() => setHoveredLabel(null)}
    />
  );
};

const NavBar = () => {
  const lenis = useLenis();
  const initialScrollDone = useRef(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || !lenis || initialScrollDone.current) return;
    initialScrollDone.current = true;
    lenis.scrollTo(hash, { duration: 1.5 });
  }, [lenis]);

  return (
    <div className="fixed z-10 inset-x-0 top-8 flex items-center justify-center">
      <nav className="border-primary border-1 rounded-full flex rounded-2xl px-6">
        {links.map((props) => (
          <NavLink key={`navbar-${props.href}`} {...props} />
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default NavBar;

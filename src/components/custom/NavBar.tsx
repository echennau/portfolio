"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { User, FolderCode, Mail } from "lucide-react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useTheme } from "@teispace/next-themes";
import { useNavBarHover } from "../../context/NavBarHoverContext";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import Magnet from "@/components/ui/Magnet";

const NAVBAR_ICON_SIZE = 56;
const NAVBAR_DROP_IN_DELAY = 0;
const NAVBAR_SHRINK_DELAY = 1000;

interface NavBarItem extends React.ComponentPropsWithoutRef<"div"> {
  hoverText: string;
  index?: number;
}

const NavBarItem = ({ hoverText, children, className, index = 0, ...props }: NavBarItem) => {
  const { setHoveredLabel } = useNavBarHover();
  const dropInDelay = (index * 64 + NAVBAR_DROP_IN_DELAY) / 1000;

  return (
    <Magnet padding={16} magnetStrength={3} wrapperClassName="hover:text-primary-hover">
      <motion.div
        onMouseEnter={() => setHoveredLabel(hoverText)}
        onMouseLeave={() => setHoveredLabel(null)}
        initial={{ y: -24, opacity: 0, width: NAVBAR_ICON_SIZE, height: NAVBAR_ICON_SIZE }}
        whileHover={{ width: NAVBAR_ICON_SIZE * 1.25, height: NAVBAR_ICON_SIZE * 1.25 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { delay: dropInDelay, type: "spring", stiffness: 300, damping: 22 },
          opacity: { delay: dropInDelay, duration: 0.25 },
          width: { type: "spring", stiffness: 400, damping: 30 },
          height: { type: "spring", stiffness: 400, damping: 30 },
        }}
        className={cn(
          "flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-surface/50",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    </Magnet>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
  children: React.ReactNode;
  index?: number;
}

const NavLink = ({ href, children, text, index }: NavLinkProps) => {
  const lenis = useLenis();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    lenis?.scrollTo(href, { duration: 1.2 });
    history.pushState(null, "", href);
  };

  return (
    <NavBarItem hoverText={text} index={index}>
      <button className="contents" aria-label={text} onClick={handleClick}>
        {children}
      </button>
    </NavBarItem>
  );
};

const links: NavLinkProps[] = [
  {
    href: "#about",
    text: "about",
    children: <User className="w-full h-full" />,
  },
  {
    href: "#projects",
    text: "projects",
    children: <FolderCode className="w-full h-full" />,
  },
  {
    href: "#contact",
    text: "contact",
    children: <Mail className="w-full h-full" />,
  },
];

const ThemeToggle = ({ index }: { index?: number }) => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <NavBarItem hoverText="theme" index={index}>
      {/* TODO: FIX NEXTJS SSR ISSUE WITH THIS */}
      <AnimatedThemeToggler
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onThemeChange={setTheme}
        size={NAVBAR_ICON_SIZE}
        className="flex items-center justify-center w-full h-full"
      />
    </NavBarItem>
  );
};

const NavBar = () => {
  const initialScrollDone = useRef(false);
  const atTopRef = useRef(true);

  const [hovering, setHovering] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hoverShrink, setHoverShrink] = useState(false);
  const magnifyNav = hovering || atTop;

  const lenis = useLenis(({ scroll }) => {
    const newAtTop = scroll === 0;
    if (newAtTop !== atTopRef.current) {
      atTopRef.current = newAtTop;
      setAtTop(newAtTop);
      if (!newAtTop) setHoverShrink(false);
    }
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || !lenis || initialScrollDone.current) return;
    initialScrollDone.current = true;
    lenis.scrollTo(hash, { duration: 1.5 });
  }, [lenis]);

  return (
    // fixed place wrapper div to apply flex styling
    <div className="fixed z-10 inset-x-0 top-0 flex items-start justify-center pointer-events-none">
      <div
        className={cn(
          "flex pt-4 pb-4 pointer-events-auto rounded-b-full",
          magnifyNav ? "px-10" : "px-2",
        )}
        onMouseEnter={() => { setHovering(true); setHoverShrink(false); }}
        onMouseLeave={() => { setHovering(false); setHoverShrink(true); }}
      >
        <motion.nav
          animate={{ scale: !magnifyNav ? 0.5 : 1 }}
          transition={{
            delay: !magnifyNav && hoverShrink ? NAVBAR_SHRINK_DELAY / 1000 : 0,
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
          style={{ transformOrigin: "center top" }}
          className="h-16 rounded-full flex items-center justify-start gap-8"
        >
          {links.map((props, i) => (
            <NavLink key={`navbar-${props.href}`} index={i} {...props} />
          ))}
          <ThemeToggle index={links.length} />
        </motion.nav>
      </div>
    </div>
  );
};

export default NavBar;

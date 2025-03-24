"use client";

import { useEffect, useState, useRef } from "react";

type FadeInDivProps = {
  className?: string;
  children: React.ReactNode;
  direction?: "right" | "left" | "up" | "down";
};

const FadeInDiv = ({
  className,
  children,
  direction = "right",
}: FadeInDivProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  let directionClassName;
  switch (direction) {
    case "right":
      directionClassName = "translate-x-10";
      break;
    case "left":
      directionClassName = "-translate-x-10";
      break;
    case "up":
      directionClassName = "translate-y-10";
      break;
    case "down":
      directionClassName = "-translate-y-10";
      break;
  }

  return (
    <div
      ref={textRef}
      className={`opacity-0 transform transition ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 duration-1000"
          : `${directionClassName} opacity-0 duration-0`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInDiv;

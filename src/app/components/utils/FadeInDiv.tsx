"use client";

import { useEffect, useState, useRef } from "react";

type FadeInDivProps = {
  className?: string;
  children: React.ReactNode;
};

const FadeInDiv = ({ className, children }: FadeInDivProps) => {
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

  return (
    <div
      ref={textRef}
      className={`opacity-0 transform transition ${
        isVisible
          ? "opacity-100 translate-x-0 duration-1000"
          : " translate-x-10 opacity-0 duration-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInDiv;

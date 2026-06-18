import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
  children: React.ReactNode;
}
/**
 * Custom semantic <section> layout component that makes sections sticky scroll.
 */
export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <motion.section
      className={cn("min-h-screen h-screen w-full sticky top-0")}
      // initial={{ scale: 0.2, }}
      // whileInView={{ scale: 1, }}
      // transition={{
      //   duration: 1,
      //   delay: 0.1,
      // }}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 flex",
          // TODO: sensible screen-sized based padding
          "p-16",
          className,
        )}
      >
        {children}
      </div>
    </motion.section>
  );
};

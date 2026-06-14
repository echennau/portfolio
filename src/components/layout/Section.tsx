import clsx from "clsx";
import React from "react";
import { ComponentProps } from "react";

type SectionProps = ComponentProps<"section">;
/**
 * Custom semantic <section> layout component that makes sections sticky scroll.
 */
export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={clsx("w-full sticky top-0", className)}>
      <div className="absolute bottom-0 left-0 right-0 top-0">{children}</div>
    </section>
  );
};

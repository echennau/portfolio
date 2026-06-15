import clsx from "clsx"
import React from "react"
import { ComponentProps } from "react"
import { motion } from "motion/react"

type SectionProps = ComponentProps<"section">
/**
 * Custom semantic <section> layout component that makes sections sticky scroll.
 */
export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    // @ts-ignore
    <motion.section
      className={clsx("min-h-screen w-full sticky top-0", className)}
      initial={{ scale: 0.2, transform: "translateX(25%)" }}
      whileInView={{ scale: 1, transform: "translateX(0)" }}
      transition={{
        duration: 1,
        delay: 0.1,
      }}
      {...props}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0">{children}</div>
    </motion.section>
  )
}

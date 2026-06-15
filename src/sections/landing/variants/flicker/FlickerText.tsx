import { useRef } from "react"
import { useFlickerAnimation, FlickerAnimationOptions } from "./useFlicker"

interface FlickerCharProps {
  children: string
  fontSize: string
  letterSpacing: string
  className?: string
  style?: React.CSSProperties
  animationOptions?: FlickerAnimationOptions
}
const FlickerChar = ({ children, fontSize, letterSpacing, className, style, animationOptions }: FlickerCharProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  useFlickerAnimation(ref, animationOptions)

  return (
    <span
      ref={ref}
      style={{
        fontSize,
        marginLeft: letterSpacing,
        letterSpacing: 0,
        lineHeight: 1,
        opacity: 0,
        ...style,
      }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </span>
  )
}

export interface FlickerTextProps {
  text: string
  fontSize: string
  letterSpacing: string
  className?: string
  style?: React.CSSProperties
  stylePerChar?: (index: number) => React.CSSProperties
  animationOptions?: FlickerAnimationOptions
}

export const FlickerText = ({ text, fontSize, letterSpacing, className, style, stylePerChar, animationOptions }: FlickerTextProps) => {
  return (
    <>
      {text.split("").map((char, i) => (
        <FlickerChar
          key={`char-${i}-${char}`}
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          className={className}
          style={{ ...style, ...stylePerChar?.(i) }}
          animationOptions={animationOptions}
        >
          {char}
        </FlickerChar>
      ))}
    </>
  )
}

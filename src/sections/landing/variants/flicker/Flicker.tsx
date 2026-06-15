import { useRef, useMemo, } from "react"
import { useFlickerAnimation } from "./useFlicker"

// reference values tuned for 9-char "Chennault" at ratio=1
const BASE_FONT_VW = 19.5
const BASE_MARGIN_VW = -1.25
const BASE_CHARS = 9

interface FlickerCharProps {
  children: string
  fontSize: string
  marginLeft: string
  className?: string
  style?: React.CSSProperties
}
const FlickerChar = ({ children, fontSize, marginLeft, className, style }: FlickerCharProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  useFlickerAnimation(ref)

  return (
    <span
      ref={ref}
      style={{
        fontSize,
        marginLeft,
        letterSpacing: 0,
        lineHeight: 1,
        opacity: 0,
        ...style,
      }}
      className={className}
    >
      {children}
    </span>
  )
}

interface FlickerTextProps {
  text: string
  ratio?: number
  className?: string
  style?: React.CSSProperties
}
const FlickerText = ({ text, ratio = 1, className, style }: FlickerTextProps) => {
  const n = text.length
  const fontSize = `${(BASE_FONT_VW * BASE_CHARS * ratio) / n}vw`
  const marginLeft = `${(BASE_MARGIN_VW * BASE_CHARS * ratio) / n}vw`

  const angles = useMemo(
    () => text.split("").map((char, i) => (char.charCodeAt(0) * 37 + i * 73) % 360),
    [text],
  )

  return (
    <>
      {text.split("").map((char, i) => (
        <FlickerChar
          key={`char-${i}-${char}`}
          fontSize={fontSize}
          marginLeft={marginLeft}
          className={className}
          style={
            {
              ...style,
              ["--grad-angle" as string]: `${angles[i]}deg`,
            } as React.CSSProperties
          }
        >
          {char}
        </FlickerChar>
      ))}
    </>
  )
}

const palette = [
  "--color-primary-200",
  "--color-primary-300",
  "--color-primary-400",
  "--color-primary-500",
  "--color-primary-600",
  "--color-primary-700",
  "--color-primary-800",
]
const twoColors = (palette: string[]) => {
  const first = Math.floor(Math.random() * palette.length)
  const firstColor = palette.splice(first, 1)[0]
  const second = Math.floor(Math.random() * palette.length)
  const secondColor = palette.splice(second, 1)[0]
  return [firstColor, secondColor]
}

const Flicker = () => {
  return (
    <div className="px-[4vw] w-full h-full flex flex-col justify-end">
      {/* <div className="pl-[0.5vw] flex">
        <FlickerText ratio={0.25} text="Ethan" />
      </div>
      <div className="pl-[0.5vw] flex">
        <FlickerText text="Chennault" />
      </div> */}
      <div className="flex">
        <FlickerText
          text="echennau/"
          className="type-mono"
          style={
            {
              //   backgroundImage: `url(${camoUrl}), linear-gradient(calc(var(--grad-angle)), var(${left}), var(${right}))`,
              backgroundImage: `linear-gradient(calc(var(--grad-angle)), var(--color-primary), var(--color-secondary))`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: [
                "0 0 300px var(color-mix(in srgb, var(--color-primary-light) 25%, transparent))",
              ].join(", "),
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  )
}

export default Flicker

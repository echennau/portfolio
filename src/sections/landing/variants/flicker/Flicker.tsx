import { useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FlickerText } from "./FlickerText"
import { useNavBarHover } from "../../../../context/NavBarHoverContext"

const INITIAL_ANIMATION_OPTIONS = { duration: 1600, maxStartDelay: 1000 }

// apply a cool gradient!
const CHAR_STYLE = {
  backgroundImage: `linear-gradient(calc(var(--grad-angle)), var(--color-primary), var(--color-secondary))`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as React.CSSProperties

const Flicker = () => {
  const { hoveredLabel } = useNavBarHover()
  const text = hoveredLabel ?? "echennau/"

  const isInitial = useRef(true)
  useEffect(() => { isInitial.current = false }, [])

  // Child FlickerChar effects run before this parent effect, so isInitial.current
  // is still true when the first render's chars animate — then flips to false.
  const animationOptions = isInitial.current ? INITIAL_ANIMATION_OPTIONS : undefined

  const angles = useMemo(
    () => text.split("").map(() => Math.random() * 360),
    [text],
  )

  const fontSize = '19.5vw'
  const charSpacing = '-1.25vw'

  return (
    <div className="px-[4vw] w-full h-full flex flex-col justify-end">
      <div className="flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={text}
            className="flex"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <FlickerText
              text={text}
              fontSize={fontSize}
              charSpacing={charSpacing}
              className="type-mono"
              style={CHAR_STYLE}
              stylePerChar={(i) => ({ ["--grad-angle" as string]: `${angles[i]}deg` })}
              animationOptions={animationOptions}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Flicker

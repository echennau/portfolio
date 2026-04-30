import { useRef, useMemo, useEffect, useState } from "react";
import { useFlickerAnimation } from "./animation";
import { useTheme } from "../../ThemeProvider";

// reference values tuned for 9-char "Chennault" at ratio=1
const BASE_FONT_VW = 19.5;
const BASE_MARGIN_VW = -1.25;
const BASE_CHARS = 9;

interface FlickerCharProps {
  children: string;
  fontSize: string;
  marginLeft: string;
  className?: string;
  style?: React.CSSProperties;
}
const FlickerChar = ({
  children,
  fontSize,
  marginLeft,
  className,
  style,
}: FlickerCharProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  useFlickerAnimation(ref);

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
  );
};

interface FlickerTextProps {
  text: string;
  ratio?: number;
  className?: string;
  style?: React.CSSProperties;
}
const FlickerText = ({
  text,
  ratio = 1,
  className,
  style,
}: FlickerTextProps) => {
  const n = text.length;
  const fontSize = `${(BASE_FONT_VW * BASE_CHARS * ratio) / n}vw`;
  const marginLeft = `${(BASE_MARGIN_VW * BASE_CHARS * ratio) / n}vw`;

  const angles = useMemo(
    () =>
      text.split("").map((char, i) => (char.charCodeAt(0) * 37 + i * 73) % 360),
    [text],
  );

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
  );
};
const palette = [
  "--color-primary-100",
  "--color-primary-200",
  "--color-primary-300",
  "--color-primary-400",
  "--color-primary-500",
  "--color-primary-600",
  "--color-primary-700",
  "--color-primary-800",
  "--color-primary-900",
];

const Flicker = () => {
  const [left, setLeft] = useState("--color-primary-400");
  const [right, setRight] = useState("--color-primary-500");
  const { theme } = useTheme();

  // TODO: add a shifting rectangle UCP camo RGBA pattern on top of gradient
  // TODO: experiment with slow glow rotation rather than shiftings
  useEffect(() => {
    const interval = setInterval(() => {
      const themedPalette =
        theme === "dark" ? palette.slice(0, 6) : palette.slice(3);
      setLeft(themedPalette[Math.floor(Math.random() * themedPalette.length)]);
      setRight(themedPalette[Math.floor(Math.random() * themedPalette.length)]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [left]);

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
              backgroundImage: `linear-gradient(calc(var(--grad-angle)), var(${left}), var(${right}))`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              ["--c0" as string]:
                "color-mix(in srgb, var(--color-primary-light) 30%, transparent)",
              ["--c1" as string]:
                "color-mix(in srgb, var(--color-primary-light) 20%, transparent)",
              ["--c2" as string]:
                "color-mix(in srgb, var(--color-primary-light) 10%, transparent)",
              textShadow: [
                "0 0 150px var(--c0)",
                "0 0 350px var(--c1)",
                "0 0 700px var(--c2)",
              ].join(", "),
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};

export default Flicker;

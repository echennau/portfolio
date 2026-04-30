import { useRef } from "react";
import { useFlickerAnimation } from "./animation";

// reference values tuned for 9-char "Chennault" at ratio=1
const BASE_FONT_VW = 19.5;
const BASE_MARGIN_VW = -1.25;
const BASE_CHARS = 9;

interface FlickerCharProps {
  children: string;
  fontSize: string;
  marginLeft: string;
}
const FlickerChar = ({ children, fontSize, marginLeft }: FlickerCharProps) => {
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
      }}
    >
      {children}
    </span>
  );
};

interface FlickerTextProps {
  text: string;
  ratio?: number;
}
const FlickerText = ({ text, ratio = 1 }: FlickerTextProps) => {
  const n = text.length;
  const fontSize = `${(BASE_FONT_VW * BASE_CHARS * ratio) / n}vw`;
  const marginLeft = `${(BASE_MARGIN_VW * BASE_CHARS * ratio) / n}vw`;

  return (
    <>
      {text.split("").map((char, i) => (
        <FlickerChar
          key={`char-${i}-${char}`}
          fontSize={fontSize}
          marginLeft={marginLeft}
        >
          {char}
        </FlickerChar>
      ))}
    </>
  );
};

const Flicker = () => {
  return (
    <div className="px-[4vw] w-full h-full flex flex-col justify-end">
      {/* first name  */}
      <div className="pl-[0.5vw] flex">
        <FlickerText ratio={0.25} text="Ethan" />
      </div>
      {/* last name  */}
      <div className="pl-[0.5vw] flex">
        <FlickerText text="Chennault" />
      </div>
    </div>
  );
};

export default Flicker;

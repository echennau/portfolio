import React from "react";
import { Section } from "../../components/layout/Section";
import ShapeBlur from "@/components/ui/ShapeBlur";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <Section id="about" className="bg-surface">
      <div className="relative size-128 flex justify-center items-center">
        {/* <div className="absolute size-128 flex justify-center items-center bg-red-300/20">
          test 2
          test
        </div> */}
        <ShapeBlur className="p-0 w-full h-full"></ShapeBlur>
        <div className="absolute size-56 rounded-xl border-white/50 border-8 overflow-hidden">
          <img
            className="size-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;

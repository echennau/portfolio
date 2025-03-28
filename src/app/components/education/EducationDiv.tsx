import Image from "next/image";
import React from "react";

type EducationData = {
  school: string;
  imageURL: string;
  span: string;
  description: string[];
};

type EducationDivProps = {
  index: number;
  educationData: EducationData;
};

const EducationDiv = ({ educationData, index }: EducationDivProps) => {
  const { school, span, imageURL, description } = educationData;
  const className =
    index % 2
      ? "md:self-start md:text-left md:flex-row-reverse"
      : "md:self-end md:text-right";

  return (
    <div
      className={`self-center text-center items-center ${className} flex-col md:flex-row flex leading-none gap-4`}
    >
      <Image
        className="aspect-square w-32 h-32"
        width={100}
        height={100}
        alt={school}
        src={imageURL}
      />
      <div className="flex-1 flex flex-col">
        <span className="font-bold text-3xl leading-none">{school}</span>
        <span className="text-gray-400 mt-0.5 mb-1">{span}</span>
        {description.map((line, i) => (
          <span className="text-lg leading-tight" key={i}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationDiv;

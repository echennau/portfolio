import React from "react";
import FadeInDiv from "../utils/FadeInDiv";
import education from "../../../data/education.json";
import EducationDiv from "./EducationDiv";

const Education = () => {
  const educationDivs = education.education.map((edu, index) => (
    <FadeInDiv direction={index % 2 ? "left" : "right"} key={index}>
      <EducationDiv index={index} educationData={edu} />
    </FadeInDiv>
  ));

  return (
    <div className="px-2 sm:px-16 md:px-24 lg:px-32 xl:px-64 flex flex-wrap gap-4 flex-col items-center w-full lg:items-end text-right">
      <FadeInDiv direction="right">
        <span className="text-6xl font-bold">Education</span>
      </FadeInDiv>
      <div className="px-2 flex flex-col gap-y-8 w-full">{educationDivs}</div>
    </div>
  );
};

export default Education;

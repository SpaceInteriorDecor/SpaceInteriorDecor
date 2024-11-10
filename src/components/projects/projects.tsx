import React from "react";
import FadeInHeader from "../fade-in-header";
import Card from "../ui/card";

const Projects = () => {
  return (
    <div className="mt-[2rem] px-5 mb-10">
      <FadeInHeader className="text-center text-4xl mb-7">
        Projects
      </FadeInHeader>
      <div className="flex justify-center space-x-20">
        <Card title="Space Inspired Room" />
        <Card title="Space Inspired Room" />
        <Card title="Space Inspired Room" />
      </div>
    </div>
  );
};

export default Projects;

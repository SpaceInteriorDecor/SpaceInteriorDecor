import React, { useEffect, useState } from "react";
import FadeInHeader from "../fade-in-header";
import Card from "../ui/card";
import { Dialog, DialogOverlay, DialogContent } from "../ui/dialog";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./helper";
import FadeInDiv from "../fade-in-div";

type IProjects = {
  title: string;
  imgSrcs: string[];
  description: string;
};
const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | IProjects>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const handleOpenDialog = (project: IProjects) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Start with the first image
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.imgSrcs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.imgSrcs.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    // Set isInitialRender to false after the first render
    setIsInitialRender(false);
  }, []);
  return (
    <div className="mt-[2rem] px-5 mb-10 scroll-mt-[120px]" id="projects">
      <FadeInHeader className="text-center text-4xl mb-7">
        Projects
      </FadeInHeader>
      <div className="flex justify-center space-x-20">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Card
              title={project.title}
              imgSrc={project.imgSrcs[0]} // Display the first image in the card
              onClick={() => handleOpenDialog(project)}
            />
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={handleCloseDialog}>
        <DialogOverlay />
        <DialogContent>
          {selectedProject && (
            <div className="text-center">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <div className="flex justify-center items-center mt-4">
                <button onClick={handlePrevImage} className="p-2">
                  ❮
                </button>
                <FadeInDiv
                  key={currentImageIndex} // Animate on index change
                  className="flex justify-center"
                >
                  <Image
                    src={selectedProject.imgSrcs[currentImageIndex]}
                    alt={`${selectedProject.title} image ${
                      currentImageIndex + 1
                    }`}
                    width={300}
                    height={300}
                  />
                </FadeInDiv>
                <button onClick={handleNextImage} className="p-2">
                  ❯
                </button>
              </div>
              {/* <p className="mt-2">{selectedProject.description}</p> */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import FadeInHeader from "../fade-in-header";
import Card from "../ui/card";
import { Dialog, DialogOverlay, DialogContent } from "../ui/dialog";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./helper";

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

  const handleOpenDialog = (project: IProjects) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
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

  return (
    <div className="mt-[2rem] px-5 mb-10">
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
                <motion.div
                  key={currentImageIndex} // Animate on index change
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
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
                </motion.div>
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

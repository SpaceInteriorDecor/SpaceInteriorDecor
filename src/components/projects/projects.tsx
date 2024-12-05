import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../ui/card";
import { projects } from "./helper";
import ProjectDialog from "./project-dialog";

type IProjects = {
  title: string;
  imgSrcs: string[];
  description: string;
  technologies?: string[];
  githubLink?: string;
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProjects | null>(
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
      id="projects"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-bold mb-12 text-gray-800 dark:text-white"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            imgSrc={project.imgSrcs[0]}
            className="cursor-pointer"
            onClick={() => handleOpenDialog(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          open={open}
          onClose={handleCloseDialog}
          currentImageIndex={currentImageIndex}
          onNextImage={handleNextImage}
          onPrevImage={handlePrevImage}
        />
      )}
    </motion.div>
  );
};

export default Projects;

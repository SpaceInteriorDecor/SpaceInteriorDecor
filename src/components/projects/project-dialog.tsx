import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProjectDialog = ({
  project,
  open,
  onClose,
  currentImageIndex,
  onNextImage,
  onPrevImage,
}: any) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogOverlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
    <DialogContent className="max-w-2xl w-full rounded-2xl p-8 bg-white dark:bg-gray-800 overflow-auto max-h-[90vh]">
      <DialogTitle className="visually-hidden">{project.title}</DialogTitle>
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          {project.title}
        </h2>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={onPrevImage}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
            aria-label="Previous Image"
          >
            ❮
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center items-center w-full max-w-full"
            >
              <div className="relative w-full h-[300px] md:h-[400px] max-w-full">
                <Image
                  src={project.imgSrcs[currentImageIndex]}
                  alt={`${project.title} image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={onNextImage}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
            aria-label="Next Image"
          >
            ❯
          </motion.button>
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          {project.technologies && (
            <div className="flex flex-wrap justify-center space-x-2 mb-4">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default ProjectDialog;

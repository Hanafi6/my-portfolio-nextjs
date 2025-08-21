"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import ProjectPopup from "./ProjectPopup"; // استدعاء البوب أب

const ProjectCardImga = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (project, index) => {
    setSelectedProject({ ...project });
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {projects.map((project) => (
        <ImageSliderCard
          key={project.id}
          project={project}
          openPopup={openPopup}
        />
      ))}

      {/* عرض البوب أب لو فيه مشروع محدد */}
      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          closePopup={closePopup}
        />
      )}
    </>
  );
};
const ImageSliderCard = ({ project, openPopup }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {/* عنوان المشروع */}
      <h3 className="text-lg font-bold text-center text-black py-3">
        {project.title}
      </h3>

      {/* الصور */}
      <div
        className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
        onClick={() => openPopup(project, current)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={project.images[current]}
            src={project.images[current]}
            alt={`${project.title} - ${current + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* أزرار التنقل */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* بيانات المشروع */}
      <div className="p-4 mt-auto flex justify-between items-center">
        <p className="text-sm text-gray-600 line-clamp-2">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <Github className="text-black" />
        </a>
      </div>
    </div>
  );
};


export default ProjectCardImga;

"use client";
import ProjectCardImga from "../Components/ProjectCard";
import { projects } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useProjectStore } from '../zustand/ModalStore';
import { ButtonDown, ButtonLeft, ButtonRight, ButtonUp } from "./ButtonsChanges";

function Projects() {
  const {
    activeProject,
    activeImge,
    setActiveProject,
    setActiveImge
  } = useProjectStore();

  // للتحكم في اتجاه الحركة
  const [imgDirection, setImgDirection] = useState(0); // -1 يسار، 1 يمين
  const [projectDirection, setProjectDirection] = useState(0); // -1 فوق، 1 تحت

  const totalProjects = projects.length;
  const currentProject = projects[activeProject] ;
  const images = currentProject.images || [];
  const totalImages = images.length;
  const prevProject = (activeProject - 1 + totalProjects) % totalProjects;
  const nextProject = (activeProject + 1) % totalProjects;
  const prevImage = (activeImge - 1 + totalImages) % totalImages;
  const nextImage = (activeImge + 1) % totalImages;

  // بيانات المشروع السابق والتالي
  const prevProjectData = projects[prevProject] || projects[0];
  const nextProjectData = projects[nextProject] || projects[0];
  const prevProjectImages = prevProjectData.images || [];
  const nextProjectImages = nextProjectData.images || [];
  const prevProjectActiveImage = prevProjectImages[activeImge % prevProjectImages.length];
  const nextProjectActiveImage = nextProjectImages[activeImge % nextProjectImages.length];

  return (
    <section className="relative flex flex-col items-center justify-center w-full  h-[calc(100vh-60px)] p-2 sm:p-6 lg:p-10 gap-2 sm:gap-6">
      {/* اللوح الزجاجي فوق للمشروع السابق */}
      <div className="rounded backdrop-blur-lg flex justify-center items-end mb-2 w-full">
        <motion.div
          key={prevProjectData.id + '-top'}
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 0.7, scale: 0.85, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ duration: 0.4 }}
          className="backdrop-blur-lg rounded-2xl shadow-lg p-2 w-full max-w-xs pointer-events-none flex flex-col items-center"
        >
          {prevProjectActiveImage && <img src={prevProjectActiveImage} alt="prev" className="rounded-xl w-full h-32 object-cover mb-2" />}
          <span className="text-xs text-white font-bold">{prevProjectData.title}</span>
        </motion.div>
        {/* <button onClick={()=>setActiveProject(prevProject)} className="ml-2"><ButtonUp/></button> */}
        <button ><ButtonUp/></button>
      </div>

      {/* المشروع النشط في المنتصف */}
      <div className="flex flex-row items-center justify-center w-full gap-2 sm:gap-6">
        {/* لوح زجاجي يسار - صورة المشروع السابق */}
        <div className="hidden sm:flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={prevProjectActiveImage}
              initial={{ opacity: 0, scale: 0.8, x: imgDirection === -1 ? -120 : -40 }}
              animate={{ opacity: 0.7, scale: 0.95, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: imgDirection === 1 ? -120 : -40 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-lg rounded-xl shadow-lg p-2 w-full max-w-[180px] pointer-events-none flex flex-col items-center"
            >
              {prevProjectActiveImage && <img src={prevProjectActiveImage} alt="prev" className="rounded-xl w-full h-36 object-cover" />}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* الصورة النشطة في المنتصف */}
        <div className="flex flex-col items-center justify-center flex-1 min-w-[180px] max-w-2xl w-full">
          <div className="flex items-center justify-between w-full mb-4">
            {/* <button className="bg-white/30 hover:bg-white/50 text-black rounded-full px-3 py-2 shadow-md transition-all" onClick={() => {setActiveImge(prevImage);setImgDirection(-1);}} aria-label="الصورة السابقة"><ButtonLeft/></button> */}
            {/* <button className="bg-white/30 hover:bg-white/50 text-black rounded-full px-3 py-2 shadow-md transition-all" onClick={() => {setActiveImge(nextImage);setImgDirection(1);}} aria-label="الصورة التالية"><ButtonRight/></button> */}
                      <button className="bg-white/30 hover:bg-white/50 text-black rounded-full px-3 py-2 shadow-md transition-all"  aria-label="الصورة السابقة"><ButtonLeft/></button>
            <button className="bg-white/30 hover:bg-white/50 text-black rounded-full px-3 py-2 shadow-md transition-all"  aria-label="الصورة التالية"><ButtonRight/></button>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={images[activeImge]}
              initial={{ opacity: 0, scale: 0.9, x: imgDirection === 1 ? 120 : imgDirection === -1 ? -120 : 0 }}
              animate={{ opacity: 1, scale: 1.1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: imgDirection === 1 ? -120 : imgDirection === -1 ? 120 : 0 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-xl border-2 border-white rounded-2xl p-2 sm:p-4 w-full shadow-2xl bg-white/10 flex flex-col items-center"
            >
              {images.length > 0 && <img src={images[activeImge]} alt="active" className="rounded-xl w-full h-56 sm:h-72 md:h-96 object-cover" />}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* لوح زجاجي يمين - صورة المشروع التالي */}
        <div className="hidden sm:flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={nextProjectActiveImage}
              initial={{ opacity: 0, scale: 0.8, x: imgDirection === 1 ? 120 : 40 }}
              animate={{ opacity: 0.7, scale: 0.95, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: imgDirection === -1 ? 120 : 40 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-lg rounded-xl shadow-lg p-2 w-full max-w-[180px] pointer-events-none flex flex-col items-center"
            >
              {nextProjectActiveImage && <img src={nextProjectActiveImage} alt="next" className="rounded-xl w-full h-36 object-cover" />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* اللوح الزجاجي تحت للمشروع التالي */}
      <div className="rounded backdrop-blur-lg flex justify-center items-start mt-2 w-full">
        <motion.div
          key={nextProjectData.id + '-bottom'}
          initial={{ opacity: 0, scale: 0.8, y: projectDirection === 1 ? 120 : 50 }}
          animate={{ opacity: 0.7, scale: 0.85, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: projectDirection === -1 ? 120 : 50 }}
          transition={{ duration: 0.4 }}
          className="backdrop-blur-lg rounded-2xl shadow-lg p-2 w-full max-w-xs pointer-events-none flex flex-col items-center"
        >
          {nextProjectActiveImage && <img src={nextProjectActiveImage} alt="next" className="rounded-xl w-full h-32 object-cover mb-2" />}
          <span className="text-xs text-white font-bold">{nextProjectData.title}</span>
        </motion.div>
        <button onClick={()=>{setActiveProject(nextProject);setProjectDirection(1);}} className="ml-2"><ButtonDown/></button>
      </div>
      <div className="rounded backdrop-blur-lg flex justify-center items-end mb-2 w-full">
        <motion.div
          key={prevProjectData.id + '-top'}
          initial={{ opacity: 0, scale: 0.8, y: projectDirection === -1 ? -120 : -50 }}
          animate={{ opacity: 0.7, scale: 0.85, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: projectDirection === 1 ? -120 : -50 }}
          transition={{ duration: 0.4 }}
          className="backdrop-blur-lg rounded-2xl shadow-lg p-2 w-full max-w-xs pointer-events-none flex flex-col items-center"
        >
          {prevProjectActiveImage && <img src={prevProjectActiveImage} alt="prev" className="rounded-xl w-full h-32 object-cover mb-2" />}
          <span className="text-xs text-white font-bold">{prevProjectData.title}</span>
        </motion.div>
        {/* <button onClick={()=>{setActiveProject(prevProject);setProjectDirection(-1);}} className="ml-2"><ButtonUp/></button> */}
        <button ><ButtonUp/></button>
      </div>
    </section>
  );
}

export default Projects;

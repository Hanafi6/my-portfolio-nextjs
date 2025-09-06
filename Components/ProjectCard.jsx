"use client";
import React, { useState, useRef, useEffect } from "react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectPopup from "./ProjectPopup";
import { useProductModal } from "../zustand/ModalStore";

const ProjectCardImga = ({ activeProject,title, description, images = [], link = "#" }) => {
  const safeImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // لتحديد اتجاه الحركة
  const [isPopUp,setIsPopUp] = useState(false);
  const [singelProject,setSngleProject] = useState(null)
  const [isTextPopup, setIsTextPopup] = useState(false);



  const {open} = useProductModal()

  const MotionImage = motion(Image);

  // swipe detect
  const touchStartX = useRef(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? safeImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === safeImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const OpenPopUp = (e,current,length) => {
    e.stopPropagation();
    // setIsPopUp(true)
    open(Math.min(current, length - 1));

  }

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) handlePrev(); // swipe right
    if (diff < -50) handleNext(); // swipe left
  };


  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };
  
const popUpText = (e) => {
  e.stopPropagation();
  setIsTextPopup(true);
};


  const TextPopup = ({ description, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 text-white rounded-2xl p-6 max-w-lg w-[90%] shadow-lg relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Project Description</h2>
        <p className="leading-relaxed text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  );
};



  return (
    <>
    <div className="w-full h-full rounded gap-0 flex flex-col">

      {/* الصور */}
      <div
        className="w-full flex-3 aspect-[4/3]  rounded-t-2xl md:flex-2 relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
         {safeImages.length > 0 ? (
          <AnimatePresence custom={direction} mode="wait">
            <MotionImage
              key={currentIndex}
              src={safeImages[currentIndex]}
              alt={title || "project"}
              custom={direction}
              variants={variants}
              initial="enter"
              data-title='open popUp'
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              // currentIndex, project.images.length - 1
              onClick={e => OpenPopUp(e,currentIndex,images.length)}
              fill // مهم علشان الصورة تملى الـ parent
              className="object-cover cursor-pointer"
            />
          </AnimatePresence>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}

        {safeImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )} 
      </div>

      <div className="p-40 flex flex-col flex-[1]  ">
        <div className="w-full h-15 flex items-center justify-center">
        <span className="font-semibold text-white text-center text-2xl drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] mb-2">
          {title || "Untitled Project"}
        </span>         
        </div>
        <div className="w-full h-full rounded-b-2xl ">
            <p className="text-md text-gray-300 leading-relaxed flex-1 transition  ">
            {<>{description.slice(0,30)} <span data-title="click on" onClick={popUpText}  className="font-bold cursor-pointer duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">...more</span>"</>|| "No description provided."}
        </p>
        
        <div className="p-3 border-t flex justify-end ">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition"
            >
            <Github className="text-white w-5 h-5" data-title="link"/>
          </a>
          </div> 
        </div>
      </div>
    </div>
    
  <AnimatePresence>
  {isTextPopup && (
    <TextPopup
      description={description}
      onClose={() => setIsTextPopup(false)}
    />
  )}
</AnimatePresence>

    </>
  );
};

export default ProjectCardImga;

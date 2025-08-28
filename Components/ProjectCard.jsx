"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import ProjectPopup from "./ProjectPopup";

const ProjectCardImga = ({ title, description, images = [], reels = [], link = "#" }) => {
  const safeImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const hasImages = safeImages.length > 0;

  const [selected, setSelected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (safeImages.length < 2) return;
    setCurrentIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prevImage = () => {
    if (safeImages.length < 2) return;
    setCurrentIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  return (
    // <>
    //   {/* 🔥 الكارد */}
    //   <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-x shadow-xl w-full h-auto">
    //     <div className="bg-zinc-900 rounded-2xl flex flex-col overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full">
          
    //       {/* عنوان */}
    //       <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-center py-3 sm:py-4 px-2">
    //         {title || "Untitled Project"}
    //       </h3>

    //       {/* الصور */}
    //       <div
    //         className={`relative w-full aspect-[4/3] overflow-hidden ${
    //           hasImages ? "cursor-pointer" : "bg-gray-800 grid place-items-center"
    //         }`}
    //         onClick={() => hasImages && setSelected(true)}
    //       >
    //         {hasImages ? (
    //           <AnimatePresence mode="wait">
    //             <motion.img
    //               key={safeImages[currentIndex]}
    //               src={safeImages[currentIndex]}
    //               alt={`${title || "project"} - ${currentIndex + 1}`}
    //               className="w-full h-full object-cover"
    //               initial={{ opacity: 0, scale: 1.1 }}
    //               animate={{ opacity: 1, scale: 1 }}
    //               exit={{ opacity: 0, scale: 0.95 }}
    //               transition={{ duration: 0.4 }}
    //             />
    //           </AnimatePresence>
    //         ) : (
    //           <div className="text-gray-400 text-sm">No images available</div>
    //         )}

    //         {/* أزرار التنقل */}
    //         {hasImages && safeImages.length > 1 && (
    //           <>
    //             <button
    //               onClick={(e) => {
    //                 e.stopPropagation();
    //                 prevImage();
    //               }}
    //               className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 p-1.5 sm:p-2 rounded-full text-white hover:scale-110 transition-transform shadow-lg"
    //             >
    //               <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
    //             </button>
    //             <button
    //               onClick={(e) => {
    //                 e.stopPropagation();
    //                 nextImage();
    //               }}
    //               className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 p-1.5 sm:p-2 rounded-full text-white hover:scale-110 transition-transform shadow-lg"
    //             >
    //               <ChevronRight size={18} className="sm:w-5 sm:h-5" />
    //             </button>
    //           </>
    //         )}
    //       </div>

    //       {/* الوصف + اللينك */}
    //       <div className="p-3 sm:p-4 mt-auto flex items-center gap-3">
    //         <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 flex-1">
    //           {description || "No description provided."}
    //         </p>
    //         <a
    //           href={link}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full hover:scale-110 transition-transform shadow-md"
    //         >
    //           <Github className="text-white w-4 h-4 sm:w-5 sm:h-5" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/* البوب أب */}
    // </>
       <div
            className={`relative aspect-[4/3] overflow-hidden ${
              hasImages ? "cursor-pointer" : "bg-gray-800 grid place-items-center"
            }`}
            onClick={() => hasImages && setSelected(true)}
          >
            {hasImages ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={safeImages[currentIndex]}
                  src={safeImages[currentIndex]}
                  alt={`${title || "project"} - ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            ) : (
              <div className="text-gray-400 text-sm">No images available</div>
            )}
        </div>
  );
};

export default ProjectCardImga;

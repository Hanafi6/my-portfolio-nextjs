import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectPopup from "./PopUp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ title, description, images,link }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // ← جديد: لتحديد الاتجاه

const nextImage = () => {
  setDirection(1); // يمين
  setCurrentIndex((prev) => (prev + 1) % images.length);
};

const prevImage = () => {
  setDirection(-1); // شمال
  setCurrentIndex((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

  const openPopup = (index) => {
    setCurrentIndex(index);
    setShowPopup(prev => !prev);
    
  };

  
    useEffect(() => {
    },[currentIndex,showPopup])

  return (
    <div className="bg-[#11101b] rounded-2xl text-[#fff] shadow-lg p-[15px] flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      <div
        className=" cursor-pointer flex flex-row justify-around align-middle overflow-hidden rounded-xl"
        onClick={(e) => {
          openPopup(currentIndex)
        }}
        >
        <span><ArrowLeft onClick={e => {
          e.stopPropagation();
          prevImage()}} className="hover:text-red-500 duration-300"/></span>
        <AnimatePresence mode="wait">
        <motion.div
          key={images[currentIndex]} // لازم مفتاح يتغير مع الصورة
          initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-[80%] flex justify-center"
        >
          <Image
            src={images[currentIndex]}
            alt={title}
            width={250}
            height={500}
            className="object-cover rounded-xl w-[80%] transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </AnimatePresence>
      <span><ArrowRight onClick={e => {
        e.stopPropagation();
        nextImage();}} className="hover:text-blue-500 duration-300"/></span>
      </div>

      <p className="text-sm text-[#fff] mt-3 p-5 text-center">{description.slice(0,20)}...</p>

    {showPopup && (
      <AnimatePresence>
          <ProjectPopup
          key='popup'
            images={images}
            project={{ title, description, link, images }}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            closePopup={() => setShowPopup(false)}
            />
      </AnimatePresence>
    )}

    </div>
  );
};

export default ProjectCard;

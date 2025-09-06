import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const popupVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
};

const imageVariants = {
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

const ProjectPopup = ({ project, currentIndex, setCurrentIndex, closePopup,nextImage,prevImage }) => {

   const images = project.images;
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

const handleNext = () => {
  setDirection(1);
  nextImage(images.length);
};

const handlePrev = () => {
  setDirection(-1);
  prevImage(images.length);
}
  // Detect touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) handlePrev(); // swipe right
    if (diff < -50) handleNext(); // swipe left
  };

  return (
    <AnimatePresence >
      {images.length > 0 && (
        <motion.div
          key='overLay'
          className="fixed inset-0  max-h-[calc(100vh)] flex justify-center items-center backdrop-blur-lg bg-black/30 z-40"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={closePopup} // الضغط على الخلفية يقفل
        >
            <motion.div
              className="w-[350px] h-[calc(50vh-80px)] rounded-2xl overflow-hidden min-h-[300px] max-h-[500px] sm:w-[600px]"
              variants={popupVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              key='poup'
            >
               <div className="relative w-full h-full flex flex-col">
                <div className="flex-1 relative bg-black">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={images[currentIndex]}
                      variants={imageVariants}
                      custom={direction}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                      className="absolute rounded-2xl inset-0 w-full h-full"
                    >
                      <Image
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous image"
                    className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer  z-50 
                               bg-black/50  p-2 rounded hover:bg-black/70 transition"
                  >
                    <ArrowLeft size={28} className="text-red-500 font-black text-2xl"/>
                  </span>

                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next image"
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-white z-50 
                               bg-black/50 p-2 rounded hover:bg-black/70 transition"
                  >
                    <ArrowRight size={28} className="text-blue-500 font-black text-2xl"/>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closePopup();
                    }}
                    aria-label="Close popup"
                    className="absolute top-3 right-3 text-white z-50 bg-black/50 p-1 rounded-full hover:bg-black/70 transition"
                  >
                    <X size={28} className="text-red-600 font-black cursor-pointer hover:scale-[1.1] duration-200 hover:text-[#0037eb]" />
                  </button>
                </div>

              </div> 
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;

import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const popupVariants = {
  initial: { width: 0, height: 0, opacity: 0 },
  animate: { width: "80vw", height: "80vh", opacity: 1 },
  exit: { width: 0, height: 0, opacity: 0 },
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

const ProjectPopup = ({ images, currentIndex, setCurrentIndex, closePopup }) => {
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {images.length > 0 && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={closePopup}
          />

          {/* Popup */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 bg-white rounded-xl overflow-hidden shadow-xl w-[80vw] h-[80vh]"
            style={{ transform: "translate(-50%, -50%)" }}
            variants={popupVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative w-full h-full">

              {/* === Image Viewer with Animation === */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={images[currentIndex]}
                  variants={imageVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Close & Navigation Buttons */}
              <button onClick={closePopup} className="absolute top-3 right-3 text-white z-50">
                <X size={32} />
              </button>
              <span
                onClick={handlePrev}
                className="absolute hover:text-red-500 duration-300 top-1/2 left-3 cursor-pointer text-white z-50"
              >
                <ArrowLeft size={32} />
              </span>
              <span
                onClick={handleNext}
                className="absolute top-1/2 right-3 hover:text-blue-500 duration-300 cursor-pointer text-white z-50"
              >
                <ArrowRight size={32} />
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;

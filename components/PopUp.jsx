import { X, ArrowLeft, ArrowRight, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

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

const ProjectPopup = ({ project, currentIndex, setCurrentIndex, closePopup }) => {
  const images = project.images;
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
          {/* خلفية التعتيم */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={closePopup}
          />

          {/* البوب أب */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 bg-white rounded-xl overflow-hidden shadow-xl 
                       w-[80vw] h-[80vh] max-w-[1000px] max-h-[800px]
                       sm:w-[95vw] sm:h-[70vh] xs:w-[100vw] xs:h-[60vh]"
            style={{ transform: "translate(-50%, -50%)" }}
            variants={popupVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative w-full h-full flex flex-col">
              {/* عرض الصور */}
              <div className="flex-1 relative">
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
                      alt={`Image ${currentIndex + 1}`}
                      fill
                      className="object-contain bg-black"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* أزرار التنقل */}
                <span
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer text-white z-50 
                             bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  <ArrowLeft size={28} />
                </span>

                <span
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-white z-50 
                             bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  <ArrowRight size={28} />
                </span>

                {/* زر الإغلاق */}
                <button
                  onClick={closePopup}
                  aria-label="Close popup"
                  className="absolute top-3 right-3 text-white z-50 bg-black/50 p-1 rounded-full hover:bg-black/70 transition"
                >
                  <X size={28} />
                </button>
              </div>

              {/* عرض التفاصيل */}
              <div className="p-4 bg-white text-black overflow-y-auto max-h-[30%]">
                <h2 className="text-lg font-bold mb-2">{project.title}</h2>
                <p className="text-sm mb-3">{project.description}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;

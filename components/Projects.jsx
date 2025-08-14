"use client";
import ProjectCardImga from "@/components/ProjectCard";
import ProjectReal from "./ProjectReal";
import useNavStore from "../zustand/navStore";
import { projects } from "@/Data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Projects = () => {
  const { localSec, changeLocalSection } = useNavStore();

  const path = {
    img: <ProjectCardImga projects={projects} />,
    real: <ProjectReal projects={projects} />,
  };

  useEffect(() => {
    // console.log(projects);
  }, [localSec]);

  return (
    <section className="py-10 px-4  sm:px-6 md:px-8 lg:px-16 ">
      <div className="flex justify-center items-center  gap-4 z-10 mb-6 fixed  left-0 right-0 top-[60px] backdrop-blur-md py-2 px-2 sm:px-4">
      {/* أزرار السواپ */}
        {["img", "real"].map((sec) => (
          <div
            key={sec}
            className="relative cursor-pointer pb-1"
            onClick={() => changeLocalSection(sec)}
          >
            <span
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base ${
                localSec === sec ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {sec}
            </span>
            <AnimatePresence mode="sync">
              {localSec === sec && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* منطقة عرض المحتوى */}
      <div className="flex items-center justify-center px-2 sm:px-4 py-10">
        <div className="relative w-full top-[100px] max-w-7xl rounded-xl shadow-lg p-4 sm:p-6 md:p-8 overflow-y-auto h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] mt-[70px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={localSec}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className={
                localSec === "img"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full"
                  : "flex items-center justify-center w-full"
              }
            >
              {path[localSec] || <div>Section Not Found</div>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

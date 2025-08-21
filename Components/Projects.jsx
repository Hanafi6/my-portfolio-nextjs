"use client";
import ProjectCardImga from "../Components/ProjectCard";
// import useNavStore from "../zustand/navStore";
import { projects } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
//   const { localSec, changeLocalSection } = useNavStore();
    const [localSec, changeLocalSection] = useState();

  const path = {
    img: <ProjectCardImga projects={projects} />,
  };

  useEffect(() => {
  }, [localSec]);

  return (
    <section className="py-10 px-4 bg-red-400  sm:px-6 md:px-8 lg:px-16 ">
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

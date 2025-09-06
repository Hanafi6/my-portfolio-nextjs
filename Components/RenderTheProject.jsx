import React, { useEffect } from 'react'
import { useProjectStore } from '../zustand/ModalStore'
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCardImga from './ProjectCard';
import { projects } from '../data/projectsData';

function RenderTheProject() {
  const { activeProject } = useProjectStore();

  useEffect(() => {
    // console.log(activeProject)
  }, [activeProject]);

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div
        className='w-full h-full border-gray-300 rounded-lg '
        id='frame_the_Project'
      >
        <AnimatePresence mode="wait">
          {activeProject == null ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center items-center w-full h-full text-gray-400 text-xl font-semibold"
            >
              Choose Project
            </motion.div>
          ) : (
            <motion.div
              key={Math.random()}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              {projects
                .filter((p) => p.id === activeProject.id)
                .map((project,i) => <ProjectCardImga activeProject={activeProject} key={i} {...project} />)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default RenderTheProject;

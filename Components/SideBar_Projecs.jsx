"use client";
import React, { useEffect } from 'react'
import { projects } from '../data/projectsData'
import { motion } from 'framer-motion'
import { useProjectStore } from '../zustand/ModalStore';

function SideBar_Projecs() {
  const {activeProject,setActiveProject} = useProjectStore();

  useEffect(() => {
  },[activeProject])


  useEffect(() => {
    setActiveProject(null)
  },[])

  return (
    <aside className="absolute left-0 right-0 bg-[#707070] shadow-md rounded-lg w-full max-h-full p-5
                       sm:w-64 h-56 sm:h-full
                      overflow-y-auto flex-shrink-0">
      <div className="p-4 font-bold text-lg border-b text-black">Projects</div>
      <div className="flex flex-col">
        {projects.map((e, i) => (
            <motion.div
            key={i}
            whileHover={{ scale: 1, x: 6,width:'80%',borderRight:'5px solid #fff',borderRadius:'10px' }}
            className={`p-3 cursor-pointer text-[#5900ff]
              capitalize font-semibold 
              hover:bg-blue-50 transition-all select-none  ${activeProject?.id == e?.id ?  'bg-[#555] text-white':'text-[#003cff]'}`}
              onClick={() => {
                setActiveProject(e)
              }}
              >
            {e.title}
          </motion.div>
        ))}
      </div>
    </aside>
  )
}

export default SideBar_Projecs

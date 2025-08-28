'use client';

import { useModalStore } from '../zustand/ModalStore';
import SkillSphere from './SkillSphere';
import { motion, AnimatePresence } from 'framer-motion';
import SkillsStyle from './SkillsStyle';

let linksSkills = ['siklls', 'progress'];

const activeSec = {
  siklls: <SkillSphere key="skillSphere" />,
  progress: <SkillsStyle key="SkillsStyle" />,
};

export default function SkillsPage() {
  const { activeSkillsTab, setActiveSkillsTab } = useModalStore();

  return (
    <section
    id="skills"
  className="flex relative top-1 justify-center items-center rounded overflow-y-auto sm:min-h-[500px] sm:overflow-visible"
  >
      {/* ✅ NavBar في الديسكتوب (Top) */}
      <div className="hidden sm:flex w-full max-w-[500px] px-2 fixed top-10 left-1/2 -translate-x-1/2 justify-evenly items-center capitalize font-bold  backdrop-blur-md">
        {linksSkills.map((link) => (
          <div
            key={link}
            className="relative duration-100 hover:tracking-wider cursor-pointer select-none hover:text-amber-200 text-base"
            onClick={() => setActiveSkillsTab(link)}
          >
            {link}
            {activeSkillsTab === link && (
              <motion.div
                layoutId="skills-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-yellow-300"
                transition={{ type: "spring", stiffness: 1000, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ✅ NavBar في الموبايل (Bottom) */}
      <div className="sm:hidden fixed top-0 left-0 w-full flex  justify-evenly py-2 z-50 rounded-t-xl">
        {linksSkills.map((link) => (
          <div
            key={link}
            className={`relative cursor-pointer select-none text-sm font-semibold transition 
              ${activeSkillsTab === link ? "text-yellow-300" : "text-white/80"}`}
            onClick={() => setActiveSkillsTab(link)}
          >
            {link}
            {activeSkillsTab === link && (
              <motion.div
                layoutId="skills-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-yellow-300"
                transition={{ type: "spring", stiffness: 1000, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ✅ المحتوى مع الأنيميشن */}
      <div className="w-full px-2 sm:mt-20 pb-20  sm:pb-0 ">
        <div className="flex justify-center items-center sm:h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillsTab}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex justify-center items-center"
            >
              {activeSec[activeSkillsTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


    </section>
  );
}

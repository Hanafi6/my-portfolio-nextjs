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
    <section id="skills" className=" flex w-600  justify-center items-center rounded">
      {/* التابات */}
      <div className="w-[500px] absolute top-[3rem] backdrop-blur-md  left-1/2 -translate-x-1/2
        flex justify-evenly items-center capitalize font-bold z-10">
        {linksSkills.map((link) => (
          <div
            key={link}
            className="relative duration-100 hover:tracking-wider cursor-pointer select-none hover:text-amber-200"
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

      {/* المحتوى مع أنيميشن */}
      <div className="w-full  flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkillsTab} // مهم علشان Framer Motion يفهم إنه عنصر جديد
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
    </section>
  );
}

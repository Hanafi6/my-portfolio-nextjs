'use client';
import React, { useEffect, useState } from 'react';
import HomePage from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact'; // 🛑 هنا خليه كومبوننت مش أيكون
import { useModalStore } from '../zustand/ModalStore';
import { AnimatePresence, motion } from 'framer-motion';
import CV from './CV';

const contents = [
  {
    id: 1,
    title: "Home",
    component: <HomePage />,
  },
  {
    id: 2,
    title: "Projects",
    component: <Projects />,
  },
  {
    id: 3,
    title: "Skills",
    component: <Skills />,
  },
  {
      id: 4,
      title: "Contact",
      component: <Contact />,
  },
  {
      id: 5,
      title: "CV",
      component: <CV />,
  }
];

function RenderContent() {
  const [render, setRender] = useState(null); 
  const { activeTab } = useModalStore();

  useEffect(() => {
    const content = contents.find(ele => ele.title === activeTab);
    setRender(content ? content.component : null);
  }, [activeTab]);

  return (
    <div className=' flex w-full  justify-center'>
      <AnimatePresence mode="wait">
        {render && (
          <motion.div
            key={activeTab} // مهم عشان يعمل re-render مع الانيميشن
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 1000, damping: 30 }}
            // className="w-full h-full flex items-center justify-center"
          >
            {render}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default RenderContent;

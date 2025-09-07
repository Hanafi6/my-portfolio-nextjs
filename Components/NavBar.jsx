'use client';
import { Link, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHoverTitle, useModalStore, useSideBar } from '../zustand/ModalStore';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {

  const { StateOfSideBar, ChangeStateOfSideBar } = useSideBar()

  const { activeTab: activeLink, setActiveTab } = useModalStore();

  const handleOpenSideBar = () => {
    // ChangeStateOfSideBar(!StateOfSideBar)
  };

  useEffect(() => {
  }, [StateOfSideBar])

  const links = ["Home", "Projects", "Skills", 'CV',"Contact"];

  return (
    <nav className="fixed top-0 left-0 h-[30px] right-0  bg-[#0008497c] backdrop-blur-md text-white shadow-md z-50">
   
      <div className="max-w-7xl mx-auto flex items-center  px-4 py-3 md:py-4 relative">

         

        {/* Center → Links */}
        <div className="absolute left-1/2 w-[70%] lg:text-3xl  sm:w-[30%] font-black lg:flex lg:justify-start  hidden md:flex gap-8 text-sm  ">
          {links.map(link => (
            <div
              key={link}
              data-title="Click On"
              className="relative cursor-pointer text-[15px] select-none hover:text-amber-200"
              onClick={() => setActiveTab(link)}
            >
              {link}
              {activeLink === link && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0  -bottom-1 h-[2px] bg-yellow-300"
                  transition={{ type: "spring", stiffness: 1000, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Right → Icon */}
        <div
          // onClick={handleOpenSideBar} 
          className="cursor-pointer ml-auto"
        >
          <AnimatePresence mode="wait" initial={false}>
            {StateOfSideBar ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2, stiffness: 1000 }}
                whileHover={{ scale: 1.2, color: 'yellow' }}
                onClick={e => ChangeStateOfSideBar(false)}
              >
                <X className="w-7 h-7"  
                initial={{ opacity: 0, rotate: -90 }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.2, color: 'yellow' }}
                onClick={e => ChangeStateOfSideBar(true)}
                data-title="Open Menu"
              >
                <Menu className="w-7 h-7"  data-title="Open Menu || Ctrl + m" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
<div className="flex gap-4 items-center ml-auto">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xl transition-all"><FaFacebook /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-xl transition-all"><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl transition-all"><FaGithub /></a>
        </div>
      {/* Sidebar (for mobile only) */}
    
      </div>
    </nav>
  );
}

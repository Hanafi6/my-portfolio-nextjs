'use client';
import { Link, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHoverTitle, useModalStore, useSideBar } from '../zustand/ModalStore';

export default function NavBar() {

  const { StateOfSideBar, ChangeStateOfSideBar } = useSideBar()

  const { activeTab: activeLink, setActiveTab } = useModalStore();

  const handleOpenSideBar = () => {
    // ChangeStateOfSideBar(!StateOfSideBar)
  };

  useEffect(() => {
  }, [StateOfSideBar])

  const links = ["Home", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 h-[30px] right-0 bg-[#0008497c] backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 relative">

        {/* Center → Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8 text-sm font-medium ">
          {links.map(link => (
            <div
              key={link}
              data-title="Click On"
              className="relative cursor-pointer select-none hover:text-amber-200"
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

              >
                <Menu className="w-7 h-7" data-title="Open Menu" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sidebar (for mobile only) */}
    </nav>
  );
}

'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore, useSideBar } from "../zustand/ModalStore";
import { useEffect, useState } from "react";

// Hook علشان نعرف حجم الشاشة
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}


const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Sidebar() {
  const { StateOfSideBar, ChangeStateOfSideBar } = useSideBar();
    const { activeTab, setActiveTab } = useModalStore();
  
  const isDesktop = useMediaQuery("(min-width: 768px)"); // من أول 768px

  return (
    <AnimatePresence>
      {StateOfSideBar && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => ChangeStateOfSideBar(false)}
          />

          {/* Navigation */}
          {isDesktop ? (
            // ✅ Sidebar عالجنب (للشاشات الكبيرة)
            <motion.div
              key="sidebar"
              initial={{ x: "-100%", scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: "-100%", scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="fixed top-50 max-h-[500px] left-0 bottom-50 rounded-2xl w-[250px] sm:w-[300px] md:w-[350px] 
                         bg-gradient-to-br from-[#3afdb3] via-[#0c0042] to-[#1a1a2e]
                         shadow-2xl border-r-4 border-[#3afdb3] z-50
                         flex flex-col p-6"
            >
              <h2 className="text-white text-lg font-bold mb-6">Sidebar</h2>
              <nav className="flex flex-col gap-4 text-white">
                {sections.map((section) => (
                  <motion.span
                    key={section.id}
                    whileHover={{ color: "#3afdb3", borderBottom: '2px solid #3afdb3', width: "100%" }}
                    initial={{ width: 'fit-content' }}
                    data-title="click on"
                    // className="hover:text-[#3afdb3]  duration-200  cursor-pointer select-none"
                    className={`cursor-pointer select-none ${activeTab === section.label ? 'text-[#3afdb3] border-b-2 border-[#3afdb3]' : ''}`}
                    onClick={() => {
                      setActiveTab(section.label);
                      ChangeStateOfSideBar(false);
                    }}
                  >
                    {section.label}

                  </motion.span>
                ))}
              </nav>
            </motion.div>
          ) : (
            // ✅ Bottom Sheet (للشاشات الصغيرة)
            <motion.div
              key="bottom-sheet"
              initial={{ y: "100%", scale: 0 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: "100%", scale: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed bottom-0 left-0 right-0 h-[55%] 
                         bg-gradient-to-t from-[#0c0042] to-[#1a1a2e]
                         rounded-t-3xl shadow-2xl border-t-4 border-[#3afdb3]
                         z-50 p-6 flex flex-col items-center"
            >
              <h2 className="text-white text-xl font-bold mb-6">Menu</h2>
              <nav className="flex flex-col gap-6 text-white text-lg">
                {sections.map((section) => (
                  <span
                    key={section.id}
                    className={`cursor-pointer select-none ${activeTab === section.label ? 'text-[#3afdb3] border-b-2 border-[#3afdb3]' : ''}`}
                    
                    onClick={() => {
                      setActiveTab(section.label);
                      ChangeStateOfSideBar(false);
                    }}
                  >
                    {section.label}
                  </span>
                ))}
              </nav>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

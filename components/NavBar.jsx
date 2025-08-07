"use client";
import { Sidebar } from "lucide-react";
import { motion } from "framer-motion";
import useNavStore from "@/zustand/navStore";

const links = ["home", "skills", "projects", "contact"];

export default function Navbar() {
  const { activeSection, changeSection, hasHydrated, toogelSideBar } = useNavStore();

  if (!hasHydrated) return null;

  return (
    <div className="dark:bg-gray-800 bg-white z-30 shadow-2xl py-4 flex items-center justify-center gap-8 fixed top-0 left-0 right-0 h-[40px] px-4">
      
      {/* أيقونة الهامبرجر (Sidebar) – ظاهرة في كل الشاشات */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.01, color: "#FFEB3B" }}
        className="absolute left-4"
        onClick={() => toogelSideBar()}
      >
        <Sidebar size={28} />
      </motion.div>

      {/* الروابط – مخفية في الشاشات الصغيرة */}
      <div className="hidden sm:flex gap-8">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => changeSection(link)}
            className="relative text-sm font-semibold capitalize dark:text-white"
          >
            {link}
            {activeSection === link && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";
import { Sidebar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // <--- استدعاء الصورة
import useNavStore from "@/zustand/navStore";
import Link from "next/link";

const links = ["home", "skills", "projects", "contact"];

export default function Navbar() {
  const { activeSection, changeSection, hasHydrated, toogelSideBar } = useNavStore();

  if (!hasHydrated) return null;

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border-b border-gray-200/20 dark:border-gray-700/40 z-30 shadow-lg py-4 flex items-center justify-between sm:justify-center gap-4 sm:gap-8 fixed top-0 left-0 right-0 h-[30px] px-4"
    >
      {/* أيقونة اللوجو */}
      <div className="flex items-center gap-2 absolute right-5">
        <Link href='https://www.facebook.com/AMAag2' target="_blank">
          <Image
            src="/favicon_io/apple-touch-icon.png" // ضع الصورة هنا في مجلد public
            alt="Logo"
            width={20}
            height={20}
            className="cursor-pointer rounded-full"
          />
          </Link>
      </div>

      {/* أيقونة الهامبرجر */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="block cursor-pointer absolute left-5 text-gray-800 dark:text-white"
        onClick={() => toogelSideBar()}
      >
        <Sidebar size={28} />
      </motion.div>

      {/* الروابط */}
      <div className="hidden sm:flex gap-6 lg:gap-8">
        {links.map((link, index) => (
          <motion.button
            key={link}
            onClick={() => changeSection(link)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`relative text-sm font-semibold capitalize transition-colors duration-300
              ${activeSection === link ? "text-purple-500" : "text-gray-800 dark:text-gray-200"}
            `}
          >
            {link}
            {activeSection === link && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-500 rounded"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNumpy,
  SiFramer,
} from "react-icons/si";

const icons = [
  <FaHtml5 key="html" className="text-orange-500" />,
  <FaCss3Alt key="css" className="text-blue-500" />,
  <FaJs key="js" className="text-yellow-400" />,
  <FaReact key="react" className="text-cyan-400" />,
  <FaPython key="python" className="text-yellow-300" />,
    <FaGitAlt key="git" className="text-red-500" />,
    <SiNextdotjs key="next" className="text-black dark:text-white" />,
    <SiRedux key="redux" className="text-purple-500" />,
    <SiTailwindcss key="tailwind" className="text-sky-400" />,
    <SiNumpy key="numpy" className="text-indigo-400" />,
    <SiFramer key="framer" className="text-pink-400" />,
  ];
  export default function SkillsMarquee() {

  return (
    <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-[#0b0030] via-[#001f3f] to-[#0b0030]">
      <motion.div
        className="flex whitespace-nowrap gap-16 text-6xl sm:text-7xl md:text-8xl font-bold"
        animate={{ x: ["0%", "-50%"] }} // يمشي نص العرض بس
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {[...icons, ...icons].map((icon, i) => (
          <div
            key={i}
            className="drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] hover:scale-125 transition-transform"
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

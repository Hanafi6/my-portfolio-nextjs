"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiNumpy,
    SiFramer,
    SiPython,
} from "react-icons/si";
import { MdMobileFriendly } from "react-icons/md";

//  من أول ال 499 px التصميم بيبوظ

export default function SkillsStyle() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const icons = [
        { icon: <FaHtml5 />, name: "HTML", level: 90 },
        { icon: <FaCss3Alt />, name: "CSS", level: 90 },
        { icon: <FaJs />, name: "JavaScript", level: 99 },
        { icon: <FaReact />, name: "React", level: 90 },
        { icon: <FaGitAlt />, name: "Git", level: 90 },
        { icon: <SiNextdotjs />, name: "Next.js", level: 85 },
        { icon: <SiRedux />, name: "Redux", level: 85 },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 80 },
        { icon: <SiFramer />, name: "Framer Motion", level: 75 },
        { icon: <SiPython />, name: "Python", level: 70 },
        { icon: <SiNumpy />, name: "NumPy", level: 70 },
        { icon: <MdMobileFriendly />, name: "Responsive Design", level: 70 },
    ];

    // ظبط التصميم ريسبونس وأسس اللعبه من أول شاشت ال 470 px

    return (
        <div
            className="flex flex-col items-center justify-center w-full min-h-screen gap-10 "
            onClick={() => setSelectedSkill(null)}
        >
            <div
                className="grid grid-cols-2 [@media(min-width:470px)]:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()} // عشان مايقفلش لو دوست جوه
            >
                {icons.map((skill, index) => (
                    <div
                        key={index}
                        data-title={` Click On`}
                        onClick={() =>
                            setSelectedSkill(
                                skill.name === selectedSkill?.name ? null : skill
                            )
                        }
                        className={`
              flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer 
              transition-all duration-300
              ${selectedSkill && selectedSkill.name !== skill.name
                    ? "blur-sm opacity-50 scale-95"
                    : "hover:scale-105"
                        }
              bg-gradient-to-br from-[#0b0030] via-[#004e81] to-[#00a8b4]
              text-white shadow-[0_0_15px_rgba(0,200,255,0.4)] 
              hover:shadow-[0_0_35px_rgba(0,255,255,0.9)]
            `}
                    >
                        <div className="text-5xl drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
                            {skill.icon}
                        </div>
                        <p className="mt-2 font-bold text-lg">{skill.name}</p>

                        {/* Progress يظهر تحت الكارت المختار */}
                        <AnimatePresence>
                            {selectedSkill?.name === skill.name && (
                                <motion.div
                                    key="progress"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full mt-4"
                                >
                                    <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-4 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            className="h-4 rounded-full 
                        bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-600 
                        shadow-[0_0_20px_rgba(0,200,255,0.8)]"
                                        />
                                    </div>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-center mt-1 text-sm text-cyan-200 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"
                                    >
                                        {skill.level}%
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client";
import { motion, AnimatePresence, color } from "framer-motion";
import useNavStore from "@/zustand/navStore";
import { usePathname } from "next/navigation";
import {
    Home,
    Code2,
    FolderKanban,
    Mail,
    X
} from "lucide-react";
import { useEffect, useState } from "react";

const icons = {
    home: <Home size={20} />,
    skills: <Code2 size={20} />,
    projects: <FolderKanban size={20} />,
    contact: <Mail size={20} />,
};

export default function Sidebar() {
    const { changeSection, sidebar, toogelSideBar, activeSection } = useNavStore();
    const pathname = usePathname();
    const links = ["home", "skills", "projects", "contact"];

    const [active, setActive] = useState([true, false, false, false])


    // useEffect(() => {
    // }, [activeSection, active])


    return (
        <AnimatePresence>
            {sidebar && (
                <>
                    {/* الخلفية الشفافة */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={toogelSideBar}
                        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                    />

                    {/* السايدبار */}
                    <motion.aside
                        key="sidebar"
                        initial={{ width: 0, height: 0, x: -100, y: 100 }}
                        animate={{ width: "320px", height: "100vh", x: 0, y: 0 }}
                        exit={{ width: 0, height: 0, x: -100, y: 100 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="fixed left-0 top-0 z-50 bg-gradient-to-b from-purple-700 via-indigo-800 to-slate-900 text-white shadow-xl overflow-hidden"
                    >
                        <div className="p-4 flex justify-between items-center border-b border-white/20">
                            <h2 className="text-xl font-bold tracking-wide">My Portfolio</h2>
                            <button onClick={toogelSideBar} aria-label="Close Sidebar">
                                <X size={26} className="text-white hover:text-red-400 transition" />
                            </button>
                        </div>

                        <nav className="flex flex-col px-6 gap-2 mt-6">
                            {links.map((link, i, a) => {
                                let toogetArr = (arr, index) => {
                                    return arr.map((_, i) => i === index);
                                };
                                return (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            changeSection(link);
                                            setActive(toogetArr(active, i))
                                        }}
                                        // className={`flex ${activeSection == link && "text-red-500"} items-center gap-3 capitalize px-4 py-2 rounded-md transition-all cursor-pointer
                                        className={`flex ${active[i] && "text-red-500"} items-center gap-3 capitalize px-4 py-2 rounded-md transition-all cursor-pointer
                            hover:bg-white/10 ${pathname === `/${link}` ? "bg-white/10 border-l-4 border-white" : ""
                                            }`}
                                    >
                                        {icons[link]}
                                        <span className="text-base font-medium">{link}</span>
                                    </div>
                                )
                            }
                            )}
                        </nav>
                    </motion.aside>
                </>
            )
            }
        </AnimatePresence >
    );
}

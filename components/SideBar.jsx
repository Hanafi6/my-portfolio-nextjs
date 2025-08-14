"use client";
import { motion, AnimatePresence } from "framer-motion";
import useNavStore from "@/zustand/navStore";
import { usePathname } from "next/navigation";
import {
    Home,
    Code2,
    FolderKanban,
    Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import SideBarContent from "./SideBarContent";

const icons = {
    home: <Home size={20} />,
    skills: <Code2 size={20} />,
    projects: <FolderKanban size={20} />,
    contact: <Mail size={20} />,
};

export default function Sidebar() {
    const { hasHydrated, changeSection, sidebar, toogelSideBar, activeSection } = useNavStore();
    const links = ["home", "skills", "projects", "contact"];

    const [active, setActive] = useState([false, false, false, false]);

    // 👇 المزامنة ما بين Zustand والـ useState المحلي
    useEffect(() => {
        if (hasHydrated) {
            const currentIndex = links.findIndex(link => link === activeSection);
            const newActive = links.map((_, idx) => idx === currentIndex);
            setActive(newActive);
        }
    }, [activeSection, hasHydrated]);

    if (!hasHydrated) return null;

    return (
        <AnimatePresence>
            {sidebar && (
                <>
                    {/* Overlay */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9 }}
                        onClick={toogelSideBar}
                        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.aside
                        key="sidebar"
                        initial={{ width: 0, height: 0, x: -100, y: 100 }}
                        animate={{ width: "320px", height: "100vh", x: 0, y: 0 }}
                        exit={{ width: 0, height: 0, x: -100, y: 100 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="fixed left-0 top-0  z-[9999] bg-gradient-to-t from-purple-100 via-indigo-700 to-slate-900 text-white shadow-xl overflow-hidden"
                    >
                        <SideBarContent
                            active={active}
                            links={links}
                            activeSection={activeSection}
                            changeSection={changeSection}
                            icons={icons}
                            toogelSideBar={toogelSideBar}
                            setActive={setActive}
                        />
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

"use client";
import { useState } from "react";
import { Sidebar, X } from "lucide-react";
import { motion } from "framer-motion";
import useNavStore from "@/zustand/navStore";

const links = ["home", "skills", "projects", "contact"];

export default function Navbar() {
    const { activeSection, changeSection, toogelSideBar, sidebar } = useNavStore();


    return (
        <div className="bg-black shadow py-4 flex justify-center gap-8 absolute left-0 right-0 rounded h-[30px]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.01, color: "#FFEB3B" }}
                className="absolute left-0"
                onClick={e => {
                    toogelSideBar()
                }}
            >
                <Sidebar size={28} />
            </motion.div>



            {links.map((link) => (
                <button
                    key={link}
                    onClick={() => changeSection(link)}
                    className="relative text-sm font-semibold capitalize text-gray-800 dark:text-white"
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
    );
}

'use client'

// Rider.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHoverTitle } from "../zustand/ModalStore";
export default function Rider() {
  const title = useHoverTitle((s) => s.title);

  return (
    <div className="pointer-events-none  z-[1000] flex justify-center">
      <AnimatePresence>
        {title && (
          <motion.div
            key={title}
            initial={{ opacity: 0,  scaleX: 0 }}
            animate={{ opacity: 1,  scaleX: 1 }}
            exit={{ opacity: 0,  scaleX: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="pointer-events-auto max-w-[90vw] rounded fixed right-5 top-0  px-4 py-2 shadow-xl ring-1 ring-white/10 backdrop-blur bg-[#fff] font-bold p-5 text-black text-sm md:text-base"
          >
              <span className="capitalize">{title}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

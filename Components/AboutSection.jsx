"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative top-10 w-full h-screen flex items-center justify-center overflow-hidden">
      {/* الخلفية بالصورة */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/home.png"
          alt="About Me"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Overlay شفاف لدمج الألوان مع خلفية الأب */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80" />
      </motion.div>

      {/* المحتوى فوق الصورة */}
      <div className="relative z-10 text-center   px-6 sm:px-12">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-cyan-400 drop-shadow-lg"
        >
          Happy With Codeing 🙂
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-gray-200 text-lg sm:text-xl leading-relaxed"
        >
         This site is my personal site and it is made the way I like it and everything on it is mine. I hope you like it and I hope you like my projects and skills that I have presented here to improve the
          user experiences with <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Next.js</span>.
        </motion.p>
      </div>
    </section>
  );
}

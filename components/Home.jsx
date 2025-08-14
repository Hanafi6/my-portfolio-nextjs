"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  const [flipped, setFlipped] = useState(false);
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    if (spinning) return;
    setSpinning(true);
    setFlipped(false); // نرجعها للصورة الأمامية قبل ما نبدأ

    // نغير الصورة قبل ما توقف بـ نصف ثانية
    setTimeout(() => {
      setFlipped(true);
    }, 2000 - 500); // 500ms قبل نهاية الأنيميشن

    // نوقف الحركة بعد المدة
    setTimeout(() => {
      setSpinning(false);
    }, 2000);
  };

  return (
    <main className="w-full flex flex-col items-center">
      <section
        className="min-h-screen flex flex-col md:flex-row items-center justify-center
        bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]
        px-4 sm:px-6 md:px-12 py-20 pt-[80px] pb-[100px] gap-10
        w-full max-w-7xl"
      >
        {/* النص */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl mx-auto md:mx-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I’m <span className="text-blue-400">Mahmoud</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            A Front-End Developer crafting interactive and modern web
            experiences using <span className="text-purple-400">React</span> &
            <span className="text-blue-400"> Next.js</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#about"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition"
            >
              About Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 py-3 border border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-[#0f172a] transition"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>

        {/* صورة البروفايل */}
        <div
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 cursor-pointer"
          onClick={handleClick}
          style={{ perspective: "1000px" }} // تأثير 3D
        >
          <motion.div
            animate={{
              rotateY: spinning ? 360 * 3 : 0, // 3 لفات
              scale: spinning ? [1, 1.1, 1] : 1, // تكبير وتصغير بسيط
            }}
            transition={{
              duration: spinning ? 2 : 0.6,
              ease: "easeInOut",
            }}
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0f172a] bg-gradient-to-tr from-purple-500 to-blue-500 shadow-xl"
          >
            <Image
              src={flipped ? "/images/back_face.jpg" : "/images/prof.jpg"}
              alt={flipped ? "Profile Back" : "Profile Front"}
              fill
              className="object-cover"
            />
            {flipped && (
              <div className="absolute bottom-3 right-3 bg-white rounded-full p-1 shadow-lg">
                <CheckCircle2 size={28} className="text-blue-500" />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <AboutSection />
    </main>
  );
}

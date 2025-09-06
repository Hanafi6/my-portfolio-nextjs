"use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function BioText() {
  return (
    <div
      className="
        flex items-center justify-center 
        w-[260px] h-[70px]      /* موبايل صغير */
        sm:w-[320px] sm:h-[90px] /* تابلت */
        md:w-[400px] md:h-[110px] /* شاشة متوسطة */
        lg:w-[500px] lg:h-[130px] /* ديسكتوب */
        xl:w-[600px] xl:h-[150px] /* شاشة كبيرة */
        rounded-xl bg-[#000]/60 shadow-lg
      "
    >
      <h1
        className="
          font-extrabold text-center tracking-wide
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
          bg-clip-text text-transparent
          drop-shadow-[0_0_10px_rgba(0,0,255,0.7)]
          animate-pulse
        "
      >
        I am a{" "}
        <Typewriter
          words={[
            "Frontend Developer",
            "Mobile Application With React Native",
            "React & Next.js Enthusiast",
            "Building Smooth UI/UX",
          ]}
          loop={0} // مالانهاية
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
    </div>
  );
}

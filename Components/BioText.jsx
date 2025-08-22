"use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function BioText() {
  return (
    <div className="flex items-center justify-center w-[500px] h-[80px] rounded bg-[#000]/60">
      <h1
        className="text-2xl sm:text-3xl font-extrabold text-center 
                   bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
                   bg-clip-text text-transparent 
                   drop-shadow-[0_0_8px_rgba(0,0,255,0.6)]"
      >
        I am a{" "}
        <Typewriter
          words={[
            "Frontend Developer",
            "React & Next.js Enthusiast",
            "Building Smooth UI/UX",
          ]}
          loop={0} // يلف مالانهاية
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500} // وقت الاستراحة
        />
      </h1>
    </div>
  );
}

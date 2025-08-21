"use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function BioText() {
  return (
    <div className="text-lg sm:text-xl w-[400px]  font-bold text-center bg-[#fff] rounded text-blue-400 ">
      <Typewriter
        words={[
          "Frontend Developer",
          "React & Next.js Enthusiast",
          "Building Smooth UI/UX",
        ]}
        loop={0} // 0 يعني يفضل يلف مالانهاية
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500} // يستنى قد ايه قبل ما يمسح
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutSection from "./AboutSection";
import StartSec from "./StartSec";

export default function HomePage() {
  const [spinning, setSpinning] = useState(false);

  return (
    <main className="min-w-[90%] rounded  min-h-[80vh] ">
      <StartSec/>
  
      {/* <AboutSection /> */}
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import StartSec from "./StartSec";
import OrpitSec from '../Components/OrpitSec.jsx'

export default function HomePage() {
  const [spinning, setSpinning] = useState(false);

  return (
    <main className="relative min-w-[90%] min-h-[80vh] ">
      <StartSec />
      {/* إعرض هنا السكيلز تمشي ورا بعضها  خط كده بالعرض */}
      <OrpitSec/>
      <AboutSection />
      {/* إعمل بقا شكل حلو لرص المعلومات الشخصيه  */}
    </main>
  );
}

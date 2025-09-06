'use client'
import Image from 'next/image'
import React from 'react'
import BioText from './BioText'

function StartSec() {
  return (
    <section
      className="  max-w-[1500px] w-full backdrop-blur-lg
        min-h-[calc(800px)]   /* 100vh ناقص مساحة nav+footer */
        flex flex-col lg:flex-row   /* موبايل عمودي - ديسكتوب افقي */
        items-center justify-center gap-8
        px-4 sm:px-8 py-6
      "
    >
      {/* الصورة */}
      <div
        className="
          relative
          w-[220px] h-[320px]      /* حجم موبايل */
          sm:w-[260px] sm:h-[400px] /* حجم تابلت */
          md:w-[300px] md:h-[500px] /* حجم متوسط */
          lg:w-[350px] lg:h-[600px] /* حجم ديسكتوب */
          rounded-2xl overflow-hidden flex-shrink-0
        "
      >
        <Image
          src="/images/face.png"
          alt="Profile"
          fill
          className="object-contain rounded-2xl"
          priority
        />
      </div>

      {/* النص */}
      <div className="flex-1 w-fit max-w-2xl text-center lg:text-left">
        <BioText />
      </div>
    </section>
  )
}

export default StartSec

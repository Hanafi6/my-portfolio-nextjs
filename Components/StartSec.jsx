'use client'
import Image from 'next/image'
import React from 'react'
import BioText from './BioText'

function StartSec() {
  return (
    <div className="min-h-[80vh] flex flex-col sm:flex-row items-center justify-evenly px-4 py-6">

      {/* الصورة */}
      <div className="relative w-[300px] h-[600px] rounded overflow-hidden">
        {/* الصورة نفسها */}
        <Image
          src="/images/face.png"
          alt="Profile"
          fill
          className="object-contain  rounded-2xl"
          priority
        />
        {/* الفلتر المتدرج */}
      </div>
      {/* النص */}
      <BioText />
    </div>
  )
}

export default StartSec

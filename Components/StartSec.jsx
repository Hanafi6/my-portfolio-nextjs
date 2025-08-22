'use client'
import Image from 'next/image'
import React from 'react'
import BioText from './BioText'

function StartSec() {
  return (
    <div className="min-h-[100vh] flex flex-col sm:flex-row items-center justify-evenly px-4 py-6">

      {/* الصورة */}
      <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden">
        {/* الصورة نفسها */}
        <Image
          src="/images/face.png"
          alt="Profile"
          fill
          className="object-cover rounded-full"
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

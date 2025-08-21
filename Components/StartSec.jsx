'use client'
import Image from 'next/image'
import React from 'react'
import BioText from './BioText'

function StartSec() {
  return (
    <div className="min-h-[300px] flex flex-col sm:flex-row items-center align-bottom justify-evenly px-4 py-6 ">
      
      {/* الصورة */}
      <div className="relative w-[400px] h-[400px] flex items-center justify-center rounded-full">
        <Image
          src="/images/HomePage.png"
          alt="Profile"
          fill
          className="object-contain rounded-full"
          priority
        />
      </div>

      {/* النص */}
     <BioText />
    </div>
  )
}

export default StartSec

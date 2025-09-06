import React from 'react'
import Rider from './Rider'

function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-41
        bg-[#0008497c] backdrop-blur-md border-t border-white/20
        text-white 
        flex flex-col items-center justify-center gap-2
        py-3 px-4
        sm:flex-row sm:justify-between sm:px-10 
      "
    >
      {/* اللوجو أو النص */}
      <span className="text-sm sm:text-base font-semibold tracking-wide">
        © 2025 Mahmoud.dev
      </span>

      {/* اللينكات */}
      <div  className="flex gap-4 text-xs sm:text-sm font-medium">
          <Rider/>
      </div>
    </footer>
  )
}

export default Footer

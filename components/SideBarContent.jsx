import { X } from 'lucide-react';
import React from 'react';

function SideBarContent({ toogelSideBar, changeSection, activeSection, links, active, icons, setActive }) {
  return (
    <>
      <div className="p-4 flex justify-between items-center border-b border-white/20">
        <h2 className="text-xl font-bold tracking-wide">My Portfolio</h2>
        <button onClick={toogelSideBar} aria-label="Close Sidebar">
          <X size={26} className="text-white hover:text-red-400 transition" />
        </button>
      </div>

      <nav className="flex flex-col px-6 gap-2 mt-6">
        {links.map((link, i) => {
          const toggleArr = (arr, index) => {
            return arr.map((_, idx) => idx === index);
          };
          return (
            <div
              key={i}
              onClick={() => {
                changeSection(link);
                setActive(toggleArr(active, i));
              }}
              className={`flex ${active[i] ? "text-red-500" : "text-white"} items-center gap-3 capitalize px-4 py-2 rounded-md transition-all cursor-pointer hover:bg-white/10`}
            >
              {icons[link]}
              <span className="text-base font-medium">{link}</span>
            </div>
          );
        })}
      </nav>
    </>
  );
}

export default SideBarContent;

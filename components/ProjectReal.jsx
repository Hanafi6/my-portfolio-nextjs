"use client";
import React, { useState } from "react";
import ReelVideoPopup from "./PopUpRels";

const ProjectReal = ({ projects }) => {
  const [popupData, setPopupData] = useState(null);

  const allReels = projects.flatMap((p) =>
    p.reels?.map((src) => ({
      src,
      title: p.title,
      description: p.description,
      link: p.link || "https://github.com/example",
      github: p.github || "https://github.com/example",
      thumb: src + "#t=5", // لقطة من منتصف الفيديو
    })) || []
  );

  const openPopup = (reel) => setPopupData(reel);
  const closePopup = () => setPopupData(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allReels.map((reel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.02] transition"
            onClick={() => openPopup(reel)}
          >
            <div className="relative aspect-video">
              <video
                src={reel.thumb}
                className="w-full h-full object-cover object-center" // مقصوص من النص
                muted
                loop
                playsInline
              />
            </div>
          </div>
        ))}
      </div>

      {popupData && (
        <ReelVideoPopup
          reel={popupData}
          allReels={allReels}
          closePopup={closePopup}
        />
      )}
    </>
  );
};

export default ProjectReal;

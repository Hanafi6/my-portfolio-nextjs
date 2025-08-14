"use client";
import React, { useRef, useEffect, useState, useRef as useRefAlias } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";

const ReelVideoPopup = ({ reel, allReels, closePopup }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentReel, setCurrentReel] = useState(reel);

  // شريط التقدم + إظهار/إخفاء
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimeoutRef = useRefAlias(null);

  // تشغيل الفيديو عند تغيير الريل
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      setProgress(0);
    }
  }, [currentReel]);

  const handleTogglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) v.pause();
    else v.play().catch(() => {});
    setIsPlaying(!isPlaying);
    resetHideTimer();
  };

  // تحديث التقدم مباشرة من أحداث الفيديو
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !isFinite(v.duration) || v.duration === 0) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleLoadedMeta = () => {
    const v = videoRef.current;
    if (!v || !isFinite(v.duration) || v.duration === 0) {
      setProgress(0);
      return;
    }
    setProgress((v.currentTime / v.duration) * 100);
  };

  const resetHideTimer = () => {
    setShowControls(true);
    clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => setShowControls(false), 2000);
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v || !isFinite(v.duration) || v.duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = ratio * v.duration;
    setProgress(ratio * 100);
    resetHideTimer();
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" onClick={closePopup} />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative z-10 w-full max-w-6xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-xl overflow-hidden flex flex-col lg:flex-row"
        >
          {/* زر الإغلاق */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full z-20 hover:bg-black/70"
          >
            <X size={24} />
          </button>

          {/* الفيديو مع أنيميشن التبديل (التصميم كما هو) */}
          <div
            className="flex-1 bg-black relative"
            onMouseMove={resetHideTimer}
            onTouchStart={resetHideTimer}
            onClick={handleTogglePlay}
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={currentReel.src}
                ref={videoRef}
                src={currentReel.src}
                className="w-full aspect-video object-cover object-center"
                autoPlay
                loop={false}
                muted={false}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMeta}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

                {/* شريط التقدم */}
                <AnimatePresence>
                {showControls && (
                    <motion.div
                    key="progress-bar"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-0 w-full h-3 bg-gray-700 cursor-pointer z-20"
                    onClick={handleSeek}
                    >
                    <motion.div
                        className="h-full bg-red-500"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.08, ease: "linear" }}
                    />
                    </motion.div>
                )}
                </AnimatePresence>

            {/* Carousel تحت الفيديو (كما هو) */}

                <div className="flex gap-2 p-2 overflow-x-auto bg-gray-900 pointer-events-none">
                {allReels.map((r, idx) => (
                    <video
                    key={idx}
                    src={r.src + "#t=5"}
                    className={`w-28 h-16 object-cover object-center rounded cursor-pointer hover:ring-2 hover:ring-blue-500 ${
                        r.src === currentReel.src ? "ring-2 ring-blue-500" : ""
                    } pointer-events-auto`}
                    muted
                    loop
                    playsInline
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrentReel(r);
                    }}
                    />
                ))}
                </div>
          </div>

          {/* المعلومات (كما هي) */}
<div className="w-full lg:w-80 p-6 flex flex-col justify-center gap-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 transition-transform duration-300  hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
  {/* العنوان والوصف */}
  <div className="flex flex-col gap-3">
    <h3 className="font-extrabold text-3xl tracking-wide drop-shadow-lg">
      {currentReel.title}
    </h3>
    <p className="text-sm text-white/90 leading-relaxed drop-shadow-sm">
      {currentReel.description}
    </p>
  </div>

  {/* الأزرار */}
  <div className="flex items-center justify-between gap-4">
    <a
      href={currentReel.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 px-4 py-3 bg-white text-indigo-700 font-bold text-sm rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:text-white transition-all duration-300 text-center"
    >
      🚀 View Project
    </a>
    <a
      href={currentReel.github}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:rotate-6 transition-all duration-300"
    >
      <Github className="w-6 h-6 text-white" />
    </a>
  </div>
</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReelVideoPopup;

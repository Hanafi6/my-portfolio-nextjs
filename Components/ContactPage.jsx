'use client';

import { useEffect, useRef, useState } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaFacebook,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const contactItems = [
  {
    icon: <FaEnvelope size={32} />,
    label: 'Gmail',
    value: 'Lacheu7@gmail.com',
    link: 'mailto:Lacheu7@gmail.com?subject=Hello&body=أهلاً بك 👋',
    qr: '/images/QRCode/Lacheu7_gmail_com.png',
  },
  {
    icon: <FaGithub size={32} />,
    label: 'GitHub',
    value: 'github.com/Hanafi6',
    link: 'https://github.com/Hanafi6',
    qr: '/images/QRCode/Git_Hub.png',
  },
  {
    icon: <FaLinkedin size={32} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mahmoud-ahmed-64641a351',
    link: 'https://www.linkedin.com/in/mahmoud-ahmed-64641a351/',
    qr: '/images/QRCode/LinkedIn.png',
  },
  {
    icon: <FaFacebook size={32} />,
    label: 'Facebook',
    value: 'fb.com/mahmod.ahmad.594638',
    link: 'https://www.facebook.com/mahmod.ahmad.594638/',
    qr: '/images/QRCode/FaceBook.png',
  },
  {
    icon: <FaPhoneAlt size={32} />,
    label: 'WhatsApp',
    value: '+20 1282 1538 38',
    link: 'https://wa.me/201282153838',
    qr: '/images/QRCode/whtsap.png',
  },
  {
    icon: <FaPhoneAlt size={32} />,
    label: 'Call Me',
    value: 'https://t.me/+201282153838',
    link: 'tel:+201001234567',
    qr: '/images/QRCode/callme.png',
  },
  {
    icon: <FaPhoneAlt size={32} />,
    label: 'Telegram',
    value: '201282153838',
    link: 'https://t.me/+201282153838',
    qr: '/images/QRCode/callme.png',
  }
];

export default function ContactPage() {
  const [selectedQR, setSelectedQR] = useState(null);
  const contRef = useRef();

  const QRCodeSection = (e) => (
    <motion.div
      className="flex flex-col items-center gap-4 mt-6 min-h-[300px]"
      initial={{ scale: 0.8, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 40 }}
      transition={{ duration: 0.1 }}
    >
      <h2 className="text-xl font-semibold">{e.label}</h2>
      <div className="w-[160px] h-[160px] bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden shadow-xl border-4 border-cyan-500 shadow-cyan-500/50">
        <img
          src={e.image}
          alt="QR Code"
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm text-gray-400">امسح الكود للوصول المباشر</p>
    </motion.div>
  );

  useEffect(() => {
    if (selectedQR) {
      window.scrollTo({ top: 2000, behavior: 'smooth' });
    }

    const handleClickOutside = (e) => {
      if (contRef.current && !contRef.current.contains(e.target)) {
        setSelectedQR(null);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedQR]);

  function handleShowQR(e, item) {
    if (e.altKey) {
      e.preventDefault();
      setSelectedQR({ image: item.qr, label: item.label });
    }
  }

  return (
    <div
      title="altKey+click"
      className="min-h-screen w-full px-6 py-16 container mx-auto text-center flex flex-col items-center justify-start"
    >
      {/* GRID */}
      <div
        ref={contRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {contactItems.map((item, idx) => (
          <motion.a
            key={idx}
            onClick={(e) => handleShowQR(e, item)}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-title="alt + click"
            className="group flex flex-col items-center justify-center border rounded-2xl p-8 
                       shadow-xl shadow-cyan-500/20
                       bg-neutral-900/80 dark:bg-neutral-900 text-white backdrop-blur-lg 
                       transition-all duration-300 
                       hover:shadow-cyan-500/60 hover:border-cyan-400 hover:scale-[1.05]"
            whileHover={{ y: -6 }}
          >
            <div className="mb-3 text-cyan-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
              {item.icon}
            </div>
            <p className="font-semibold text-lg">{item.label}</p>
            <p className="text-sm text-gray-400 break-words text-center mt-2">
              {item.value}
            </p>
          </motion.a>
        ))}
      </div>

      {/* QR POPUP */}
      <AnimatePresence>
        {selectedQR && QRCodeSection(selectedQR)}
      </AnimatePresence>
    </div>
  );
}

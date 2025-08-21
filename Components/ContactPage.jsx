// src/app/Routs/contact/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaFacebook } from 'react-icons/fa';

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
    qr: '/images/QRCode/Git Hub.png',
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
    label: 'رقم الهاتف',
    value: '+20 1282 1538 38',
    link: 'https://wa.me/201282153838',
    qr: '/images/QRCode/Wahtsapp.png',
  },
];

export default function ContactPage() {
  const [selectedQR, setSelectedQR] = useState(null);
  const contRef = useRef();

  const QRCodeSection = (e) => (
    <div className="flex flex-col items-center gap-4 mt-6 min-h-[300px]">
      <h2 className="text-xl font-semibold">{e.label}</h2>
      <div className="w-[150px] h-[150px] bg-white dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden shadow-lg">
        <img src={e.image} alt="QR Code" className="w-full h-full object-contain" />
      </div>
      <p className="text-sm text-gray-500">امسح الكود للوصول المباشر</p>
    </div>
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
      className="min-h-screen py-12 px-4 container mx-auto text-center flex flex-col items-center justify-start"
    >
      <h1 className="text-3xl font-bold mb-10">تواصل معايا</h1>

      <div ref={contRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {contactItems.map((item, idx) => (
          <a
            key={idx}
            title="altKey+click"
            onClick={(e) => handleShowQR(e, item)}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center border rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900 dark:text-white"
          >
            <div className="mb-2 text-blue-600">{item.icon}</div>
            <p className="font-semibold">{item.label}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 break-words text-center">
              {item.value}
            </p>
          </a>
        ))}
      </div>

      {selectedQR && QRCodeSection(selectedQR)}
    </div>
  );
}

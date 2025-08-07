import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';




export const projects = [
  {
    id: 1,
    title: "react-product-cart-test",
    description: "تطبيق ذكي يولد بورتفوليو احترافي باستخدام الذكاء الاصطناعي بناءً على مهاراتك فقط.",
    images: [
      "/images/projects/Project1/img1.png",
      "/images/projects/Project1/img2.png",
    ],
    link: "https://github.com/Hanafi6/react-product-cart-test.git"
  },
  {
    id: 2,
    title: "Friend-verse Facebook",
    description: "تطبيق شات في الوقت الحقيقي باستخدام Socket.IO و React.",
    images: [
      "/images/projects/Project2/img1.png",
      "/images/projects/Project2/img2.png",
      "/images/projects/Project2/img3.png",
      "/images/projects/Project2/img4.png"
    ],
    link: "https://github.com/Hanafi6/Friend-verse.git"

  },
  {
  id: 3,
    title: "arabic-timer-game",
    description: "تطبيق شات في الوقت الحقيقي باستخدام Socket.IO و React.",
    images: [
      "/images/projects/Project3/img1.png",
      "/images/projects/Project3/img2.png",
      "/images/projects/Project3/img3.png",
      "/images/projects/Project3/img4.png"
    ],
    link: "https://github.com/Hanafi6/arabic-timer-game.git"
    
  }
];

// src/data/skills.ts
export const skills = [
  { id: 1, name: 'HTML', level: 'ممتاز', icon: 'FaHtml5' },
  { id: 2, name: 'CSS', level: 'ممتاز', icon: 'FaCss3Alt' },
  { id: 3, name: 'JavaScript', level: 'ممتاز', icon: 'FaJs' },
  { id: 4, name: 'React', level: 'ممتاز', icon: 'FaReact' },
  { id: 5, name: 'Next.js', level: 'جيد جدًا', icon: 'SiNextdotjs' },
  { id: 6, name: 'Redux', level: 'جيد جدًا', icon: 'SiRedux' },
  { id: 7, name: 'Tailwind CSS', level: 'ممتاز جدًا', icon: 'SiTailwindcss' },
  { id: 8, name: 'Git', level: 'جيد', icon: 'FaGitAlt' },
  { id: 9, name: 'Python', level: 'جيد جدًا', icon: 'FaPython' },
  { id: 10, name: 'VanillaTilt.js', level: 'جيد جدًا', icon: 'SiJavascript' }, // مؤقتًا هنستخدم أيقونة JavaScript
];

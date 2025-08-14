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


// utils/getImagePaths.js
export const getImagePaths = (projectNumber, count) => {
  return Array.from({ length: count }, (_, i) =>
    `/projects/Project${projectNumber}/imges/img${i + 1}.png`
  );
};

export const getReelPaths = (projectNumber, count) => {
  return Array.from({ length: count }, (_, i) =>
    `/projects/Project${projectNumber}/reels/reel${i + 1}.mp4`
  );
};



export const projects = [
  {
    id: 1,
    title: "react-product-cart-test",
    description:
      "A React SPA for testing state management and dynamic product cart functionality with JSON Server.",
    images: getImagePaths(1, 2), 
    link: "https://github.com/Hanafi6/react-product-cart-test.git",
  },
  {
    id: 2,
    title: "Friend-verse Facebook",
    description: "A full-featured social media platform built with React, mimicking Facebook’s core features. Includes user authentication, friend requests, real-time chat, posts with likes and comments, and dynamic profiles. Built using ReactJS, React Router, Context API, JSON Server, and styled with CSS..",
    images: getImagePaths(2, 5),
    reels: getReelPaths(2, 1), 
    link: "https://github.com/Hanafi6/Friend-verse.git",
  },
  {
    id: 3,
    title: "arabic-timer-game",
    description: "لعبة عربية بسيطة تعتمد على مؤقت تنازلي وصوتيات تفاعلية، مع عرض نتيجة الأداء النهائي للمستخدم بعد انتهاء الوقت.",
    images: getImagePaths(3, 4), 
    reels: getReelPaths(3, 1), 
    link: "https://github.com/Hanafi6/arabic-timer-game.git",
  },
  {
    id: 4,
    title: "Todo App Video",
    description: "A modern and responsive Todo App built with Next.js, Zustand for full state management, Framer Motion for animations, and JSON Server as a mock backend. Features full server/client component integr…",
    images: getImagePaths(4, 6), 
    reels: getReelPaths(4, 1), 
    link: "https://github.com/Hanafi6/nextjs-zustand-todo-app.git",
  },
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
  { id: 10, name: 'VanillaTilt.js', level: 'جيد جدًا', icon: 'SiJavascript' }, 
];

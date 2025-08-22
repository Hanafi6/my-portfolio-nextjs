'use client';

import { TagSphere } from 'react-tag-sphere';
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
  SiNumpy,
  SiFramer
} from 'react-icons/si';

const icons = [
  <FaHtml5 key="html" />,
  <FaCss3Alt key="css" />,
  <FaJs key="js" />,
  <FaReact key="react" />,
  <FaPython key="python" />,
  <FaGitAlt key="git" />,
  <SiNextdotjs key="next" />,
  <SiRedux key="redux" />,
  <SiTailwindcss key="tailwind" />,
  <SiNumpy key="numpy" />,
  <SiFramer key="SiFramer" />,
];

export default function SkillSphere() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-24">
      <TagSphere
        tags={icons}
        radius={200}
        speed={0.5}
        keepRollingAfterMouseOut={true}
        className="
          text-[2rem] 
          text-gradient-to-r from-[#0b0024] via-[#004e81] to-[#00a8b4] 
          bg-clip-text 
          drop-shadow-[0_0_10px_rgba(0,168,180,0.8)]
          animate-pulse
        "
      />
    </div>
  );
}

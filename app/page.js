'use client';
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/SideBar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Homesection from "../components/Home";
import { useEffect, useState } from "react";
import useNavStore from "@/zustand/navStore";



// const sections = [<Homesection />, <Skills />, <Projects />, <Contact />];

const sections = {
  home: <Homesection />,
  skills: <Skills />,
  projects: <Projects />,
  contact: <Contact />
};


export default function Home() {
  const { activeSection } = useNavStore();
  const [section, setSection] = useState(null)

  useEffect(() => {
    setSection(sections[activeSection] || <Homesection />);
  }, [activeSection]);

  return (
    <>
      <Sidebar />
      <MainContent  >
        {section}
      </MainContent>

    </>
  );
}

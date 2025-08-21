'use client'

import { useEffect } from "react";
import HomePage from "../../Components/Home";
import Contact from "../../Components/Contact";
import ProjectCardImga from "../../Components/ProjectCard";
import Projects from "../../Components/Projects.jsx";
import Sidebar from "../../Components/SightBar";
import RenderContent from '../../Components/RenderContent.jsx';

export default function Home() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Sidebar/>

        <RenderContent />
        {/* <ProjectCardImga /> */}
        {/* <Projects /> */}
      </main>
    );
}

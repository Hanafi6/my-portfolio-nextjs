'use client'

import { useEffect } from "react";
import Sidebar from "../../Components/SideBar";
import RenderContent from '../../Components/RenderContent.jsx';
import {  useProjectStore } from "../../zustand/ModalStore";
import HoverWatcher from "../../Components/Wacher";
import {useProductModal} from '../../zustand/ModalStore'
import {AnimatePresence,motion} from 'framer-motion';
import ProjectPopup from "../../Components/ProjectPopup";


export default function Home() {
    const {isOpen,setCurrentIndex,currentIndex,close,nextImage,prevImage} = useProductModal();
    const {activeProject} = useProjectStore();
    return (
      <main className="min-h-[90vh] flex flex-col relative top-[2rem] ">
        <HoverWatcher />
        <Sidebar/>
            {isOpen && (
              <AnimatePresence >
                  <ProjectPopup project={activeProject} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} nextImage={nextImage} prevImage={prevImage} closePopup={e => close()} />
              </AnimatePresence>
            )}
        <RenderContent />
      </main>
    );
}

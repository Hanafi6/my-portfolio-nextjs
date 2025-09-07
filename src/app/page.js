'use client'

import { useEffect } from "react";
import Sidebar from "../../Components/SideBar";
import RenderContent from '../../Components/RenderContent.jsx';
import {  useProjectStore, useSideBar } from "../../zustand/ModalStore";
import HoverWatcher from "../../Components/Wacher";
import {useProductModal} from '../../zustand/ModalStore'
import {AnimatePresence,motion} from 'framer-motion';
import ProjectPopup from "../../Components/ProjectPopup";


export default function Home() {
    const {isOpen,setCurrentIndex,currentIndex,close,nextImage,prevImage} = useProductModal();
    const {activeProject} = useProjectStore();
    const {ChangeStateOfSideBar} = useSideBar();
    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';  
    }, [isOpen]);

      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape' && isOpen) {
            close();
          }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [isOpen]);

      useEffect(() => {
        const handleResize = () => {
          if (isOpen) {
            close();
          }
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isOpen]);

      useEffect(() => {
        document.body.style.backgroundColor = isOpen ? 'rgba(0, 0, 0, 0.5)' : '';
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, [isOpen]);


      useEffect(() => {
        const event = (e => {
          if (e.ctrlKey && e.key === 'm' || e.key === 'M') {
            e.preventDefault();
            ChangeStateOfSideBar(true);
          }
        });
        document.addEventListener('keydown', event);
        return () => {
          document.removeEventListener('keydown', event);
        };
      }, []);

    return (
      <main className="min-h-[90vh] flex flex-col relative top-[2rem] ">
        <HoverWatcher />
        <Sidebar />
        {isOpen && (
          <AnimatePresence>
            <ProjectPopup project={activeProject} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} nextImage={nextImage} prevImage={prevImage} closePopup={e => close()} />
          </AnimatePresence>
        )}
        <RenderContent />
      </main>
    );
}

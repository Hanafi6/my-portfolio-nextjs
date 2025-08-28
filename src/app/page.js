'use client'

import { useEffect } from "react";
import Sidebar from "../../Components/SightBar";
import RenderContent from '../../Components/RenderContent.jsx';
import { UseRider } from "../../zustand/ModalStore";
import HoverWatcher from "../../Components/Wacher";

export default function Home() {

    return (
      <main className="min-h-[90vh] flex flex-col relative top-[2rem] ">
        <HoverWatcher />
        <Sidebar/>
        <RenderContent />
      </main>
    );
}

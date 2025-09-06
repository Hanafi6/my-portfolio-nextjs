"use client";
import React from "react";
import SideBar_Projecs from "./SideBar_Projecs";
import RenderTheProject from "./RenderTheProject";

function Projects() {

  return (
    <section id="popUp"  className="relative h-[90vh] w-[350px] max-w-[900px] rounded backdrop-blur-lg flex flex-col sm:items-center items-center 
      sm:flex-row  max-h-[800px] sm:w-[600px] 
      sm:h-[calc(100vh-60px)]
      md:w-[900px]  md:h-[calc(100vh-60px)]
      lg:w-[1000px] lg:h-[calc(100vh-60px)]   
      xl:min-w-[1080px] xl:h-[calc(100vh-60px)]
      p-2 sm:p-6 lg:p-10 
      gap-2 sm:gap-6"> 
      <div className="w-[300px] h-[300px]  sm:h-full flex-shrink-0">
      <SideBar_Projecs/>
      </div>
      <div className="w-[300px] h-[300px] absolute bottom-0 md:static sm:static lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[400px]  sm:w-[300px] sm:h-[300px]  flex items-center justify-start">
        <RenderTheProject/>
      </div>
    </section>
  );
}

export default Projects;

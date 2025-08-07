"use client";
import { projects } from "@/Data/projectsData";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen py-10 px-4 overflow-y-auto">
      <div className="relative w-full h-screen ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full px-4">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// انتا خلاص كده معدش ليه إلا الprojectssection
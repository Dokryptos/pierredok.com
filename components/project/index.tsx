"use client";

import Grid from "../ui/grid";
import ProjectType from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UIImageSanity } from "../ui/image/sanity";

interface ProjectComponentProps {
  projectCurrent: ProjectType;
  projectAll: ProjectType[];
}

export default function ProjectComponent({ projectCurrent, projectAll }: ProjectComponentProps) {
  const pathname = usePathname();
  console.log(projectCurrent);
  return (
    <Grid className="pt-5 pl-4 pr-4">
      <div className="col-start-6 md:col-start-5 lg:col-start-6 col-span-2 z-50 flex flex-col text-[8px] gap-1">
         <p>Category<span className="text-[12px] pl-4">{projectCurrent.category}</span></p>
         <p>Year<span className="text-[12px] pl-8">{projectCurrent.year}</span></p>
         <p>Designer<span className="text-[12px] pl-4">{projectCurrent.Designer}</span></p>
         <p>Link<span className="text-[12px] pl-8.5">{projectCurrent.link}</span></p>
      </div>
      <div>
        {projectCurrent.gallery.map((item, index) => {
            return item.image ? (<UIImageSanity key={index} asset={item.image} alt={`${projectCurrent.title} n'${index}`} className="w-full h-auto" />) : null;
        })}
      </div>

      <div className="col-start-3 row-1 z-50">
        <h2 className="uppercase text-sm">Projects</h2>
        <div className="flex flex-col">
        {projectAll.map((project) => {
          const projectPath = `/${project.slug.current}`;
          
          const isActive = pathname === projectPath || 
                          (pathname === "/" && project._id === projectCurrent._id);

          return (
            <Link 
              key={project._id} 
              href={projectPath}
              className={`transition-colors duration-200 hover:text-black ${
                isActive ? "text-black" : "text-gray-400"
              }`}
            >
              {project.title}
            </Link>
          );
        })}
        </div>
      </div>
    </Grid>
  );
}
"use client";

import Grid from "../ui/grid";
import ProjectType from "@/types/project";

interface ProjectComponentProps {
  projectCurrent: ProjectType;
  projectAll: ProjectType[];
}

export default function ProjectComponent({ projectCurrent, projectAll }: ProjectComponentProps) {
  console.log(projectCurrent);
  return (
    <Grid className="pt-5 pl-4 pr-4">
      <div className="col-start-3">
        <h1 className="mb-6">Projects</h1>
        {projectAll.map((project) => (
          <div key={project._id} className="flex-col">
            <h2 className="text-lg font-bold">{project.title}</h2>
          </div>
        ))}
      </div>
    </Grid>
  );
}

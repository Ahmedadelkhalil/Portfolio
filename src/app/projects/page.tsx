import type { Metadata } from "next";
import Card from "@/components/projects/card";
import projects from "@/data/projects";

export const metadata: Metadata = {
  title: "Ahmed Adel | Projects",
  description: "Ahmed Adel's Projects",
};

const Projects = () => {
  return (
    <section className="m-5 mb-10 sm:m-20">
      <h1 className="mb-10 text-2xl sm:text-3xl font-[Marcellus] uppercase font-bold">{`projects | ${projects.length}`}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project) => {
          return (
            <div
              className="border border-[#e5e7eb] shadow-md rounded-md mx-auto max-w-[400px] w-[100%] lg:max-w-[100%]"
              key={project.project_name}
            >
              <Card
                project_name={project.project_name}
                project_img={project.project_img}
                project_date={project.project_date}
                project_desc={project.project_desc}
                project_tech={project.project_tech}
                project_demo={project.project_demo}
                project_code={project.project_code}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

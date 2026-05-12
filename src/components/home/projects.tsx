import { Link } from "react-router-dom";
import { PrimaryBtn } from "../button";

import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section className="bg-white py-8 md:py-12 fluid__container">
      <h2 className="text-center font-sansita text-3xl md:text-5xl mb-10 text-black">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-wrap gap-4">
            <figure className="grow basis-[300px]">
              <div
                className="aspect-610/500 flex justify-center items-center py-10"
                style={{ backgroundColor: project.bgColor[0] }}
              >
                <img
                  src={project.displayImage[0]}
                  alt={project.title}
                  className="h-auto w-[80%] block mx-auto"
                />
              </div>
              <figcaption className="font-ubuntu font-bold text-2xl md:text-[2.25rem] text-black mt-6">
                {project.title}
              </figcaption>
            </figure>
            <div className="grow basis-[300px]">
              <figure
                style={{ backgroundColor: project.bgColor[1] }}
                className="aspect-610/500 flex justify-center items-center"
              >
                <img
                  src={project.displayImage[1]}
                  alt={project.title}
                  className="h-auto w-[80%] block mx-auto"
                />
              </figure>
              <div className="flex flex-col gap-4 px-2 mt-6">
                <p className="font-overlock text-base sm:text-lg leading-relaxed font-bold">
                  {project.shortDescription}
                </p>
                <div className="mt-2">
                  <Link to={`/project/${project.id}`}>
                    <PrimaryBtn text="View Project" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

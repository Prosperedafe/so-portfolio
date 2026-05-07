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
            <div className="grow basis-[300px]">
              <div
                className="aspect-4/3 flex items-center justify-center overflow-hidden mb-6 shadow-sm transition-transform hover:scale-[1.02] duration-300"
                style={{ backgroundColor: project.bgColor }}
              >
                <span className="text-white/40 font-inter italic font-medium">
                  {project.imagePlaceholder}
                </span>
              </div>
              <h3 className="font-roboto-condensed font-semibold text-2xl md:text-[2.25rem] text-black">
                {project.title}
              </h3>
            </div>
            <div className="grow basis-[300px]">
              <div
                className="aspect-4/3 flex items-center justify-center overflow-hidden mb-6 shadow-sm transition-transform hover:scale-[1.02] duration-300"
                style={{ backgroundColor: project.bgColor }}
              >
                <span className="text-white/40 font-inter italic font-medium">
                  {project.imagePlaceholder}
                </span>
              </div>
              <div className="flex flex-col gap-4 px-2">
                <p className="font-poppins text-base sm:text-lg leading-relaxed font-medium">
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

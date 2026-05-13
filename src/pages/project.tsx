import { Link, useParams } from "react-router-dom";
import { PrimaryBtn } from "../components/button";
import { projects } from "../data/projects";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[currentIndex + 1];

  return (
    <main className="bg-white fluid__container">
      <section className="">
        <div
          className="flex p-12"
          style={{ backgroundColor: project.fullDescriptionBg }}
        >
          {project.descriptionImages?.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={image} alt={project.title} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="font-overlock font-bold text-xl md:text-[2rem] leading-tight text-black mb-6">
            {project.fullDescription}
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-[350px]">
            <div>
              <h4 className="text-[#817E73] text-lg mb-1 font-poppins font-medium">
                Duration
              </h4>
              <p className="font-medium text-black font-inter text-sm">
                {project.duration}
              </p>
            </div>
            <div>
              <h4 className="text-[#817E73] text-lg mb-1 font-poppins font-medium">
                Tools
              </h4>
              <p className="font-medium text-black font-inter text-sm">
                {project.tools.join(", ")}
              </p>
            </div>
            <div>
              <h4 className="text-[#817E73] text-lg mb-1 font-poppins font-medium">
                Role
              </h4>
              <p className="font-medium text-black font-inter text-sm">
                {project.role}
              </p>
            </div>
          </div>
        </div>
      </section>
      {project.challenges && (
        <div>
          <section
            style={{ backgroundColor: project.challengeBg }}
            className="mt-12 p-16 md:py-24 flex"
          >
            {project.challengeImages?.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </section>
          <p className="font-overlock font-bold text-xl md:text-[2rem] leading-tight text-black mt-6">
            {project.challenges}
          </p>
        </div>
      )}
      <section>
        <div
          style={{ backgroundColor: project.solutionBg }}
          className="mt-12 p-16 md:py-24 flex"
        >
          {project.solutionImages?.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={image} alt={project.title} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <p className="font-overlock font-bold text-xl md:text-[2rem] leading-tight text-black mt-6 mb-12">
          {project.solutions}
        </p>
      </section>

      {nextProject && (
        <section className="pb-12">
          <h2 className="font-ubuntu font-bold text-2xl md:text-4xl mb-12">
            Next Project
          </h2>
          <div className="group">
            <div
              className="p-16 rounded-3xl aspect-video flex items-center justify-center mb-6 transition-transform group-hover:scale-[1.01]"
              style={{ backgroundColor: project.nextProjectBg }}
            >
              <img
                src={nextProject.displayImage[0]}
                alt={nextProject.title}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <h3 className="grow basis-[300px] font-ubuntu font-bold text-2xl md:text-4xl">
                {nextProject.title}
              </h3>
              <div className="grow basis-[300px]">
                <p className="font-overlock font-bold text-base md:text-lg mb-6">
                  {nextProject.shortDescription}
                </p>
                <Link to={`/project/${nextProject.id}`}>
                  <PrimaryBtn text="View Project" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Project;

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
    <main className="bg-white">
      <section className="fluid__container pt-8 md:pt-12">
        <div
          className=""
          style={{ backgroundColor: project.fullDescriptionBg }}
        ></div>
      </section>

      <section className="fluid__container py-16 md:py-24">
        <div className="max-w-[1000px]">
          <p className="font-roboto-condensed font-medium text-2xl md:text-[2.25rem] leading-tight text-black mb-12">
            {project.fullDescription}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-gray-400 uppercase text-xs tracking-widest mb-2 font-inter font-bold">
                Duration
              </h4>
              <p className="font-bold text-black font-inter">
                {project.duration}
              </p>
            </div>
            <div>
              <h4 className="text-gray-400 uppercase text-xs tracking-widest mb-2 font-inter font-bold">
                Tools
              </h4>
              <p className="font-bold text-black font-inter">
                {project.tools.join(", ")}
              </p>
            </div>
            <div>
              <h4 className="text-gray-400 uppercase text-xs tracking-widest mb-2 font-inter font-bold">
                Role
              </h4>
              <p className="font-bold text-black font-inter">{project.role}</p>
            </div>
          </div>
        </div>
      </section>
      {project.challenges && (
        <section className="bg-[#D9D9D9] py-16 md:py-24">
          <div className="fluid__container">
            <div className="bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 border-2 border-dashed border-black/5 rounded-xl aspect-square flex items-center justify-center italic text-black/10">
                Mockup Group A
              </div>
              <div className="flex-1 border-2 border-dashed border-black/5 rounded-xl aspect-square flex items-center justify-center italic text-black/10">
                Mockup Group B
              </div>
            </div>
            <p className="mt-8 text-black font-medium max-w-[800px] font-inter text-sm md:text-base">
              {project.challenges}
            </p>
          </div>
        </section>
      )}
      <section className="bg-[#EFE7CE] py-16 md:py-24">
        <div className="fluid__container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-2 bg-white rounded-3xl aspect-video flex items-center justify-center italic text-black/10 border border-black/5">
              Main Solution Mockup
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white rounded-3xl aspect-9/16 flex items-center justify-center italic text-black/10 border border-black/5">
                Mobile A
              </div>
              <div className="bg-white rounded-3xl aspect-9/16 flex items-center justify-center italic text-black/10 border border-black/5">
                Mobile B
              </div>
            </div>
          </div>
          <p className="mt-8 text-black font-medium max-w-[800px] font-inter text-sm md:text-base">
            {project.solutions}
          </p>
        </div>
      </section>

      {nextProject && (
        <section className="fluid__container py-20 md:py-32">
          <h2 className="font-sansita text-4xl mb-12">Next Project</h2>
          <div className="group">
            <Link to={`/project/${nextProject.id}`}>
              <div
                className="rounded-3xl aspect-video flex items-center justify-center overflow-hidden mb-8 transition-transform group-hover:scale-[1.01]"
                // style={{ backgroundColor: nextProject.bgColor }}
              >
                <div className="text-white/20 italic">
                  {/* {nextProject.imagePlaceholder} */}
                </div>
              </div>
            </Link>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-2">
              <div className="max-w-[700px]">
                <h3 className="font-sansita text-3xl md:text-5xl mb-4">
                  {nextProject.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm md:text-base">
                  {nextProject.shortDescription}
                </p>
              </div>
              <Link to={`/project/${nextProject.id}`}>
                <PrimaryBtn text="View Project" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Project;

import { Link } from "react-router-dom";
import { PrimaryBtn } from "../button";
import { projects } from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useAppReady } from "../../context/app-context";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { isAppReady } = useAppReady();

  useEffect(() => {
    if (!isAppReady) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".projects-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
          },
        }
      );

      // Animate each project item
      const projectItems = gsap.utils.toArray<HTMLElement>(".project-item");
      projectItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isAppReady]);

  return (
    <section ref={containerRef} className="bg-white py-8 md:py-12 fluid__container">
      <h2 className="projects-title opacity-0 text-center font-sansita text-3xl md:text-5xl mb-10 text-black">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="project-item opacity-0 flex flex-wrap gap-4">
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
              <figcaption className="font-ubuntu font-bold text-2xl md:text-4xl text-black mt-6">
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

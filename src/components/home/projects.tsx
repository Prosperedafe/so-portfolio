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
        },
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
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isAppReady]);

  return (
    <section
      ref={containerRef}
      className="bg-white py-8 md:py-12 fluid__container"
    >
      <h2 className="projects-title opacity-0 text-center font-sansita text-3xl md:text-5xl mb-10 text-black">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item opacity-0 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.displayImage.map((image, index) => {
                const hasBgImage =
                  project.bgImages &&
                  project.bgImages[index] &&
                  project.bgImages[index].trim() !== "";
                return (
                  <div
                    key={index}
                    className="aspect-[610/500] flex justify-center items-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
                    style={{
                      backgroundImage: hasBgImage
                        ? `url(${project.bgImages![index]})`
                        : "none",
                      backgroundColor: hasBgImage
                        ? "transparent"
                        : project.bgColor[index % project.bgColor.length],
                    }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="relative z-10 w-[95%] h-[95%] object-contain block mx-auto transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-start justify-between gap-6 mt-2">
              <h3 className="grow basis-[300px] font-ubuntu font-bold text-2xl md:text-4xl text-black">
                {project.title}
              </h3>
              <div className="grow basis-[300px] flex flex-col gap-4 px-2">
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

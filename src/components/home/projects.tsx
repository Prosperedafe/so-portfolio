import { Link } from "react-router-dom";
import { PrimaryBtn } from "../button";
import { projects } from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useAppReady } from "../../context/app-context";

gsap.registerPlugin(ScrollTrigger);

const AnimatedStackSlider = ({ images }: { images: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || images.length < 2) return;
    const elements = containerRef.current.children;
    const img1 = elements[0];
    const img2 = elements[1];

    const tl = gsap.timeline({ repeat: -1 });

    // Initial setup
    gsap.set(img1, { yPercent: 0, scale: 1, zIndex: 30, opacity: 1 });
    gsap.set(img2, { yPercent: 100, scale: 1, zIndex: 40, opacity: 1 });

    // 1. Img 1 sits for 1s, then scales down to background
    tl.to(
      img1,
      {
        scale: 0.75,
        opacity: 0.6,
        duration: 0.5,
        ease: "power3.inOut",
        zIndex: 20,
      },
      "+=1",
    );
    // 2. ONCE it has scaled in, Img 2 slides up to front
    tl.to(img2, { yPercent: 0, duration: 0.5, ease: "power3.out" });

    // 3. Instantly reset Img 1 behind the scenes
    tl.set(img1, { yPercent: 100, scale: 1, zIndex: 40, opacity: 1 });
    tl.set(img2, { zIndex: 30 }); // Img 2 is now proper active base

    // 4. Img 2 sits for 1s, then scales down to background
    tl.to(
      img2,
      {
        scale: 0.75,
        opacity: 0.6,
        duration: 0.5,
        ease: "power3.inOut",
        zIndex: 20,
      },
      "+=1",
    );
    // 5. ONCE it has scaled in, Img 1 slides up to front
    tl.to(img1, { yPercent: 0, duration: 0.5, ease: "power3.out" });

    // 6. Instantly reset Img 2 behind the scenes
    tl.set(img2, { yPercent: 100, scale: 1, zIndex: 40, opacity: 1 });
    tl.set(img1, { zIndex: 30 });

    return () => {
      tl.kill();
    };
  }, [images]);

  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center"
      ref={containerRef}
      style={{
        aspectRatio: "2184 / 1400",
        background: "linear-gradient(135deg, #606060, #404040)",
      }}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none p-[2.5%]">
        <img
          src={images[0]}
          className="absolute inset-0 m-auto w-full h-full object-contain"
          alt="slide 1"
        />
      </div>
      <div className="absolute inset-0 w-full h-full pointer-events-none p-[2.5%]">
        <img
          src={images[1]}
          className="absolute inset-0 m-auto w-full h-full object-contain"
          alt="slide 2"
        />
      </div>
    </div>
  );
};

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
              {project.displayImage.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
                  >
                    {project.id === "cityhealth" && index === 1 ? (
                      <AnimatedStackSlider
                        images={["/city-health.png", project.displayImage[1]]}
                      />
                    ) : (
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="relative z-10 block mx-auto w-full h-auto p-[2.5%] object-contain"
                      />
                    )}
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

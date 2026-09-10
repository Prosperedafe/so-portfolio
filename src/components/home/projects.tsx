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
    const container = containerRef.current;
    if (!container || images.length < 2) return;
    const slides = container.children as HTMLCollectionOf<HTMLElement>;
    const slide1 = slides[0];
    const slide2 = slides[1];

    if (!slide1 || !slide2) return;

    const tl = gsap.timeline({ repeat: -1 });

    // Initial setup:
    // Slide 1 is active at full size in front
    gsap.set(slide1, { yPercent: 0, scale: 1, zIndex: 10 });
    // Slide 2 is held completely offscreen below
    gsap.set(slide2, { yPercent: 100, scale: 1, zIndex: 20 });

    // 1. Slide 1 sits at full size for 1s, then scales in (reduces in size)
    tl.to(
      slide1,
      {
        scale: 0.78,
        duration: 0.55,
        ease: "power2.inOut",
      },
      "+=1",
    )
      // 2. Pause briefly on the reduced slide (0.3s)
      // 3. Slide 2 comes up from bottom at full size, completely covering Slide 1
      .to(
        slide2,
        {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "+=0.3",
      )
      // 4. Once Slide 2 is covering, reset Slide 1 behind the scenes offscreen below
      .set(slide1, { yPercent: 100, scale: 1, zIndex: 30 })
      .set(slide2, { zIndex: 20 })

      // 5. Slide 2 sits at full size for 1s, then scales in (reduces in size)
      .to(
        slide2,
        {
          scale: 0.78,
          duration: 0.55,
          ease: "power2.inOut",
        },
        "+=1",
      )
      // 6. Pause briefly on the reduced slide (0.3s)
      // 7. Slide 1 comes up from bottom at full size, completely covering Slide 2
      .to(
        slide1,
        {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "+=0.3",
      )
      // 8. Once Slide 1 is covering, reset Slide 2 behind the scenes to initial primed state
      .set(slide2, { yPercent: 100, scale: 1, zIndex: 20 })
      .set(slide1, { zIndex: 10 });

    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.play();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [images]);

  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-xl bg-[#E8ECEF]"
      ref={containerRef}
      style={{
        aspectRatio: "2184 / 1400",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full overflow-hidden rounded-xl shadow-xl bg-white pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <img
          src={images[0]}
          className="w-full h-full object-cover object-top block"
          alt="slide 1"
        />
      </div>
      <div
        className="absolute inset-0 w-full h-full overflow-hidden rounded-xl shadow-xl bg-white pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <img
          src={images[1]}
          className="w-full h-full object-cover object-top block"
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

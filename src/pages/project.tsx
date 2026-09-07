import { Link, useParams } from "react-router-dom";
import { PrimaryBtn } from "../components/button";
import { projects } from "../data/projects";
import { useEffect, useRef } from "react";

const ContinuousSlider = ({ images }: { images: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const container = containerRef.current;
    if (!container) return;

    let x = 0;
    // Increase for faster speed, decrease for slower
    const speed = 3.5;

    // Optional: pause on hover (can be enabled if preferred)
    // container.addEventListener("mouseenter", () => isHovered = true);
    // container.addEventListener("mouseleave", () => isHovered = false);

    const animate = () => {
      x -= speed;

      const firstSetWidth = container.scrollWidth / 2;
      if (Math.abs(x) >= firstSetWidth) {
        x += firstSetWidth; // Seamless reset
      }

      container.style.transform = `translateX(${x}px)`;

      const middleOfScreen = window.innerWidth / 2;
      const children = Array.from(container.children) as HTMLElement[];

      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(middleOfScreen - childCenter);

        // Adjust scale max and min to see the effect more pronounced
        const maxScale = 1.15;
        const minScale = 0.85;
        const maxDist = window.innerWidth / 2;

        let scale = maxScale - (distance / maxDist) * (maxScale - minScale);
        if (scale < minScale) scale = minScale;

        // Optimize layout thrashing by updating transform string directly
        // We use translateZ(0) to force hardware acceleration
        child.style.transform = `scale(${scale}) translateZ(0)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Concatenate array to make it continuously loopable
  const duplicatedImages = [...images, ...images];

  return (
    <div className="flex w-max gap-8 px-4 py-8" ref={containerRef}>
      {duplicatedImages.map((image, index) => (
        <div
          key={index}
          className="flex items-center justify-center shrink-0 w-[60vw] sm:w-[350px] lg:w-[500px] transition-transform duration-50"
          style={{ willChange: "transform" }}
        >
          <img
            src={image}
            alt={`slider-img-${index}`}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

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
          className={`flex overflow-hidden ${
            project.id === "cityhealth" ? "py-12" : "p-12 justify-center"
          }`}
          style={{ backgroundColor: project.fullDescriptionBg }}
        >
          {project.id === "cityhealth" && project.descriptionImages ? (
            <ContinuousSlider images={project.descriptionImages} />
          ) : (
            project.descriptionImages?.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            ))
          )}
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
            className="mt-12 h-[750px] flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 overflow-hidden"
          >
            {project.challengeImages?.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full -mt-16 lg:-mt-24"
              >
                <img
                  src={image}
                  alt={project.title}
                  className="w-full h-auto block"
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
          style={{
            backgroundColor: project.solutionBg,
            backgroundImage: project.solutionBackgroundImage
              ? `url(${project.solutionBackgroundImage})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="mt-12 h-[750px] flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 overflow-hidden"
        >
          {project.solutionImages?.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full"
            >
              <img
                src={image}
                alt={project.title}
                className="w-full h-auto block"
              />
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
              className="p-16 aspect-video flex items-center justify-center mb-6 transition-transform group-hover:scale-[1.01]"
              style={{
                backgroundColor:
                  nextProject.bgColor[0] || project.nextProjectBg,
              }}
            >
              <img
                src={nextProject.displayImage[0]}
                alt={nextProject.title}
                className="w-[85%] lg:w-[75%] h-auto max-h-[85%] object-contain"
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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useAppReady } from "../../context/app-context";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { isAppReady } = useAppReady();

  useEffect(() => {
    if (!isAppReady) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isAppReady]);

  return (
    <section
      ref={containerRef}
      className="fluid__container py-8 md:py-12 flex flex-wrap items-center justify-between gap-8 lg:gap-12"
    >
      <div className="grow basis-[400px] lg:basis-[500px]">
        <span className="hero-anim opacity-0 text-primary font-overlock font-black tracking-normal text-sm uppercase mb-4 block">
          Welcome to my world
        </span>

        <h1 className="hero-anim opacity-0 font-inter font-bold text-4xl md:text-[4rem] mb-6">
          Hi, I'm Salvation
        </h1>

        <h2 className="hero-anim opacity-0 font-work-sans font-medium text-lg md:text-[1.5rem] leading-relaxed uppercase mb-8">
          I'm a UI/UX designer focused on solving real-world problems through
          clean and intuitive interfaces.
        </h2>

        <p className="hero-anim opacity-0 font-overlock font-bold text-base md:text-lg leading-loose">
          I help brands turn complex ideas into seamless, enjoyable products.
          From mobile apps to web platforms, I focus on understanding user needs
          and crafting interfaces that are not only visually engaging but
          effortless to use. Combining research, creativity, and design
          thinking, I deliver solutions that delight users and drive measurable
          results.
        </p>
      </div>

      <div className="hero-anim opacity-0 grow basis-[200px] lg:basis-[100px] overflow-hidden rounded-[10px] ">
        <img
          src="/salvation-potrait.png"
          alt="Salvation"
          className="w-full scale-[1.01]"
        />
      </div>
    </section>
  );
};

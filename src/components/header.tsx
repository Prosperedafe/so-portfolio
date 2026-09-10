import { PrimaryBtn } from "./button";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAppReady } from "../context/app-context";

export const Header = () => {
  const windowWidth = useWindowWidth();
  const logoRef = useRef<HTMLDivElement>(null);
  const text = "Salvation Ovie";
  const { isAppReady } = useAppReady();

  useEffect(() => {
    if (!isAppReady) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".logo-char",
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "bounce.out",
          stagger: 0.08,
        },
      );
    }, logoRef);

    return () => ctx.revert();
  }, [isAppReady]);

  return (
    <header className="py-6 fluid__container">
      <nav
        className="flex items-center justify-between gap-4"
        aria-label="Main Navigation"
      >
        <div
          ref={logoRef}
          className={`${windowWidth < 300 ? "text-lg" : "text-2xl"} font-langar font-semibold sm:text-[2rem] flex`}
          role="img"
          aria-label="Salvation Ovie Logo"
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="logo-char inline-block opacity-0"
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <PrimaryBtn
            size={windowWidth < 350 ? "sm" : "base"}
            text="Let's Talk"
            onClick={() => (window.location.href = "mailto:hello@example.com")}
          />
        </div>
      </nav>
    </header>
  );
};

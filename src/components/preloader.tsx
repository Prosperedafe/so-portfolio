import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Preloader = ({
  onComplete,
}: {
  onComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate SO text reveal
      tl.from(".so-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
        // Counter animation
        .to(
          { val: 0 },
          {
            val: 100,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function () {
              setProgress(Math.round(this.targets()[0].val));
            },
          },
          "<"
        )
        // Progress bar width
        .to(
          ".progress-bar",
          {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          "<"
        )
        // Slide the preloader up to reveal the app
        .to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
          delay: 0.4,
          onComplete: () => onCompleteRef.current(),
        });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="flex gap-1 mb-10 overflow-hidden">
        {["S", "O"].map((char, index) => (
          <span
            key={index}
            className="so-text text-8xl md:text-9xl font-langar font-bold inline-block"
          >
            {char}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center w-48 gap-3">
        <div className="text-xl font-mono font-medium tracking-widest">{progress}%</div>
        <div className="h-[2px] w-full bg-gray-800 overflow-hidden rounded-full">
          <div className="progress-bar h-full bg-white w-0" />
        </div>
      </div>
    </div>
  );
};

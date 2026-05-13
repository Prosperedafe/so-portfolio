// import Marquee from "react-fast-marquee";

export const Marquee = ({
  fontSize,
  text,
  // speed = 2,
  // direction = "left",
}: {
  fontSize?: string;
  text: string;
  speed?: number;
  direction?: "left" | "right";
}) => {
  return (
    <div style={{ fontSize: fontSize }} className="overflow-hidden">
      <div className="marquee flex w-max whitespace-nowrap text-[4rem] md:text-[6rem] lg:text-[9.38rem] font-sansita">
        {[...Array(10)].map((_, i) => (
          <div className="flex shrink-0 items-center gap-6 px-4" key={i}>
            {text}{" "}
            <img
              className="h-[0.8em] object-contain"
              src="/brand-logo.jpg"
              alt="salvation design brand logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

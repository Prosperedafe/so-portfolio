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
      <div className="marquee whitespace-nowrap text-[4rem] md:text-[6rem] lg:text-[9.38rem] font-sansita">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
};

// import Marquee from "react-fast-marquee";

export const Marquee = ({
  fontSize,
  text,
  speed,
  direction,
}: {
  fontSize: string;
  text: string;
  speed: number;
  direction: "left" | "right";
}) => {
  return <div style={{ fontSize: fontSize }}>{text}</div>;
};

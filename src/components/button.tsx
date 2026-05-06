export const PrimaryBtn = ({
  text,
  onClick,
  size = "base",
}: {
  text: string;
  size?: "sm" | "base" | "lg" | "xl";
  onClick?: () => void;
}) => {
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    base: "text-base px-8 py-2",
    lg: "text-lg px-10 py-5",
    xl: "text-xl px-12 py-6",
  };

  return (
    <button
      className={`rounded-full border-2 border-border font-inter font-bold hover:bg-primary hover:text-white transition-all duration-300 ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

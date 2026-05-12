import { PrimaryBtn } from "./button";
import { useWindowWidth } from "../hooks/useWindowWidth";

export const Header = () => {
  const windowWidth = useWindowWidth();

  return (
    <header className="py-6 fluid__container">
      <nav
        className="flex items-center justify-between gap-4"
        aria-label="Main Navigation"
      >
        <div
          className={`${windowWidth < 300 ? "text-lg" : "text-2xl"} font-langar font-semibold sm:text-[2rem]`}
          role="img"
          aria-label="Salvation Ovie Logo"
        >
          Salvation Ovie
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

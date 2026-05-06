import { PrimaryBtn } from "./button";

export const Header = () => {
  return (
    <header className="py-6 fluid__container">
      <nav
        className="flex items-center justify-between gap-4"
        aria-label="Main Navigation"
      >
        <div
          className="font-langar font-semibold text-2xl sm:text-[2rem]"
          role="img"
          aria-label="Salvation Ovie Logo"
        >
          Salvation Ovie
        </div>
        <div className="flex items-center gap-6">
          <PrimaryBtn
            text="Let's Talk"
            onClick={() => (window.location.href = "mailto:hello@example.com")}
          />
        </div>
      </nav>
    </header>
  );
};

export const Hero = () => {
  return (
    <section className="fluid__container py-8 md:py-12 flex flex-wrap items-center justify-between gap-8 lg:gap-12">
      <div className="grow basis-[400px] lg:basis-[500px]">
        <span className="text-primary font-overlock font-black tracking-normal text-sm uppercase mb-4 block">
          Welcome to my world
        </span>

        <h1 className="font-inter font-bold text-4xl md:text-[4rem] mb-6">
          Hi, I'm Salvation
        </h1>

        <h2 className="font-inter font-medium text-lg md:text-[1.5rem] leading-relaxed uppercase mb-8">
          I'm a UI/UX designer focused on solving real-world problems through
          clean and intuitive interfaces.
        </h2>

        <p className="font-work-sans text-base md:text-lg leading-loose">
          I help brands turn complex ideas into seamless, enjoyable products.
          From mobile apps to web platforms, I focus on understanding user needs
          and crafting interfaces that are not only visually engaging but
          effortless to use. Combining research, creativity, and design
          thinking, I deliver solutions that delight users and drive measurable
          results.
        </p>
      </div>

      <div className="grow basis-[200px] lg:basis-[100px]">
        <div className="aspect-4/5 w-full bg-[#1A1A1A] rounded-[40px] overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl">
          <span className="text-light/20 font-inter font-medium italic">
            Image Section
          </span>
        </div>
      </div>
    </section>
  );
};

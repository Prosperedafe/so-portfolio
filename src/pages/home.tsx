// import { ContactForm } from "../components/contact-form";
import { Hero } from "../components/home/hero";
import { Projects } from "../components/home/projects";
import { Marquee } from "../components/marquee";

const Home = () => {
  return (
    <main>
      <Hero />
      <Marquee speed={2} direction={"left"} text={"SALVATION OVIE"} />
      <Projects />
      {/* <ContactForm /> */}
    </main>
  );
};

export default Home;

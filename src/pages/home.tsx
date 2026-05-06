import { Marquee } from "../components/marquee";

const Home = () => {
  return (
    <main className="text-lg">
      <section>
        <Marquee
          fontSize={"20px"}
          speed={2}
          direction={"left"}
          text={
            "I am a Full Stack Developer. I am passionate about building web applications."
          }
        />
        <h2>Hero</h2>
      </section>
    </main>
  );
};

export default Home;

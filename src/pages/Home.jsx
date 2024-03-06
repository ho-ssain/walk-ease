import { Hero } from "../components";
import { heroapi } from "../data/data";

const Home = () => {
  return (
    <>
      <main>
        <Hero heroApi={heroapi} />
      </main>
    </>
  );
};

export default Home;

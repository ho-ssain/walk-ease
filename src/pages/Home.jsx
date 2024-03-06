import { Hero, Sales } from "../components";
import { heroapi, popularsales, toprateslaes } from "../data/data";

const Home = () => {
  return (
    <>
      <main className="relative flex flex-col gap-16">
        <Hero heroApi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  );
};

export default Home;

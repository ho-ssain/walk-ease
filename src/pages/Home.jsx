import {
  FlexContent,
  Footer,
  Hero,
  NavBar,
  Sales,
  Stories,
} from "../components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "../data/data";

const Home = () => {
  return (
    <>
      <main className="relative flex flex-col gap-16">
        <NavBar />
        <Hero heroApi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerApi={footerAPI} />
      </main>
    </>
  );
};

export default Home;

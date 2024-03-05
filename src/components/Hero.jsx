import { useEffect, useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const Hero = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl("");
  }, [imageUrl]);

  return (
    <div>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-y-10 container mx-auto"
      >
        <section className="relative z-10 xl:w-2/5 flex flex-col justify-center items-start px-8 pt-28">
          <p className="text-xl text-[#ff6452]">
            Our collection for the summer season
          </p>
          <h1 className="mt-10 font-palanquin text-black text-8xl max-sm:text-[72px] leading-[106px] max-sm:leading-[82px] font-bold">
            <span className="bg-white relative z-10 pr-10 lg:text-8xl font-palanquin xl:whitespace-nowrap">
              The Latest Arrival
            </span>
            <br />
            <span className="text-[#ff6452] inline-block mt-3">Nike</span> Shoes
          </h1>

          <p className="text-[#6d6d6d] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Explore the latest arrivals from WalkEase, offering stylish designs,
            premium comfort, and innovative features for your active lifestyle.
          </p>

          <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#ff6452] text-white hover:bg-opacity-50">
            Shop Now{" "}
            <HiArrowCircleRight className="ml-2 rounded-full text-2xl" />
          </button>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            <div>
              <p className="text-5xl font-palanquin font-bold text-black">
                1k+
              </p>
              <p className="leading-7 font-montserrat text-[#6d6d6d]">Brands</p>
            </div>

            <div>
              <p className="text-5xl font-palanquin font-bold text-black">
                40k+
              </p>
              <p className="leading-7 font-montserrat text-[#6d6d6d]">Sold</p>
            </div>

            <div>
              <p className="text-5xl font-palanquin font-bold text-black">
                30k+
              </p>
              <p className="leading-7 font-montserrat text-[#6d6d6d]">
                Customers
              </p>
            </div>
          </div>
        </section>
      </section>

      <section></section>
    </div>
  );
};

export default Hero;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Clips from "./Clips";
import SocialLink from "./SocialLink";

const Hero = ({
  heroApi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="relative flex h-auto w-auto flex-col">
        <div className="bg-theme clip-path absolute left-0 right-0 top-0 z-10 h-[85vh] w-auto opacity-100 lg:h-[75vh] md:h-[65vh] sm:h-[55vh]"></div>

        <div className="nike-container relative z-20 grid items-center justify-items-center opacity-100">
          <div className="mt-28 grid items-center justify-items-center md:mt-24">
            <h1 className="text-6xl font-extrabold text-slate-200 drop-shadow-sm filter lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl">
              {title}
            </h1>

            <h1 className="text-6xl font-extrabold text-slate-200 drop-shadow-sm filter lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl">
              {subtitle}
            </h1>

            <button
              type="button"
              className="button-theme my-5 rounded-xl bg-slate-200 shadow-slate-200"
            >
              {btntext}
            </button>

            <div className="absolute left-[11%] top-[33vh] grid h-auto w-auto items-center gap-5 xl:left-0 lg:top-[27vh] md:gap-3">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>

            <div className="absolute right-0 top-[33vh] grid items-center gap-3 lg:top-[27vh]">
              {sociallinks?.map((val, i) => (
                <SocialLink key={i} icon={val.icon} />
              ))}
            </div>
          </div>

          <div>
            <img
              src={img}
              alt="hero-img/img"
              className="transitions-theme h-[45vh] w-auto -rotate-[25deg] cursor-pointer object-fill hover:rotate-0 lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

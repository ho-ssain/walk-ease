/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import Title from "./Title";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />

        <div className="mt-7">
          <Splide options={splideOptions}>
            {news?.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 rounded-lg pb-2 shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt={`img/story${i}`}
                      className="h-auto w-full rounded-tl-lg rounded-tr-lg object-cover shadow-md shadow-slate-200"
                    />
                  </div>

                  <div className="flex w-full items-center justify-between px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style h-5 w-5  text-red-500" />
                      <span className="text-xs font-bold">{val.like} </span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style h-4 w-4 text-black" />
                      <span className="text-xs font-bold">{val.time} </span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">
                        {val.by}
                      </span>
                    </div>
                  </div>

                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {val.title}
                    </h1>
                    <p className="text-justify text-sm lg:text-xs">
                      {truncate(val.text, { length: 175 })}
                    </p>
                  </div>

                  <div className="flex w-full items-center justify-center px-4">
                    <a
                      href={val.url}
                      target="_blank"
                      role={"button"}
                      className="button-theme w-full bg-gradient-to-b from-slate-900 to-black py-1.5 text-center text-slate-100 shadow-md shadow-black"
                    >
                      {val.btn}
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;

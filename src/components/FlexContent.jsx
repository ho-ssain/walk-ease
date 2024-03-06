/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const FlexContent = ({
  ifExists,
  endpoint: { title, heading, text, img, btn, url },
}) => {
  return (
    <>
      <div
        className={`nike-container flex items-center justify-between lg:flex-col lg:justify-center ${ifExists ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="grid w-full max-w-lg items-center lg:max-w-none lg:justify-items-center md:text-center">
          <h1 className="text-gradient text-4xl font-bold sm:text-3xl">
            {heading}
          </h1>
          <h1 className="text-5xl font-bold text-slate-900 drop-shadow-lg filter lg:text-4xl md:text-3xl sm:text-2xl">
            {title}
          </h1>
          <p className="my-4 text-slate-900 xl:text-sm">{text}</p>
          <a
            href={url}
            className="flex items-center"
            target={"_blank"}
            role="button"
          >
            <button
              type="button"
              className="button-theme bg-slate-900 py-1.5 text-slate-100 shadow-slate-900"
            >
              {btn}
            </button>
          </a>
        </div>

        <div className="relative flex w-full max-w-xl items-center justify-center lg:max-w-none">
          <img
            src={img}
            alt={`img/${heading}`}
            className={`transitions-theme w-auto object-fill ${ifExists ? "h-60 rotate-6 hover:-rotate-12 lg:h-56 md:h-52 sm:h-44 xsm:h-36" : "h-72 rotate-[19deg] hover:rotate-12 lg:h-64 md:h-60 sm:h-48 xsm:h-40"}`}
          />
        </div>
      </div>
    </>
  );
};

export default FlexContent;

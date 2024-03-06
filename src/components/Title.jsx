/* eslint-disable react/prop-types */

const Title = ({ title }) => {
  return (
    <>
      <div className="grid items-center">
        <h1 className="text-5xl font-bold text-slate-900 drop-shadow-lg filter lg:text-4xl md:text-3xl">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;

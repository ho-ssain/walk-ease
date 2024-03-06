/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Footer = ({ footerApi: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pb-5 pt-7">
        <div className="nike-container text-slate-200">
          <div className="m-auto grid w-full max-w-2xl grid-cols-3 items-start md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h1 className="text-lg font-bold uppercase lg:text-base md:text-sm">
                  {val.title}
                </h1>
              </div>
            ))}

            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    <a href="" className="hover:underline">
                      {link.link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-5 text-center">
            <hr />
            <p className="mt-5 text-sm md:text-center">
              Copyright &copy;2024 by WalkEase, All Rights reserved.
            </p>
            <p>
              Developed By{" "}
              <a
                href="https://github.com/ho-ssain"
                className="text-black underline hover:opacity-50"
              >
                Hossain
              </a>
            </p>
          </div>

          <hr className="mt-5" />
        </div>
      </footer>
    </>
  );
};

export default Footer;

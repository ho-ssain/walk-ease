import { useState } from "react";
import logo from "../assets/logo.png";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-white lg:absolute fixed z-20">
        <section className="container mx-auto lg:px-6">
          <section className="lg:w-full w-11/12 mx-auto h-full flex justify-between xl:items-baseline items-center text-[#12222e]">
            {/* logo  */}
            <div className="flex flex-col gap-y-4">
              <span
                className="flex items-center gap-x-2 font-bold text-2xl cursor-pointer"
                onClick={() => (window.location.href = "/")}
              >
                <img src={logo} alt="logo" />
              </span>
            </div>

            {/* menu-items  */}
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              <a
                href="#home"
                className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
              >
                Home
              </a>
              <a
                href="#about-us"
                className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
              >
                About-us
              </a>
              <a
                href="#products"
                className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
              >
                Products
              </a>
              <a
                href="#contact-us"
                className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
              >
                Contact-us
              </a>
              <a
                href="#login"
                className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
              >
                Login
              </a>
            </ul>
            {
              // drop down button for mobile view
              dropDown ? (
                <div
                  className="text-black lg:hidden text-[22px]  cursor-pointer"
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                >
                  <MdClose />
                </div>
              ) : (
                <div
                  className="text-black lg:hidden text-[22px]  cursor-pointer"
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                >
                  <HiMenuAlt3 />
                </div>
              )
            }
          </section>

          {
            // drop  down menu items only visible on mobile views
            dropDown ? (
              <div
                className="lg:hidden w-full h-[100vh] fixed top-24 bg-white transition ease-in-out duration-100"
                onClick={() => setDropDown(!dropDown)}
              >
                <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4 text-[#12222e]">
                  <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                    <a
                      href="#home"
                      className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                    >
                      Home
                    </a>
                    <a
                      href="#about-us"
                      className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                    >
                      About-us
                    </a>
                    <a
                      href="#products"
                      className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                    >
                      Products
                    </a>
                    <a
                      href="#contact-us"
                      className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                    >
                      Contact-us
                    </a>
                    <a
                      href="#login"
                      className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                    >
                      Login
                    </a>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )
          }
        </section>
      </nav>
    </>
  );
};

export default NavBar;

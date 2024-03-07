/* eslint-disable react/prop-types */
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import emptybag from "../../assets/emptybag.png";

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="text-cen flex h-screen flex-col items-center justify-center gap-7 p-11">
        <img
          src={emptybag}
          alt="emptybag/img"
          className="h-auto w-40 object-fill transition-all duration-300 hover:scale-110 lg:w-36 sm:w-28"
        />

        <button
          type="button"
          className="button-theme flex items-center justify-center gap-3 bg-gradient-to-b from-amber-500 to-orange-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500 active:scale-110"
          onClick={onCartToggle}
        >
          <ArrowLeftIcon className="h-5 w-5 text-slate-900" />
          <span className="">Back To Home</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../CartSlice.js";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid w-full items-center rounded-xl px-5 py-4 transition-all duration-700 ease-in-out hover:scale-105   ${ifExists ? "justify-items-start" : "justify-items-center"}`}
      >
        <div
          className={`grid items-center  ${ifExists ? "justify-items-start" : "justify-items-center"}`}
        >
          {/* ....................  */}

          <h1 className="text-xl font-medium text-slate-800 drop-shadow filter lg:text-lg md:text-base">
            {title}
          </h1>
          <p className="text-base font-normal text-slate-800 drop-shadow filter md:text-sm">
            {text}
          </p>

          <div className="my-2 flex w-28 items-center justify-between">
            <div className="blur-effect-theme flex items-center rounded-md px-1 font-medium">
              <h1 className="text-sm font-medium text-black">${price} </h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style h-5 w-5 text-black md:h-4 md:w-4" />
              <h1 className="font-normal text-orange-500 md:text-sm">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="blur-effect-theme button-theme p-0.5 shadow shadow-sky-100"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="blur-effect-theme button-theme rounded-xl px-2 py-1 text-sm text-black shadow shadow-sky-100"
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
            >
              {btn}
            </button>
          </div>
          {/* ....................  */}
        </div>

        <div
          className={`flex items-center ${ifExists ? "absolute right-1 top-5" : "justify-center"}`}
        >
          <img
            src={img}
            alt={`img/item/${id}`}
            className={`transitions-theme h-36 w-64 hover:-rotate-12 ${ifExists ? "h-auto w-64 -rotate-[35deg] lg:w-56 md:w-48" : "h-36 w-64"}`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;

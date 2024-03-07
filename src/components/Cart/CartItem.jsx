/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../CartSlice.js";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      }),
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      }),
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      }),
    );
  };

  return (
    <>
      <div className="flex w-full items-center justify-between px-5">
        {/* ....................1 */}
        <div className="flex items-center gap-5">
          {/* ....................2 */}

          <div
            className={`bg-gradient-to-b ${color} ${shadow}   relative grid items-center rounded p-3 transition-all duration-75 ease-in-out hover:scale-105`}
          >
            <img
              src={img}
              alt={`img/cart-item${id}`}
              className="h-auto w-36 object-fill lg:w-28"
            />
            <div className="blur-theme-effect absolute right-1 top-1 rounded bg-white/70 px-1 text-xs text-black ">
              ${price}
            </div>
          </div>

          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="text-lg font-medium text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex w-full items-center justify-around">
              <button
                type="button"
                className="bg-theme-cart flex h-6 w-6 items-center justify-center rounded active:scale-90 lg:h-5 lg:w-5"
                onClick={onDecreaseItemQTY}
              >
                <MinusIcon className="h-5 w-5 stroke-[2] text-white lg:h-4 lg:w-4" />
              </button>
              <div className="bg-theme-cart flex h-6 w-7 items-center justify-center rounded font-medium text-white lg:w-6 lg:text-xs">
                {cartQuantity}
              </div>
              <button
                type="button"
                className="bg-theme-cart flex h-6 w-6 items-center justify-center rounded active:scale-90 lg:h-5 lg:w-5"
                onClick={onIncreaseItemQTY}
              >
                <PlusIcon className="h-5 w-5 stroke-[2] text-white lg:h-4 lg:w-4" />
              </button>
            </div>
          </div>

          {/* ....................2 */}
        </div>

        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg font-medium text-slate-900 lg:text-base">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart grid cursor-pointer items-center justify-items-center rounded p-1 lg:p-0.5"
              onClick={onRemoveItem}
            >
              <TrashIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        {/* ....................1 */}
      </div>
    </>
  );
};

export default CartItem;

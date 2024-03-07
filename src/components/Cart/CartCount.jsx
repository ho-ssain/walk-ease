/* eslint-disable react/prop-types */

import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
const CartCount = ({ onCartToggle, onClearCartItems, totalQTY }) => {
  return (
    <>
      <div className="sticky left-0 right-0 top-0 flex h-11 w-full items-center justify-between bg-white px-3">
        <div className="flex items-center gap-3">
          <div
            className="grid cursor-pointer items-center"
            onClick={onCartToggle}
          >
            <ChevronDoubleLeftIcon className="h-5 w-5 stroke-[2] text-slate-900 hover:text-orange-500" />
          </div>
          <div className="grid items-center">
            <h1 className="text-base font-medium text-slate-900">
              Your Cart{" "}
              <span className="bg-theme-cart rounded px-1 py-0.5 text-xs font-normal text-slate-100">
                ({totalQTY} items)
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="bg-theme-cart rounded p-0.5 active:scale-90"
            onClick={onClearCartItems}
          >
            <XMarkIcon className="h-5 w-5 stroke-[2] text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;

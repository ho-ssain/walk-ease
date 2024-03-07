import { useDispatch, useSelector } from "react-redux";
import CartCount from "./Cart/CartCount";
import CartEmpty from "./Cart/CartEmpty";
import CartItem from "./Cart/CartItem";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from "../CartSlice.js";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  // console.log(cartItems)

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      }),
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <>
      <div
        className={`blur-effect-theme fixed bottom-0 left-0 right-0 top-0 z-[250] h-screen w-full opacity-100 duration-500 ${
          ifCartState
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-8 opacity-0"
        }`}
      >
        <div
          className={`blur-effect-theme absolute right-0 h-screen w-full max-w-xl duration-500 ${
            ifCartState
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-8 opacity-0"
          }`}
        >
          <CartCount
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
            totalQTY={totalQTY}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="scroll-hidden flex h-[81vh] flex-col items-start justify-start gap-y-7 overflow-y-scroll scroll-smooth py-3 lg:gap-y-5">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 grid w-full items-center bg-white px-5 py-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="bg-theme-cart rounded px-1 py-0.5 text-sm text-slate-100">
                    ${totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-center text-sm font-medium">
                    Taxes and Shipping Will Calculate
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;

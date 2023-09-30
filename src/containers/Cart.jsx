import React, { useEffect } from "react";
import { xIcon } from "../assets";
import { Link1 } from "../components";

const Cart = ({ isCartExpanded, toggleCart }) => {
  useEffect(() => {
    if (isCartExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isCartExpanded]);
  return (
    <>
      {isCartExpanded && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
          onClick={toggleCart}></div>
      )}
      <aside
        className={`max-w-md w-full font-primary max-h-screen fixed top-0 bottom-0 bg-white z-50 transition-right duration-300 md:max-w-full ${
          isCartExpanded ? "right-0" : "-right-full"
        }`}>
        <button
          className="absolute p-2 top-6 right-6 hover:opacity-60"
          onClick={toggleCart}>
          <img src={xIcon} alt="x icon" />
        </button>
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-auto">
            <div className="px-10 pt-10 md:px-6 md:pt-6">
              <h3 className="text-1.5xl font-medium text-themeBlue mb-2">
                Your Cart
              </h3>
              <div className="flex flex-col items-center mt-10 gap-y-8">
                <p className="text-center font-medium text-themeBlue">
                  Your cart is empty. <br /> Fill it with something good
                </p>
                <Link1 text={"Shop All"} fontSize="text-base" />
              </div>
            </div>
          </div>
          <hr className="mx-10 border-t-2 border-t-gray-200 md:mx-6" />
          <div className="flex flex-col items-stretch gap-y-3 px-10 pb-10 pt-6 md:px-6">
            <div className="text-themeBlue font-medium text-sm flex justify-between items-center">
              <span>Subtotal</span>
              <span>$00.00</span>
            </div>
            <div className="text-themeBlue font-medium text-sm flex justify-between items-center">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <a
              href="#"
              className="mt-2 font-medium text-white w-full bg-themeBlue text-center p-3 rounded-full transition-colors duration-300 hover:bg-themeYellow hover:text-themeBlue tracking-wider">
              Checkout
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart;
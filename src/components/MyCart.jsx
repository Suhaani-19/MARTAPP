
import React from "react";
import { IoClose } from "react-icons/io5";

const MyCart = ({ closeCart, isCartOpen }) => {
  return (
    <div className="fixed bg-black/55 top-0 right-0 left-0 bottom-0 transition-opacity duration-300 ease-in-out">
      <IoClose
        onClick={closeCart}
        className="absolute top-2 text-3xl text-white right-[24.3vw] cursor-pointer"
      />
      <div
        className={`absolute right-0 top-0 bottom-0 transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } w-[24vw] h-screen bg-white shadow-md `}
      >
        <div className="h-screen flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-gray-300">
            <div className="flex justify-center items-center gap-1  pl-3 ">
              <h3 className="text-xl font-bold text-gray-800">My Cart</h3>
              <span className="text-sm text-gray-400 ">1 Items</span>
            </div>
            <div className="flex justify-center items-center gap-8 w-[60%] py-5 border-l border-gray-300">
              <div className="grid ">
                <span className="text-xs text-gray-400">Savings</span>
                <span className="font-bold text-sm text-gray-800">₹ 120</span>
              </div>
              <div className="grid">
                <span className="text-xs text-gray-400">Cart Total</span>
                <span className="font-bold text-sm text-gray-800">₹ 230</span>
              </div>
            </div>
          </div>

          <div></div>

          <div>
            <hr className="border-gray-300" />
            <p className="text-xs text-red-500 py-2 px-4">
              Minimum Order Amount is ₹ 500
            </p>
            <div className="bg-green-100 p-3 grid place-items-center border-t border-gray-300">
              <button className="px-5 py-2 bg-white text-green-600 border rounded-md border-green-600 text-sm font-semibold ">
                VIEW FULL CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const ProductCard = () => {
  return (
    <div className="bg-white p-3 w-fit sm:w-[265px] border border-gray-300 rounded-sm">
      <div className="flex sm:flex-col">
        <div className="p-2 overflow-clip">
          <img
            src="https://cdn.dmart.in/images/products/JUN270000056xx26JUN24_5_P.jpg"
            alt=""
            className="w-[90px] h-[90px]  sm:w-[130px] sm:h-[130px] object-cover object-center mx-auto hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div>
          <h3 className="text-xs sm:text-sm text-gray-600 my-3">
            How To Win Friends And Influence People By Dale Carnegie : 1 Unit
          </h3>
          <div className="flex justify-between">
            <div className="h-fit">
              <div className="flex justify-end items-center gap-3">
                <div className="grid text-xs text-gray-400 gap-1">
                  <span>MRP</span>
                  <span className="line-through">₹999</span>
                </div>
                <div className="grid gap-1">
                  <span className="text-xs text-gray-700">Dmart</span>
                  <span className="font-semibold text-[14px]">₹139</span>
                </div>
              </div>
              <p className="text-xs -mt-1  text-gray-400">
                (inclusive of all taxes)
              </p>
            </div>
            <div className="text-custom-lightGreen grid bg-[#E9F7ED] h-fit p-2">
              <span className="font-bold">₹ 60</span>
              <span className=" text-xs font-medium text-center">OFF</span>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="flex sm:flex-col gap-3 sm:gap-0">
        <select
          name="1 Unit"
          id=""
          className="w-[30%] sm:w-full border border-gray-300 p-1 rounded-md my-2 text-gray-700 text-sm "
        >
          <option value="1 unit" className="">
            1 Unit
          </option>
        </select>
        <div className="flex gap-2 sm:gap-0 justify-between mt-1">
          <div className="border border-gray-300 w-fit sm:p-1 rounded-sm my-auto">
            <CiHeart
              title="Save this item to easily find it again. Access it from My Account."
              className="text-custom-lightGreen  text-3xl cursor-pointer"
            />
          </div>
          <button className="bg-custom-lightGreen text-white font-bold uppercase  sm:py-2 rounded-md flex px-4 sm:px-8 justify-between  items-center cursor-pointer">
            <PiShoppingCartSimple
              stroke="4"
              className="text-sm sm:text-xl mr-1"
            />{" "}
            <span className="text-sm sm:text-md">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
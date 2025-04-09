import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router";
import { categoryList } from "../constants/Data";
import MyCart from "./MyCart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="bg-white shadow-md  overflow-x-clip sticky">
      {/* UPPER PART */}
      <div className="flex items-center justify-between border-b border-gray-300">
        {/* 1st Div */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.svg" className="w-[130px] p-2  mx-6" />
          </Link>
          <div className="flex flex-col items-center bg-[#F2F6FF] p-2 rounded-tl-2xl rounded-br-2xl">
            <div className="flex justify-center items-center gap-3">
              <MdLocationPin className="text-custom-darkGreen" />
              <span className="font-bold text-gray-800 text-sm">400037</span>
              <FaChevronDown className="text-gray-600 text-xs" />
            </div>
            <span className="text-gray-500 font-bold text-sm">Mumbai</span>
          </div>
          <div className="grid gap-2  mx-3">
            <p className="text-xs">
              Earliest{" "}
              <span className="text-custom-lightGreen font-bold">Pick Up</span>{" "}
              available
            </p>
            <p className="flex items-center gap-1">
              <BiTimer className="text-orange-300 text-2xl" />
              <span className="text-xs font-bold">
                Today 09:00 AM - 12:00 PM
              </span>
            </p>
          </div>
        </div>

        {/* 2nd Div */}
        <div className="flex items-center">
          <input
            type="search"
            name="search"
            id="search"
            className="border-2 border-gray-300 shadow-sm px-3 py-2 font-thin text-sm rounded-sm w-[30vw]"
            placeholder="Search Here..."
          />
          <button className="uppercase font-bold text-white bg-custom-lightGreen px-4 py-3 rounded-sm text-xs shadow-md -ml-1">
            Search
          </button>
        </div>

        {/* 3rd Div */}
        <div className="flex items-center gap-8">
          <div className="grid w-[160px] hover:bg-gray-100 py-2 px-1">
            <span className="text-gray-500 text-xs font-medium">
              Hello Raj Padval
            </span>
            <span className="font-semibold text-sm">My Account</span>
          </div>
          <BsBell className="text-custom-lightGreen text-2xl" />
          <div
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center gap-2 mr-6"
          >
            <div className="relative">
              <span className="absolute top-0 left-0 bg-amber-200 text-xs px-1  rounded-full">
                8
              </span>
              <PiShoppingCartSimple className="text-custom-lightGreen text-3xl" />
            </div>
            <span className="font-bold mt-2.5">₹550</span>
          </div>
        </div>
      </div>

      {/* LOWER PART */}
      <div className="flex items-center">
        <div className="flex items-center px-4 py-2 gap-1 w-[11vw]  border-r border-gray-300">
          <IoMdMenu className="text-2xl text-gray-600" />
          <span className="text-sm font-medium">All Categories</span>
        </div>
        {categoryList.map(({ id, link, name }) => (
          <Link
            to={link}
            key={id}
            className="mx-3  capitalize text-sm hover:underline"
          >
            {name}
          </Link>
        ))}
      </div>
      {isCartOpen && <MyCart closeCart={closeCart} isCartOpen={isCartOpen} />}
    </div>
  );
};

export default Navbar;
import React, { useState } from "react";
import { categoryArray } from "../constants/Data";
import { Link } from "react-router";

const CategorySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="hidden sm:block sm:w-[11vw] bg-white h-screen border-r border-gray-300 ">
      <h3 className="text-sm font-bold text-gray-800 mx-6 py-3">
        Packaged Food
      </h3>
      <hr className="border-gray-300" />
      <ul>
        {categoryArray.map((category) => {
          return (
            <div key={category.id}>
              <li
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsOpen(!isOpen);
                }}
                className={`text-sm text-gray-500 px-6 py-3 border-b border-gray-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? "text-green-600 font-semibold"
                    : null
                }`}
              >
                {category.mCatgory} ({category.totalCount})
              </li>
              {isOpen &&
                selectedCategory === category.id &&
                category.sCategories.map((s) => {
                  return (
                    <div
                      key={s.id}
                      className={`bg-gray-100 py-1 ${
                        s.id == category.sCategories.length ? "shadow-md" : null
                      } transition-all duration-300 ease-in-out `}
                    >
                      <Link to={s.link} className="text-sm ml-7 text-gray-700">
                        {s.name}
                      </Link>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CategorySidebar;
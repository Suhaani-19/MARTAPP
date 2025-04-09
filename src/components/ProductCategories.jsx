import React from "react";
import CategoryIcon from "./CategoryIcon";

const categoryData = [
  {
    id: 1,
    name: "dairy",
    image:
      "https://cdn.dmart.in/images/rwd-mobile/banners/cards/1may23-popularcat-dairy.png",
    slug: "dairy",
  },
  {
    id: 2,
    name: "tea",
    image:
      "https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-tea1.png",
    slug: "tea",
  },
  {
    id: 3,
    name: "soft drinks",
    image:
      "https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-softdrinks.png",
    slug: "soft-drinks",
  },
  {
    id: 4,
    name: "cleaners",
    image:
      "https://cdn.dmart.in/images/rwd-mobile/banners/cards/1oct24-popularcat-cleaners.png",
    slug: "cleaners",
  },
  {
    id: 5,
    name: "bath soaps",
    image:
      "https://cdn.dmart.in/images/rwd-mobile/banners/cards/12jan24-popularcat-soaps.png",
    slug: "bath-soaps",
  },
  {
    id: 6,
    name: "toothpaste",
    image:
      "https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-toothpaste.png",
    slug: "toothpaste",
  },
  {
    id: 7,
    name: "shampoos",
    image:
      "https://cdn.dmart.in/images/rwd-mobile/banners/cards/12jan24-popularcat-shampoos.png",
    slug: "shampoos",
  },
];

const ProductCategories = () => {
  return (
    <div className="bg-white w-[97vw] mx-auto my-3 sm:my-8 px-6 py-6 border border-gray-300">
      <h2 className="font-bold text-lg mb-3">Popular Categories</h2>
      <div className="flex gap-5 sm:gap-10 overflow-x-scroll sm:overflow-x-hidden items-center ">
        {categoryData.map((category) => (
          <CategoryIcon key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
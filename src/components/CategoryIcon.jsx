import React from "react";
import { Link } from "react-router";

const CategoryIcon = ({ image, name, slug }) => {
  return (
    <Link to={`/product/${slug}`} className="min-w-fit">
      <img
        src={image}
        className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] mb-5"
      />
      <p className="text-center text-sm font-bold text-gray-700 capitalize">
        {name}
      </p>
    </Link>
  );
};

export default CategoryIcon;
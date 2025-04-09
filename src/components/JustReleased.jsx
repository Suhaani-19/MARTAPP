import React from "react";
import ProductCard from "./ProductCard";

const JustReleased = () => {
  return (
    <div className="bg-[#ECFCFF] w-[97vw] mx-auto my-3 sm:my-8 px-6 py-6 border border-gray-300">
      <h2 className="font-bold text-lg mb-3">Just Released Books</h2>
      <div className="flex gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default JustReleased;
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="m-3 ">
      <h2 className="font-bold text-2xl text-gray-800 my-5">Packaged Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
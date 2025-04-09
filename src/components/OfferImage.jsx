import React from "react";
import { Link } from "react-router";

const OfferImage = ({ slug = 123, image }) => {
  return (
    <div className="bg-white w-[97vw] mx-auto my-3 sm:my-8 px-6 py-6 border border-gray-300">
      <Link to={`/offer/${slug}`}>
        <img src={image} alt={slug} className="object-cover w-full h-full" />
      </Link>
    </div>
  );
};

export default OfferImage;
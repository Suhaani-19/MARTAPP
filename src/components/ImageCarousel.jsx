import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router";

const images = [
  {
    id: 1,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd-mobile%2Fbanners%2Fhmpg%2F1aug24-crsl-kitchenmela.jpg&w=750&q=75",
  },
  {
    id: 2,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd-mobile%2Fbanners%2Fhmpg%2F1dec24-crsl-ds-mum.jpg&w=750&q=75",
  },
  {
    id: 3,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd-mobile%2Fbanners%2Fhmpg%2F1oct24-crsl-dg-mum.jpg&w=750&q=75",
  },
  {
    id: 4,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd-mobile%2Fbanners%2Fhmpg%2F1aug24-crsl-womenscorner1.jpg&w=750&q=75",
  },
  {
    id: 5,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd-mobile%2Fbanners%2Fhmpg%2F28jan25-crsl-nc-newarrivals.jpg&w=750&q=75",
  },
];

const ImageCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <Link to={"/about"}>
            <img
              src={image.link}
              alt="carousel"
              className="w-screen sm:h-[45vh] object-center"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
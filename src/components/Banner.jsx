import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const Banner = () => {
  const items = [
    "https://sslimages.shoppersstop.com/sys-master/root/hd5/haa/31128089919518/Couple-static-Msite----enrt-banner-hp-page231210.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/hfd/h71/31083770413086/NARS_TopCarouselNARS_TopCarousel_Msite_NS-23.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h26/h7d/30917035819038/women-indianwear_top-banners-msite_160923.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h0e/hf3/30839511580702/watches_top-banners-msite_080923.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h51/h4c/30905184714782/fragrances_top-banners-msite_2023-09--15-new-hp-page-main.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative my-4 xl:my-8 overflow-hidden ">
      <button className="hidden xl:flex absolute top-[50%] left-[10%]">
        <FcPrevious
          onClick={prevSlide}
          className="text-5xl p-4 rounded-full hover:bg-gray-100"
        />
      </button>
      <button className="hidden xl:flex absolute top-[50%] right-[10%]">
        <FcNext
          onClick={nextSlide}
          className="text-5xl p-4 rounded-full hover:bg-gray-100"
        />
      </button>
      <div className="w-full max-w-screen-lg mx-auto overflow-hidden relative">
        <div
          className="w-full h-full flex transition-transform transform -translate-x-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full  flex-shrink-0 flex items-center justify-center bg-gray-200"
            >
              <img
                src={item}
                alt={`Slide ${index}`}
                className="max-h-full w-full h-full"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="absolute top-[80%] left-[40%] flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ease-out duration-500 ${
                  index === currentIndex ? "bg-white px-10" : "bg-slate-100"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

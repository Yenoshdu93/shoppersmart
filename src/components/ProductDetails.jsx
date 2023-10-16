import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPlusLg, BsArrowLeft } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const MAX = 2000;
const MIN = 1700;
const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const Location = useLocation();
  const navigate = useNavigate();
  const [rand, setRand] = useState();

  useEffect(
    () => {
      setProducts(Location.state.item);
      const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
      setRand(random);
    },
    [Location.state.item],
    setRand
  );

  const { id, title, price, description, category, rating, image, quantity } =
    products;

  return (
    <>
      <header className="w-full h-[4rem] border flex items-center px-2">
        <button
          onClick={() => navigate("/")}
          className="text-2xl flex items-center gap-4"
        >
          <BsArrowLeft className="transform hover:-translate-x-1 transition-all duration-500" />
          <span className="text-xl ">Shop Now</span>
        </button>
      </header>
      <div className="lg:grid lg:grid-cols-3 p-4 lg:p-10 flex flex-col">
        <div className="relative w-[200px] h-[240px] self-center lg:self-start lg:min-w-[20rem] lg:h-[27rem] xl:w-[450px]p-4">
          <img src={image} className="w-full h-full" alt="" />
          <p className="absolute top-0 left-0 font-font4 italic text-sm ">
            {category}
          </p>
        </div>
        <div className="flex flex-col col-span-2 space-y-4 p-4 lg:px-8 lg:py-4">
          <p className="text-xl lg:text-2xl tracking-wider font-font2 font-semibold">
            {title}
          </p>
          <p className="text-sm font-font3 first-letter:uppercase pr-4">
            {description}
          </p>
          <p className="text-lg font-font2">
            &#8377; {price}0{" "}
            <span className="line-through">MRP &#8377;{rand}</span>
            <span className="text-xs ml-2">Hurry up</span>
          </p>
          <div className="flex items-center gap-4 ">
            <button className="p-4 border text-xl hover:bg-gray-100">
              <BsPlusLg />
            </button>
            <span>1</span>
            <button className="p-4 border text-xl hover:bg-gray-100">
              <BiMinus />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="border px-4 py-2 lg:basis-[20rem] lg:py-4 text-sm bg-gray-800 hover:bg-black text-white">
              Add To Bag
            </button>
            <button className="border border-gray-400 px-4 py-2 lg:basis-[17rem] lg:py-4 text-sm hover:bg-black ease-in-out hover:text-white transition-all duration-500">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;

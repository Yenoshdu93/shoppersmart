import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const Location = useLocation();

  useEffect(() => {
    setProducts(Location.state.item);
  }, [Location.state.item]);

  const { id, title, price, description, category, rating, image } = products;

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 p-4 lg:p-10 flex flex-col">
        <div className="relative w-[200px] self-center lg:self-start lg:min-w-[20rem] xl:w-[450px] p-4">
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
          <p className="text-lg font-font2">&#8377; {price}0</p>
          <div className="flex">
            <button>
              <BsPlusLg />
            </button>
            <span></span>
            <button>
              <BiMinus />
            </button>
          </div>
        </div>
        <div className="col-span-"></div>
      </div>
    </>
  );
};
export default ProductDetails;

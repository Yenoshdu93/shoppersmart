import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagPlusFill, BsSuitHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToBag } from "../app/bagSlice";
import { useNavigate } from "react-router-dom";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
}) => {
  const [ratings, setRating] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = {
    id,
    title,
    price,
    description,
    category,
    rating,
    image,
  };
  const { rate, count } = rating;
  useEffect(() => {
    const rating = Math.floor(Math.random() * rate) + 1;
    setRating(rating);
  }, [setRating]);

  const addToBagItem = () => {
    dispatch(addToBag(item));
  };
  const _id = title;
  const toString = (_id) => {
    return String(_id).split(" ").join("").toLowerCase();
  };
  const rootId = toString(_id);
  const navigateToProduct = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: item,
      },
    });
  };
  return (
    <>
      <div className="relative space-y-2 flex flex-col border border-gray-400 rounded-md p-4 z-20">
        {/* img */}
        <div
          onClick={navigateToProduct}
          className="cursor-pointer self-center w-[150px] h-[180px] p-4 "
        >
          <img src={image} className="w-full h-full" alt="" />
        </div>
        <div className="border-b" />
        <div className="flex flex-col space-y-1">
          <p className="text-sm lg:text-base font-semibold tracking-wide font-font2">
            {title.substring(0, 20)}...
          </p>
          <p className="font-bold text-gray-600">&#8377; {price.toFixed(0)}</p>
          <p className="text-xs font-font1 tracking-wide">
            {description.substring(0, 100)}...
          </p>
        </div>
        {/* btns */}
        <div className="absolute flex flex-col gap-2 right-[14%] top-[15%] ">
          <button onClick={addToBagItem}>
            <BsFillBagPlusFill className="text-4xl hover:bg-white hover:text-gray-700 transition-all ease-in-out duration-500 border px-2 py-1 group  bg-gray-700 text-white font-bold rounded-md" />
          </button>
          <button>
            <BsSuitHeart className="text-4xl hover:text-green-500 transition-all ease-in-out duration-500 border px-2 py-1 group bg-white rounded-md" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1 text-lg">
            {Array(ratings)
              .fill()
              .map((_, i) => (
                <AiFillStar key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="text-sm tracking-wide self-center text-gray-700 font-bold">{`Number of Items in Stack    ( ${count} Pack )`}</p>
        </div>
        <p className="absolute top-2 font-font4 italic text-sm lg:text-md right-4">
          {category}
        </p>
      </div>
    </>
  );
};
export default Product;

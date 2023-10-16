import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { decreaseItems, increaseItems, removeFromBag } from "../app/bagSlice";

const BagItems = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
  quantity,
}) => {
  const items = useSelector((state) => state.bag.bag);
  const dispatch = useDispatch();
  const removeitem = (id) => {
    dispatch(removeFromBag(id));
  };
  return (
    <>
      <div className="relative w-full flex flex-col  border p-4 lg:grid lg:grid-cols-2">
        <div className="self-center w-[140px] h-[160px]  p-4 ">
          <img src={image} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-font2 font-semibold ">{title}</p>
          <p className="font-bold ">
            Rs {price.toFixed(0)} <span className="font-thin"> Offers</span>
          </p>
          <p className="text-xs font-font-2 tracking-wider first-letter:uppercase">
            {description.substr(0, 50)}...
          </p>
          <p className="text-sm italic ">{category}</p>
          <div className="flex items-center gap-4 ">
            <button
              onClick={() => dispatch(increaseItems(id))}
              className="p-4 border text-xl hover:bg-gray-100"
            >
              <BsPlusLg />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => dispatch(decreaseItems(id))}
              className="p-4 border text-xl hover:bg-gray-100"
            >
              <BiMinus />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 absolute top-2 right-4">
          <button className="text-3xl">
            <AiOutlineDelete onClick={() => removeitem(id)} />
          </button>
        </div>
      </div>
    </>
  );
};
export default BagItems;

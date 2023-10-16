import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BagItems from "../components/BagItems";

const Baggage = () => {
  const items = useSelector((state) => state.bag.bag);
  const navigate = useNavigate();
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
      {items.length === 0 ? (
        <div className="h-full w-full grid place-items-center h-screen">
          <div className="flex flex-col items=center justify-center gap-4">
            <h1 className="text-2xl font-font3">Your Cart is Empty</h1>
            <button
              onClick={() => navigate("/")}
              className="text-xl border bg-black px-4 py-2 rounded-md text-white hover:bg-white border-gray-400 hover:text-black transition-all ease-in-out duration-500"
            >
              Go shop Now
            </button>
          </div>
        </div>
      ) : (
        <div>
          {items.map((item) => (
            <BagItems key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};
export default Baggage;

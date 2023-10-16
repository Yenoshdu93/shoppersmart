import { useNavigate } from "react-router-dom";

const SearchItems = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
}) => {
  const item = { id, title, price, description, category, rating, image };
  const navigate = useNavigate();
  const _id = item.title;

  const toString = (_id) => {
    return String(_id).split(" ").join("").toLowerCase();
  };
  const rootId = toString(_id);
  const navigateToProduct = () => {
    const item = { id, title, price, description, category, rating, image };
    navigate(`/product/${rootId}`, {
      state: {
        item: item,
      },
    });
  };
  return (
    <div>
      <div
        onClick={navigateToProduct}
        className=" flex items-center gap-2 p-4 cursor-pointer hover:bg-white"
      >
        <div className="w-[50px]">
          <img src={image} alt="" />
        </div>
        <div>
          <p className="text-sm ">{title}</p>
        </div>
      </div>
    </div>
  );
};
export default SearchItems;

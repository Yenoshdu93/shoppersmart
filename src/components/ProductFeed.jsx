import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl uppercase lg:text-5xl text-gray-600 my-4 font-font4  tracking-widest text-center">
          New Products
        </h1>
        <div className="p-2 gap-2 grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductFeed;

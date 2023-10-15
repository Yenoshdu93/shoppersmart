import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      const products = await data.data;
      setProducts(products);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        {isLoading ? (
          <div className="w-full bg-transparent  flex items-center justify-center h-[100vh]">
            <h1 className="text-5xl font-font4 italic uppercase rounded-full bg-black/60 p-6">
              sm...
            </h1>
          </div>
        ) : (
          <div>
            {/*  Header  */}
            <Header />
            {/* Banner */}
            <Banner />
            {/* ProductsFeed */}
            <ProductFeed products={products} />
          </div>
        )}
      </main>
    </>
  );
};
export default Home;

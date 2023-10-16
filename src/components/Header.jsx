import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { PiHandbagSimpleLight, PiUserLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { links, thridLinks, navLinks } from "../data";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SearchItems from "./SearchItems";

const Header = ({ products }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [msearch, setMsearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [searching, setSearching] = useState("");
  const items = useSelector((state) => state.bag.bag);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const hadleOutSide = (e) => {
      if (sidebar && sideRef.current && !sideRef.current.contains(e)) {
        setSidebar(false);
      }
    };

    const closeSearchOnOutsideClick = (e) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setSearch(false);
      }
    };
    window.addEventListener("click", closeSearchOnOutsideClick);

    const handleScroll = () => {
      const ScrollY = window.scrollY;
      if (ScrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [sidebar]);

  const openSearch = () => {
    setSearch(!search);
    setMsearch(!msearch);
  };

  const openSide = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <header
        className={`sticky top-0 ${
          isScrolling ? `h-[5rem]` : `xl:h-[10rem]`
        } left-0 right-0 w-full h-[4rem] 
        xl:py-2 px-2 lg:px-10 border-b bg-white shadow-sm z-50 transition-all ease-in-out duration-500`}
      >
        <nav className={`w-full h-full flex xl:flex-col xl:justify-between`}>
          {/* 1st bar */}
          <div className={`w-full flex items-center justify-between`}>
            {/* navlinks */}
            <div
              className={` ${
                isScrolling
                  ? `hidden`
                  : `hidden xl:flex items-center gap-4 text-sm font-semibold text-gray-400`
              }  `}
            >
              {navLinks.map((link, i) => (
                <Link key={i}>{link.text}</Link>
              ))}
            </div>
            {/* Logo */}
            <div className="flex items-center  gap-4">
              <button>
                <RiMenu2Line
                  onClick={openSide}
                  className="xl:hidden text-2xl"
                />
              </button>
              <Link
                to="/"
                className={`font-font1 text-lg xl:text-2xl text-gray-800 font-semibold`}
              >
                Shoppers Mart
              </Link>
            </div>
            <div className={` flex items-center gap-6 xl:gap-4 text-2xl`}>
              {/* searh */}
              <div>
                <Link onClick={openSearch} className="xl:hidden">
                  <CiSearch onClick={openSearch} />
                </Link>
                <div
                  className={`hidden relative xl:flex items-center min-w-[14rem] h-10`}
                >
                  <input
                    onFocus={openSearch}
                    ref={searchInputRef}
                    type="text"
                    onChange={(e) => setSearching(e.target.value)}
                    placeholder="Search here..."
                    className="w-full h-full outline-none border-b
                   border-b-gray-400 focus:border-b-gray-500 
                   pl-1 pr-10 text-sm text-gray-600 font-font4
                   rounded-sm transition-all duration-400 ease-in-out
                   focus:font-font2"
                  />
                  <CiSearch className="absolute right-1 text-3xl text-gray-500" />
                  <div
                    className={`${
                      search ? `visible` : `hidden`
                    } absolute w-[20rem] max-h-[24rem] top-10 bg-slate-100 overflow-y-scroll`}
                  >
                    {products
                      .filter((item) => {
                        return searching.toLowerCase() === ""
                          ? `No items found Yet`
                          : item.title.toLowerCase().includes(searching);
                      })
                      .map((item) => (
                        <SearchItems key={item.id} {...item} />
                      ))}
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <BsHeart />
                </Link>
              </div>
              <div className="relative">
                <Link to="/bag">
                  <PiHandbagSimpleLight />
                </Link>
                <span className="absolute text-lg -top-4 -right-4 bg-gray-100 px-2 rounded-full  text-gray-700">
                  {items.length === 0 ? `` : `${items.length}`}
                </span>
              </div>

              <div>
                <Link>
                  <PiUserLight />
                </Link>
              </div>
            </div>
          </div>
          {/* 2nd bar */}
          <div
            className={`${
              isScrolling
                ? `hidden`
                : "hidden self-center xl:flex items-center gap-[5rem]"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.id}
                style={{ color: link.color }}
                className={`uppercase font-semibold text-xl text-gray-700 tracking-wider`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          {/* 3rd bar */}
          <div
            className={`${
              isScrolling
                ? `hidden`
                : `hidden  self-center xl:flex items-center gap-[3rem] text-gray-600 
            uppercase font-semibold font-font3`
            }`}
          >
            {thridLinks.map((link) => (
              <Link className="" key={link.id}>
                {link.text}{" "}
              </Link>
            ))}
          </div>
        </nav>
        <div
          className={`w-full ${
            msearch
              ? `xl:hidden h-10 rounded-md flex transition-all duration-500 ease-in-out`
              : `hidden`
          } `}
        >
          <input
            type="text"
            placeholder="Search here"
            className="h-full w-full outline-none text-sm  font-font4 border rounded-md px-2 focus:ring-1 focus:ring-gray-500 focus:font-font2 transition-all duration-500 ease-in-out border-gray-300"
          />
        </div>
      </header>
      <div
        className={`xl:hidden absolute top-0 left-0 h-[100vh] w-[70%] 
        transition-transform bg-white z-50 transform ${
          sidebar ? `translate-x-0` : `-translate-x-full`
        } p-4`}
      >
        <div className="w-full flex flex-col gap-4 xl:gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg  lg:text-2xl">Shop for</h1>
            <button
              onClick={() => setSidebar(false)}
              className="text-xl hover:bg-gray-200 p-2 rounded-full"
            >
              <AiOutlinePlus className="rotate-[45deg]" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="reltive border p-2">
              <button>Women</button>
            </div>
            <div className="reltive border p-2">
              <button>Men</button>
            </div>
            <div className="reltive border p-2">
              <button>Kids</button>
            </div>
            <div className="reltive border p-2">
              <button>Fashion</button>
            </div>
            <div className="reltive border p-2">
              <button>Styles</button>
            </div>
            <div className="reltive border p-2">
              <button>Electronics</button>
            </div>
            <div className="reltive border p-2">
              <button>Tvs</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

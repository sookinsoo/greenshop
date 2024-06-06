import { useState, useEffect, useContext, useMemo } from "react";
import { Data } from "../../data.js/data";
import Banner from "../../../public/assets/banner.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { SlBasket } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { AboutContext, ProductContext } from "../../App";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function valuetext(value) {
  return `${value}°C`;
}

const FlowersOption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [value, setValue] = useState([20, 37]);
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);
  const [colorStates, setColorStates] = useState({});
  const [likeStates, setLikeStates] = useState({});
  const { about, setAbout } = useContext(AboutContext);
  const { product, setProduct } = useContext(ProductContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const itemsPerPage = 9;

  const getFilteredData = () => {
    let filteredData;
    switch (sale) {
      case 1:
        filteredData = Data;
        break;
      case 2:
        filteredData = Data.slice(9, 18);
        break;
      case 3:
        filteredData = Data.slice(11, 21);
        break;
      default:
        filteredData = [];
    }

    const startIndex = (sale1 - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredData.slice(startIndex, endIndex);
  };

  const filteredData = useMemo(() => getFilteredData(), [sale, sale1]);

  const totalPages = Math.ceil(
    sale === 1
      ? Data.length / itemsPerPage
      : sale === 2
      ? (18 - 9) / itemsPerPage
      : sale === 3
      ? (21 - 11) / itemsPerPage
      : 0
  );

  const handleBasketClick = (itemId) => {
    if (!product.includes(itemId)) {
      setProduct([...product, itemId]);
    }
    setColorStates((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleLikeClick = (itemId) => {
    setLikeStates((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleSearchClick = (item) => {
    setSelectedItem(item);
    toggleModal();
  };

  const addToCart = (item) => {
    handleBasketClick(item.id);
  };

  return (
    <div className="flex justify-between mt-10">
      <div className="w-[30%]">
        <div className="bg-[--bg] pl-[18px] pb-[18px] pt-[14px] pr-[24px] w-[100%]">
          <div className="mb-[30px]">
            <p className="text-[20px] font-bold mb-[20px]">Categories</p>
            <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second]">
              {[
                "House Plants",
                "Potter Plants",
                "Seeds",
                "Small Plants",
                "Big Plants",
                "Succulents",
                "Terrariums",
                "Gardening",
                "Accessories",
              ].map((category, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer justify-between text-[18px] items-center"
                >
                  <span className="hover:text-green-500">{category}</span>
                  <span className="hover:text-green-500">(12)</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[20px] font-bold mb-[20px]">Price Range</p>
            <div className="flex pl-[12px] gap-4 flex-col mb-[30px] w-[80%]">
              <p className="text-[18px]">
                Price: <span className="text-[--primary] ">$39 - $1230</span>
              </p>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <p>
                <span className="bg-[--primary] rounded-md text-white text-[18px] py-2 px-7 hover:opacity-70">
                  Filter
                </span>
              </p>
            </div>
          </div>

          <div>
            <p className="text-[20px] font-bold mb-[20px]">Size</p>
            <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second]">
              {["Small", "Medium", "Large"].map((size, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer justify-between text-[18px] items-center"
                >
                  <span className="hover:text-green-500">{size}</span>
                  <span className="hover:text-green-500">(33)</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src={Banner} alt="img" />
        <div className="discount w-full max-h-[470px] h-full"></div>
      </div>
      <div className="w-[70%]">
        <ul className="flex gap-10 cursor-pointer mb-10">
          {["All plants", "New Arrivals", "Sale"].map((tab, index) => (
            <li
              key={index}
              onClick={() => {
                setSale(index + 1);
                setSale1(1);
              }}
              className={
                sale === index + 1
                  ? "text-green-600 font-medium border-b-4 pb-1 border-green-500 duration-600"
                  : ""
              }
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-10 mt-2">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="mb-12 cursor-pointer group relative duration-700 hover:shadow-lg hover:scale-105 transform transition-all"
            >
              <Link to="/shop">
                <img
                  onClick={() => setAbout([item.id])}
                  src={item.image_url}
                  alt="Flower"
                  className=" h-72 mb-5 hover:opacity-40 w-full"
                />
              </Link>
              <div className="flex gap-3 absolute ml-[30%] justify-center z-[-1] group-hover:z-10 ml-[38%] duration-200 group-hover:translate-y-[-50px]">
                <SlBasket
                  aria-label="Add to Basket"
                  className={
                    colorStates[item.id] ? "w-6 h-6 text-green-500" : "w-6 h-6"
                  }
                  onClick={() => handleBasketClick(item.id)}
                />
                <FaRegHeart
                  aria-label="Like"
                  className={
                    likeStates[item.id] ? "w-6 h-6 text-green-500" : "w-6 h-6"
                  }
                  onClick={() => handleLikeClick(item.id)}
                />
                <IoSearch
                  onClick={() => handleSearchClick(item)}
                  className="w-6 h-6"
                />
              </div>
              <div className="bg-white">
                <p>{item.common_name}</p>
                <h1 className="text-green-500 font-medium text-xl">
                  ${item.price}.00
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-3 cursor-pointer">
          {sale1 > 1 && (
            <p
              className="px-4 py-4 border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 - 1)}
            >
              <IoChevronBackOutline />
            </p>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <p
              key={index}
              onClick={() => setSale1(index + 1)}
              className={
                sale1 === index + 1
                  ? "px-4 py-3 border rounded-md bg-green-500 text-white"
                  : "px-4 py-3 border rounded-md"
              }
            >
              {index + 1}
            </p>
          ))}
          {sale1 < totalPages && (
            <p
              className="px-4 py-4 border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 + 1)}
            >
              <GrFormNext />
            </p>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          closeModal={toggleModal}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          products={Data}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default FlowersOption;
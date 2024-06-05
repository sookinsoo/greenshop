import React, { useContext, useEffect, useState } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from "../../App";
import { Data } from "../../data.js/data";
import { NavLink } from "react-router-dom";
import Modal from "../Navbar/Modal"; 

const Basket = () => {
  
  const [counts, setCounts] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const { product, setProduct } = useContext(ProductContext);

  const increment = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1,
    }));
  };

  const handleDelete = (itemId) => {
    setProduct((prevProduct) => prevProduct.filter((id) => id !== itemId));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[itemId];
      return newCounts;
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const newSubtotal = product.reduce((sum, itemId) => {
      const item = Data.find((item) => item.id === itemId);
      const itemCount = counts[itemId] || 1;
      return sum + item.price * itemCount;
    }, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal - discount + 16); 
  }, [counts, product, discount]);

  return (
    <>
      <div className="w-full mt-[140px]">
        <div className="w-full flex items-start justify-between">
          <div>
            <div className="flex items-center">
              <p className="mr-[265px] text-[#3D3D3D] text-[15px] font-medium">
                Products
              </p>
              <p className="mr-[108px] text-[#3D3D3D] text-[15px] font-medium">
                Price
              </p>
              <p className="mr-[97px] text-[#3D3D3D] text-[15px] font-medium">
                Quantity
              </p>
              <p className="text-[#3D3D3D] text-[15px] font-medium">Total</p>
            </div>
            <hr className="w-full h-[0.3px] border-none my-[11px] bg-[#46A35880]" />
            {Data.map((item) => {
              return product.map((element) => {
                if (element === item.id) {
                  return (
                    <div
                      key={item.id}
                      className="w-full bg-[#FBFBFB] mb-[10px] flex items-center h-[70px]"
                    >
                      <img
                        src={item.image_url}
                        alt="rasm"
                        className="mr-[14px] w-[60px] h-[60px] "
                      />
                      <div className="mr-[53px]  w-48">
                        <p className="text-[#3D3D3D] text-[15px] font-medium">
                          {item.common_name}
                        </p>
                        <p className="text-[12px] text-[#949494] font-normal">
                          SKU: <span className="text-[#727272]">{item.id}</span>
                        </p>
                      </div>
                      <p className="text-[#727272] font-medium text-[16px]">
                        ${item.price}.00
                      </p>
                      <div className="ml-[92px] flex items-center">
                        <button
                          onClick={() => decrement(item.id)}
                          className="increment text-white w-[20px] h-[20px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                        >
                          <HiMinusSm />
                        </button>
                        <p className="font-semibold ml-[15px] mr-[2px] text-[16px] w-[20px]">
                          {counts[item.id] || 1}
                        </p>
                        <button
                          onClick={() => increment(item.id)}
                          className="increment text-white w-[20px] h-[20px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                        >
                          <HiPlusSm />
                        </button>
                      </div>
                      <p className="ml-[80px] text-[#46A358] font-bold text-[15px]">
                        ${item.price * (counts[item.id] || 1)}.00
                      </p>
                      <AiOutlineDelete
                        onClick={() => handleDelete(item.id)}
                        className="hover:text-red-600 hover:scale-110 ml-[60px] text-[23px] mr-[20px] text-[#727272] hover:cursor-pointer hover:rotateRight"
                      />
                    </div>
                  );
                }
                return null;
              });
            })}
          </div>
          <div className="w-[30%]">
            <div className="border-b-2 pb-2 w-full">
              <h1 className="text-[16px] font-medium mr-20">Cart Totals</h1>
            </div>
            <p className="text-[#3D3D3D] my-2 text-[16px]">Coupon Apply</p>
            <div className="border flex">
              <input
                type="text"
                className="mx-4 my-2 w-[70%] outline-none"
                placeholder="Enter coupon code here..."
              />
              <button className="w-[30%] bg-green-500 text-white font-medium">
                Apply
              </button>
            </div>
            <div className="w-[360px] h-[330px] block mt-[25px] border-0">
              <div className=" flex items-center justify-between w-[100%] h-[35px]">
                <h2 className="text-[16px] text-[#3D3D3D] cursor-pointer">Subtotal</h2>
                <p className="text-[18px] text-black cursor-pointer">${subtotal}.00</p>
              </div>
              <div className=" flex items-center justify-between w-[100%] h-[35px]">
                <h2 className="text-[16px] text-[#3D3D3D] cursor-pointer">Coupon Discount</h2>
                <p className="text-[17px] text-[#3D3D3D] cursor-pointer">(-) ${discount}.00</p>
              </div>
              <div className=" flex items-end justify-between w-[100%] h-[38px] mb-[10px]">
                <h2 className="text-[16px] text-[#3D3D3D] cursor-pointer">Shipping</h2>
                <p className="text-[18px] text-black cursor-pointer">$16.00</p>
              </div>
              <div className=" flex items-start justify-end w-[100%] h-[42px]">
                <p className="text-[16px] text-green-500 cursor-pointer">View shipping charge</p>
              </div>
              <div className=" flex items-end justify-between w-[100%] h-[38px] mb-[10px]">
                <h2 className="text-[18px] font-medium text-black cursor-pointer">Total</h2>
                <p className="text-[18px] text-green-500 font-medium cursor-pointer">${total}.00</p>
              </div>
              <NavLink to="/Checkout">
              <button className="flex items-center justify-center bg-green-500 w-[100%] h-[50px] rounded-[5px] mt-[20px] hover:bg-green-700">
                <h2 className="text-[16px] font-medium text-white">Proceed To Checkout</h2>
              </button>
              </NavLink>
              <NavLink to="/">
              <button className="flex items-center justify-center bg-white w-[100%] h-[50px] rounded-[5px] mt-[0px]">
                <h2 className="text-[16px] font-medium text-green-500 hover:text-green-700">Proceed To Checkout</h2>
              </button>
              </NavLink>
            </div>
          </div>
        </div>
        <h2 className="text-[22px] mx-[8px] text-green-500 font-medium">You may be interested in</h2>
      </div>
    </>
  );
};

export default Basket;



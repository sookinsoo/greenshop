import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/assets/LogoGreen.svg";
import { SlBasket } from "react-icons/sl";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useState, useContext } from "react";
import { ProductContext } from "../../App";
import Modal from "./Modal";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Nav = () => {
  const { product } = useContext(ProductContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="fixed z-10 bg-white block w-[1200px] top-0">
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo img" className="py-6" />
        <div>
          <ul className="flex gap-12">
            <li className="cursor-pointer">
              <NavLink to="./">Home</NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="/care">Plant Care</NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 items-center cursor-pointer">
          <IoSearch
            className="w-6 h-6 hover:text-green-500 "
            onClick={toggleModal}
          />
          <div className="flex items-center relative">
            <Link to="/shop/card">
              <SlBasket className="w-6 h-6 hover:text-green-500" />
            </Link>
            <p className="p-[1px] bg-[#1aad51] rounded-full px-[6px] text-[10px] font-medium absolute right-[-7px] top-[-3px] text-white">
              {product.length}
            </p>
          </div>
          
          <SignedOut>
        <SignInButton >
          <button className="text-white gap-1 bg-[#1aad51] flex items-center py-2 px-5 rounded-lg hover:bg-green-700">
            <HiOutlineLogout className="text-white w-5 h-5" />
            Login
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <NavLink to="/Login">
        <div className="text-white gap-1 bg-[#1aad51] flex items-center py-1 px-5 rounded-lg hover:bg-green-700">
        <p className="text-white gap-1 mr-[5px] text-[14px] font-medium">User</p>
        <UserButton />
        </div>
        </NavLink>
      </SignedIn>
        </div>
      </nav>
      <hr />
      {isModalOpen && (
        <Modal
          closeModal={toggleModal}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          products={product}
        />
      )}
    </div>
  );
};

export default Nav;
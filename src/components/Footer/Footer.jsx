import Group1 from "../../../public/assets/g1.png";
import Group2 from "../../../public/assets/g2.png";
import Group3 from "../../../public/assets/g3.png";
import Logo from "../../../public/assets/LogoGreen.svg";
import { IoLocationOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Pay from "../../../public/assets/pay.png";

const Footer = () => {
  return (
    <div className="mt-24">
      <div className="flex gap-4 bg-[#FBFBFB] p-7 border-r-2 cursor-pointer">
        <div className="p-7 flex items-center border-r-2">
          <img src={Group1} alt="img" className="w-40 h-52 object-contain hover:scale-110" />
        </div>
        <div className="p-7 flex items-center border-r-2">
          <img src={Group2} alt="img" className="w-40 h-52 object-contain hover:scale-110" />
        </div>
        <div className="p-7 flex items-center">
          <img src={Group3} alt="img" className="w-40 h-52 object-contain hover:scale-110" />
        </div>
        <div className="flex-1 p-7">
          <h1 className="text-xl font-bold mb-4 ">
            Would you like to join newsletters?
          </h1>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="enter your email address..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md outline-none"
            />
            <button className="h-full bg-green-700 text-white py-2 px-4 rounded-r-md hover:bg-green-800 transition-colors duration-300">
              Join
            </button>
          </div>
          <p className="text-[#727272]">
            We usually post offers and challenges in newsletters. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="flex p-7 bg-[#46A3581A] gap-16 cursor-pointer">
        <img src={Logo} alt="img" />
        <div className="flex gap-3 items-center hover:scale-110">
          <IoLocationOutline className="w-6 h-6 text-green-500" />
          <a
            href="https://www.google.com/maps/place/Rayhon+National+Meals+Restaurant/@41.2831386,69.2043005,15z/data=!4m6!3m5!1s0x38ae8a31ca66d417:0x5755ff29b7bf33a!8m2!3d41.2858377!4d69.2056945!16s%2Fg%2F11gd21npmv?entry=ttu"
            target="blank"
          >
            <p>
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </a>
        </div>
        <div className="flex gap-3 items-center hover:scale-110">
          <TiContacts className="w-6 h-6 text-green-500" />
          <p>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
              contact@greenshop.com
            </a>
          </p>
        </div>
        <div className="flex gap-3 items-center hover:scale-110">
          <FaPhoneVolume className="w-5 h-5 text-green-500" />
          <p>+88 01911 717 490</p>
        </div>
        <div></div>
      </div>
      <div className="flex justify-between cursor-pointer">
        <div className="p-7">
          <ul>
            <li className="text-xl font-semibold mb-3 text-black">
              My Account
            </li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">My Account</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact us</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact us</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Specials</li>
          </ul>
        </div>
        <div className="p-7">
          <ul>
            <li className="text-xl font-semibold mb-3 text-black">
              My Email
            </li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">My Account</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact us</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact us</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Specials</li>
          </ul>
        </div>
        <div className="p-7">
          <ul>
            <li className="text-xl font-semibold mb-3 text-black">
              My Address
            </li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">My Account</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact us</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact us</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Contact</li>
            <li className="text-[#3D3D3D] opacity-80 mb-1 hover:text-green-500">Specials</li>
          </ul>
        </div>
        <div className="p-7 cursor-pointer">
          <ul>
            <li className="text-xl font-semibold mb-5 text-black">
              Social Media
            </li>
            <div className="flex gap-2">
              <p className="border p-2 rounded-md border-[#46A35833] hover:bg-green-300 transition-colors duration-300">
                <a href="https://www.facebook.com/" target="blank">
                  <FaFacebookF className="text-[#46A35899] hover:text-green-700 transition-colors duration-300" />
                </a>
              </p>
              <p className="border p-2 rounded-md border-[#46A35833] hover:bg-green-300 transition-colors duration-300">
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-[#46A35899] hover:text-green-700 transition-colors duration-300" />
                </a>
              </p>
              <p className="border p-2 rounded-md border-[#46A35833] hover:bg-green-300 transition-colors duration-300">
                <a href="https://x.com/">
                  <FaTwitter className="text-[#46A35899] hover:text-green-700 transition-colors duration-300" />
                </a>
              </p>
              <p className="border p-2 rounded-md border-[#46A35833] hover:bg-green-300 transition-colors duration-300">
                <a href="https://www.linkedin.com/">
                  <FaLinkedinIn className="text-[#46A35899] hover:text-green-700 transition-colors duration-300" />
                </a>
              </p>
              <p className="border p-2 rounded-md border-[#46A35833] hover:bg-green-300 transition-colors duration-300">
                <a href="https://www.youtube.com/">
                  <FaYoutube className="text-[#46A35899] hover:text-green-700 transition-colors duration-300" />
                </a>
              </p>
            </div>
            <li className="text-xl font-semibold my-5 text-black">We accept</li>
            <img src={Pay} alt="img" />
          </ul>
        </div>
      </div>
      <hr />
      <h1 className="text-[#3D3D3D] my-2 text-center">
        © 2021 GreenShop. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;

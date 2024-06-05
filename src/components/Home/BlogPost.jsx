import CareTip from "../../../public/assets/01.png";
import CareTip2 from "../../../public/assets/02.png";
import CareTip3 from "../../../public/assets/03.png";
import CareTip4 from "../../../public/assets/04.png";
import { NavLink } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="mt-32 cursor-pointer">
      <h1 className="text-center text-xl font-bold mb-4">Our Blog Posts</h1>
      <p className="text-center text-[#727272] ">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
        <div className="flex gap-5 mt-[30px]">
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500 text-start w-[230px] text-[15px] mb-[5px]">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium text-start w-[200px] text-black">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272] text-start mt-[8px]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <NavLink to="/Shop">
              <button className=" font-bold pt-2 w-[250px] mt-[20px] text-start text-black hover:text-green-500">Find More →</button>
              </NavLink>
            </div>
          </div>
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500 text-start w-[230px] text-[15px] mb-[5px]">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium text-start w-[200px] text-black">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272] text-start mt-[8px]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <NavLink to="/Shop">
              <button className=" font-bold pt-2 w-[250px] mt-[20px] text-start text-black hover:text-green-500">Find More →</button>
              </NavLink>
            </div>
          </div>
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500 text-start w-[230px] text-[15px] mb-[5px]">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium text-start w-[200px] text-black">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272] text-start mt-[8px]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <NavLink to="/Shop">
              <button className=" font-bold pt-2 w-[250px] mt-[20px] text-start text-black hover:text-green-500">Find More →</button>
              </NavLink>
            </div>
          </div>
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500 text-start w-[230px] text-[15px] mb-[5px]">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium text-start w-[200px] text-black">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272] text-start mt-[8px]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <NavLink to="/Shop">
                <button className=" font-bold pt-2 w-[250px] mt-[20px] text-start text-black hover:text-green-500">
                Find More →
                </button>
              </NavLink>
            </div>
          </div>
          
        </div>
      </p>
    </div>
  );
};

export default BlogPost;

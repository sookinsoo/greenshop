import { Data } from "../../data.js/data";
import { NavLink } from "react-router-dom";

const PlantCard = ({ img, title, description }) => (
  <div className="flex w-full  shadow-xl relative mx-4  bg-[#efefef] rounded-lg hover:bg-[#d9d8d8]">
    <div className="relative w-[40%] rounded-lg">
      <img
        src={img}
        alt="plant img"
        className="h-full w-full object-cover bg-transparent "
      />
    </div>
    <div className="w-1/2 p-6 flex flex-col justify-center">
      <h1 className="text-end text-xl font-medium mb-2"> Summer cactus
& succulents</h1>
      <p className="text-end w-[240px] mb-6 text-[12px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque
      </p>
      <div className="flex justify-end">
        <NavLink to="/Shop">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-2">Find More →</button>
        </NavLink>
      </div>
    </div>
  </div>
);

const FindMore = () => {
  return (
    <div className="flex flex-wrap justify-between mt-32">
      {Data.slice(18, 21).map((item, index) => (
        <div key={index} className="w-full md:w-[48%] mb-4 rounded-lg">
          <PlantCard
            img={item.image_url}
            title={item.common_name}
            description={item.bibliography}
          />
        </div>
      ))}
    </div>
  );
};

export default FindMore;

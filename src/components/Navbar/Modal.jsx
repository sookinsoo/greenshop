import React from "react";
import { Data } from "../../data.js/data";
import { HiShoppingCart } from "react-icons/hi";

const Modal = ({ closeModal, searchTerm, setSearchTerm, products, addToCart }) => {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(lowercasedSearchTerm) ||
      product.sku.toString().includes(lowercasedSearchTerm) ||
      product.price.toString().includes(lowercasedSearchTerm)
    );
  });

  const filterByName = () => {
    return Data.filter((item) =>
      item.common_name.toLowerCase().includes(lowercasedSearchTerm)
    );
  };

  const filteredData = filterByName(); 

  const addToCartFromModal = (item) => {
    addToCart(item);
    closeModal(); 
  };

  return (
    <div className="fixed inset-0 w-[800px] h-[1000px] mx-[550px] flex items-start justify-center mt-[50px] bg-opacity-70">
      <div className="fixed h-[1000px] inset-0 bg-black bg-opacity-100"></div>
      <div className="bg-white p-6 rounded-lg w-[800px] h-[800px] relative z-10 overflow-y-auto">
        <button onClick={closeModal} className="float-right">Close</button>
        <input
          type="text"
          placeholder="Search by name, SKU, or price"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-4"
        />
      
        <div className="flex flex-wrap items-center"> 
          {filteredData.slice(0, 6).map((item) => ( 
            <div className="flex-shrink-0 m-4 justify-center items-center mx-[22px]" key={item.id}> 
              <img className="w-[200px] mt-[20px]" src={item.image_url} alt={item.common_name} />
              <p className="text-center">{item.common_name}</p>
              <button 
                className="bg-green-300 hover:bg-green-500 mx-[40px] w-[120px] h-[40px] text-center rounded-[8px] mt-[8px] flex items-center justify-center" 
                onClick={() => addToCartFromModal(item)}
              >
                <HiShoppingCart size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.sku} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>SKU: {product.sku}</p>
              </div>
              <div>
                <p className="text-green-500 font-bold">${product.price}</p>
                <p>({product.quantity})</p>
              </div>
              <img src={product.image_url} alt={product.name} className="w-16 h-16 object-cover rounded"/>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
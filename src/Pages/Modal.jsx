import React from 'react';
import iconmodal from "../../public/assets/iconmodal.png"

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="text-center">
          <img src={iconmodal} alt="Thank You" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Your order has been received</h2>
          <div className="w-full flex justify-between bg-white border-t-[1px]">
          <div className=" w-[140px] border-0  mb-0 mx-[5px] border-r-[1px]">
            <p className='text-start'>Order Number</p>
            <p className='text-start text-black font-medium'>19586687</p>
          </div>
          <div className=" w-[130px] border-0 justify-between mb-0 mx-[5px] border-r-[1px]">
            <p className='text-start '>Date</p>
            <p className='text-start text-black font-medium '>15 Sep, 2021</p>
          </div>
          <div className="w-[110px] border-0 justify-between mx-[5px] border-r-[1px]">
            <p className='text-start'>Total</p>
            <p className='text-start text-black font-medium'>$2,699.00</p>
          </div>
          <div className="w-[160px] justify-between mb-3 mx-[5px]">
            <p className='text-start'>Payment Method</p>
            <p className='text-start text-black font-medium '>Cash on delivery</p>
          </div>
          </div>
          <div className="border-t border-b py-4">
            <div className="flex justify-between mb-2">
              <p>Barberton Daisy (x2)</p>
              <p>$238.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Blushing Bromeliad (x6)</p>
              <p>$834.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Aluminum Plant (x9)</p>
              <p>$1,611.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping</p>
              <p>$16.00</p>
            </div>
            <div className="flex justify-between mb-2 font-bold">
              <p>Total</p>
              <p>$2,699.00</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
          <button
            onClick={closeModal}
            className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Track your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
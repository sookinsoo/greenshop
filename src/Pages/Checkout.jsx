import React, { useState } from "react";
import Modal from "./Modal";
import img from "../../public/assets/pay.png";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // country: "",
    city: "",
    // state: "",
    address: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    // if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-[120px]">
      <div className="flex justify-between">
        <div className="w-2/3">
          <h2 className="text-xl font-bold mb-4">Billing Address</h2>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full p-2 border rounded"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full p-2 border rounded"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country / Region *</label>
              <select
                name="country"
                className="w-full p-2 border rounded"
                // value={formData.country}
                // onChange={handleInputChange}
                required
              >
                <option value={formData.country} onChange={handleInputChange}>Select a country / region</option>
                <option value={formData.country} onChange={handleInputChange}>Toshkent</option>
                {/* Add country options here */}
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700">Town / City *</label>
                <input
                  type="text"
                  name="city"
                  className="w-full p-2 border rounded"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700">State *</label>
                <select
                  name="state"
                  className="w-full p-2 border rounded"
                  // value={formData.state}
                  onChange={handleInputChange}
                  required
                >
                  <option value={formData.state} onChange={handleInputChange}>Select a state</option>
                  <option value={formData.state} onChange={handleInputChange}>Toshkent</option>
                  <option value={formData.state} >Olmaliq</option>
                  {/* Add state options here */}
                </select>
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Street Address *</label>
              <input
                type="text"
                name="address"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-2 border rounded"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Order Notes (optional)</label>
              <textarea
                name="notes"
                className="w-full p-2 border rounded"
                value={formData.notes}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-4">Your Order</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Products</p>
              <p className="font-semibold">Subtotal</p>
            </div>
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
            <div className="flex justify-between mb-2 border-t pt-2">
              <p className="font-semibold">Subtotal</p>
              <p>$2,683.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Coupon Discount</p>
              <p>(-) $00.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Shipping</p>
              <p>$16.00</p>
            </div>
            <div className="flex justify-between mb-4 border-t pt-2">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold text-green-500">$2,699.00</p>
            </div>
            <div className="mb-4">
              <p className="text-green-500 text-right cursor-pointer">View shipping charge</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold mb-2">Payment Method</p>
              <div className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <label><img className="w-[180px] h-[28px]" src={img} alt="" /></label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <label>Direct bank transfer</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <label>Cash on delivery</label>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Checkout;
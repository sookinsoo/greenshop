import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { RiMessage3Line } from "react-icons/ri";
import { PiDownload } from "react-icons/pi";
import { BiError } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const Modal = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
          <p className="text-green-500 text-lg">Your information has been saved</p>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [details, setDetails] = useState(1);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.currentPassword)
      newErrors.currentPassword = "Current Password is required";
    if (!formData.newPassword)
      newErrors.newPassword = "New Password is required";
    if (formData.newPassword !== formData.confirmNewPassword)
      newErrors.confirmNewPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", formData);
      setShowModal(true); // Show the modal on successful form submission
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md mt-28">
      <div className="flex">
        <div className="w-1/4">
          <ul className="space-y-4 cursor-pointer">
            <li className="text-lg font-bold">My Account</li>
            <div
              className="flex gap-3 items-center"
              onClick={() => setDetails(1)}
            >
              <FaRegUser
                className={details == 1 ? "text-green-500 duration-300" : ""}
              />

              <li
                className={
                  details === 1
                    ? "text-green-500 font-semibold  cursor-pointer duration-300 "
                    : ""
                }
              >
                Account Details
              </li>
            </div>
            <div
              className="flex gap-3 items-center"
              onClick={() => setDetails(2)}
            >
              <CiLocationOn className={details == 2 ? "text-green-500" : ""} />

              <NavLink to="/Address">
                <li
                  className={
                    details === 2
                      ? "text-green-600 font-semibold  cursor-pointer hover:text-green-500 "
                      : "hover:text-green-500"
                  }
                >
                  Address
                </li>
              </NavLink>
            </div>
            <div className="flex gap-3 items-center">
              <SlBasketLoaded
                className={details == 3 ? "text-green-500" : ""}
              />

              <li
                className={
                  details === 3
                    ? "text-green-600 font-semibold  cursor-pointer "
                    : "hover:text-green-500"
                }
              >
                Orders
              </li>
            </div>
            <div className="flex gap-3 items-center">
              <CiHeart className={details == 4 ? "text-green-500" : ""} />

              <li
                className={
                  details === 4
                    ? "text-green-600 font-semibold  cursor-pointer "
                    : "hover:text-green-500"
                }
              >
                Wishlist
              </li>
            </div>
            <div className="flex gap-3 items-center">
              <RiMessage3Line
                className={details == 5 ? "text-green-500" : ""}
              />

              <li
                className={
                  details === 5
                    ? "text-green-600 font-semibold  cursor-pointer "
                    : "hover:text-green-500"
                }
              >
                Reports
              </li>
            </div>
            <div className="flex gap-3 items-center">
              <PiDownload className={details == 6 ? "text-green-500" : ""} />

              <li
                className={
                  details === 6
                    ? "text-green-600 font-semibold  cursor-pointer "
                    : "hover:text-green-500"
                }
              >
                Downloads
              </li>
            </div>
            <div className="flex gap-3 items-center">
              <BiError className={details == 6 ? "text-green-500" : ""} />

              <li
                className={
                  details === 6
                    ? "text-green-600 font-semibold  cursor-pointer "
                    : "hover:text-green-500"
                }
              >
                Support
              </li>
            </div>
            <div className="flex gap-3 items-center">
              <HiOutlineLogout className={details == 6 ? "text-green-500 text-[22px]" : "text-green-500 text-[22px]"} />

              <li
                className={
                  details === 6
                    ? "text-green-500 font-semibold  cursor-pointer"
                    : "text-green-500 font-semibold  cursor-pointer"
                }
              >
                Logout
              </li>
            </div>
          </ul>
        </div>
        {details === 1 ? (
          <div className="w-3/4 ml-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block border py-1 w-full border-gray-300 rounded-md shadow-sm"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block border py-1 w-full border-gray-300 rounded-md shadow-sm"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Email address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block border py-1 w-full border-gray-300 rounded-md shadow-sm"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number *</label>
                  <div className="flex mt-1">
                    <select
                      className="border-gray-300 border rounded-l-md shadow-sm"
                      name="phoneCode"
                    >
                      <option value="+966">+966</option>
                    </select>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 py-1 border block w-full border-gray-300 rounded-r-md shadow-sm"
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700">Username *</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 block border py-1 w-full border-gray-300 rounded-md shadow-sm"
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">
                      {errors.username}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700"></label>
                  <div className="flex items-center mt-1">
                    <button
                      type="button"
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-6 mb-4">
                Password change
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-700">
                    Current password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="mt-1 block border py-1 w-[48%] border-gray-300 rounded-md shadow-sm"
                  />
                  {errors.currentPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.currentPassword}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">New password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="mt-1 block border py-1 w-[48%] border-gray-300 rounded-md shadow-sm"
                  />
                  {errors.newPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.newPassword}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={formData.confirmNewPassword}
                    onChange={handleChange}
                    className="mt-1 block border py-1 w-[48%] border-gray-300 rounded-md shadow-sm"
                  />
                  {errors.confirmNewPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmNewPassword}
                    </span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save Change
              </button>
            </form>
          </div>
        ) : (
          <>
            {/* Render other components here based on the details state */}
          </>
        )}
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Login;
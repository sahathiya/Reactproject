import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyLogin } from "../useContext/Logincontext";
import { MyCart } from "../useContext/Cartcontext";
import api from "../axios/api";
import { toast } from "react-toastify";
import {
  UserIcon,
  PhoneIcon,
  LocationMarkerIcon,
  HomeIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";

function Payment() {
  const navigate = useNavigate();
  const { current } = useContext(MyLogin);
  const { setCart, setclientSecret, setorder } = useContext(MyCart);

  const [userDetails, setUserDetails] = useState({
    Name: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    pincode: "",
    state: "",
    city: "",
    buildingName: "",
    roadAreaColony: "",
    landmark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/address", userDetails);
    console.log("delivary", res);

    setUserDetails(res.data.newAddress);
    toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      
    }
    
    
  };

  const handledelivary = async () => {
    const response = await api.post("/order");
    console.log("response order", response.data.data);
    setclientSecret(response.data.data.clientsecret);
    setorder(response.data.data);
    const res = await api.delete("/clearcart");
    console.log("clearcart", res);

    setCart(res.data.cart);

    navigate("/paymentsection");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl space-y-6"
      >
        {/* Full Name */}
        <div className="relative flex items-center">
          <UserIcon className="w-6 h-6 text-gray-400 absolute left-3" />
          <input
            type="text"
            name="Name"
            value={userDetails.Name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
          />
        </div>

        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex items-center">
            <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="number"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="relative flex items-center">
            <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="number"
              name="alternatePhoneNumber"
              value={userDetails.alternatePhoneNumber}
              onChange={handleChange}
              placeholder="Alternate Phone Number"
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        
        <div className="relative flex items-center">
          <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
          <input
            type="number"
            name="pincode"
            value={userDetails.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
            className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
          />
        </div>

        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex items-center">
            <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="state"
              value={userDetails.state}
              onChange={handleChange}
              placeholder="State"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="relative flex items-center">
            <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="city"
              value={userDetails.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex items-center">
            <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="buildingName"
              value={userDetails.buildingName}
              onChange={handleChange}
              placeholder="Building Name"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="relative flex items-center">
            <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="roadAreaColony"
              value={userDetails.roadAreaColony}
              onChange={handleChange}
              placeholder="Road/Area/Colony"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        
        <div className="relative flex items-center">
          <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
          <input
            type="text"
            name="landmark"
            value={userDetails.landmark}
            onChange={handleChange}
            placeholder="Landmark"
            className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          onClick={handledelivary}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full font-semibold"
        >
          Save Delivery Address
        </button>
      </form>
    </div>
  );
}

export default Payment;

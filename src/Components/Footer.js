import React from "react";
import { FaFacebook, FaInstagram, FaLock, FaWhatsapp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FiRefreshCw } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-12">
      
      <div className="flex flex-wrap justify-around mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4 md:mb-0">
          <FaLock className="text-pink-500 text-2xl" />
          <p className="text-lg font-semibold">Secure Payment</p>
        </div>
        <div className="flex items-center justify-center space-x-2 mb-4 md:mb-0">
          <TbTruckDelivery className="text-pink-500 text-2xl" />
          <p className="text-lg font-semibold">Free Delivery</p>
        </div>
        <div className="flex items-center justify-center space-x-2 mb-4 md:mb-0">
          <FiRefreshCw className="text-pink-500 text-2xl" />
          <p className="text-lg font-semibold">Free Returns</p>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-pink-500 mb-4">My-Store</h3>
          <p className="text-sm mb-4">
            Explore the latest trends in fashion and shop the best deals. Enjoy
            a seamless shopping experience with secure payment and fast
            delivery.
          </p>
          <div className="flex justify-center space-x-6">
            <FaInstagram className="hover:text-pink-500 transition duration-300 cursor-pointer" />
            <FaWhatsapp className="hover:text-pink-500 transition duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-pink-500 transition duration-300 cursor-pointer" />
            <CiTwitter className="hover:text-pink-500 transition duration-300 cursor-pointer" />
          </div>
        </div>

        <div className="w-full md:w-1/4 text-center md:text-left">
          <h4 className="text-lg font-semibold text-pink-500 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/men"
                className="hover:text-pink-500 transition duration-300"
              >
                Shop Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className="hover:text-pink-500 transition duration-300"
              >
                Shop Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lookbook"
                className="hover:text-pink-500 transition duration-300"
              >
                Lookbook
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className="hover:text-pink-500 transition duration-300"
              >
                Collection
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 text-center md:text-left">
          <h4 className="text-lg font-semibold text-pink-500 mb-4">
            Need Help?
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 transition duration-300">
              FAQs
            </li>
            <li className="hover:text-pink-500 transition duration-300">
              Shipping & Returns
            </li>
            <li className="hover:text-pink-500 transition duration-300">
              Shoe Care
            </li>
            <li className="hover:text-pink-500 transition duration-300">
              Size Chart
            </li>
            <li className="hover:text-pink-500 transition duration-300">
              Contact Us
            </li>
          </ul>
        </div>
      </div>

     
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} My-Store. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

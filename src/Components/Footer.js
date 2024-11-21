// import React from 'react';
// import { FaFacebook, FaInstagram, FaLock, FaWhatsapp } from 'react-icons/fa';
// import { TbTruckDelivery } from "react-icons/tb";
// import { FiRefreshCw } from "react-icons/fi";
// import { CiTwitter } from "react-icons/ci";
// import { NavLink } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className="w-full bg-gray-900 text-white py-16">
//       {/* Footer Specification */}
//       <div className="flex flex-wrap justify-between py-6 border-b border-gray-700">
//         <div className="flex items-center justify-center text-lg w-1/3 m-4 md:text-xl">
//           <FaLock className="text-pink-500 mr-4 text-2xl" /> 
//           <h5 className="ml-2 font-semibold">Secure Payment</h5>
//         </div>
//         <div className="flex items-center justify-center text-lg w-1/3 m-4 md:text-xl">
//           <TbTruckDelivery className="text-pink-500 mr-4 text-2xl" /> 
//           <h5 className="ml-2 font-semibold">Express Shipping</h5>
//         </div>
//         <div className="flex items-center justify-center text-lg w-1/3 m-4 md:text-xl">
//           <FiRefreshCw className="text-pink-500 mr-4 text-2xl" /> 
//           <h5 className="ml-2 font-semibold">Free Return</h5>
//         </div>
//       </div>

//       {/* Footer Links and Data */}
//       <div className="flex flex-wrap justify-between py-8 text-gray-300">
//         <div className="m-4 w-full md:w-1/3 lg:w-1/4">
//           <h1 className="text-3xl font-bold text-pink-500">My-Store</h1>
//           <p className="my-4 text-sm leading-relaxed">
//             Discover the latest in fashion and style with My-Store. Find the best deals and enjoy free returns.
//           </p>
//           <div className="flex space-x-6 mt-4 text-pink-500 text-2xl">
//             <FaInstagram className="hover:text-white transition duration-300 cursor-pointer" />
//             <FaWhatsapp className="hover:text-white transition duration-300 cursor-pointer" />
//             <FaFacebook className="hover:text-white transition duration-300 cursor-pointer" />
//             <CiTwitter className="hover:text-white transition duration-300 cursor-pointer" />
//           </div>
//         </div>

//         <div className="m-4 w-full md:w-1/3 lg:w-1/4">
//           <h3 className="font-bold text-pink-500 text-lg">Shop</h3>
//           <ul className="mt-4 space-y-2">
//             <li>
//               <NavLink to='/men' className="text-gray-300 hover:text-pink-500 transition duration-300 no-underline">Shop Men</NavLink>
//             </li>
//             <li>
//               <NavLink to='/women' className="text-gray-300 hover:text-pink-500 transition duration-300 no-underline">Shop Women</NavLink>
//             </li>
//             <li>
//               <NavLink to='/lookbook' className="text-gray-300 hover:text-pink-500 transition duration-300 no-underline">Lookbook</NavLink>
//             </li>
//             <li>
//               <NavLink to='/collection' className="text-gray-300 hover:text-pink-500 transition duration-300 no-underline">Collection</NavLink>
//             </li>
//           </ul>
//         </div>

//         <div className="m-4 w-full md:w-1/3 lg:w-1/4">
//           <h3 className="font-bold text-pink-500 text-lg">About</h3>
//           <ul className="mt-4 space-y-2">
//             <li className="hover:text-pink-500 cursor-pointer">Our Story</li>
//             <li className="hover:text-pink-500 cursor-pointer">Our Materials</li>
//             <li className="hover:text-pink-500 cursor-pointer">Our Value</li>
//             <li className="hover:text-pink-500 cursor-pointer">Sustainability</li>
//             <li className="hover:text-pink-500 cursor-pointer">Manufacture</li>
//           </ul>
//         </div>

//         <div className="m-4 w-full md:w-1/3 lg:w-1/4">
//           <h3 className="font-bold text-pink-500 text-lg">Need Help?</h3>
//           <ul className="mt-4 space-y-2">
//             <li className="hover:text-pink-500 cursor-pointer">FAQs</li>
//             <li className="hover:text-pink-500 cursor-pointer">Shipping & Returns</li>
//             <li className="hover:text-pink-500 cursor-pointer">Shoe Care</li>
//             <li className="hover:text-pink-500 cursor-pointer">Size Chart</li>
//             <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
//           </ul>
//         </div>
//       </div>
      
//       {/* Footer Bottom */}
//       <div className="text-center text-gray-500 py-6 border-t border-gray-700">
//         <p>&copy; {new Date().getFullYear()} My-Store. All Rights Reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;




import React from 'react';
import { FaFacebook, FaInstagram, FaLock, FaWhatsapp } from 'react-icons/fa';
import { TbTruckDelivery } from "react-icons/tb";
import { FiRefreshCw } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-12">
      {/* Footer Top (Features) */}
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

      {/* Footer Links Section */}
      <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-pink-500 mb-4">My-Store</h3>
          <p className="text-sm mb-4">
            Explore the latest trends in fashion and shop the best deals.
            Enjoy a seamless shopping experience with secure payment and fast delivery.
          </p>
          <div className="flex justify-center space-x-6">
            <FaInstagram className="hover:text-pink-500 transition duration-300 cursor-pointer" />
            <FaWhatsapp className="hover:text-pink-500 transition duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-pink-500 transition duration-300 cursor-pointer" />
            <CiTwitter className="hover:text-pink-500 transition duration-300 cursor-pointer" />
          </div>
        </div>

        <div className="w-full md:w-1/4 text-center md:text-left">
          <h4 className="text-lg font-semibold text-pink-500 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to='/men' className="hover:text-pink-500 transition duration-300">Shop Men</NavLink>
            </li>
            <li>
              <NavLink to='/women' className="hover:text-pink-500 transition duration-300">Shop Women</NavLink>
            </li>
            <li>
              <NavLink to='/lookbook' className="hover:text-pink-500 transition duration-300">Lookbook</NavLink>
            </li>
            <li>
              <NavLink to='/collection' className="hover:text-pink-500 transition duration-300">Collection</NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 text-center md:text-left">
          <h4 className="text-lg font-semibold text-pink-500 mb-4">Need Help?</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 transition duration-300">FAQs</li>
            <li className="hover:text-pink-500 transition duration-300">Shipping & Returns</li>
            <li className="hover:text-pink-500 transition duration-300">Shoe Care</li>
            <li className="hover:text-pink-500 transition duration-300">Size Chart</li>
            <li className="hover:text-pink-500 transition duration-300">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} My-Store. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;


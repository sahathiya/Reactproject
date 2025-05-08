








import React, { useContext } from 'react';
import {  MdProductionQuantityLimits } from 'react-icons/md';
import { FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { FaBoxOpen } from 'react-icons/fa';
import { Link} from "react-router-dom";
import { MyLogin } from '../useContext/Logincontext';

const Sidebar = () => {
  const { Adminlogout } = useContext(MyLogin);
  

  return (
    <div className="min-h-screen w-40 bg-blue-950 text-white   flex flex-col top-0 left-0   ">
      {/* Profile Section */}
      <div className="p-6 text-center border-b border-white ">
        <img
          src="https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
          alt="Profile"
          className="w-20 h-20 mx-auto rounded-full border-4 border-white"
        />
        <h5 className="mt-4 text-lg font-semibold">Shahadiya</h5>
        <p className="text-sm text-white">Administrator</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow mt-4">
        <Link to="/" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-blue-900 transition-colors text-white ">
            <HiMiniSquares2X2 size={20} className="mr-4" />
            <span className="font-medium">Dashboard</span>
          </div>
        </Link>

        <Link to="/products" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-blue-900 transition-colors  text-white">
            <MdProductionQuantityLimits size={20} className="mr-4" />
            <span className="font-medium">Products</span>
          </div>
        </Link>

        <Link to="/userslist" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-blue-900 transition-colors  text-white">
            <FaUsers size={20} className="mr-4" />
            <span className="font-medium">Users</span>
          </div>
        </Link>

        <Link to="/orders" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-blue-900 transition-colors  text-white">
            <FaBoxOpen size={20} className="mr-4" />
            <span className="font-medium ">Orders</span>
          </div>
        </Link>

       <div
          onClick={() => Adminlogout()}
          className="block cursor-pointer"
        >
          <div className="flex items-center p-4 hover:bg-blue-900 transition-colors">
            <FaSignOutAlt size={20} className="mr-4" />
            <span className="font-medium">Log Out</span>
          </div>
        </div>
      </nav>

      
      <div className="p-4 text-center text-xs text-white border-t border-white">
        &copy; 2024 Admin Panel
      </div>
    </div>
  );
};

export default Sidebar;

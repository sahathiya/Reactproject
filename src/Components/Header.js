import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyLogin } from "../useContext/Logincontext";
import { MyCart } from "../useContext/Cartcontext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-toastify";
import { CiSearch } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import {
  FaUser,
  FaSignOutAlt,
  FaShoppingBag,
  FaInfoCircle,
} from "react-icons/fa";
import api from "../axios/api";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setsearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { current, setCurrent } = useContext(MyLogin);
  const { cart } = useContext(MyCart);
  const cartLength = cart ? cart.length : 0;
  const profile = current ? current.username : "";

  // scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Search = async (e) => {
    const query = e.target.value;
    setsearch(query);
    try {
      if (query) {
        const res = await api.post(`/search?q=${query}`);
        console.log("API Response:", res.data);
        setSearchQuery(res.data);
      } else {
        setSearchQuery([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  console.log("searchQuery", search);

  const serachbutton = () => {
    setSearchQuery([]);
    setsearch("");
  };
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    await api.post("/logout");
    setCurrent(null);
    toast.success("You have been logged out.");
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-3 py-3 flex items-center justify-between z-10 ${
        isScrolled ? "bg-blue-950 text-white" : "bg-transparent text-black"
      }`}
    >
      <a
        href="/"
        className={`  ${
          isScrolled
            ? "text-white font-bold text-3xl no-underline"
            : "text-blue-950 font-bold text-3xl no-underline"
        }`}
      >
        iFOOT
      </a>

      <div className="flex items-center space-x-6">
        <div className="flex space-x-5">
          <NavLink
            to="/men"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold no-underline"
                : isScrolled
                ? "text-white no-underline"
                : "text-blue-950 no-underline"
            }
          >
            MEN
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold no-underline"
                : isScrolled
                ? "text-white no-underline"
                : "text-blue-950 no-underline"
            }
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold no-underline"
                : isScrolled
                ? "text-white no-underline"
                : "text-blue-950 no-underline"
            }
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/lookbook"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold no-underline"
                : isScrolled
                ? "text-white no-underline"
                : "text-blue-950 no-underline"
            }
          >
            LOOKBOOK
          </NavLink>
        </div>

        <div className="hidden md:flex relative">
          <input
            type="text"
            value={search}
            placeholder="Search..."
            className="px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-200 w-full"
            onChange={Search}
          />
          <button
            onClick={serachbutton}
            className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-3 py-2 bg-gray-500 text-white rounded-full hover:bg-blue-950 transition duration-200"
          >
            {search ? <CiCircleRemove /> : <CiSearch />}
          </button>
          
          {searchQuery.length > 0 && (
            <div className="absolute top-full left-0 w-96 bg-white border border-gray-300 shadow-lg rounded-lg mt-2 z-10 h-72 overflow-auto">
              {searchQuery.map((item, index) => (
                <NavLink
                  key={index}
                  to={`/collectiondetailes/${item._id}`}
                  className="flex items-center space-x-4 px-4 py-2 text-gray-700 hover:bg-blue-100 no-underline "
                  onClick={() => setSearchQuery([])} 
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {current ? (
          <div className="flex items-center space-x-4">
            <NavLink to="/wishlist" className="relative text-2xl">
              <i className="fas fa-heart text-pink-500"></i>
            </NavLink>

            <NavLink to="/cart" className="relative text-2xl">
              <i
                className={`fas fa-shopping-cart  ${
                  isScrolled ? "text-white" : "text-blue-950"
                }`}
              ></i>
              {cartLength > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartLength}
                </span>
              )}
            </NavLink>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex flex-col items-center focus:outline-none"
              >
                <i
                  className={`fas fa-user text-2xl ${
                    isScrolled ? "text-white" : "text-blue-950"
                  }`}
                ></i>
                {profile && (
                  <span
                    className={`text-xs font-light ${
                      isScrolled ? "text-white" : "text-blue-950"
                    }`}
                  >
                    {profile}
                  </span>
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                  <NavLink
                    to="/profile"
                    className=" px-4 py-2 text-blue-950 hover:bg-gray-100 no-underline flex items-center"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaUser className="mr-2" />
                    Profile
                  </NavLink>

                  <NavLink
                    to="/about"
                    className=" px-4 py-2 text-blue-950 hover:bg-gray-100 no-underline flex items-center"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaInfoCircle className="mr-2" />
                    About Us
                  </NavLink>
                  <NavLink
                    to="/my-orders"
                    className="px-4 py-2 text-blue-950 hover:bg-gray-100 no-underline flex items-center"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaShoppingBag className="mr-2" />
                    My Orders
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <NavLink to="/login">
            <i
              className={`fas fa-user text-2xl ${
                isScrolled ? "text-white" : "text-blue-950"
              }`}
            ></i>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;

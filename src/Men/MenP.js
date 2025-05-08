import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import { MyLogin } from "../useContext/Logincontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { MyCart } from "../useContext/Cartcontext";

function MenP() {
  const [menProducts, setMenProducts] = useState([]);
  const { products, addToWishlist, wishlist, removeFromWishlist } =
    useContext(MyLogin);
  const { addToCart } = useContext(MyCart);

  useEffect(() => {
    if (products && products) {
      setMenProducts(
        products && products.filter((data) => data.category === "men")
      );
    }
  }, [products]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    }
    return stars;
  };

  const toggleWishlist = (data) => {
    const isInWishlist = wishlist.some((item) => item._id === data._id);

    if (isInWishlist) {
      removeFromWishlist(data._id);
    } else {
      addToWishlist(data);
    }
  };

  return (
    <div className="container mx-auto mt-12 px-4 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menProducts &&
          menProducts.map((data) => (
            <div
              key={data._id}
              className="block text-center text-decoration-none"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">
                <NavLink
                  to={`/collectiondetailes/${data._id}`}
                  className="relative overflow-hidden"
                >
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </span>
                </NavLink>

                <div className="absolute top-2 left-2 flex space-x-3">
                  <button
                    onClick={() => toggleWishlist(data)}
                    className="flex bg-transparent items-center justify-center p-2 transition duration-300"
                  >
                    {wishlist.some((item) => item._id === data._id) ? (
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`text-lg   text-pink-500`}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`text-lg   text-gray-600`}
                      />
                    )}
                  </button>
                  <button
                    className="text-gray-600  p-2   hover:text-pink-500 transition duration-300"
                    onClick={() => addToCart(data._id)}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </div>

                <div className="p-4 bg-gray-50">
                  <h5 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                    {data.name}
                  </h5>
                  <p className="text-gray-600 mb-2">
                    Price:{" "}
                    <span className="text-gray-800 font-bold">
                      ₹{data.price}
                    </span>
                  </p>
                  {/* Render star icons for rating */}
                  <div className="flex justify-center mt-2 mb-4">
                    {renderStars(data.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default MenP;


import React, { useContext, useEffect } from 'react';
import { MyLogin } from '../useContext/Logincontext';
import api from '../axios/api';
import { MyCart } from '../useContext/Cartcontext';
import { NavLink } from 'react-router-dom';

function Wishlist() {
  const { current, setWishlist, removeFromWishlist, wishlist } = useContext(MyLogin);
  const { addToCart } = useContext(MyCart);

  useEffect(() => {
    if (current) {
      const fetchWishlist = async () => {
        try {
          const response = await api.get(`/wishlistpage`);
          setWishlist(response.data.wishlist.products);
        } catch (error) {
          alert(error);
        }
      };
      fetchWishlist();
    }
  }, [current,setWishlist]);

  const handleWishlist = (productId) => {
    addToCart(productId);
    removeFromWishlist(productId);
  };

  return (
    <div className="container mx-auto p-4 pt-20 mt-12">
      

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div
              key={product._id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
            >
             <NavLink to={`/collectiondetailes/${product._id}`}>
             <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
             </NavLink>
              

              
              <div className="absolute top-2 right-2 flex space-x-2">
                
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className=" text-pink-500 "
                  aria-label="Remove from Wishlist"
                >
                  <i className="fas fa-heart-broken"></i>
                </button>
               
                <button
                  onClick={() => handleWishlist(product._id)}
                  className=" text-blue-950   hover:text-white transition"
                  aria-label="Add to Cart"
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>

              
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  Price: <span className="font-bold text-gray-900">${product.price}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-center col-span-full">
            No items in your wishlist.
          </p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;

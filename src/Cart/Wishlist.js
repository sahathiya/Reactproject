// import React, { useContext,useEffect } from 'react'
// import { MyLogin } from '../useContext/Logincontext';
// import api from '../axios/api';
// function Wishlist() {
//   const {current,setWishlist,removeFromWishlist ,wishlist}=useContext(MyLogin)


//   useEffect(() => {
//     if (current ) {
//       const fetchwishlist = async () => {
//         try {
//           const response = await api.get(`/wishlistpage`);
         
         
//           setWishlist(response.data.wishlist.products);
         
//         } catch (error) {
//           alert(error);
//         }
//       };
//       fetchwishlist();
//     }
//   },[current]);
//   return (
//     <div>
  
//       {/* Wishlist Section */}
//       <h2 style={{ marginTop: '40px' }}>Your Wishlist</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {wishlist.length > 0 ? (
//           wishlist.map((product) => (
//             <div key={product._id}>
//                 <img src={product.image}/>
//               <h3>{product.name}</h3>
//               <p>Price: ${product.price}</p>
//               <button onClick={() => removeFromWishlist(product._id)}  style={{backgroundColor:'red',color:'black'}}>
//                 Remove
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No items in your wishlist.</p>
//         )}
//       </div>
//     </div>
//   );
  
// }

// export default Wishlist



// import React, { useContext, useEffect } from 'react';
// import { MyLogin } from '../useContext/Logincontext';
// import api from '../axios/api';
// import { MyCart } from '../useContext/Cartcontext';
// import Header from '../Components/Header';
// function Wishlist() {
//   const { current, setWishlist, removeFromWishlist, wishlist } = useContext(MyLogin);
// const {addToCart}=useContext(MyCart)
//   useEffect(() => {
//     if (current) {
//       const fetchwishlist = async () => {
//         try {
//           const response = await api.get(`/wishlistpage`);
//           setWishlist(response.data.wishlist.products);
//         } catch (error) {
//           alert(error);
//         }
//       };
//       fetchwishlist();
//     }
//   }, [current]);
//  const handlewishlist=(productid)=>{
//   addToCart(productid)
//   removeFromWishlist(productid)

//  }
//   return (
//     <div className="container mx-auto p-4 pt-20"> {/* Main container with padding and margin */}
   
//       <h2 className="text-3xl font-bold mb-6 text-center mt-12">Your Wishlist</h2>
//       <div className="flex flex-wrap gap-8 justify-center">
//         {wishlist.length > 0 ? (
//           wishlist.map((product) => (
//             <div key={product._id} className="bg-white rounded-lg shadow-lg p-4 w-72 flex flex-col items-center transform transition duration-300 hover:scale-105">
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className="w-full h-48 object-cover rounded-t-lg mb-4"
//               />
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">Price: <span className="font-bold text-gray-900">${product.price}</span></p>
//               {/* <button 
//                 onClick={() => removeFromWishlist(product._id)} 
//                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 w-full"
//               >
//                 Remove
//               </button>
// <br></br>
//               <button 
//                 onClick={() => handlewishlist(product._id)} 
//                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 w-full"
//               >
//                 Add to cart
//               </button> */}

// <div className="flex space-x-4">
//   <button 
//     onClick={() => removeFromWishlist(product._id)} 
//     className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300 w-auto"
//   >
//     Remove
//   </button>
  
//   <button 
//     onClick={() => handlewishlist(product._id)} 
//     className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300 w-auto"
//   >
//     Add to cart
//   </button>
// </div>

//             </div>
//           ))
//         ) : (
//           <p className="text-gray-700 text-center">No items in your wishlist.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;









import React, { useContext, useEffect } from 'react';
import { MyLogin } from '../useContext/Logincontext';
import api from '../axios/api';
import { MyCart } from '../useContext/Cartcontext';

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
  }, [current]);

  const handleWishlist = (productId) => {
    addToCart(productId);
    removeFromWishlist(productId);
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-12">
        Your Wishlist
      </h2>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div
              key={product._id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              {/* Floating Wishlist and Cart Icons */}
              <div className="absolute top-2 right-2 flex space-x-2">
                {/* Remove from Wishlist */}
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className=" text-pink-500 "
                  aria-label="Remove from Wishlist"
                >
                  <i className="fas fa-heart-broken"></i>
                </button>
                {/* Add to Cart */}
                <button
                  onClick={() => handleWishlist(product._id)}
                  className=" text-blue-950   hover:text-white transition"
                  aria-label="Add to Cart"
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>

              {/* Product Info */}
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

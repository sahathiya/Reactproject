// import React,{useContext} from 'react';
// import './Collection.css';
// import { Link } from 'react-router-dom';
// import Footer from '../Components/Footer';
// import { MyLogin } from '../useContext/Logincontext';


// function CollectionPage() {
//     const {products}=useContext(MyLogin)
    
//   return (
//     <div>
//        <h1 style={{textAlign:'center'}}>OUR BEST SELLER PRODUCTS</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <Link key={product.id} style={{textDecoration:'none'}}to={(`/collectiondetailes/${product.id}`)}>
          
//           <div className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <p>Rating: {product.rating} / 5</p>
          
//           </div>
//           </Link>
        
//         ))}
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default CollectionPage



// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Footer from '../Components/Footer';
// import { MyLogin } from '../useContext/Logincontext';

// function CollectionPage() {
//     const { products } = useContext(MyLogin);

//     return (
//         <div className="container mx-auto mt-12 px-4">
//             {/* <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">OUR BEST SELLER PRODUCTS</h1> */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {products.map((product) => (
//                     <Link 
//                         key={product.id} 
//                         to={`/collectiondetailes/${product.id}`}
//                         className="block text-center text-decoration-none"
//                     >
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//                             <div className="relative overflow-hidden">
//                                 <img 
//                                     src={product.image} 
//                                     alt={product.name} 
//                                     className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
//                                 />
//                                 <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                     Best Seller
//                                 </span>
//                             </div>
//                             <div className="p-4 bg-gray-50">
//                                 <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h2>
//                                 <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
//                                 <p className="text-gray-600">Price: <span className="text-gray-800 font-bold">${product.price}</span></p>
//                                 <p className="text-yellow-500 font-semibold">Rating: {product.rating} / 5</p>
//                                 <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default CollectionPage;



import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { MyLogin } from '../useContext/Logincontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { MyCart } from '../useContext/Cartcontext';
import Header from '../Components/Header';
function CollectionPage() {
    const { products ,addToWishlist,removeFromWishlist,wishlist,loading} = useContext(MyLogin);
    console.log('loading',loading);
    
     const{addToCart}=useContext(MyCart)
const navigate=useNavigate()
    // Helper function to render star icons based on rating
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
        const isInWishlist = wishlist.some(item => item._id === data._id);
console.log("isInWishlist",isInWishlist);

        if (isInWishlist) {
            removeFromWishlist(data._id);
            
        } else {
            addToWishlist(data);
           
        }
    };




    if (loading) {
        return (
          <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
              <svg
                className="animate-spin h-12 w-12 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              <p className="text-gray-600 text-lg mt-4">Loading products...</p>
            </div>
          </div>
        );
      }
    
   else{
    return (
        <div className="container mx-auto mt-12 px-4 pt-20">
            
            {/* <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">OUR BEST SELLER PRODUCTS</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.result&&products.result.map((product) => (
                    <div 
                        key={product._id} 
                        
                        className="block text-center text-decoration-none"
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <div className="relative overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <span className="absolute top-2 right-2 bg-blue-950 text-white text-xs font-bold px-2 py-1 rounded">
                                    Best Seller
                                </span>
                            </div>
                            {/* Wishlist and Cart Icons */}
                            <div className="absolute top-2 left-2 flex space-x-3">
                            <button onClick={() => toggleWishlist(product)} 
  className="flex bg-transparent items-center justify-center p-2  transition duration-300"
>
  {wishlist.some(item => item._id === product._id) ? (
   <FontAwesomeIcon icon={faHeart} className={`text-lg   text-pink-500`} />
  ) : (
    <FontAwesomeIcon icon={faHeart} className={`text-lg  text-gray-600`} />
  )}
</button>
                                <button className="text-gray-600  p-2 rounded-full  hover:text-pink-500  transition duration-300" onClick={()=>addToCart(product._id)}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </button>
                            </div>
                            <div className="p-4 bg-gray-50">
                                <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h2>
                                <p className="text-gray-600">Price: <span className="text-gray-800 font-bold">${product.price}</span></p>
                                
                                {/* Render star icons for rating */}
                                <div className="flex justify-center mt-2 mb-4">
                                    {renderStars(product.rating)}
                                </div>
                                
                                
                                <button className="w-full  bg-blue-950 text-white py-2 rounded  transition duration-300" onClick={()=>navigate(`/collectiondetailes/${product._id}`)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );

   } 
}

export default CollectionPage;

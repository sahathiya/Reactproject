// // // // import React,{useContext,useState,useEffect} from 'react'

// // // // import { Link } from 'react-router-dom'
// // // // import Footer from '../Components/Footer'
// // // // import { MyLogin } from '../useContext/Logincontext'

// // // // function WomenP() {
// // // //     const[Womenproducts,setWomenproducts]=useState([])
  
// // // //     const {products}=useContext(MyLogin)
// // // //     useEffect(()=>{
// // // //         setWomenproducts(products&&products.filter(datas=>datas.type==="women"))
// // // //     },[products])

// // // //   return (
// // // //     <div className="container mt-5">
// // // //     <h1  style={{textAlign:'center'}}>WOMEN</h1>

// // // //     <div className="product-grid">
// // // //         {Womenproducts && Womenproducts.map((items) => (
// // // //             <Link  key={items.id} style={{textDecoration:'none'}} to={(`/collectiondetailes/${items.id}`)}>
// // // //             <div className="product-card" >
// // // //                 <div className="card">
// // // //                     <img src={items.image} alt={items.name} className="card-img-top" />
// // // //                     <div >
// // // //                         <h5  style={{textAlign:'center'}}>{items.name}</h5>
// // // //                         <p  style={{textAlign:'center'}}>Price:$ {items.price}</p>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //             </Link>
// // // //         ))}
// // // //     </div>
// // // //     <Footer/>
// // // // </div>
// // // //   )
// // // // }

// // // // export default WomenP


// // // import React, { useContext, useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import Footer from '../Components/Footer';
// // // import { MyLogin } from '../useContext/Logincontext';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// // // function WomenP() {
// // //     const [womenProducts, setWomenProducts] = useState([]);
// // //     const { products } = useContext(MyLogin);

// // //     useEffect(() => {
// // //         setWomenProducts(products && products.filter(data => data.type === "women"));
// // //     }, [products]);

// // //     return (
// // //         <div className="container mx-auto mt-12 px-4">
// // //             {/* <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">Women's Collection</h1> */}

// // //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // //                 {womenProducts && womenProducts.map((data) => (
// // //                     <Link 
// // //                         key={data.id}
// // //                         to={`/collectiondetailes/${data.id}`} 
// // //                         className="block text-center text-decoration-none"
// // //                     >
// // //                         <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">
// // //                             <div className="relative overflow-hidden">
// // //                                 <img 
// // //                                     src={data.image} 
// // //                                     alt={data.name} 
// // //                                     className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
// // //                                 />
// // //                                 <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
// // //                                     New
// // //                                 </span>
// // //                             </div>

// // //                             {/* Wishlist and Cart Icons */}
// // //                             <div className="absolute top-2 left-2 flex space-x-3">
// // //                                 <button className="text-gray-600 bg-white p-2 rounded-full shadow hover:text-red-500 transition duration-300">
// // //                                     <FontAwesomeIcon icon={faHeart} />
// // //                                 </button>
// // //                                 <button className="text-gray-600 bg-white p-2 rounded-full shadow hover:text-blue-500 transition duration-300">
// // //                                     <FontAwesomeIcon icon={faShoppingCart} />
// // //                                 </button>
// // //                             </div>

// // //                             <div className="p-4 bg-gray-50">
// // //                                 <h5 className="text-lg font-semibold text-gray-800 mb-1 truncate">{data.name}</h5>
// // //                                 <p className="text-gray-600 mb-2">Price: <span className="text-gray-800 font-bold">${data.price}</span></p>
// // //                                 <button className="w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition duration-300 mt-3">
// // //                                     View Details
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     </Link>
// // //                 ))}
// // //             </div>
// // //             <Footer />
// // //         </div>
// // //     );
// // // }

// // // export default WomenP;




// // import React, { useContext, useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import Header from '../Components/Header';
// // import Footer from '../Components/Footer';
// // import { MyLogin } from '../useContext/Logincontext';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// // import { faStar } from '@fortawesome/free-solid-svg-icons';
// // import { MyCart } from '../useContext/Cartcontext';
// // function WomenP() {
// //     const [womenProducts, setWomenProducts] = useState([]);
// //     const { products,addToWishlist } = useContext(MyLogin);
// //     const {addToCart}=useContext(MyCart)
// //     const navigate=useNavigate()
// //     console.log('ghdg',products);
    

// //     useEffect(() => {
// //         setWomenProducts(products && products.result.filter(data => data.category === "women"));
// //     }, [products]);



// //      // Helper function to render star icons based on rating
// //      const renderStars = (rating) => {
// //         const fullStars = Math.floor(rating);
// //         const stars = [];

// //         for (let i = 0; i < fullStars; i++) {
// //             stars.push(
// //                 <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
// //             );
// //         }
// //         return stars;
// //     };


// //     return (
// //         <div className="container mx-auto mt-32 px-4"> {/* Increased top margin to mt-32 */}
// //         <Header/>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //                 {womenProducts && womenProducts.map((data) => (
// //                     <div 
// //                         key={data._id}
            
// //                         className="block text-center text-decoration-none"
// //                     >
// //                         <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">
// //                             <div className="relative overflow-hidden">
// //                                 <img 
// //                                     src={data.image} 
// //                                     alt={data.name} 
// //                                     className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
// //                                 />
// //                                 <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
// //                                     New
// //                                 </span>
// //                             </div>

// //                             {/* Wishlist and Cart Icons */}
// //                             <div className="absolute top-2 left-2 flex space-x-3">
// //                                 <button className="text-gray-600  p-2 rounded-full  transition duration-300" onClick={()=>addToWishlist(data._id)}>
// //                                     <FontAwesomeIcon icon={faHeart} />
// //                                 </button>
// //                                 <button className="text-gray-600  p-2 rounded-full  transition duration-300" onClick={()=>addToCart(data._id)}>
// //                                     <FontAwesomeIcon icon={faShoppingCart} />
// //                                 </button>
// //                             </div>

// //                             <div className="p-4 bg-gray-50">
// //                                 <h5 className="text-lg font-semibold text-gray-800 mb-1 truncate">{data.name}</h5>
// //                                 <p className="text-gray-600 mb-2">Price: <span className="text-gray-800 font-bold">${data.price}</span></p>
// //                                  {/* Render star icons for rating */}
// //                                  <div className="flex justify-center mt-2 mb-4">
// //                                     {renderStars(data.rating)}
// //                                 </div>
// //                                 <button className="w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition duration-300 mt-3" onClick={()=>navigate(`/collectiondetailes/${data._id}`)}>
// //                                     View Details
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             <Footer />
// //         </div>
// //     );
// // }

// // export default WomenP;




// // import React, { useContext, useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import Header from '../Components/Header';
// // import Footer from '../Components/Footer';
// // import { MyLogin } from '../useContext/Logincontext';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// // import { faStar } from '@fortawesome/free-solid-svg-icons';
// // import { MyCart } from '../useContext/Cartcontext';

// // function WomenP() {
// //     const [womenProducts, setWomenProducts] = useState([]);
// //     const { products, addToWishlist } = useContext(MyLogin);
// //     const { addToCart } = useContext(MyCart);
// //     const navigate = useNavigate();

// //     // State to track wishlist items
// //     const [wishlist, setWishlist] = useState([]);

// //     useEffect(() => {
// //         setWomenProducts(products && products.result.filter(data => data.category === "women"));
// //     }, [products]);

// //     // Function to toggle item in/out of wishlist
// //     const toggleWishlist = (productId) => {
// //         setWishlist((prevWishlist) => {
// //             if (prevWishlist.includes(productId)) {
// //                 return prevWishlist.filter((id) => id !== productId); // Remove from wishlist
// //             } else {
// //                 return [...prevWishlist, productId]; // Add to wishlist
// //             }
// //         });
// //     };

// //     // Helper function to render star icons based on rating
// //     const renderStars = (rating) => {
// //         const fullStars = Math.floor(rating);
// //         const stars = [];
// //         for (let i = 0; i < fullStars; i++) {
// //             stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
// //         }
// //         return stars;
// //     };

// //     return (
// //         <div className="container mx-auto mt-32 px-4">
// //             <Header />
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //                 {womenProducts && womenProducts.map((data) => (
// //                     <div key={data._id} className="block text-center text-decoration-none">
// //                         <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">
// //                             <div className="relative overflow-hidden">
// //                                 <img 
// //                                     src={data.image} 
// //                                     alt={data.name} 
// //                                     className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
// //                                 />
// //                                 <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
// //                                     New
// //                                 </span>
// //                             </div>

// //                             {/* Wishlist and Cart Icons */}
// //                             <div className="absolute top-2 left-2 flex space-x-3">
// //                                 <button 
// //                                     className={`text-gray-600 p-2 rounded-full transition duration-300 ${wishlist.includes(data._id) ? 'bg-red-500' : ''}`}
// //                                     onClick={() => {
// //                                         toggleWishlist(data._id); // Toggle wishlist status
// //                                         addToWishlist(data._id); // Optionally call your addToWishlist function
// //                                     }}
// //                                 >
// //                                     <FontAwesomeIcon icon={faHeart} className={wishlist.includes(data._id) ? 'text-white' : 'text-gray-600'} />
// //                                 </button>
// //                                 <button 
// //                                     className="text-gray-600 p-2 rounded-full transition duration-300"
// //                                     onClick={() => addToCart(data._id)}
// //                                 >
// //                                     <FontAwesomeIcon icon={faShoppingCart} />
// //                                 </button>
// //                             </div>

// //                             <div className="p-4 bg-gray-50">
// //                                 <h5 className="text-lg font-semibold text-gray-800 mb-1 truncate">{data.name}</h5>
// //                                 <p className="text-gray-600 mb-2">Price: <span className="text-gray-800 font-bold">${data.price}</span></p>
                                
// //                                 {/* Render star icons for rating */}
// //                                 <div className="flex justify-center mt-2 mb-4">
// //                                     {renderStars(data.rating)}
// //                                 </div>
                                
// //                                 <button 
// //                                     className="w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition duration-300 mt-3"
// //                                     onClick={() => navigate(`/collectiondetailes/${data._id}`)}
// //                                 >
// //                                     View Details
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             <Footer />
// //         </div>
// //     );
// // }

// // export default WomenP;




// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
// import { MyLogin } from '../useContext/Logincontext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { MyCart } from '../useContext/Cartcontext';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// function WomenP() {
//     const [womenProducts, setWomenProducts] = useState([]);
//     const { products, addToWishlist ,removeFromWishlist} = useContext(MyLogin);
//     const { addToCart } = useContext(MyCart);
//     const navigate = useNavigate();

//     // State to track wishlist items
//     const [wishlist, setWishlist] = useState([]);

//     useEffect(() => {
//         if (products && products.result) {
//             setWomenProducts(products.result.filter(data => data.category === "women"));
//         } else {
//             setWomenProducts([]); // Set an empty array if products.result is undefined
//         }
//     }, [products]);
    

//     // Function to toggle item in/out of wishlist
//     const toggleWishlist = (data) => {


//         const productinwishlist=wishlist.some(item=>item._id===data._id)
//         if(productinwishlist){
//             removeFromWishlist(data._id)

//         }else{
//             addToWishlist(data._id)
//         }
//     };

//     // Helper function to render star icons based on rating
//     const renderStars = (rating) => {
//         const fullStars = Math.floor(rating);
//         const stars = [];
//         for (let i = 0; i < fullStars; i++) {
//             stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
//         }
//         return stars;
//     };

//     return (
//         <div className="container mx-auto mt-32 px-4">
//             <Header />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {womenProducts && womenProducts.map((data) => (
//                     <div key={data._id} className="block text-center text-decoration-none">
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">
//                             <div className="relative overflow-hidden">
//                                 <img 
//                                     src={data.image} 
//                                     alt={data.name} 
//                                     className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
//                                 />
//                                 <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                     New
//                                 </span>
//                             </div>

//                             {/* Wishlist and Cart Icons */}
//                             <div className="absolute top-2 left-2 flex space-x-3">
                                

//            {/* <div 
//               className={`absolute top-2 right-2 cursor-pointer ${wishlist.some(item => item._id === data._id) ? 'text-red-500' : 'text-gray-400'}`}
//               onClick={() => toggleWishlist(data)}
//             >
//               {wishlist.some(item => item._id === data._id) ? <FaHeart className='w-6 h-6'/> : <FaRegHeart className='w-6 h-6'/>}
//             </div> */}


//                       <button 
//                                     className={`p-2 rounded-full transition duration-300 ${wishlist.includes(data._id) ? 'bg-red-500' : 'bg-white'}`}
//                                     onClick={() => toggleWishlist(data._id)}
//                                 >
//                                     <FontAwesomeIcon 
//                                         icon={faHeart} 
//                                         className={wishlist.includes(data) ? 'text-white' : 'text-gray-600'} 
//                                     />
//                                 </button> 
//                                 <button 
//                                     className="text-gray-600 p-2 rounded-full transition duration-300"
//                                     onClick={() => addToCart(data._id)}
//                                 >
//                                     <FontAwesomeIcon icon={faShoppingCart} />
//                                 </button>
//                             </div>

//                             <div className="p-4 bg-gray-50">
//                                 <h5 className="text-lg font-semibold text-gray-800 mb-1 truncate">{data.name}</h5>
//                                 <p className="text-gray-600 mb-2">Price: <span className="text-gray-800 font-bold">${data.price}</span></p>
                                
//                                 {/* Render star icons for rating */}
//                                 <div className="flex justify-center mt-2 mb-4">
//                                     {renderStars(data.rating)}
//                                 </div>
                                
//                                 <button 
//                                     className="w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition duration-300 mt-3"
//                                     onClick={() => navigate(`/collectiondetailes/${data._id}`)}
//                                 >
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default WomenP;








import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer';
import { MyLogin } from '../useContext/Logincontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { MyCart } from '../useContext/Cartcontext';

function WomenP() {
    const [womenProducts, setWomenProducts] = useState([]);
    const { products, addToWishlist, removeFromWishlist,wishlist } = useContext(MyLogin);
    const { addToCart } = useContext(MyCart);
    const navigate = useNavigate();

    // State to track wishlist items
   

    useEffect(() => {
        if (products && products.result) {
            setWomenProducts(products.result.filter(data => data.category === 'women'));
        } else {
            setWomenProducts([]); // Set an empty array if products.result is undefined
        }
    }, [products]);

   
    const toggleWishlist = (data) => {
        const isInWishlist = wishlist.some(item => item._id === data._id);


        if (isInWishlist) {
            removeFromWishlist(data._id);
            
        } else {
            addToWishlist(data);
           
        }
    };

    // Helper function to render star icons based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
        }
        return stars;
    };

    return (
        <div className="container mx-auto mt-32 px-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {womenProducts.map(data => (
                    <div key={data._id} className="block text-center text-decoration-none">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">
                            <div className="relative overflow-hidden">
                                <img 
                                    src={data.image} 
                                    alt={data.name} 
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    New
                                </span>
                            </div>

                            {/* Wishlist and Cart Icons */}
                            <div className="absolute top-2 left-2 flex space-x-3">
                            <button onClick={() => toggleWishlist(data)} 
  className="flex bg-transparent items-center justify-center p-2  transition duration-300"
>
  {wishlist.some(item => item._id === data._id) ? (
   <FontAwesomeIcon icon={faHeart} className={`text-lg   text-pink-500`} />
  ) : (
    <FontAwesomeIcon icon={faHeart} className={`text-lg  text-gray-600`} />
  )}
</button>
                                <button
                                    className="text-gray-600 p-2 rounded-full  hover:text-pink-500 transition duration-300 "
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
                                    Price:{' '}
                                    <span className="text-gray-800 font-bold">${data.price}</span>
                                </p>

                                {/* Render star icons for rating */}
                                <div className="flex justify-center mt-2 mb-4">{renderStars(data.rating)}</div>

                                <button
                                    className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-700 transition duration-300 mt-3"
                                    onClick={() => navigate(`/collectiondetailes/${data._id}`)}
                                >
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

export default WomenP;





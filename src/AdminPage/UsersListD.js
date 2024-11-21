// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { MyLogin } from '../useContext/Logincontext';
// import styles from './UserListD.module.css';

// function UsersListD() {
//     const { id } = useParams();
//     const [userDetails, setUserDetails] = useState([]);
//     const { handleblock } = useContext(MyLogin);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:3000/Users/${id}`);
//                 setUserDetails(res.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchUser();
//     }, [id]);

//     const cartData = userDetails ? userDetails.cart : [];

//     const handleBlockClick = () => {
//         handleblock(userDetails.id, userDetails.block);
//     };

//     return (
//         <div className={styles.mainContainer}>
//             {/* User Details Section */}
//             <div className={styles.userDetailsContainer}>
//                 <h3 className={styles.head}>User Details</h3>
//                 {userDetails ? (
//                     <div>
//                         <FaUser className={styles.userIcon} />
//                         <p ><strong>ID:</strong> {userDetails.id}</p>
//                         <p className={styles.id}><strong>Username:</strong> {userDetails.username}</p>
//                         <p className={styles.id}><strong>Email:</strong> {userDetails.email}</p>
//                         <p className={styles.id}><strong>PhoneNumber:</strong> {userDetails.phonenumber}</p>
//                         <p className={styles.id}><strong>Address:</strong> {userDetails.address}</p>
//                         <button className={styles.blockButton} onClick={handleBlockClick}>
//                             {userDetails.block ? "Unblock" : "Block"}
//                         </button>
//                     </div>
//                 ) : (
//                     <p>Loading user details...</p>
//                 )}
//             </div>

//             {/* Cart Items Section */}
//             <div className={styles.cartContainer}>
//                 <h3 className={styles.carthead}>Cart Items</h3>
//                 {cartData ? (
//                     <div className={styles.cartItems}>
//                         {cartData.map((item, index) => (
//                             <div key={index} className={styles.cartItem}>
//                                 <img src={item.image} alt={item.name} className={styles.cartItemImage} />
//                                 <p className={styles.cartItemName}>{item.name}</p>
//                                 <p className={styles.cartItemPrice}>${item.price}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No items in the cart.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default UsersListD;



// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { MyLogin } from '../useContext/Logincontext';
// import styles from './UserListD.module.css';
// import api from '../axios/api';
// function UsersListD() {
//     const { id } = useParams();
//     const [userDetails, setUserDetails] = useState([]);
//     const[block,setblock]=useState()
//     // const[cartdata,setcartdata]=useState([])
//     // const { handleblock } = useContext(MyLogin);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await api.get(`/admin/user/${id}`);
//                 console.log("ssss",res);
                
//                 setUserDetails(res.data.user);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchUser();
//     }, [id]);


   
       
       
   

//     const handleBlockClick =async () => {
//         try {
//             const res=await api.post(`/admin/block/${id}`)
//             console.log("block user",res);
//             setblock(res.data)
//         } catch (error) {
//             console.log(error);
            
//         }
       

        
        
//     };

//     return (
//         <div className={styles.mainContainer}>
//             {/* User Details Section */}
//             <div className={styles.userDetailsContainer}>
//                 <h3 className={styles.head}>User Details</h3>
//                 {userDetails ? (
//                     <div>
//                         <FaUser className={styles.userIcon} />
//                         <p ><strong>ID:</strong> {userDetails._id}</p>
//                         <p className={styles._id}><strong>Username:</strong> {userDetails.username}</p>
//                         <p className={styles._id}><strong>Email:</strong> {userDetails.email}</p>
//                         <p className={styles._id}><strong>PhoneNumber:</strong> {userDetails.phonenumber}</p>
//                         <p className={styles._id}><strong>Address:</strong> {userDetails.address}</p>
//                         <button className={styles.blockButton} onClick={handleBlockClick}>
//                             {userDetails.block ? "Unblock" : "Block"}
//                         </button>
//                     </div>
//                 ) : (
//                     <p>Loading user details...</p>
//                 )}
//             </div>

            
//         </div>
//     );
// }

// export default UsersListD;




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import api from '../axios/api';

// function UsersListD() {
//     const { id } = useParams();
//     const [userDetails, setUserDetails] = useState(null);
//     const [block, setBlock] = useState(false);
//     const[order,setorder]=useState([])
   

//     // Fetch user details
//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await api.get(`/admin/user/${id}`);
//                 setUserDetails(res.data.user);
//             } catch (error) {
//                 console.log("Error fetching user:", error);
//             }
//         };

//         fetchUser();
//     }, [id]);

    
// useEffect(()=>{
//     const fetchorders=async()=>{
//         try {
//             const res=await api.get(`/admin/userorder/${id}`)
//             console.log("specific order",res);
            
//             setorder(res.data.order)
//         } catch (error) {
//             console.log(error);
            
//         }
        
    
//     }
//     fetchorders()
// },[id])




//     const handleBlockClick = async () => {
//         try {
//             const res = await api.post(`/admin/block/${id}`);
//             setBlock(res.data.blockStatus);
//         } catch (error) {
//             console.log("Error blocking/unblocking user:", error);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
//             {/* User Details Section */}
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//                 <div className="flex items-center space-x-4 mb-6">
//                     <FaUser className="text-5xl text-blue-500" />
//                     <h3 className="text-3xl font-semibold">User Details</h3>
//                 </div>
//                 {userDetails ? (
//                     <div>
//                         <div className="space-y-4">
//                             <p><strong className="font-bold">ID:</strong> {userDetails._id}</p>
//                             <p><strong className="font-bold">Username:</strong> {userDetails.username}</p>
//                             <p><strong className="font-bold">Email:</strong> {userDetails.email}</p>
//                             <p><strong className="font-bold">Phone Number:</strong> {userDetails.phonenumber}</p>
//                             <p><strong className="font-bold">Address:</strong> {userDetails.address}</p>
//                         </div>
//                         <div className="mt-6">
//                             <button
//                                 onClick={handleBlockClick}
//                                 className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none ${userDetails.block ? 'bg-red-600' : 'bg-green-600'} hover:bg-opacity-90`}
//                             >
//                                 {userDetails.block ? "Unblock" : "Block"}
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>Loading user details...</p>
//                 )}
//             </div>

//             {order&&order.map((item)=>(
//                 <div className="space-y-4">
//                 <p><strong className="font-bold">OrderID:</strong> {item._id}</p>
//                 <p><strong className="font-bold">Amount:</strong> {item.amount}</p>
//                 <p><strong className="font-bold">paymentstatus:</strong> {item.paymentStatus}</p>
//                 <p><strong className="font-bold"> shippingStatus:</strong> {item.shippingStatus}</p>
//                 <p><strong className="font-bold">purchaseDate:</strong> {item.purchaseDate}</p>
//             </div>
//             ))}
//         </div>
//     );
// }

// export default UsersListD;












// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import api from '../axios/api';

// function UsersListD() {
//     const { id } = useParams();
//     const [userDetails, setUserDetails] = useState(null);
//     console.log("userdetaiiii",userDetails);
    
//     const [block, setBlock] = useState();
//     console.log("setBlock",block);
    
//     const [order, setOrder] = useState([]);

    
//         const fetchUser = async () => {
//             try {
//                 const res = await api.get(`/admin/user/${id}`);
//                 setUserDetails(res.data.user);
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//             }
//         };
//         useEffect(() => {
//         fetchUser();
//     }, [id]);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const res = await api.get(`/admin/userorder/${id}`);
//                 console.log("specific order", res.data);
//                 setOrder(res.data.order); // Default to an empty array
//             } catch (error) {
//                 console.error("Error fetching orders:", error);
//             }
//         };

//         fetchOrders();
//     }, [id]);

//     const handleBlockClick = async () => {
//         try {
//             const res=await api.post(`/admin/block/${id}`)
//             console.log("block user",res);
//             fetchUser();
//             setBlock(res.data)
//         } catch (error) {
//             console.error("Error blocking/unblocking user:", error);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//                 <div className="flex items-center space-x-4 mb-6">
//                     <FaUser className="text-5xl text-blue-500" />
//                     <h3 className="text-3xl font-semibold">User Details</h3>
//                 </div>
//                 {userDetails ? (
//                     <div>
//                         <div className="space-y-4">
//                             <p><strong>ID:</strong> {userDetails._id}</p>
//                             <p><strong>Username:</strong> {userDetails.username}</p>
//                             <p><strong>Email:</strong> {userDetails.email}</p>
//                             <p><strong>Phone Number:</strong> {userDetails.phonenumber}</p>
//                             <p><strong>Address:</strong> {userDetails.address}</p>
//                         </div>
//                         <div className="mt-6">
//                             <button
//                                 onClick={handleBlockClick}
//                                 className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none ${userDetails.block ? 'bg-green-600' : 'bg-red-600'} hover:bg-opacity-90`}
//                             >
//                                 {userDetails.block ? "Unblock" : "Block"}
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>Loading user details...</p>
//                 )}
//             </div>

//             <div>
//     {order.length > 0 ? (
//         order.map((item) => (
//             <div key={item._id} className="border p-4 rounded-md mb-4 bg-white">
//                 <p><strong>Amount:</strong> ${item.amount}</p>
//             </div>
//         ))
//     ) : (
//         <p>No orders available.</p>
//     )}
// </div>

            
//         </div>
//     );
// }

// export default UsersListD;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import api from '../axios/api';

function UsersListD() {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [block, setBlock] = useState();
    const [orders, setOrder] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    // Fetch user details
    const fetchUser = async () => {
        try {
            const res = await api.get(`/admin/user/${id}`);
            console.log("userdetailesssssssssss",res);
            
            setUserDetails(res.data.user);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    // Fetch user orders
    const fetchOrders = async () => {
        try {
            const res = await api.get(`/admin/userorder/${id}`);
            console.log("userorderrrrrrrrrrr",res);
            
            setOrder(res.data.order); // Set orders (including products)
            setProductDetails(res.data.order.products)
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        fetchUser();
        fetchOrders();
    }, [id]);

    const handleBlockClick = async () => {
        try {
            const res = await api.post(`/admin/block/${id}`);
            fetchUser();
            setBlock(res.data);
        } catch (error) {
            console.error("Error blocking/unblocking user:", error);
        }
    };

    return (
    //     <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
    //         <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    //             <div className="flex items-center space-x-4 mb-6">
    //                 <FaUser className="text-5xl text-blue-500" />
    //                 <h3 className="text-3xl font-semibold">User Details</h3>
    //             </div>
    //             {userDetails ? (
    //                 <div>
    //                     <div className="space-y-4">
    //                         <p><strong>ID:</strong> {userDetails._id}</p>
    //                         <p><strong>Username:</strong> {userDetails.username}</p>
    //                         <p><strong>Email:</strong> {userDetails.email}</p>
    //                         <p><strong>Phone Number:</strong> {userDetails.phonenumber}</p>
    //                         <p><strong>Address:</strong> {userDetails.address}</p>
    //                     </div>
    //                     <div className="mt-6">
    //                         <button
    //                             onClick={handleBlockClick}
    //                             className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none ${userDetails.block ? 'bg-green-600' : 'bg-red-600'} hover:bg-opacity-90`}
    //                         >
    //                             {userDetails.block ? "Unblock" : "Block"}
    //                         </button>
    //                     </div>
    //                 </div>
    //             ) : (
    //                 <p>Loading user details...</p>
    //             )}
    //         </div>


    //         {/* Orders Section */}
    //   <div className="bg-gray-100 shadow-lg rounded-lg p-6">
    //     <h2 className="text-2xl font-bold border-b pb-4 mb-4">Order Details</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {orders.products&&orders.products.length > 0 ? (
    //         orders.products.map((order, index) => (
    //           <div
    //             key={index}
    //             className="bg-white shadow rounded-lg p-4 space-y-4"
    //           >
    //             <h4 className="font-bold text-lg">Order #{orders._id}</h4>
    //             <p>
    //               <strong>Purchase Date:</strong>{" "}
    //               {new Date(orders.purchaseDate).toLocaleDateString()}
    //             </p>
    //             <p>
    //               <strong>Payment Status:</strong>{" "}
    //               <span
    //                 className={`px-2 py-1 rounded text-white ${
    //                     orders.paymentStatus === "completed"
    //                     ? "bg-green-500"
    //                     : "bg-red-500"
    //                 }`}
    //               >
    //                 {orders.paymentStatus}
    //               </span>
    //             </p>
    //             <p>
    //               <strong>Delivery Status:</strong>{" "}
    //               <span
    //                 className={`px-2 py-1 rounded text-white ${
    //                     orders.shippingStatus === "Delivered"
    //                     ? "bg-green-500"
    //                     : orders.shippingStatus === "Processing"
    //                     ? "bg-yellow-500"
    //                     : "bg-red-500"
    //                 }`}
    //               >
    //                 {orders.shippingStatus}
    //               </span>
    //             </p>
    //           </div>
    //         ))
    //       ) : (
    //         <p className="col-span-full text-gray-500 text-center">
    //           No orders found.
    //         </p>
    //       )}
    //     </div>


    //     {/* Product Details */}
    //     <div className="col-span-full mt-6">
    //         <h3 className="text-xl font-bold mb-4">Products</h3>
    //         {productDetails.length > 0 ? (
    //           productDetails.map((item, index) => (
    //             <div
    //               key={index}
    //               className="bg-white shadow rounded-lg p-4 space-y-4"
    //             >
    //               <h5 className="font-bold text-lg">{item.productId.name}</h5>
    //               <p>
    //                 <strong>Price:</strong> ${item.productId.price}
    //               </p>
    //               <p>
    //                 <strong>Quantity:</strong> {item.quantity}
    //               </p>
    //               <p>
    //                 <strong>Total:</strong> ${item.productId.price * item.quantity}
    //               </p>
    //               <img
    //                 src={item.productId.image}
    //                 alt={item.productId.name}
    //                 className="w-24 h-24 object-cover rounded-lg"
    //               />
    //             </div>
    //           ))
    //         ) : (
    //           <p className="col-span-full text-gray-500 text-center">
    //             No products found in this order.
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
        







//         <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
//     {/* User Details Section */}
//     <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-6">
//       <div className="flex items-center space-x-4 mb-6">
//         <FaUser className="text-5xl text-blue-500" />
//         <h3 className="text-3xl font-semibold">User Details</h3>
//       </div>
//       {userDetails ? (
//         <div>
//           <div className="space-y-4">
//             <p><strong>ID:</strong> {userDetails._id}</p>
//             <p><strong>Username:</strong> {userDetails.username}</p>
//             <p><strong>Email:</strong> {userDetails.email}</p>
//             <p><strong>Phone Number:</strong> {userDetails.phonenumber}</p>
//             <p><strong>Address:</strong> {userDetails.address}</p>
//           </div>
//           <div className="mt-6">
//             <button
//               onClick={handleBlockClick}
//               className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none ${userDetails.block ? 'bg-green-600' : 'bg-red-600'} hover:bg-opacity-90`}
//             >
//               {userDetails.block ? "Unblock" : "Block"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>

//     {/* Order and Product Details Section */}
//     <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
//       {/* Order Details */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4 border-b pb-2">Order Details</h2>
//         {orders.products && orders.products.length > 0 ? (
//           orders.products.map((order, index) => (
//             <div key={index} className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//                 <h4 className="font-bold text-lg">Order #{orders._id}</h4>
//                 <p><strong>Purchase Date:</strong> {new Date(orders.purchaseDate).toLocaleDateString()}</p>
//                 <p>
//                   <strong>Payment Status:</strong>
//                   <span
//                     className={`px-2 py-1 rounded text-white ${orders.paymentStatus === "completed" ? "bg-green-500" : "bg-red-500"}`}
//                   >
//                     {orders.paymentStatus}
//                   </span>
//                 </p>
//                 <p>
//                   <strong>Delivery Status:</strong>
//                   <span
//                     className={`px-2 py-1 rounded text-white ${
//                       orders.shippingStatus === "Delivered"
//                         ? "bg-green-500"
//                         : orders.shippingStatus === "Processing"
//                         ? "bg-yellow-500"
//                         : "bg-red-500"
//                     }`}
//                   >
//                     {orders.shippingStatus}
//                   </span>
//                 </p>
//               </div>

//               {/* Product Details */}
//               <div className="mt-6 space-y-4">
//                 {productDetails.length > 0 ? (
//                   productDetails.map((item, index) => (
//                     <div key={index} className="bg-white shadow rounded-lg p-4 flex space-x-4">
//                       <img
//                         src={item.productId.image}
//                         alt={item.productId.name}
//                         className="w-24 h-24 object-cover rounded-lg"
//                       />
//                       <div className="flex flex-col justify-between">
//                         <h5 className="font-bold text-lg">{item.productId.name}</h5>
//                         <p><strong>Price:</strong> ${item.productId.price}</p>
//                         <p><strong>Quantity:</strong> {item.quantity}</p>
//                         <p><strong>Total:</strong> ${item.productId.price * item.quantity}</p>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-500">No products found in this order.</p>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No orders found.</p>
//         )}
//       </div>
//     </div>
//   </div>
// </div>











<div className="min-h-screen bg-gray-50 p-6 lg:p-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* User Details Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <FaUser className="text-5xl text-blue-950" />
        <h3 className="text-3xl font-semibold">User Details</h3>
      </div>
      {userDetails ? (
        <div>
          <div className="space-y-4">
            <p><strong>ID:</strong> {userDetails._id}</p>
            <p><strong>Username:</strong> {userDetails.username}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Phone Number:</strong> {userDetails.phonenumber}</p>
            <p><strong>Address:</strong> {userDetails.address}</p>
          </div>
          <div className="mt-6">
            <button
              onClick={handleBlockClick}
              className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none ${userDetails.block ? 'bg-green-600' : 'bg-red-600'} hover:bg-opacity-90`}
            >
              {userDetails.block ? "Unblock" : "Block"}
            </button>
          </div>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>

    {/* Order and Product Details Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
      {/* Order Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Order Details</h2>
        <div className="max-h-96 overflow-y-auto"> {/* Scrollable container */}
          {orders.products && orders.products.length > 0 ? (
            orders.products.map((order, index) => (
              <div key={index} className="space-y-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg">Order #{orders._id}</h4>
                  <p><strong>Purchase Date:</strong> {new Date(orders.purchaseDate).toLocaleDateString()}</p>
                  <p>
                    <strong>Payment Status:</strong>
                    <span
                      className={`px-2 py-1 rounded text-white ${orders.paymentStatus === "completed" ? "bg-green-500" : "bg-red-500"}`}
                    >
                      {orders.paymentStatus}
                    </span>
                  </p>
                  <p>
                    <strong>Delivery Status:</strong>
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        orders.shippingStatus === "Delivered"
                          ? "bg-green-500"
                          : orders.shippingStatus === "Processing"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {orders.shippingStatus}
                    </span>
                  </p>
                </div>

                {/* Product Details */}
                <div className="mt-6 space-y-4">
                  {productDetails.length > 0 ? (
                    productDetails.map((item, index) => (
                      <div key={index} className="bg-white shadow rounded-lg p-4 flex space-x-4">
                        <img
                          src={item.productId.image}
                          alt={item.productId.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex flex-col justify-between">
                          <h5 className="font-bold text-lg">{item.productId.name}</h5>
                          <p><strong>Price:</strong> ${item.productId.price}</p>
                          <p><strong>Quantity:</strong> {item.quantity}</p>
                          <p><strong>Total:</strong> ${item.productId.price * item.quantity}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No products found in this order.</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default UsersListD;

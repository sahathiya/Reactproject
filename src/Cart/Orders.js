import React, { useContext, useEffect } from "react";

import api from "../axios/api";
import { MyCart } from "../useContext/Cartcontext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
function Orders() {
  const { sessionID } = useParams();
  const { orders, handleCancel } = useContext(MyCart);
  console.log("order", sessionID);

  const handleverify = async () => {
    try {
      console.log("sessionID", sessionID);

      const res = await api.post("/verify", { sessionID: sessionID });
      toast.success(res.data.message);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleverify();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-10 mt-12 text-gray-800">
        Ordered Products
      </h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {orders &&
          orders.map((order) => (
            <div key={order._id} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Order ID: <span className="text-indigo-600">{order._id}</span>
                </h2>
                <p className="text-gray-600">
                  Purchase Date:{" "}
                  {new Date(order.purchaseDate).toLocaleDateString()}
                </p>
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                Products:
              </h3>
              <div className="space-y-6">
                {order.products &&
                  order.products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-md shadow-sm flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src={product.productId.image}
                          alt={product.productId.name}
                          className="w-20 h-20 rounded-lg object-cover mr-6"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-700 text-lg">
                            {product.productId.name}
                          </h4>
                          <p className="text-gray-600">
                            Price: ${product.productId.price}
                          </p>
                          <p className="text-gray-600">
                            Quantity: {product.quantity}
                          </p>
                          <p className="text-gray-600">
                            Brand: {product.productId.brand}
                          </p>
                          <p className="text-gray-600">
                            paymentStatus:{order.paymentStatus}
                          </p>
                          <p className="text-gray-600">
                            shippingStatus:{order.shippingStatus}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <p className="text-right mt-6 text-gray-700 font-medium">
                Total Amount: ${order.amount}
              </p>
              <div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
                  onClick={() => handleCancel(order._id)}
                >
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Orders;

// import React, { useContext, useEffect } from 'react';
// import api from '../axios/api';
// import { MyCart } from '../useContext/Cartcontext';
// import { useParams } from 'react-router-dom';

// function Orders() {
//     const { sessionID } = useParams();
//     const { orders, handleCancel } = useContext(MyCart);

//     const handleVerify = async () => {
//         try {
//             const res = await api.post("/verify", { sessionID });
//             alert(res.data.message);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         handleVerify();
//     }, []);

//     return (
//         <div className="bg-gray-100 min-h-screen p-6">
//             <h1 className="text-3xl font-bold text-center mb-10 mt-12 text-gray-800">Track the delivery of order #{sessionID}</h1>
//             <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {/* Left Section: Order Products */}
//                 <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-6">Products Ordered</h2>
//                     <div className="space-y-6">
//                         {orders && orders.map((order) => (
//                             <div key={order._id} className="border-b pb-6 mb-6">
//                                 {order.products && order.products.map((product, index) => (
//                                     <div
//                                         key={index}
//                                         className="flex items-start space-x-6 mb-4"
//                                     >
//                                         <img
//                                             src={product.productId.image}
//                                             alt={product.productId.name}
//                                             className="w-24 h-24 rounded-lg object-cover"
//                                         />
//                                         <div>
//                                             <h3 className="font-semibold text-lg text-gray-800">{product.productId.name}</h3>
//                                             <p className="text-gray-600">Price: ${product.productId.price}</p>
//                                             <p className="text-gray-600">Quantity: {product.quantity}</p>
//                                             <p className="text-gray-600">Brand: {product.productId.brand}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <p className="text-gray-700 mt-4">Total Amount: <span className="font-semibold">${order.amount}</span></p>
//                                 <button
//                                     className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition-all mt-4"
//                                     onClick={() => handleCancel(order._id)}
//                                 >
//                                     Cancel Order
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Section: Order History */}
//                 <div className="bg-white rounded-lg shadow-lg p-6">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order History</h2>
//                     <div className="space-y-4">
//                         <div className="flex items-start space-x-4">
//                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">✔</div>
//                             <div>
//                                 <h4 className="font-semibold text-gray-800">Order Placed</h4>
//                                 <p className="text-gray-600">19 Nov 2023, 10:45</p>
//                             </div>
//                         </div>
//                         <div className="flex items-start space-x-4">
//                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">✔</div>
//                             <div>
//                                 <h4 className="font-semibold text-gray-800">Payment Accepted</h4>
//                                 <p className="text-gray-600">19 Nov 2023, 10:47</p>
//                             </div>
//                         </div>
//                         <div className="flex items-start space-x-4">
//                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">✔</div>
//                             <div>
//                                 <h4 className="font-semibold text-gray-800">Products Delivered</h4>
//                                 <p className="text-gray-600">22 Nov 2023</p>
//                             </div>
//                         </div>
//                         <button className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-4 hover:bg-indigo-700">
//                             Order Details
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Orders;

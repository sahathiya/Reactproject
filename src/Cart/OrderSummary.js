// // import React, { useContext,useEffect } from "react";
// // import { MyCart } from "../useContext/Cartcontext";
// // import { toast } from "react-toastify";
// // import api from "../axios/api";
// // import { useParams } from "react-router-dom";
// // function OrderSummary() {
// //   const{orders}=useContext(MyCart)
// //   const { sessionID } = useParams();

// //   const verify = async () => {
// //     try {
     

// //       const res = await api.post("/verify", { sessionID: sessionID });
// //       toast.success(res.data.message);
// //       console.log(res);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     verify();
// //   }, []);
  

// //   return (
// //     <div className="bg-gray-100 min-h-screen p-8">
// //       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
// //         <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
// //           Order Summary
// //         </h1>
// //         {orders.map((order) => (
// //           <div key={order._id} className="space-y-8 mb-8">
// //             {/* Product Details */}
// //             <div>
// //               <h2 className="text-xl font-semibold text-gray-800 mb-4">
// //                 Ordered Products
// //               </h2>
// //               <div className="space-y-4">
// //                 {order.products.map((product, index) => (
// //                   <div
// //                     key={index}
// //                     className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
// //                   >
// //                     <img
// //                       src={product.productId.image}
// //                       alt={product.productId.name}
// //                       className="w-16 h-16 rounded-lg object-cover mr-4"
// //                     />
// //                     <div>
// //                       <h3 className="text-lg font-medium text-gray-800">
// //                         {product.productId.name}
// //                       </h3>
// //                       <p className="text-gray-600">
// //                         Price:₹ {product.productId.price}
// //                       </p>
// //                       <p className="text-gray-600">
// //                         Quantity: {product.quantity}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Shipping Address */}
// //             <div>
// //               <h2 className="text-xl font-semibold text-gray-800 mb-4">
// //                 Shipping Address
// //               </h2>
// //               <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
// //                 <p className="text-gray-700">
// //                   {order.address.Name}, {order.address.city}
// //                 </p>
// //                 <p className="text-gray-700">
// //                   {order.address.state}, {order.address.pincode}
// //                 </p>
// //                 <p className="text-gray-700">{order.address.phoneNumber}</p>
// //               </div>
// //             </div>

// //             {/* Total Amount */}
// //             <div>
// //               <h2 className="text-xl font-semibold text-gray-800 mb-4">
// //                 Total Amount
// //               </h2>
// //               <p className="text-2xl font-bold text-indigo-600">
// //                 ${order.amount}
// //               </p>
// //             </div>

// //              {/* Confirm Order Button */}
// //         <div className="text-center mt-6">
// //           <button onClick={()=>verify(order.sessionID)} className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
// //             Confirm Order
// //           </button>
// //         </div>
// //           </div>
// //         ))}

       
// //       </div>
// //     </div>
// //   );
// // }

// // export default OrderSummary;







import React, { useContext, useEffect } from "react";
import { MyCart } from "../useContext/Cartcontext";
import { toast } from "react-toastify";
import api from "../axios/api";
import { useParams } from "react-router-dom";

function OrderSummary() {
  const { orders } = useContext(MyCart);
  const { sessionID } = useParams();

  const verifyOrder = async (sessionID) => {
    try {
      const res = await api.post("/verify", { sessionID });
      toast.success(res.data.message);
      console.log(res);
    } catch (error) {
      console.error("Verification error:", error);
      toast.error("Failed to confirm the order");
    }
  };

  useEffect(() => {
    if (sessionID) {
      verifyOrder(sessionID);
    }
  }, [sessionID]);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Order Summary
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders available</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="border-b border-gray-200 pb-6 mb-6 space-y-6"
            >
              {/* Product Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Ordered Products
                </h2>
                <div className="space-y-4">
                  {order.products.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                    >
                      <img
                        src={product.productId.image}
                        alt={product.productId.name}
                        className="w-20 h-20 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          {product.productId.name}
                        </h3>
                        <p className="text-gray-600">
                          Price: ₹{product.productId.price}
                        </p>
                        <p className="text-gray-600">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Shipping Address
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    <span className="font-medium">Name:</span> {order.address.Name}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">City:</span> {order.address.city}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">State:</span> {order.address.state}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Pincode:</span>{" "}
                    {order.address.pincode}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span>{" "}
                    {order.address.phoneNumber}
                  </p>
                </div>
              </div>

              {/* Total Amount */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Total Amount
                </h2>
                <p className="text-2xl font-bold text-indigo-600">
                  ₹{order.amount}
                </p>
              </div>

              {/* Confirm Order Button */}
              <div className="text-center">
                <button
                  onClick={() => verifyOrder(order.sessionID)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-all duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderSummary;


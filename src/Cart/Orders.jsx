// import React, { useContext, useEffect } from "react";

// import api from "../axios/api";
// import { MyCart } from "../useContext/Cartcontext";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// function Orders() {
//   const { sessionID } = useParams();
//   const { orders, handleCancel,fetchorders } = useContext(MyCart);
//   console.log("order", orders);

  

//   useEffect(() => {
//     const handleverify = async () => {
//       try {
//         console.log("sessionID", sessionID);
  
//         const res = await api.post("/verify", { sessionID: sessionID });
//         toast.success(res.data.message);
//         console.log(res);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     handleverify();
//     fetchorders()
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h1 className="text-3xl font-bold text-center mb-10 mt-12 text-gray-800">
//         Ordered Products
//       </h1>
//       <div className="max-w-4xl mx-auto space-y-8">
//         {orders &&
//           orders.map((order) => (
//             <div key={order._id} className="bg-white rounded-lg shadow-md p-8">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Order ID: <span className="text-indigo-600">{order._id}</span>
//                 </h2>
//                 <p className="text-gray-600">
//                   Purchase Date:{" "}
//                   {new Date(order.purchaseDate).toLocaleDateString()}
//                 </p>
//               </div>
//               <h3 className="text-lg font-bold text-gray-700 mb-4">
//                 Products:
//               </h3>
//               <div className="space-y-6">
//                 {order.products &&
//                   order.products.map((product, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-50 p-4 rounded-md shadow-sm flex items-center justify-between"
//                     >
//                       <div className="flex items-center">
//                         <img
//                           src={product.productId.image}
//                           alt={product.productId.name}
//                           className="w-20 h-20 rounded-lg object-cover mr-6"
//                         />
//                         <div>
//                           <h4 className="font-semibold text-gray-700 text-lg">
//                             {product.productId.name}
//                           </h4>
//                           <p className="text-gray-600">
//                             <strong> Price:</strong> ${product.productId.price}
//                           </p>
//                           <p className="text-gray-600">
//                             <strong>Quantity:</strong> {product.quantity}
//                           </p>
//                           <p className="text-gray-600">
//                             <strong>Brand:</strong> {product.productId.brand}
//                           </p>
//                           <p className="text-gray-600">
//                             <strong>paymentStatus:</strong>{" "}
//                             {order.paymentStatus}
//                           </p>
//                           <p className="text-gray-600">
//                             <strong>shippingStatus:</strong>{" "}
//                             {order.shippingStatus}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="ml-4">
//                         <h5 className="text-gray-700 font-semibold mb-2">
//                           Shipping Address
//                         </h5>
//                         <p className="text-gray-600">
//                           <strong>Name:</strong> {order.address.Name}
//                         </p>
//                         <p className="text-gray-600">
//                           <strong>PhoneNumber:</strong>
//                           {order.address.phoneNumber}
//                         </p>
//                         <p className="text-gray-600">
//                           <strong>City:</strong> {order.address.city}
//                         </p>
//                         <p className="text-gray-600">
//                           <strong>State:</strong>
//                           {order.address.state}
//                         </p>
//                         <p className="text-gray-600">
//                           <strong>Pincode:</strong>
//                           {order.address.pincode}
//                         </p>
//                       </div>
//                     </div>
//                   ))}

//               </div>
//               <p className="text-right mt-6 text-gray-700 font-medium">
//                 Total Amount: ${order.amount}
//               </p>
//               <div>
//                 <button
//                   className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
//                   onClick={() => handleCancel(order._id)}
//                 >
//                   Cancel Order
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Orders;
import React, { useContext, useEffect } from "react";
import api from "../axios/api";
import { MyCart } from "../useContext/Cartcontext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Orders() {
  const { sessionID } = useParams();
  const { orders, handleCancel, fetchorders } = useContext(MyCart);

  useEffect(() => {
    const handleverify = async () => {
      try {
        const res = await api.post("/verify", { sessionID: sessionID });
        toast.success(res.data.message);
      } catch (error) {
        console.error(error);
      }
    };
    handleverify();
    fetchorders();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 mt-12 text-gray-800">
        Ordered Products
      </h1>
      <div className="max-w-6xl mx-auto space-y-8">
        {orders &&
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Order ID:{" "}
                  <span className="text-indigo-600 break-all">
                    {order._id}
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0">
                  Purchase Date:{" "}
                  {new Date(order.purchaseDate).toLocaleDateString()}
                </p>
              </div>
              <h3 className="text-lg font-bold text-gray-700">Products:</h3>
              <div className="space-y-6">
                {order.products &&
                  order.products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-md shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0"
                    >
                      <div className="flex items-start sm:items-center space-x-4">
                        <img
                          src={product.productId.image}
                          alt={product.productId.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-700 text-base sm:text-lg">
                            {product.productId.name}
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base">
                            <strong>Price:</strong> ${product.productId.price}
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base">
                            <strong>Quantity:</strong> {product.quantity}
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base">
                            <strong>Brand:</strong> {product.productId.brand}
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base">
                            <strong>Payment Status:</strong>{" "}
                            {order.paymentStatus}
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base">
                            <strong>Shipping Status:</strong>{" "}
                            {order.shippingStatus}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-gray-700 font-semibold mb-2">
                          Shipping Address
                        </h5>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <strong>Name:</strong> {order.address.Name}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <strong>Phone:</strong> {order.address.phoneNumber}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <strong>City:</strong> {order.address.city}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <strong>State:</strong> {order.address.state}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <strong>Pincode:</strong> {order.address.pincode}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <p className="text-right mt-6 text-gray-700 font-medium text-sm sm:text-base">
                Total Amount: ${order.amount}
              </p>
              <div className="flex justify-end mt-4">
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

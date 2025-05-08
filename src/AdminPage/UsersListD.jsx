import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import api from "../axios/api";
import { toast } from "react-toastify";

function UsersListD() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [orders, setOrder] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  // Fetch user details
  const fetchUser = async () => {
    try {
      const res = await api.get(`/admin/user/${id}`);
      console.log("userdetailesssssssssss", res);

      setUserDetails(res.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Fetch user orders
  const fetchOrders = async () => {
    try {
      const res = await api.get(`/admin/userorder/${id}`);
      console.log("userorderrrrrrrrrrr", res);

      setOrder(res.data.order); 
      setProductDetails(res.data.order.products);
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
      toast.success(res.data.message)
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
    }
  };

  return (
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
                <p>
                  <strong>ID:</strong> {userDetails._id}
                </p>
                <p>
                  <strong>Username:</strong> {userDetails.username}
                </p>
                <p>
                  <strong>Email:</strong> {userDetails.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {userDetails.phonenumber}
                </p>
                <p>
                  <strong>Address:</strong> {userDetails.address}
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleBlockClick}
                  className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none ${
                    userDetails.block ? "bg-green-600" : "bg-red-600"
                  } hover:bg-opacity-90`}
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
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Order Details
            </h2>
            <div className="max-h-96 overflow-y-auto">
              {" "}
              {/* Scrollable container */}
              {orders.products && orders.products.length > 0 ? (
                orders.products.map((order, index) => (
                  <div key={index} className="space-y-4 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-lg">Order #{orders._id}</h4>
                      <p>
                        <strong>Purchase Date:</strong>{" "}
                        {new Date(orders.purchaseDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Payment Status:</strong>
                        <span
                          className={`px-2 py-1 rounded text-white ${
                            orders.paymentStatus === "completed"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
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
                          <div
                            key={index}
                            className="bg-white shadow rounded-lg p-4 flex space-x-4"
                          >
                            <img
                              src={item.productId.image}
                              alt={item.productId.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex flex-col justify-between">
                              <h5 className="font-bold text-lg">
                                {item.productId.name}
                              </h5>
                              <p>
                                <strong>Price:</strong> ${item.productId.price}
                              </p>
                              <p>
                                <strong>Quantity:</strong> {item.quantity}
                              </p>
                              <p>
                                <strong>Total:</strong> $
                                {item.productId.price * item.quantity}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">
                          No products found in this order.
                        </p>
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

import React, { useState, useEffect } from "react";
import api from "../axios/api";

function AdminOrder() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/admin/orders");
        console.log("admin orderssss", res.data.orders);
        setOrder(res.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Orders List
        </h1>

        {/* Table Wrapper */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200 ">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-blue-950 text-white ">
              <tr>
                <th className="px-2 py-1 text-sm font-medium">User Name</th>
                <th className="px-2 py-1 text-sm font-medium">Order ID</th>
                <th className="px-2 py-1 text-sm font-medium">Purchase Date</th>
                <th className="px-2 py-1 text-sm font-medium">Amount</th>
                <th className="px-2 py-1 text-sm font-medium">Payment</th>
                <th className="px-2 py-1 text-sm font-medium">Shipping</th>
                <th className="px-2 py-1 text-sm font-medium">Products</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {order &&
                order.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-2 py-1 text-sm text-gray-800">
                      {item.UserID.username || "N/A"}
                    </td>
                    <td className="px-2 py-1 text-sm text-gray-800">
                      {item._id}
                    </td>
                    <td className="px-2 py-1 text-sm text-gray-800">
                      {new Date(item.purchaseDate).toLocaleDateString()}
                    </td>
                    <td className="px-2 py-1 text-sm text-gray-800">
                      ${item.amount}
                    </td>
                    <td
                      className={`px-2 py-1 text-sm font-bold ${
                        item.paymentStatus === "completed"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.paymentStatus}
                    </td>
                    <td
                      className={`px-2 py-1 text-sm font-bold ${
                        item.shippingStatus === "completed"
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {item.shippingStatus}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-800">
                      <div className="flex flex-wrap gap-4">
                        {item.products?.map((product, prodIndex) => (
                          <div
                            key={prodIndex}
                            className="flex items-center space-x-4 max-w-[250px]"
                          >
                            <img
                              src={product.productId.image}
                              alt={product.productId.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="text-sm">
                              <p className="font-semibold text-gray-800">
                                {product.productId.name}
                              </p>
                              <p className="text-gray-600">
                                ${product.productId.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminOrder;

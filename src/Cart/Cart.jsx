import React, { useContext } from "react";
import { MyCart } from "../useContext/Cartcontext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    handleremove,
    incrementQuantity,
    decrementQuantity,
    handlecheckout,
  } = useContext(MyCart);

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.productId.price * product.quantity,
      0
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <br></br>
        <br></br>
      

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center border-b border-gray-200 pb-4 mb-4"
                >
                  <img
                    src={item.productId.image}
                    alt={item.productId.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.productId.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Price: ₹{item.productId.price}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => decrementQuantity(item.productId._id)}
                      >
                        -
                      </button>
                      <span className="mx-4 text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => incrementQuantity(item.productId._id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleremove(item.productId._id)}
                    >
                      ✖
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                      Subtotal: ₹
                      {(item.productId.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-4">
                Order Summary
              </h2>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Estimate</span>
                  <span>₹5.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax Estimate</span>
                  <span>₹8.32</span>
                </div>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between text-gray-800 font-semibold">
                <span>Order Total</span>
                <span>₹{(getTotalPrice() + 5 + 8.32).toFixed(2)}</span>
              </div>
              <button
                onClick={handlecheckout}
                className="w-full mt-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Checkout
              </button>

              <Link to="/collection">
                <button className="w-full mt-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

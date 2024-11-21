

// import React, { useContext } from 'react';
// import { Mycontext } from '../useContext/Context';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Cart() {
 
//   const { UserCart } = useContext(Mycontext);
//   const { cart,handleremove } = UserCart;

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.price * product.qty, 0);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div className="row">
//           {cart.map((item) => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card border rounded shadow-sm">
//                 <img src={item.image} alt={item.name} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.name}</h5>
//                   <p className="card-text text-danger">Price: ₹{item.new_price}</p>
//                   <div className="d-flex align-items-center mb-2">
//                     <p className="mb-0 me-2">Quantity:</p>
//                     <input
//                       type="number"
//                       value={item.qty}
//                       min="1"
//                       className="form-control w-25"
//                       readOnly
//                     />
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button className="btn btn-danger btn-sm" onClick={()=>handleremove(item.id)}>Remove</button>
//                     <button className="btn btn-success btn-sm">Buy now</button>

//                     <p className="fw-bold mb-0">Subtotal: ₹{(item.price * item.qty).toFixed(2)}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 text-end mt-4">
//             <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
//             <button className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );  
// }



// export default Cart



// import React, { useContext } from 'react';
// import { Mycontext } from '../useContext/Context';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Cart() {
//   const { UserCart } = useContext(Mycontext);
//   const { cart, setCart, handleremove } = UserCart; // Include setCart for state updates
//   const navigate = useNavigate();

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.price * product.qty, 0);
//   };

//   const incrementQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   const decrementQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
//       )
//     );
//   };

//   const handleBuyNow = () => {
//     navigate('/payment');  // Navigate to the payment page
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div className="row">
//           {cart.map((item) => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card border rounded shadow-sm">
//                 <img src={item.image} alt={item.name} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.name}</h5>
//                   <p className="card-text text-danger">Price: ₹{item.price}</p>
//                   <div className="d-flex align-items-center mb-2">
//                     <p className="mb-0 me-2">Quantity:</p>
//                     <div className="input-group">
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => decrementQuantity(item.id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.qty}
//                         min="1"
//                         className="form-control w-25 text-center"
//                         readOnly
//                       />
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => incrementQuantity(item.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleremove(item.id)}
//                     >
//                       Remove
//                     </button>
//                     <button
//                       className="btn btn-success btn-sm"
//                       onClick={handleBuyNow}
//                     >
//                       Buy Now
//                     </button>
//                     <p className="fw-bold mb-0">
//                       Subtotal: ₹{(item.price * item.qty).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 text-end mt-4">
//             <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
//             <button className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;




// import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Cart.css';
// import { MyCart } from '../useContext/Cartcontext';


// function Cart() {
//   // const { UserCart } = useContext(Mycontext);
//   // const { cart, handleremove,handlecheckout,incrementQuantity,decrementQuantity } = UserCart; 
//   const {cart=[],handleremove,incrementQuantity,decrementQuantity,handlecheckout }=useContext(MyCart)

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.price * product.qty, 0);
//   };

  

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div className="row">
//           {cart.map((item) => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card border rounded shadow-sm">
//                 <img src={item.image} alt={item.name} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.name}</h5>
//                   <p className="card-text text-danger">Price: ₹{item.price}</p>
//                   <div className="d-flex align-items-center mb-2">
//                     <p className="mb-0 me-2">Quantity:</p>
//                     <div className="input-group">
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => decrementQuantity(item.id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.qty}
//                         min="1"
//                         className="form-control w-25 text-center"
//                         readOnly
//                       />
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => incrementQuantity(item.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleremove(item.id)}
//                     >
//                       Remove
//                     </button>
//                     {/* <button
//                       className="btn btn-success btn-sm"
//                       onClick={handleBuyNow}
//                     >
//                       Buy Now
//                     </button> */}
//                     <p className="fw-bold mb-0">
//                       Subtotal: ₹{(item.price * item.qty).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 text-end mt-4">
//             <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
//             <button className="btn btn-primary btn-lg mt-3" onClick={handlecheckout}>Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;


// import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Cart.css';
// import { MyCart } from '../useContext/Cartcontext';
// import Header from '../Components/Header';


// function Cart() {
   
//   const { cart, handleremove, incrementQuantity, decrementQuantity, handlecheckout } = useContext(MyCart);
// console.log('cart',cart);




//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.productId.price * product.quantity, 0);
//   };
// console.log("cart",cart);

//   return (
//     <div className="container mt-5">
//       <Header/>
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {!cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div className="row">
//           {cart.map((item) => (
//             <div key={item._id} className="col-md-4 mb-4">
//               <div className="card border rounded shadow-sm">
//                 <img src={item.productId.image} alt={item.productId.name} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.productId.name}</h5>
//                   <p className="card-text text-danger">Price: ₹{item.productId.price}</p>
//                   <div className="d-flex align-items-center mb-2">
//                     <p className="mb-0 me-2">Quantity:</p>
//                     <div className="input-group">
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => decrementQuantity(item.productId._id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         min="1"
//                         className="form-control w-25 text-center"
//                         readOnly
//                       />
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => incrementQuantity(item.productId._id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleremove(item.productId._id)}
//                     >
//                       Remove
//                     </button>
//                     <p className="fw-bold mb-0">
//                       Subtotal: ₹{(item.productId.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}


//           <div className="col-12 text-end mt-4">
//             <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
//             <button className="btn btn-primary btn-lg mt-3" onClick={handlecheckout}>Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;




import React, { useContext } from 'react';
import { MyCart } from '../useContext/Cartcontext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, handleremove, incrementQuantity, decrementQuantity, handlecheckout } = useContext(MyCart);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.productId.price * product.quantity, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <div className="container mx-auto px-4 py-8">
        <br></br>
        <br></br>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product List */}
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
                    <p className="text-sm text-gray-500">Price: ₹{item.productId.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => decrementQuantity(item.productId._id)}
                      >
                        -
                      </button>
                      <span className="mx-4 text-gray-800">{item.quantity}</span>
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
                      Subtotal: ₹{(item.productId.price * item.quantity).toFixed(2)}
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


              <Link to='/collection'>
              <button className="w-full mt-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Continue Shopping</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;





























// import React, { useContext,useEffect,useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Cart.css';
// import { MyCart } from '../useContext/Cartcontext';
// import api from '../axios/api';
// function Cart() {
//   const [mycart,setmycart]=useState([])
//   const { cart, handleremove, incrementQuantity, decrementQuantity, handlecheckout } = useContext(MyCart);
//   console.log('cart', cart);
//   useEffect(() => {
//     // Fetch cart products when the component mounts
//     const fetchCart = async () => {
//       try {
//         const response = await api.get('http://lo/cartproducts');
//         setmycart(response.data.allcartitems.products); // Update state with fetched data
//       } catch (error) {
//         console.error('Error fetching cart data:', error);
//       }
//     };

//     fetchCart();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   // Calculate the total price of all items in the cart
//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.productId.price * item.quantity, 0);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {mycart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div className="row">
//           {mycart.map((item) => (
//             <div key={item._id} className="col-md-4 mb-4">
//               <div className="card border rounded shadow-sm">
//                 <img
//                   src={item.productId.image}
//                   alt={item.productId.name}
//                   className="card-img-top"
//                   style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.productId.name}</h5>
//                   <p className="card-text text-danger">Price: ₹{item.productId.price}</p>
//                   <div className="d-flex align-items-center mb-2">
//                     <p className="mb-0 me-2">Quantity:</p>
//                     <div className="input-group">
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => decrementQuantity(item.productId._id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         min="1"
//                         className="form-control w-25 text-center"
//                         readOnly
//                       />
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => incrementQuantity(item.productId._id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleremove(item.productId._id)}
//                     >
//                       Remove
//                     </button>
//                     <p className="fw-bold mb-0">
//                       Subtotal: ₹{(item.productId.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 text-end mt-4">
//             <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
//             <button className="btn btn-primary btn-lg mt-3" onClick={handlecheckout}>Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;



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




import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import { MyCart } from '../useContext/Cartcontext';


function Cart() {
  // const { UserCart } = useContext(Mycontext);
  // const { cart, handleremove,handlecheckout,incrementQuantity,decrementQuantity } = UserCart; 
  const {cart,handleremove,incrementQuantity,decrementQuantity,handlecheckout }=useContext(MyCart)

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.qty, 0);
  };

  

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card border rounded shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-danger">Price: ₹{item.price}</p>
                  <div className="d-flex align-items-center mb-2">
                    <p className="mb-0 me-2">Quantity:</p>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.qty}
                        min="1"
                        className="form-control w-25 text-center"
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleremove(item.id)}
                    >
                      Remove
                    </button>
                    {/* <button
                      className="btn btn-success btn-sm"
                      onClick={handleBuyNow}
                    >
                      Buy Now
                    </button> */}
                    <p className="fw-bold mb-0">
                      Subtotal: ₹{(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-end mt-4">
            <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
            <button className="btn btn-primary btn-lg mt-3" onClick={handlecheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

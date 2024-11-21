// // import React,{useContext} from 'react'
// // import { MyCart } from '../useContext/Cartcontext'

// // function Verify() {
// //     const {orders,handleverify}=useContext(MyCart)
// //   return (
// //     <div>
// //         <h1>order verified</h1>
       
// //    <button className='bg-green-500 text-black' onClick={()=>handleverify(orders.sessionID)}>verify</button>
           
     
// //     </div>
// //   )
// // }

// // export default Verify



// import React, { useContext } from 'react';
// import { MyCart } from '../useContext/Cartcontext';

// function Verify() {
//     const { orders, handleverify } = useContext(MyCart);

//     return (
//         <div>
//             <h1>Order summary</h1>
//             {orders?.map((order, index) => (
//                 <div key={index}>
//                     <p>Order ID: {order.sessionID}</p>
//                     <button
//                         className="bg-green-500 text-black"
//                         onClick={() => handleverify(order.sessionID)}
//                     >
//                         Verify
//                     </button>
//                 </div>
//             ))}
//         </div>







//     );
// }

// export default Verify;

// import React,{useState,useEffect} from 'react'
// import api from '../axios/api'

// function AdminOrder() {
//     const[order,setorder]=useState([])

//     useEffect(()=>{
//         const fetchorders=async()=>{
//             try {
//                 const res=await api.get('/admin/orders')
//             console.log("admin orders",res);
//             setorder(res.data.orders)
//             } catch (error) {
//                 console.log(error);
                
//             }
//             }
//         fetchorders()
//     },[])
//   return (
//     <div>
//       <h1>orderslist</h1>
//       <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-purple-600 text-white">
//                 <th className="py-3 px-6 text-left">UserID</th>
//                 <th className="py-3 px-6 text-left">OrderID</th>
//                 {/* <th className="py-3 px-6 text-left">Username</th> */}
//                 <th className="py-3 px-6 text-left">ParchaseDate</th>
//                 <th className="py-3 px-6 text-left">Amount</th>
//                 <th className="py-3 px-6 text-center">Payment</th>
//                 <th className="py-3 px-6 text-left">Shipping</th>
//               </tr>
//             </thead>
//             <tbody>
//             {
//         order&&order.map((item)=>(
//             <tr>
//                 <td>{item.UserID}</td>
//                 <td>{item._id}</td>
//                 <td>{item.amount}</td>
//                 <td>{item.purchaseDate}</td>
//                 <td>{item.paymentStatus}</td>
//                 <td>{item.shippingStatus}</td>
//             </tr>
//         ))
//       }
//             </tbody>

      
//       </table>
//     </div>
//   )
// }

// export default AdminOrder



// import React, { useState, useEffect } from 'react';
// import api from '../axios/api';

// function AdminOrder() {
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await api.get('/admin/orders');
//         console.log("admin orders", res);
//         setOrder(res.data.orders);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="container mx-auto p-6 bg-white rounded shadow-lg">
//         <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Orders List</h1>
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-purple-700 text-white">
//               <th className="py-3 px-6 text-left border border-gray-300">User ID</th>
//               <th className="py-3 px-6 text-left border border-gray-300">Order ID</th>
//               <th className="py-3 px-6 text-left border border-gray-300">Purchase Date</th>
//               <th className="py-3 px-6 text-left border border-gray-300">Amount</th>
//               <th className="py-3 px-6 text-center border border-gray-300">Payment</th>
//               <th className="py-3 px-6 text-left border border-gray-300">Shipping</th>
//             </tr>
//           </thead>
//           <tbody>
//             {order && order.map((item, index) => (
//               <tr
//                 key={index}
//                 className={`${
//                   index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
//                 } hover:bg-purple-100 transition-colors`}
//               >
//                 <td className="py-3 px-6 text-gray-800 border border-gray-300">{item.UserID}</td>
//                 <td className="py-3 px-6 text-gray-800 border border-gray-300">{item._id}</td>
//                 <td className="py-3 px-6 text-gray-800 border border-gray-300">{item.purchaseDate}</td>
//                 <td className="py-3 px-6 text-gray-800 border border-gray-300">${item.amount}</td>
//                 <td
//                   className={`py-3 px-6 text-center font-bold border border-gray-300 ${
//                     item.paymentStatus === 'completed' ? 'text-green-600' : 'text-red-600'
//                   }`}
//                 >
//                   {item.paymentStatus}
//                 </td>
//                 <td
//                   className={`py-3 px-6 text-gray-800 border border-gray-300 ${
//                     item.shippingStatus === 'completed' ? 'text-blue-600' : 'text-yellow-600'
//                   }`}
//                 >
//                   {item.shippingStatus}
//                 </td>
//               </tr>
//             ))}
//             {
//                 item.products&&item.products.map((product)=>(




//                 ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminOrder;



import React, { useState, useEffect } from 'react';
import api from '../axios/api';

function AdminOrder() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get('/admin/orders');
        console.log("admin orderssss", res.data.orders

        );
        setOrder(res.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
//     <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
//   <div className="max-w-6xl mx-auto">
//     <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Orders List</h1>
    
//     {/* Table Wrapper */}
//     <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
//       <table className="min-w-full table-auto text-left">
//         <thead className="bg-indigo-600 text-white">
//           <tr>
//             <th className="px-4 py-2 text-sm font-medium">User Name</th>
//             <th className="px-4 py-2 text-sm font-medium">Order ID</th>
//             <th className="px-4 py-2 text-sm font-medium">Purchase Date</th>
//             <th className="px-4 py-2 text-sm font-medium">Amount</th>
//             <th className="px-4 py-2 text-sm font-medium">Payment</th>
//             <th className="px-4 py-2 text-sm font-medium">Shipping</th>
//             <th className="px-4 py-2 text-sm font-medium">Products</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white">
//           {order && order.map((item, index) => (
//             <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
//               <td className="px-4 py-3 text-sm text-gray-800">{item.UserID.username || "N/A"}</td>
//               <td className="px-4 py-3 text-sm text-gray-800">{item._id}</td>
//               <td className="px-4 py-3 text-sm text-gray-800">{item.purchaseDate}</td>
//               <td className="px-4 py-3 text-sm text-gray-800">${item.amount}</td>
//               <td className={`px-4 py-3 text-sm font-bold ${item.paymentStatus === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
//                 {item.paymentStatus}
//               </td>
//               <td className={`px-4 py-3 text-sm font-bold ${item.shippingStatus === 'completed' ? 'text-blue-600' : 'text-yellow-600'}`}>
//                 {item.shippingStatus}
//               </td>
//               <td className="px-4 py-3 text-sm text-gray-800">
//                 <ul className="space-y-2">
//                   {item.products?.map((product, prodIndex) => (
//                     <li key={prodIndex} className="flex items-center space-x-4">
//                       <img
//                         src={product.productId.image}
//                         alt={product.productId.name}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                       <div>
//                         <p className="font-semibold text-gray-800">{product.productId.name}</p>
//                         <p className="text-gray-600">${product.productId.price}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// </div>







    // <div className="min-h-screen bg-gray-100 py-10">
    //   <div className="container mx-auto p-6 bg-white rounded shadow-lg">
    //     <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Orders List</h1>
    //     <table className="min-w-full border-collapse border border-gray-300">
    //       <thead>
    //         <tr className="bg-purple-700 text-white">
    //           <th className="py-3 px-6 text-left border border-gray-300">User Name</th>
    //           <th className="py-3 px-6 text-left border border-gray-300">Order ID</th>
    //           <th className="py-3 px-6 text-left border border-gray-300">Purchase Date</th>
    //           <th className="py-3 px-6 text-left border border-gray-300">Amount</th>
    //           <th className="py-3 px-6 text-center border border-gray-300">Payment</th>
    //           <th className="py-3 px-6 text-left border border-gray-300">Shipping</th>
    //           <th className="py-3 px-6 text-left border border-gray-300">Products</th>
              
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {order && order.map((item, index) => (
    //           <React.Fragment key={index}>
    //             <tr
    //               className={`${
    //                 index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
    //               } hover:bg-purple-100 transition-colors`}
    //             >
    //               <td className="py-3 px-6 text-gray-800 border border-gray-300">
    //                 {item.UserID.username || "N/A"}
    //               </td>
    //               <td className="py-3 px-6 text-gray-800 border border-gray-300">{item._id}</td>
    //               <td className="py-3 px-6 text-gray-800 border border-gray-300">{item.purchaseDate}</td>
    //               <td className="py-3 px-6 text-gray-800 border border-gray-300">${item.amount}</td>
    //               <td
    //                 className={`py-3 px-6 text-center font-bold border border-gray-300 ${
    //                   item.paymentStatus === 'completed' ? 'text-green-600' : 'text-red-600'
    //                 }`}
    //               >
    //                 {item.paymentStatus}
    //               </td>
    //               <td
    //                 className={`py-3 px-6 text-gray-800 border border-gray-300 ${
    //                   item.shippingStatus === 'completed' ? 'text-blue-600' : 'text-yellow-600'
    //                 }`}
    //               >
    //                 {item.shippingStatus}
    //               </td>
    //               {/* <td className="py-3 px-6 text-gray-800 border border-gray-300">${item.address}</td> */}
    //               <td className="py-3 px-6 text-gray-800 border border-gray-300">
    //                 <ul>
    //                   {item.products?.map((product, prodIndex) => (
    //                     <li key={prodIndex} className="flex items-center space-x-4 mb-2">
    //                       <img
    //                         src={product.productId.image}
    //                         alt={product.productId.name}
    //                         className="w-16 h-16 object-cover rounded"
    //                       />
    //                       <div>
    //                         <p className="font-semibold">{product.productId.name}</p>
    //                         <p className="text-gray-600">${product.productId.price}</p>
    //                       </div>
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </td>


                  
    //             </tr>
    //           </React.Fragment>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>











    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Orders List</h1>

    {/* Table Wrapper */}
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200 ">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-indigo-600 text-white ">
          <tr>
          <th className="px-2 py-1 text-sm font-medium">User Name</th>
<th className="px-2 py-1 text-sm font-medium">Order ID</th>
<th className="px-2 py-1 text-sm font-medium">Purchase Date</th>
<th className="px-2 py-1 text-sm font-medium">Amount</th>
<th className="px-2 py-1 text-sm font-medium">Payment</th>
<th className="px-2 py-1 text-sm font-medium">Shipping</th>
<th className="px-2 py-1 text-sm font-medium">Products</th>



            {/* <th className="px-4 py-2 text-sm font-medium">User Name</th>
            <th className="px-4 py-2 text-sm font-medium">Order ID</th>
            <th className="px-4 py-2 text-sm font-medium">Purchase Date</th>
            <th className="px-4 py-2 text-sm font-medium">Amount</th>
            <th className="px-4 py-2 text-sm font-medium">Payment</th>
            <th className="px-4 py-2 text-sm font-medium">Shipping</th>
            <th className="px-4 py-2 text-sm font-medium">Products</th> */}
          </tr>
        </thead>
        <tbody className="bg-white">
          {order && order.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
<td className="px-2 py-1 text-sm text-gray-800">{item.UserID.username || "N/A"}</td>
<td className="px-2 py-1 text-sm text-gray-800">{item._id}</td>
<td className="px-2 py-1 text-sm text-gray-800">{new Date(item.purchaseDate).toLocaleDateString()}</td>
<td className="px-2 py-1 text-sm text-gray-800">${item.amount}</td>
<td className={`px-2 py-1 text-sm font-bold ${item.paymentStatus === 'completed' ? 'text-green-600' : 'text-red-600'}`}>{item.paymentStatus}</td>
<td className={`px-2 py-1 text-sm font-bold ${item.shippingStatus === 'completed' ? 'text-blue-600' : 'text-yellow-600'}`}>{item.shippingStatus}</td>





              {/* <td className="px-4 py-3 text-sm text-gray-800">{item.UserID.username || "N/A"}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{item._id}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{item.purchaseDate}</td>
              <td className="px-4 py-3 text-sm text-gray-800">${item.amount}</td>
              <td className={`px-4 py-3 text-sm font-bold ${item.paymentStatus === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
                {item.paymentStatus}
              </td>
              <td className={`px-4 py-3 text-sm font-bold ${item.shippingStatus === 'completed' ? 'text-blue-600' : 'text-yellow-600'}`}>
                {item.shippingStatus}
              </td> */}
              <td className="px-4 py-3 text-sm text-gray-800">
                <div className="flex flex-wrap gap-4">
                  {item.products?.map((product, prodIndex) => (
                    <div key={prodIndex} className="flex items-center space-x-4 max-w-[250px]">
                      <img
                        src={product.productId.image}
                        alt={product.productId.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-800">{product.productId.name}</p>
                        <p className="text-gray-600">${product.productId.price}</p>
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

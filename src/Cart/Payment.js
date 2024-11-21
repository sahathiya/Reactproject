// // // import React, { useState } from 'react';
// // // import './Payment.css'

// // // function Payment() {
// // //   const [userDetails, setUserDetails] = useState({
// // //     name: '',
// // //     email: '',
// // //     address: '',
// // //     phoneNumber: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setUserDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     setTimeout(() => {
// // //         // Here, you would typically process the payment and submit the details to your backend
// // //     console.log('Payment details submitted:', userDetails);
// // //     alert('Payment successful!');
// // //     }, 3000);


    
// // //   };

// // //   return (
// // //     <div className="payment-container">
// // //       <h2>Payment Page</h2>
// // //       <form onSubmit={handleSubmit} className="payment-form">
// // //         <div className="form-group">
// // //           <label>Name:</label>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={userDetails.name}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label>Email:</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={userDetails.email}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label>Address:</label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             value={userDetails.address}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         {/* <div className="form-group">
// // //           <label>City:</label>
// // //           <input
// // //             type="text"
// // //             name="city"
// // //             value={userDetails.city}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div> */}
// // //         {/* <div className="form-group">
// // //           <label>Postal Code:</label>
// // //           <input
// // //             type="text"
// // //             name="postalCode"
// // //             value={userDetails.postalCode}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div> */}
// // //         <div className="form-group">
// // //           <label>Phone Number:</label>
// // //           <input
// // //             type="text"
// // //             name="cardNumber"
// // //             value={userDetails.cardNumber}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         {/* <div className="form-group">
// // //           <label>Expiration Date:</label>
// // //           <input
// // //             type="text"
// // //             name="expirationDate"
// // //             value={userDetails.expirationDate}
// // //             onChange={handleChange}
// // //             placeholder="MM/YY"
// // //             required
// // //           />
// // //         </div> */}
// // //         {/* <div className="form-group">
// // //           <label>CVV:</label>
// // //           <input
// // //             type="text"
// // //             name="cvv"
// // //             value={userDetails.cvv}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div> */}
// // //         <button type="submit" className="submit-button">Pay Now</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Payment;



// // // import React, { useState, useContext } from 'react';

// // // import './Payment.css';

// // // import { useNavigate } from 'react-router-dom'; 
// // // import axios from 'axios'
// // // import { MyLogin } from '../useContext/Logincontext';

// // // function Payment() {

// // //   const navigate = useNavigate(); 
// // //   const {current,setCurrent}=useContext(MyLogin)
// // //   const [userDetails, setUserDetails] = useState({
// // //     name: '',
// // //     email: '',
// // //     address: '',
// // //     phoneNumber: '',
// // //   });
  

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setUserDetails((prevDetails) => ({
// // //       ...prevDetails,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     setTimeout(async () => {
      
// // //     const response=await axios.get(`http://localhost:3000/Users/${current.id}`) 
// // //     const users=response.data
// // //     const removecart=await axios.put(`http://localhost:3000/Users/${current.id}`,{...users,cart:[]})
// // //       setCurrent(removecart.data)
// // //       alert('Payment successful!');
// // //       navigate('/cart'); 
    
    
    
// // //     }, 2000);
// // //   };

// // //   return (
// // //     <div className="payment-container">
// // //       <h2>Payment Page</h2>
// // //       <form onSubmit={handleSubmit} className="payment-form">
// // //         <div className="form-group">
// // //           <label>Name:</label>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={userDetails.name}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label>Email:</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={userDetails.email}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label>Address:</label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             value={userDetails.address}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label>Phone Number:</label>
// // //           <input
// // //             type="number"
// // //             name="phoneNumber" 
// // //             value={userDetails.phoneNumber}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit" className="submit-button">Pay Now</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Payment;





// // // import React, { useState, useContext, useEffect } from 'react';

// // // import './Payment.css';




// // import React, { useState, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom'; 
// // import { MyLogin } from '../useContext/Logincontext';
// // import { MyCart } from '../useContext/Cartcontext';
// // import api from '../axios/api';
// // import { UserIcon, PhoneIcon, LocationMarkerIcon, HomeIcon, OfficeBuildingIcon } from '@heroicons/react/outline';

// // function Payment() {
// //   const navigate = useNavigate(); 
// //   const { setCurrent } = useContext(MyLogin);
// //   const { setCart } = useContext(MyCart);

// //   const [userDetails, setUserDetails] = useState({
// //     Name: '',
// //     phoneNumber: '',
// //     alternatePhoneNumber: '',
// //     pincode: '',
// //     state: '',
// //     city: '',
// //     buildingName: '',
// //     roadAreaColony: '',
// //     landmark: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserDetails((prevDetails) => ({
// //       ...prevDetails,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const response = await api.delete('/clearcart');
// //     setCurrent(response.data.cart);
// //     alert('Payment successful!');
// //     navigate('/cart');
// //   };

// //   const handledelivary = async () => {
// //     const res = await api.post('/address', userDetails);
// //     setUserDetails(res.data.newAddress);
// //     const response = await api.post('/order');
// //     setCart(response.data.savedOrder.products);
// //   };

// //   return (
    
// //     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
// //       <h2 className="text-3xl font-semibold mb-6">Payment Page</h2>

// //       <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg space-y-4">
        
// //         <div className="relative flex items-center">
// //           <UserIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="text"
// //             name="Name"
// //             value={userDetails.Name}
// //             onChange={handleChange}
// //             placeholder="Full Name"
// //             required
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="number"
// //             name="phoneNumber"
// //             value={userDetails.phoneNumber}
// //             onChange={handleChange}
// //             placeholder="Phone Number"
// //             required
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="number"
// //             name="alternatePhoneNumber"
// //             value={userDetails.alternatePhoneNumber}
// //             onChange={handleChange}
// //             placeholder="Alternate Phone Number"
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="number"
// //             name="pincode"
// //             value={userDetails.pincode}
// //             onChange={handleChange}
// //             placeholder="Pincode"
// //             required
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="text"
// //             name="state"
// //             value={userDetails.state}
// //             onChange={handleChange}
// //             placeholder="State"
// //             required
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="text"
// //             name="city"
// //             value={userDetails.city}
// //             onChange={handleChange}
// //             placeholder="City"
// //             required
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="text"
// //             name="buildingName"
// //             value={userDetails.buildingName}
// //             onChange={handleChange}
// //             placeholder="House No., Building Name"
// //             required
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="text"
// //             name="roadAreaColony"
// //             value={userDetails.roadAreaColony}
// //             onChange={handleChange}
// //             placeholder="Road name, Area, Colony"
// //             required
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <div className="relative flex items-center">
// //           <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
// //           <input
// //             type="text"
// //             name="landmark"
// //             value={userDetails.landmark}
// //             onChange={handleChange}
// //             placeholder="Landmark"
// //             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
// //           />
// //         </div>

// //         <button type="submit" onClick={handledelivary} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full font-semibold">
// //           Save Delivery Address
// //         </button>
// //       </form>
// //     </div>
    
    
// //   );
// // }

// // export default Payment;







// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { MyLogin } from '../useContext/Logincontext';
// import { MyCart } from '../useContext/Cartcontext';
// import api from '../axios/api';
// import { UserIcon, PhoneIcon, LocationMarkerIcon, HomeIcon, OfficeBuildingIcon } from '@heroicons/react/outline';

// function Payment() {
//   const navigate = useNavigate(); 
//   const { setCurrent } = useContext(MyLogin);
//   const { setCart } = useContext(MyCart);

//   const [userDetails, setUserDetails] = useState({
//     Name: '',
//     phoneNumber: '',
//     alternatePhoneNumber: '',
//     pincode: '',
//     state: '',
//     city: '',
//     buildingName: '',
//     roadAreaColony: '',
//     landmark: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await api.delete('/clearcart');
//     setCurrent(response.data.cart);
//     alert('Payment successful!');
//     navigate('/cart');
//   };

//   const handledelivary = async () => {
//     const res = await api.post('/address', userDetails);
//     setUserDetails(res.data.newAddress);
//     const response = await api.post('/order');
//     setCart(response.data.savedOrder.products);
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-semibold mb-6">Payment Page</h2>
//       <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg space-y-4">
        
//         <div className="relative flex items-center">
//           <UserIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="text"
//             name="Name"
//             value={userDetails.Name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             required
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="number"
//             name="phoneNumber"
//             value={userDetails.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             required
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="number"
//             name="alternatePhoneNumber"
//             value={userDetails.alternatePhoneNumber}
//             onChange={handleChange}
//             placeholder="Alternate Phone Number"
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="number"
//             name="pincode"
//             value={userDetails.pincode}
//             onChange={handleChange}
//             placeholder="Pincode"
//             required
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="text"
//             name="state"
//             value={userDetails.state}
//             onChange={handleChange}
//             placeholder="State"
//             required
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="text"
//             name="city"
//             value={userDetails.city}
//             onChange={handleChange}
//             placeholder="City"
//             required
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="text"
//             name="buildingName"
//             value={userDetails.buildingName}
//             onChange={handleChange}
//             placeholder="House No., Building Name"
//             required
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="text"
//             name="roadAreaColony"
//             value={userDetails.roadAreaColony}
//             onChange={handleChange}
//             placeholder="Road name, Area, Colony"
//             required
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <div className="relative flex items-center">
//           <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
//           <input
//             type="text"
//             name="landmark"
//             value={userDetails.landmark}
//             onChange={handleChange}
//             placeholder="Landmark"
//             className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
//           />
//         </div>

//         <button type="submit" onClick={handledelivary} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full font-semibold">
//           Save Delivery Address
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Payment;

// import { useState,useContext } from 'react';

// import { useNavigate } from 'react-router-dom'; 
// import axios from 'axios'
// import { MyLogin } from '../useContext/Logincontext';
// import api from '../axios/api';
// import { MyCart } from '../useContext/Cartcontext';
// function Payment() {

//   const navigate = useNavigate(); 
//   const {current,setCurrent}=useContext(MyLogin)
//   const {setCart}=useContext(MyCart)
//   const [userDetails, setUserDetails] = useState({
//     Name: '',
//     phoneNumber: '',
//     alternatePhoneNumber: '',
//     pincode: '',
//     state:'',
//     city:'',
//     buildingName:'',
//     roadAreaColony:'',
//     landmark:''
//   });
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setTimeout(async () => {
      
   
    
//     const response=await api.delete('/clearcart')
//       setCurrent(response.data.cart)
//       alert('Payment successful!');
//       navigate('/cart'); 
    
    
    
//     }, 2000);
//   };

//   const handledelivary= async()=>{
//     const res=await api.post('/address',userDetails)
//     console.log("eeee",res);
    
//     setUserDetails(res.data.newAddress)
//      const response=await api.post('/order')
//      console.log('rrrrr',response);
    
//      setCart(response.data.savedOrder.products)
//   }

//   return (
//     <>
//       <h2>Payment Page</h2>



//       <form onSubmit={handleSubmit} className="payment-form">
        
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="Name"
//             value={userDetails.Name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>phoneNumber:</label>
//           <input
//             type="number"
//             name="phoneNumber"
//             value={userDetails.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>alternatePhoneNumber:</label>
//           <input
//             type="number"
//             name="alternatePhoneNumber"
//             value={userDetails.alternatePhoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>pincode:</label>
//           <input
//             type="number"
//             name="pincode"
//             value={userDetails.pincode}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>state:</label>
//           <input
//             type="text"
//             name="state" 
//             value={userDetails.state}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>city:</label>
//           <input
//             type="text"
//             name="city" 
//             value={userDetails.city}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>buildingName:</label>
//           <input
//             type="text"
//             name="buildingName" 
//             value={userDetails.buildingName}
//             onChange={handleChange}
//             required
//           />
//         </div>



//         <div className="form-group">
//           <label>roadAreaColony:</label>
//           <input
//             type="text"
//             name="roadAreaColony" 
//             value={userDetails.roadAreaColony}
//             onChange={handleChange}
//             required
//           />
//         </div>


//         <div className="form-group">
//           <label>landmark:</label>
//           <input
//             type="text"
//             name="landmark" 
//             value={userDetails.landmark}
//             onChange={handleChange}
//             required
//           />
//         </div>



//         <button type="submit" className="submit-button" onClick={handledelivary}>deliveryAddress</button>
//       </form>
      
//     </>





//   );
// }

// export default Payment;


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { MyLogin } from '../useContext/Logincontext';
import { MyCart } from '../useContext/Cartcontext';
import api from '../axios/api';
import { UserIcon, PhoneIcon, LocationMarkerIcon, HomeIcon, OfficeBuildingIcon } from '@heroicons/react/outline';

function Payment() {
  const navigate = useNavigate(); 
  const { setCurrent } = useContext(MyLogin);
  const { setCart,setclientSecret,setorder } = useContext(MyCart);

  const [userDetails, setUserDetails] = useState({
    Name: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    pincode: '',
    state: '',
    city: '',
    buildingName: '',
    roadAreaColony: '',
    landmark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/address', userDetails);
    console.log('delivary',res);
    
    setUserDetails(res.data.newAddress);
    alert('Payment successful!');
    // navigate('/cart');
  };

  const handledelivary = async () => {
    const response = await api.post('/order');
    console.log("response order",response.data.data);
    setclientSecret(response.data.data.clientsecret)
    setorder(response.data.data)
    const res = await api.delete('/clearcart');
    console.log("clearcart",res);
    
    setCart(res.data.cart);
    
    navigate('/paymentsection')
   
  };

  return (
   






<div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-10">
      
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl space-y-6">
        
        {/* Full Name */}
        <div className="relative flex items-center">
          <UserIcon className="w-6 h-6 text-gray-400 absolute left-3" />
          <input
            type="text"
            name="Name"
            value={userDetails.Name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Phone Number and Alternate Phone Number (Row Layout) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex items-center">
            <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="number"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="relative flex items-center">
            <PhoneIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="number"
              name="alternatePhoneNumber"
              value={userDetails.alternatePhoneNumber}
              onChange={handleChange}
              placeholder="Alternate Phone Number"
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* Pincode */}
        <div className="relative flex items-center">
          <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
          <input
            type="number"
            name="pincode"
            value={userDetails.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
            className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* State and City (Row Layout) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex items-center">
            <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="state"
              value={userDetails.state}
              onChange={handleChange}
              placeholder="State"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="relative flex items-center">
            <HomeIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="city"
              value={userDetails.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* Building Name and Road Area (Row Layout) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex items-center">
            <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="buildingName"
              value={userDetails.buildingName}
              onChange={handleChange}
              placeholder="Building Name"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="relative flex items-center">
            <OfficeBuildingIcon className="w-6 h-6 text-gray-400 absolute left-3" />
            <input
              type="text"
              name="roadAreaColony"
              value={userDetails.roadAreaColony}
              onChange={handleChange}
              placeholder="Road/Area/Colony"
              required
              className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* Landmark */}
        <div className="relative flex items-center">
          <LocationMarkerIcon className="w-6 h-6 text-gray-400 absolute left-3" />
          <input
            type="text"
            name="landmark"
            value={userDetails.landmark}
            onChange={handleChange}
            placeholder="Landmark"
            className="pl-10 p-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-400"
          />
        </div>

        <button type="submit" onClick={handledelivary} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full font-semibold">
          Save Delivery Address
        </button>
      </form>
    </div>
  );
}

export default Payment;

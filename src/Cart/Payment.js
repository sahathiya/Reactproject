// import React, { useState } from 'react';
// import './Payment.css'

// function Payment() {
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     phoneNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setTimeout(() => {
//         // Here, you would typically process the payment and submit the details to your backend
//     console.log('Payment details submitted:', userDetails);
//     alert('Payment successful!');
//     }, 3000);


    
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Page</h2>
//       <form onSubmit={handleSubmit} className="payment-form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={userDetails.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={userDetails.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={userDetails.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label>City:</label>
//           <input
//             type="text"
//             name="city"
//             value={userDetails.city}
//             onChange={handleChange}
//             required
//           />
//         </div> */}
//         {/* <div className="form-group">
//           <label>Postal Code:</label>
//           <input
//             type="text"
//             name="postalCode"
//             value={userDetails.postalCode}
//             onChange={handleChange}
//             required
//           />
//         </div> */}
//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="cardNumber"
//             value={userDetails.cardNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label>Expiration Date:</label>
//           <input
//             type="text"
//             name="expirationDate"
//             value={userDetails.expirationDate}
//             onChange={handleChange}
//             placeholder="MM/YY"
//             required
//           />
//         </div> */}
//         {/* <div className="form-group">
//           <label>CVV:</label>
//           <input
//             type="text"
//             name="cvv"
//             value={userDetails.cvv}
//             onChange={handleChange}
//             required
//           />
//         </div> */}
//         <button type="submit" className="submit-button">Pay Now</button>
//       </form>
//     </div>
//   );
// }

// export default Payment;



import React, { useState, useContext } from 'react';

import './Payment.css';

import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'
import { MyLogin } from '../useContext/Logincontext';

function Payment() {

  const navigate = useNavigate(); 
  const {current,setCurrent}=useContext(MyLogin)
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(async () => {
      
    const response=await axios.get(`http://localhost:3000/Users/${current.id}`) 
    const users=response.data
    const removecart=await axios.put(`http://localhost:3000/Users/${current.id}`,{...users,cart:[]})
      setCurrent(removecart.data)
      alert('Payment successful!');
      navigate('/cart'); 
    
    
    
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber" 
            value={userDetails.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;








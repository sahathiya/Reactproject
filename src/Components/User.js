// import React,{useContext} from 'react'
// import { Mycontext } from '../useContext/Context'
// import { Link } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// function User() {
//     const navigate=useNavigate()
//     const {current,UserLogin}=useContext(Mycontext)
//     const { handlelogout } = UserLogin;
//     const username = current?.username;
//     const email= current?.email;


    
    
//     const handlelogout = () => {
//         ;  // Call the context logout function
       
//         navigate('/user')  // Navigate to the home or login page after logout
//     };

//     if (!current) {
//         return (
//             <div className="bg-danger text-white h-100 d-flex flex-column justify-content-center align-items-center">
//                 <p className="display-4">User Not Available!</p>
//                 <Link to="/login" className="btn btn-primary mt-3"><button>Please Login</button>
                    
//                 </Link>
//             </div>
//         );
//     }

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//             <div className="card w-100" style={{ maxWidth: '500px' }}>
//                 <div className="card-body text-center">
//                     <FaUser className="w-50 h-50 mb-3" />
//                     <h2 className="card-title">{username}</h2>
//                     <p className="card-text text-muted">An active user</p>
//                     <p className="card-text">Email Address: {email}</p>
//                     <button className="btn btn-danger me-2" onClick={handlelogout}>Log out</button>
//                     <Link to="/" className="btn btn-primary">
//                         Back to Home
//                     </Link>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default User
// import React, { useContext } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { MyLogin } from '../useContext/Logincontext';
// import { MyCart } from '../useContext/Cartcontext';

// import './User.css'

// function User() {
//     const {current,setCurrent}=useContext(MyLogin)
//     const{clearCart}=useContext(MyCart)
   
//     const handleLogout = () => {
//         setCurrent(null);
//         clearCart()
//         localStorage.removeItem('current');
//         navigate('/user');
//       };

   
//     const navigate=useNavigate()
//     if (!current) {
//         return (
//             <div className="no-user">
//                 <h1 className="text">User Not Available !</h1>
//                 <Link to="/login" >
//                     <button className=" button-pleaselogin">Please Login</button>
//                 </Link>
//             </div>
//         );
        
//     }
   
//     return (
//         <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//             <div className="card w-100" style={{ maxWidth: '500px' }}>
//                 <div className="card-body text-center">
//                     <FaUser className="w-50 h-50 mb-3" />
//                     <h2 className="card-title">{current.username}</h2>
//                     <p className="card-text text-muted">An active user</p>
//                     <p className="card-text">Email Address: {current.email}</p>
//                     <button className="btn btn-danger me-2" onClick={ handleLogout}>Log out</button>
//                      <button className="btn btn-primary" onClick={()=>navigate('/')}> Back to Home</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default User;

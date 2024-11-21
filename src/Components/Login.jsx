// // import React, { useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// // import { MyLogin } from '../useContext/Logincontext';
// // import { FaUser } from 'react-icons/fa';

// // import './User.css'

// // function Login() {
// //   const navigate=useNavigate()
// //   const {current,setCurrent, handleChange, handleSubmit, handleCreateAccount, datas }=useContext(MyLogin)

// //   const handleLogout = () => {
// //     setCurrent(null);
// //     // clearCart()
// //     localStorage.removeItem('current');
// //     // navigate('/user');
// //   };
// // if(!current){
// //   return (
// //     <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
// //       <Row className="w-100 justify-content-center">
// //         <Col xs={12} sm={8} md={6} lg={4}>
// //           <Card className="shadow-lg p-4">
// //             <Card.Body>
// //               <h2 style={{color:'purple',marginTop:'-20px'}}>Login</h2>
// //               <Form onSubmit={handleSubmit}>
// //                 <Form.Group controlId="formUsername" className="mb-3">
// //                   <Form.Control
// //                     type="text"
// //                     name="username"
// //                     value={datas.username}
// //                     onChange={handleChange}
// //                     placeholder="Enter username"
// //                   />
// //                 </Form.Group>
             
// //                 <Form.Group controlId="formPassword" className="mb-3">
// //                   <Form.Control
// //                     type="password"
// //                     name="password"
// //                     value={datas.password}
// //                     onChange={handleChange}
// //                     placeholder="Enter password"
// //                   />
// //                 </Form.Group>

// //                 <Button style={{backgroundColor:'purple',color:'white',width:'300px'}}  type="submit">
// //                   Login
// //                 </Button>
// //                 <br/>
                
// //                  {/* Create Account Button */}
// //                  <Button  style={{backgroundColor:'purple',color:'white',width:'300px'}} onClick={handleCreateAccount}>
// //                   Create an Account
// //                 </Button>
// //               </Form>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }else{
// //   return (
// //     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
// //         <div className="card w-100" style={{ maxWidth: '500px' }}>
// //             <div className="card-body text-center">
// //                 <FaUser className="w-50 h-50 mb-3" />
// //                 <h2 className="card-title">{current.username}</h2>
// //                 <p className="card-text text-muted">An active user</p>
// //                 <p className="card-text">Email Address: {current.email}</p>
// //                 <button className="btn btn-danger me-2" onClick={ handleLogout}>Log out</button>
// //                  <button className="btn btn-primary" onClick={()=>navigate('/')}> Back to Home</button>
// //             </div>
// //         </div>
// //     </div>
// // );
// // }
  
// // }

// // export default Login;





// // import React, { useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { MyLogin } from '../useContext/Logincontext';
// // import { FaUser } from 'react-icons/fa';

// // function Login() {
// //   const navigate = useNavigate();
// //   const { current, setCurrent, handleChange, handleSubmit, handleCreateAccount, datas } = useContext(MyLogin);

// //   const handleLogout = () => {
// //     setCurrent(null);
// //     localStorage.removeItem('current');
// //   };

// //   if (!current) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //         <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
// //           <h2 className="text-black text-2xl font-bold mb-6 text-center">Login</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <input
// //                 type="text"
// //                 name="username"
// //                 value={datas.username}
// //                 onChange={handleChange}
// //                 placeholder="Enter username"
// //                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={datas.password}
// //                 onChange={handleChange}
// //                 placeholder="Enter password"
// //                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full bg-yellow-600 text-white py-2 rounded-md  transition duration-200"
// //             >
// //               Login
// //             </button>
// //             <br />
// //             <button
// //               type="button"
// //               className="w-full mt-4 bg-yellow-600 text-white py-2 rounded-md  transition duration-200"
// //               onClick={handleCreateAccount}
// //             >
// //               Create an Account
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     );
// //   } else {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
// //           <FaUser className="w-16 h-16 mb-3 mx-auto text-black" />
// //           <h2 className="text-xl font-bold mb-2">{current.username}</h2>
// //           <p className="text-gray-600">An active user</p>
// //           <p className="text-gray-600">Email Address: {current.email}</p>
         
// //           <div className="flex flex-col space-y-4"> {/* Adjust space-y-4 to change the spacing */}
// //   <button
// //     className="bg-yellow-600 text-black py-3 px-5 rounded-md transition duration-200"
// //     onClick={handleLogout}
// //   >
// //     Log out
// //   </button>
// //   <button
// //     className="bg-yellow-600 text-black py-3 px-4 rounded-md transition duration-200"
// //     onClick={() => navigate('/')}
// //   >
// //     Back to Home
// //   </button>
// // </div>


// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Login;



// import React, { useContext ,useState} from 'react';
// import { Link} from 'react-router-dom';
// import { MyLogin } from '../useContext/Logincontext';
// import 'react-toastify/dist/ReactToastify.css';
// import bgimage from '../images/good.gif'


// function Login() {
  
//   const { current, handleChange, handleSubmit, datas } = useContext(MyLogin);
  
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   if (!current) {
//     return (

//       <div className="flex flex-col md:flex-row h-screen">
//       {/* Left Section */}
//       <div className="flex flex-col justify-center items-start p-8 md:w-1/2 bg-white">
//         <div className="max-w-sm mx-auto w-full">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome back!</h1>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Username *
//               </label>
//               <input
//                 type="text"
//     name='username'
//     value={datas.username}
//                 placeholder="Enter your username"
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Password *
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? 'text' : 'password'}  {/* Toggle between text and password */}
//                     name="password"
//                     value={datas.password}
//                     placeholder="Enter password"
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {/* Conditionally change the eye icon */}
//                     <i
//                       className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-500`}
//                     ></i>
//                   </button>
//                 </div>
//               </div>
          
//             <button className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900">
//               Log In
//             </button>
//           </form>
//           <div className="mt-6 text-center">
           
//             <Link className="w-full bg-blue-950 text-white py-3 rounded-lg flex items-center justify-center font-medium border no-underline" to='/' >
              
//               back to home
//             </Link>
//           </div>
//           <div className="mt-4 text-center">
//             <p>
//               Don’t have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Register here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

      

// <div 
//   className="hidden md:flex items-center justify-center md:w-1/2"
//   style={{
//     backgroundImage: `url(${bgimage})`,
//     backgroundSize: 'cover',    // Ensures the image covers the whole div
//     backgroundPosition: 'center', // Centers the image inside the div
//     height: '100vh',
//     width: '700px',
//   }}
// >
 
// </div>

//     </div>









//     );
  
// }
// }
// export default Login;



import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyLogin } from '../useContext/Logincontext';
import 'react-toastify/dist/ReactToastify.css';
import bgimage from '../images/good.gif';

function Login() {
  const { current, handleChange, handleSubmit, datas } = useContext(MyLogin);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  if (!current) {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start p-8 md:w-1/2 bg-white">
          <div className="max-w-sm mx-auto w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome back!</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  value={datas.username}
                  placeholder="Enter your username"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                    name="password"
                    value={datas.password}
                    placeholder="Enter password"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    <i
                      className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-500`}
                    ></i>
                  </button>
                </div>
              </div>
              <button className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900">
                Log In
              </button>
            </form>
            <div className="mt-6 text-center">
              <Link
                className="w-full bg-blue-950 text-white py-3 rounded-lg flex items-center justify-center font-medium border no-underline"
                to="/"
              >
                back to home
              </Link>
            </div>
            <div className="mt-4 text-center">
              <p>
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="hidden md:flex items-center justify-center md:w-1/2"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '700px',
          }}
        ></div>
      </div>
    );
  }

  return null; // Add return null for when current is true, or else it could be undefined behavior
}

export default Login;

// // import React, { useState } from 'react';
// // import { Form, Button, Container, Card } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';
// // import api from '../axios/api';
// // import { toast } from 'react-toastify';

// // function RegistrationForm() {
// //   const navigate = useNavigate();
// //   const [inputs, setInputs] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //     cpassword: '',
// //     admin: false,
// //     block: false,
    
// //   });

// //   const [errors, setErrors] = useState({});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setInputs({ ...inputs, [name]: value });
// //   };

// //   const validate = () => {
// //     let errors = {};

// //     // Username validation
// //     if (!inputs.username) {
// //       errors.username = 'Username is required.';
// //     } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
// //       errors.username = 'Username should be 3-16 characters and alphanumeric.';
// //     }

// //     // Email validation
// //     if (!inputs.email) {
// //       errors.email = 'Email is required.';
// //     } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
// //       errors.email = 'Email address is invalid.';
// //     }

    
// //     // Password validation
// //     if (!inputs.password) {
// //       errors.password = 'Password is required.';
// //     } else if (
// //       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(inputs.password)
// //     ) {
// //       errors.password =
// //         'Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.';
// //     }

// //     // Confirm Password validation
// //     if (!inputs.cpassword) {
// //       errors.cpassword = 'Confirm password is required.';
// //     } else if (inputs.password !== inputs.cpassword) {
// //       errors.cpassword = 'Passwords do not match.';
// //     }

// //     setErrors(errors);
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (validate()){
// //             try {
// //               const response = await api.post('/signup', inputs);
// //             console.log("response",response);
// //             toast.success(response.data.message);
// //             setInputs({ username: '', email: '',  password: '', cpassword: '' });
// //             navigate('/login');
// //             } catch (error) {
// //               console.log(error);
              
// //             // Check if the error response contains a message from the backend
// //             if (error.response && error.response.data) {
// //               // Show error message from the backend using toast
// //               toast.error(error.response.data.message || 'An error occurred');
// //           } else {
// //               // In case of a different error (e.g., network error)
// //               toast.error('An error occurred. Please try again.');
// //           }
// //             }
            
// //           }
// //   };

// //   return (
// //     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh',marginTop:'-15px'}}>
// //       <Card style={{ width: '50%', maxWidth: '400px',maxHeight:'450px', padding: '2rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',border:'2px solid purple' }}>
// //         <Card.Body>
// //           <h2  style={{textAlign:'center',color:'purple',marginTop:'-30px'}}>Register</h2>
// //           <Form onSubmit={handleSubmit}>
// //             <Form.Group controlId="formUsername"  className="mb-3">
              
// //               <Form.Control
// //                 type="text"
// //                 name="username"
// //                 value={inputs.username}
// //                 onChange={handleChange}
// //                 isInvalid={!!errors.username}
// //                 placeholder="Enter username"
// //               />
// //               <Form.Control.Feedback type="invalid">
// //                 {errors.username}
// //               </Form.Control.Feedback>
// //             </Form.Group>

// //             <Form.Group controlId="formEmail" className="mb-3">
              
// //               <Form.Control
// //                 type="email"
// //                 name="email"
// //                 value={inputs.email}
// //                 onChange={handleChange}
// //                 isInvalid={!!errors.email}
// //                 placeholder="Enter email"
// //               />
// //               <Form.Control.Feedback type="invalid">
// //                 {errors.email}
// //               </Form.Control.Feedback>
// //             </Form.Group>

          
// //             <Form.Group controlId="formPassword" className="mb-3">
             
// //               <Form.Control
// //                 type="password"
// //                 name="password"
// //                 value={inputs.password}
// //                 onChange={handleChange}
// //                 isInvalid={!!errors.password}
// //                 placeholder="Enter password"
// //               />
// //               <Form.Control.Feedback type="invalid">
// //                 {errors.password}
// //               </Form.Control.Feedback>
// //             </Form.Group>

// //             <Form.Group controlId="formCPassword" className="mb-3">
              
// //               <Form.Control
// //                 type="password"
// //                 name="cpassword"
// //                 value={inputs.cpassword}
// //                 onChange={handleChange}
// //                 isInvalid={!!errors.cpassword}
// //                 placeholder="Confirm password"
// //               />
// //               <Form.Control.Feedback type="invalid">
// //                 {errors.cpassword}
// //               </Form.Control.Feedback>
// //             </Form.Group>

// //             <Button style={{backgroundColor:'purple',color:'white',marginTop:'-5px'}} type="submit" >
// //               Register
// //             </Button>
// //           </Form>
// //         </Card.Body>
// //       </Card>
// //     </Container>
// //   );
// // }

// // export default RegistrationForm;









// import React, { useState } from 'react';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import api from '../axios/api';
// import { toast } from 'react-toastify';

// function RegistrationForm() {
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//     password: '',
//     cpassword: '',
//     admin: false,
//     block: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const validate = () => {
//     let errors = {};

//     // Username validation
//     if (!inputs.username) {
//       errors.username = 'Username is required.';
//     } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
//       errors.username = 'Username should be 3-16 characters and alphanumeric.';
//     }

//     // Email validation
//     if (!inputs.email) {
//       errors.email = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
//       errors.email = 'Email address is invalid.';
//     }

//     // Password validation
//     if (!inputs.password) {
//       errors.password = 'Password is required.';
//     } else if (
//       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(inputs.password)
//     ) {
//       errors.password =
//         'Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.';
//     }

//     // Confirm Password validation
//     if (!inputs.cpassword) {
//       errors.cpassword = 'Confirm password is required.';
//     } else if (inputs.password !== inputs.cpassword) {
//       errors.cpassword = 'Passwords do not match.';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await api.post('/signup', inputs);
//         console.log('response', response);
//         toast.success(response.data.message);
//         setInputs({ username: '', email: '', password: '', cpassword: '' });
//         navigate('/login');
//       } catch (error) {
//         console.log(error);

//         // Check if the error response contains a message from the backend
//         if (error.response && error.response.data) {
//           // Show error message from the backend using toast
//           toast.error(error.response.data.message || 'An error occurred');
//         } else {
//           // In case of a different error (e.g., network error)
//           toast.error('An error occurred. Please try again.');
//         }
//       }
//     }
//   };

//   return (
//     <Container className="flex justify-center items-center min-h-screen py-8 px-4 sm:px-6 md:px-8">
//       <Card className="w-full sm:w-96 bg-white shadow-lg p-6 rounded-lg border-2 border-purple-600">
//         <Card.Body>
//           <h2 className="text-center text-2xl font-semibold text-purple-600 mb-6">Register</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formUsername" className="mb-4">
//               <Form.Control
//                 type="text"
//                 name="username"
//                 value={inputs.username}
//                 onChange={handleChange}
//                 isInvalid={!!errors.username}
//                 placeholder="Enter username"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Form.Control.Feedback type="invalid" className="text-red-600">
//                 {errors.username}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formEmail" className="mb-4">
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={inputs.email}
//                 onChange={handleChange}
//                 isInvalid={!!errors.email}
//                 placeholder="Enter email"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Form.Control.Feedback type="invalid" className="text-red-600">
//                 {errors.email}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formPassword" className="mb-4">
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={inputs.password}
//                 onChange={handleChange}
//                 isInvalid={!!errors.password}
//                 placeholder="Enter password"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Form.Control.Feedback type="invalid" className="text-red-600">
//                 {errors.password}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formCPassword" className="mb-4">
//               <Form.Control
//                 type="password"
//                 name="cpassword"
//                 value={inputs.cpassword}
//                 onChange={handleChange}
//                 isInvalid={!!errors.cpassword}
//                 placeholder="Confirm password"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Form.Control.Feedback type="invalid" className="text-red-600">
//                 {errors.cpassword}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Button
//               type="submit"
//               className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             >
//               Register
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default RegistrationForm;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios/api';
import { toast } from 'react-toastify';

function RegistrationForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
    admin: false,
    block: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const validate = () => {
    let errors = {};

    // Username validation
    if (!inputs.username) {
      errors.username = 'Username is required.';
    } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
      errors.username = 'Username should be 3-16 characters and alphanumeric.';
    }

    // Email validation
    if (!inputs.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      errors.email = 'Email address is invalid.';
    }

    // Password validation
    if (!inputs.password) {
      errors.password = 'Password is required.';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(inputs.password)
    ) {
      errors.password =
        'Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    }

    // Confirm Password validation
    if (!inputs.cpassword) {
      errors.cpassword = 'Confirm password is required.';
    } else if (inputs.password !== inputs.cpassword) {
      errors.cpassword = 'Passwords do not match.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await api.post('/signup', inputs);
        console.log('response', response);
        toast.success(response.data.message);
        setInputs({ username: '', email: '', password: '', cpassword: '' });
        navigate('/login');
      } catch (error) {
        console.log(error);

        // Check if the error response contains a message from the backend
        if (error.response && error.response.data) {
          // Show error message from the backend using toast
          toast.error(error.response.data.message || 'An error occurred');
        } else {
          // In case of a different error (e.g., network error)
          toast.error('An error occurred. Please try again.');
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-8 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="w-full sm:w-96 bg-white shadow-lg p-6 rounded-lg border-2 border-blue-950">
        <h2 className="text-center text-2xl font-semibold text-blue-950 mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="cpassword"
              value={inputs.cpassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.cpassword && <p className="text-red-600 text-sm">{errors.cpassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;


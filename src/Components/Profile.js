// // // import React, { useContext } from 'react'
// // // import { MyLogin } from '../useContext/Logincontext'
// // // import { useNavigate } from 'react-router-dom'
// // // import {FaUser} from 'react-icons/fa'
// // // function Profile() {
// // //     const {current,handleLogout}=useContext(MyLogin)
// // //     const navigate=useNavigate()
// // //   return (
// // //     if(current){
// // //         <div
// // //         className="flex items-center justify-center min-h-screen bg-cover bg-center"
// // //         style={{
// // //           backgroundImage: `url('/path-to-your-background-image.jpg')`,
// // //           backgroundColor: 'rgba(0, 0, 0, 0.6)', // fallback color
// // //           backgroundBlendMode: 'overlay',
// // //         }}
// // //       >
// // //         <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-lg backdrop-blur-md text-center">
// // //           <FaUser className="w-16 h-16 mb-3 mx-auto text-red-600" />
// // //           <h2 className="text-xl font-bold mb-2 text-red-600">{current.username}</h2>
// // //           <p className="text-gray-600">An active user</p>
// // //           <p className="text-gray-600">Email Address: {current.email}</p>

// // //           <div className="flex flex-col space-y-4 mt-4">
// // //             <button
// // //               className="bg-red-600 hover:bg-red-700 text-white py-3 px-5 rounded-md transition duration-200"
// // //               onClick={handleLogout}
// // //             >
// // //               Log out
// // //             </button>
// // //             <button
// // //               className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md transition duration-200"
// // //               onClick={() => navigate('/')}
// // //             >
// // //               Back to Home
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //     }
      
    
// // //   )
// // // }

// // // export default Profile



// // // import React, { useContext } from 'react';
// // // import { MyLogin } from '../useContext/Logincontext';
// // // import { useNavigate } from 'react-router-dom';
// // // import { FaUser } from 'react-icons/fa';

// // // function Profile() {
// // //   const { current, handleLogout } = useContext(MyLogin);
// // //   const navigate = useNavigate();

// // //   // Conditional rendering to show profile page when user is logged in
// // //   if (!current) {
// // //     // Redirect to login page if the user is not logged in
// // //     navigate('/login');
// // //     return null;
// // //   }

// // //   return (
// // //     <div
// // //       className="flex items-center justify-center min-h-screen bg-cover bg-center"
// // //       style={{
// // //         backgroundImage: `url('/path-to-your-background-image.jpg')`,
// // //         backgroundColor: 'rgba(0, 0, 0, 0.6)', // fallback color
// // //         backgroundBlendMode: 'overlay',
// // //       }}
// // //     >
// // //       <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-lg backdrop-blur-md text-center">
// // //         <FaUser className="w-16 h-16 mb-3 mx-auto text-red-600" />
// // //         <h2 className="text-xl font-bold mb-2 text-red-600">{current.username}</h2>
// // //         <p className="text-gray-600">An active user</p>
// // //         <p className="text-gray-600">Email Address: {current.email}</p>

// // //         <div className="flex flex-col space-y-4 mt-4">
// // //           <button
// // //             className="bg-red-600 hover:bg-red-700 text-white py-3 px-5 rounded-md transition duration-200"
// // //             onClick={handleLogout}
// // //           >
// // //             Log out
// // //           </button>
// // //           <button
// // //             className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md transition duration-200"
// // //             onClick={() => navigate('/')}
// // //           >
// // //             Back to Home
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Profile;





// // import React, { useContext } from 'react';
// // import { MyLogin } from '../useContext/Logincontext';
// // import { useNavigate } from 'react-router-dom';
// // import { FaUser } from 'react-icons/fa';

// // function Profile() {
// //   const { current, handleLogout } = useContext(MyLogin);
// //   const navigate = useNavigate();

// //   // Conditional rendering to show profile page when user is logged in
// //   if (!current) {
// //     // Redirect to login page if the user is not logged in
// //     navigate('/login');
// //     return null;
// //   }

// //   return (
// //     <div
// //       className="flex items-center justify-center min-h-screen bg-cover bg-center"
// //       style={{
// //         backgroundImage: `url('/path-to-your-background-image.jpg')`,
// //         backgroundColor: 'rgba(0, 0, 0, 0.5)', // fallback color
// //         backgroundBlendMode: 'overlay',
// //       }}
// //     >
// //       <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-2xl backdrop-blur-lg text-center">
// //         <FaUser className="w-24 h-24 mb-4 mx-auto text-pink-600 animate-pulse" />
// //         <h2 className="text-3xl font-bold mb-2 text-blue-950">{current.username}</h2>
// //         <p className="text-xl text-blue-950 mb-4">An active user</p>
// //         <p className="text-gray-700 mb-6">Email Address: {current.email}</p>

// //         <div className="flex flex-col space-y-4 mt-4">
// //           <button
// //             className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
// //             onClick={handleLogout}
// //           >
// //             Log out
// //           </button>
// //           <button
// //             className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
// //             onClick={() => navigate('/')}
// //           >
// //             Back to Home
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Profile;







// import React, { useContext } from 'react';
// import { MyLogin } from '../useContext/Logincontext';
// import { useNavigate } from 'react-router-dom';

// function Profile() {
//   const { current, handleLogout } = useContext(MyLogin);
//   const navigate = useNavigate();

//   // Conditional rendering to show profile page when user is logged in
//   if (!current) {
//     // Redirect to login page if the user is not logged in
//     navigate('/login');
//     return null;
//   }

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url('/path-to-your-background-image.jpg')`,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // fallback color
//         backgroundBlendMode: 'overlay',
//       }}
//     >
//       <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-2xl backdrop-blur-lg text-center">
//         {/* Avatar Image */}
//         <img
//           src={current.avatar || '/default-avatar.jpg'} // Replace with user avatar or default image
//           alt="User Avatar"
//           className="w-32 h-32 mb-4 mx-auto rounded-full border-4 border-blue-950"
//         />
//         <h2 className="text-3xl font-bold mb-2 text-blue-950">{current.username}</h2>
//         <p className="text-xl text-blue-950 mb-4">An active user</p>
//         <p className="text-gray-700 mb-6">Email Address: {current.email}</p>

//         <div className="flex flex-col space-y-4 mt-4">
//           <button
//             className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
//             onClick={handleLogout}
//           >
//             Log out
//           </button>
//           <button
//             className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
//             onClick={() => navigate('/')}
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;






import React, { useContext } from 'react';
import { MyLogin } from '../useContext/Logincontext';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';  // Importing the FaUser icon

function Profile() {
  const { current, handleLogout } = useContext(MyLogin);
  const navigate = useNavigate();

  // Conditional rendering to show profile page when user is logged in
  if (!current) {
    // Redirect to login page if the user is not logged in
    navigate('/login');
    return null;
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/path-to-your-background-image.jpg')`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // fallback color
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-2xl backdrop-blur-lg text-center">
        {/* Profile Icon */}
        <div className="w-32 h-32 mb-4 mx-auto rounded-full bg-blue-950 flex items-center justify-center text-white text-3xl">
          <FaUser /> {/* Displaying the profile icon */}
        </div>
        <h2 className="text-3xl font-bold mb-2 text-blue-950">{current.username}</h2>
        <p className="text-xl text-blue-950 mb-4">An active user</p>
        <p className="text-gray-700 mb-6">Email Address: {current.email}</p>

        <div className="flex flex-col space-y-4 mt-4">
          <button
            className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
            onClick={handleLogout}
          >
            Log out
          </button>
          <button
            className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;



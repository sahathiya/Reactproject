// import React from 'react';
// import Sidebar from './Sidebar'; 
// import { Outlet } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Admin = () => {
    
//   return (
//     <div className="container-fluid">
     
//       <div className="row">
//         {/* Sidebar on the left */}
//         <div className="col-md-3 col-lg-2 p-0">
//           <Sidebar/>
        
        
//         </div>
        
//         {/* Main content on the right */}
//         <div className="col-md-9 col-lg-10">
//           <div className="p-4">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;




import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar on the left */}
      {/* <div className="w-full md:w-1/4 lg:w-1/5 bg-gray-800 text-white p-4 md:p-6">
        <Sidebar />
      </div> */}

      {/* Main content on the right */}
      {/* <div className="w-full md:w-3/4 lg:w-4/5 bg-gray-100 p-4">
        <Outlet />
      </div> */}
    </div>
  );
};

export default Admin;

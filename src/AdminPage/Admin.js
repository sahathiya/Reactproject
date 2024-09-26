import React from 'react';
import Sidebar from './Sidebar'; 
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Admin = () => {
    
  return (
    <div className="container-fluid">
     
      <div className="row">
        {/* Sidebar on the left */}
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar/>
        
        
        </div>
        
        {/* Main content on the right */}
        <div className="col-md-9 col-lg-10">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
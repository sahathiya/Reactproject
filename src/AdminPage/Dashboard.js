
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-end"> 
        <div className="col-md-5">
          <div className="card shadow-sm no-hover">
            <img 
              src="https://t3.ftcdn.net/jpg/02/72/68/26/240_F_272682633_N0RjfWmIwNLNCoUePyYVrjJXPWBNuy97.jpg" 
              className="card-img-top" 
              alt="Products"
            />
            <div className="card-body">
              <h1 className="card-title">PRODUCTS</h1>
              <p className="card-text">
                Here is a list of all products available in the store.
              </p>
              <Link to="/products">
                <button className="  button-viewproducts">View Products</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Users Section */}
        <div className="col-md-5">
          <div className="card shadow-sm no-hover">
            <img 
              src="https://imageio.forbes.com/specials-images/imageserve/5e4ac71aa854780006b199fb/0x0.jpg?format=jpg&crop=1378,775,x0,y298,safe&height=600&width=1200&fit=bounds" 
              className="card-img-top" 
              alt="Users"
            />
            <div className="card-body">
              <h1 className="card-title">CONTRIBUTORS</h1>
              <p className="card-text">
                View the details of all registered users.
              </p>
              <Link to="/userslist">
                <button className="button-viewusers">View Users</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

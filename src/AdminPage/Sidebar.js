// import React, { useContext } from 'react';
// import { MdOutlineInventory2 } from 'react-icons/md';
// import { FaUsers, FaSignOutAlt } from 'react-icons/fa';
// import styles from './Sidebar.module.css';
// import { MyLogin } from '../useContext/Logincontext';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   const {Adminlogout}=useContext(MyLogin)
//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.profileImageContainer}>
//         <img
//           src="https://via.placeholder.com/100"  // Replace with your image URL
//           alt="Profile"
//           className={styles.profileImage}
//         />
//       </div>

//       <nav className={styles.navMenu}>
//         {/* Updated Dashboard icon with smaller size */}
//         <NavLink to={('/')}style={{textDecoration:'none'}}><NavItem icon={<FourSquaresIcon />} label="Dashboard" /></NavLink>
//         <NavLink to={('/products')} style={{textDecoration:'none'}}><NavItem icon={<MdOutlineInventory2 size={20} />} label="Products" /></NavLink>
//         <NavLink to={('/userslist')} style={{textDecoration:'none'}}><NavItem icon={<FaUsers size={20} />} label="Users List" /></NavLink>
//         <div onClick={Adminlogout}><NavItem icon={<FaSignOutAlt size={20} />} label="Logout" /></div>
//       </nav>
//     </div>
//   );
// };

// // Custom icon component for four squares with rounded corners
// const FourSquaresIcon = () => (
//   <div className={styles.fourSquares}>
//     <span className={styles.square}></span>
//     <span className={styles.square}></span>
//     <span className={styles.square}></span>
//     <span className={styles.square}></span>
//   </div>
// );

// const NavItem = ({ icon, label }) => (
//   <div className={styles.navItem}>
//     {icon}
//     <span className={styles.navLabel}>{label}</span>
//   </div>
// );

// export default Sidebar;




// import React, { useContext } from 'react';
// import { MdOutlineInventory2, MdProductionQuantityLimits } from 'react-icons/md';
// import { FaUsers, FaSignOutAlt } from 'react-icons/fa';
// import { HiMiniSquares2X2 } from "react-icons/hi2";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate }from "react-router-dom"
// import { FaBoxOpen  } from 'react-icons/fa';
// import { MyLogin } from '../useContext/Logincontext';

// const Sidebar = () => {
//    const {Adminlogout}= useContext(MyLogin)
//    const navigate=useNavigate()
//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.profileImageContainer}>
//         <img
//           src="https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
//           alt="Profile"
//           className={styles.profileImage}
//         />
//         <h5 className={styles.profileName}>Shahadiya</h5>
//         <p className={styles.profileRole}>Administrator</p>
//       </div>

//       <nav className={styles.navMenu}>
//         <Link style={{textDecoration:'none'}} to="/">
//         <div className={styles.navItem}>
//           <HiMiniSquares2X2 size={20} className={styles.navIcon} />
//           <label className={styles.navLabel}>Dashboard</label>
//         </div>
//         </Link>

//        <Link   style={{textDecoration:'none'}}to="/products">
//        <div className={styles.navItem}>
//           <MdProductionQuantityLimits size={20} className={styles.navIcon}/>
//           <label className={styles.navLabel}>Products</label>
//         </div></Link>
//            <Link style={{textDecoration:'none'}} to="/userslist" className=''>
//            <div className={styles.navItem}>
//           <FaUsers size={20} className={styles.navIcon} />
//           <label className={styles.navLabel}>Users</label>
//         </div></Link>

        

//             <Link style={{textDecoration:'none'}} to="/orders" className=''>
//            <div className={styles.navItem}>
//           <FaBoxOpen  size={20} className={styles.navIcon} />
//           <label className={styles.navLabel}>Orders</label>
//         </div></Link>



//         <div onClick={()=>Adminlogout()} className={styles.navItem}>
//           <FaSignOutAlt size={20} className={styles.navIcon} />
//          <label  className={styles.navLabel}>Log Out</label>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useContext } from 'react';
import { MdOutlineInventory2, MdProductionQuantityLimits } from 'react-icons/md';
import { FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { FaBoxOpen } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { MyLogin } from '../useContext/Logincontext';

const Sidebar = () => {
  const { Adminlogout } = useContext(MyLogin);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-40 bg-cyan-600 text-white   flex flex-col top-0 left-0   ">
      {/* Profile Section */}
      <div className="p-6 text-center border-b border-cyan-600 ">
        <img
          src="https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
          alt="Profile"
          className="w-20 h-20 mx-auto rounded-full border-4 border-cyan-500"
        />
        <h5 className="mt-4 text-lg font-semibold">Shahadiya</h5>
        <p className="text-sm text-cyan-300">Administrator</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow mt-4">
        <Link to="/" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-cyan-600 transition-colors text-white ">
            <HiMiniSquares2X2 size={20} className="mr-4" />
            <span className="font-medium">Dashboard</span>
          </div>
        </Link>

        <Link to="/products" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-cyan-600 transition-colors  text-white">
            <MdProductionQuantityLimits size={20} className="mr-4" />
            <span className="font-medium">Products</span>
          </div>
        </Link>

        <Link to="/userslist" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-cyan-600 transition-colors  text-white">
            <FaUsers size={20} className="mr-4" />
            <span className="font-medium">Users</span>
          </div>
        </Link>

        <Link to="/orders" className="block no-underline">
          <div className="flex items-center p-4 hover:bg-cyan-600 transition-colors  text-white">
            <FaBoxOpen size={20} className="mr-4" />
            <span className="font-medium ">Orders</span>
          </div>
        </Link>

       <div
          onClick={() => Adminlogout()}
          className="block cursor-pointer"
        >
          <div className="flex items-center p-4 hover:bg-cyan-600 transition-colors">
            <FaSignOutAlt size={20} className="mr-4" />
            <span className="font-medium">Log Out</span>
          </div>
        </div>
      </nav>

      {/* Footer
      <div className="p-4 text-center text-xs text-cyan-300 border-t border-cyan-600">
        &copy; 2024 Admin Panel
      </div> */}
    </div>
  );
};

export default Sidebar;

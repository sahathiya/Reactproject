import React,{useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import{Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import RegistrationForm from './Components/Signup';
import Home from './Components/Home';

import MenP from './Men/MenP';
import CollectionPage from './Collection/CollectionPage';
import Lookbook from './LookBook/Lookbook';
import WomenP from './Women/WomenP';
import Cart from './Cart/Cart';
// import User from './Components/User';
import CollectionD from './Collection/CollectionD';
import Payment from './Cart/Payment';
import Search from './Components/Search';

import Admin from './AdminPage/Admin';

import UsersList from './AdminPage/UsersList';
import Products from './AdminPage/Products';
import { MyLogin } from './useContext/Logincontext';
import Dashboard from './AdminPage/Dashboard';
import ProductD from './AdminPage/ProductD';
import Edit from './AdminPage/Edit';
import Add from './AdminPage/Add';
import UsersListD from './AdminPage/UsersListD';
import Wishlist from './Cart/Wishlist';
import Orders from './Cart/Orders';

import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import PaymentSection from './Cart/PaymentSection';
import Verify from './Cart/Verify';
import AdminOrder from './AdminPage/AdminOrder';
import Sidebar from './AdminPage/Sidebar';
import Profile from './Components/Profile';
import AboutUs from './Components/About';

function App() {
  const {admin}=useContext(MyLogin)
 return (
      <div className="App">
        
        {!admin?(
        <div>
        <Header/>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/signup' element={<RegistrationForm/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/men' element={<MenP/>}/>
             <Route path='/women' element={<WomenP/>}/>
             <Route path='/collection' element={<CollectionPage/>}/>
             <Route path='/collectiondetailes/:id' element={<CollectionD/>}/>
             <Route path='/lookbook' element={<Lookbook/>}/>
             <Route path="/cart" element={<Cart/>} />
             <Route path='payment' element={<Payment/>}/>
             <Route path='/wishlist' element={<Wishlist/>}/>
             <Route path='/my-orders/:sessionID' element={<Orders/>}/>
             <Route path='/my-orders' element={<Orders/>}/>
             
             <Route path='/paymentsection' element={<PaymentSection/>}/>
             <Route path='/profile' element={<Profile/>}/>
             <Route path='/about' element={<AboutUs/>}/>
             {/* <Route path='/verifyorder' element={<Verify/>}/> */}
             {/* <Route path="/user" element={<User/>} /> */}
             <Route path="/search" element={<Search/>} />
            </Routes>
               
      </div>
       ):(
        

           
         <div className='flex h-screen'>
          <Sidebar/>
          <div className='flex-1 overflow-auto'>
          <Routes>
            
            {/* <Route  element={<Admin/>}/> */}
            <Route path="/" element={<Dashboard/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='add' element={<Add/>}/>
            <Route path='productdetailes/:id' element={<ProductD/>}/>
            <Route path='edit/:id'element={<Edit/>}/>
            <Route path='userslist' element={<UsersList/>}/>
            <Route path='usersdetailes/:id'element={<UsersListD/>}/>
            <Route path='orders' element={<AdminOrder/>}/>
            {/* </Route> */}
            </Routes>
          </div>
          
       </div>
       
       )}
  <ToastContainer/>
 </div>
 
)
}

export default App;

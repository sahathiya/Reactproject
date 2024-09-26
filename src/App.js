import React,{useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import{Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import RegistrationForm from './Components/Signup';
import Home from './Components/Home';
import Header from './Components/Header';
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
             {/* <Route path="/user" element={<User/>} /> */}
             <Route path="/search" element={<Search/>} />
            </Routes>
               
      </div>
       ):(
        

           
         <div>
          <Routes>
            
          <Route path="/" element={<Admin/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='add' element={<Add/>}/>
          <Route path='productdetailes/:id' element={<ProductD/>}/>
          <Route path='edit/:id'element={<Edit/>}/>
          <Route path='userslist' element={<UsersList/>}/>
          <Route path='usersdetailes/:id'element={<UsersListD/>}/>
          </Route>
          </Routes>
       </div>
       
       )}
  
 </div>
 
)
}

export default App;

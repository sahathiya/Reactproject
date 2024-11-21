// import React, { createContext, useState,useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



// export const MyLogin = createContext();

// function Logincontext({ children }) {
//   const[block,setblock]=useState(false)
  

//   const [datas, setDatas] = useState({
//     username: '',
//     password: ''
//   });
//   const storedcurrent = localStorage.getItem("current");
//   const [current, setCurrent] = useState(storedcurrent ? JSON.parse(storedcurrent) : null);
  

//   const storedadmin=localStorage.getItem("Admin")
//   const[admin,setadmin]=useState(storedadmin? JSON.parse(storedadmin):null)
  


//   const navigate = useNavigate();

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDatas({ ...datas, [name]: value });
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get("http://localhost:3000/Users");
//       const users = response.data;
//       const user = users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===false);

//         const Admin=users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===true);
      
      
//       if (user) {
        
//         if (user.block === false) {
//           console.log(user.block)
//           localStorage.setItem("current", JSON.stringify(user));
//           setCurrent(user);
//           alert('Login successfully completed');
//           setDatas({ username: '', password: '' });
//           navigate('/');
//         } else {
//           alert("You are blocked by admin");
//           setDatas({ username: '', password: '' });
//         }
          
        
//       }else if (Admin) {
//         localStorage.setItem("Admin", JSON.stringify(Admin));
//         setadmin(Admin)
//         setDatas({ username: '', password: '' }); 
//         navigate('/');
//       }
//        else {
//         alert('Incorrect username & password');
//       }
//     } catch (error) {
//       console.log("Error occurred during login:", error);
//     }
//   };


//   const handleCreateAccount = () => {
//     navigate('/signup');
//   };












//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/Product')
//       .then((response) => {
//         console.log("data",response)
//         setProducts(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//  const Adminlogout=()=>{
//  setadmin(null)
//  localStorage.removeItem("Admin")
//  navigate('/')
//  }
//   const handleblock=async(userid,isblock)=>{
//     try {
//       const blockstatus=!isblock
//       await axios.patch(`http://localhost:3000/Users/${userid}`, { block: blockstatus });
    
//     setblock( blockstatus)
//     navigate('/userslist')
//     } catch (error) {
//       console.log(error)
      
//     }
    
//   }


//   return (
//     <MyLogin.Provider value={{ handleChange, handleSubmit, handleCreateAccount, datas, current,products,setCurrent,admin,Adminlogout,handleblock,block }}>
//       {children}
//     </MyLogin.Provider>
//   );
// }

// export default Logincontext;


// // import React, { createContext, useState,useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';



// // export const MyLogin = createContext();

// // function Logincontext({ children }) {
// //   const[block,setblock]=useState(false)
  

// //   const [datas, setDatas] = useState({
// //     username: '',
// //     password: ''
// //   });
// //   const storedcurrent = localStorage.getItem("current");
// //   const [current, setCurrent] = useState(storedcurrent ? JSON.parse(storedcurrent) : null);
  

// //   const storedadmin=localStorage.getItem("Admin")
// //   const[admin,setadmin]=useState(storedadmin? JSON.parse(storedadmin):null)
  


// //   const navigate = useNavigate();

  
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setDatas({ ...datas, [name]: value });
// //   };

 
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.get("http://localhost:3000/Users");
// //       const users = response.data;
// //       const user = users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===false);

// //         const Admin=users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===true);
      
      
// //       if (user) {
        
// //         if (user.block === false) {
// //           console.log(user.block)
// //           localStorage.setItem("current", JSON.stringify(user));
// //           setCurrent(user);
// //           alert('Login successfully completed');
// //           setDatas({ username: '', password: '' });
// //           navigate('/');
// //         } else {
// //           alert("You are blocked by admin");
// //           setDatas({ username: '', password: '' });
// //         }
          
        
// //       }else if (Admin) {
// //         localStorage.setItem("Admin", JSON.stringify(Admin));
// //         setadmin(Admin)
// //         setDatas({ username: '', password: '' }); 
// //         navigate('/');
// //       }
// //        else {
// //         alert('Incorrect username & password');
// //       }
// //     } catch (error) {
// //       console.log("Error occurred during login:", error);
// //     }
// //   };


// //   const handleCreateAccount = () => {
// //     navigate('/signup');
// //   };






  

// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get('http://localhost:3000/allproducts')
// //       .then((response) => {
// //         console.log("data",response)
// //         setProducts(response.data);
// //       })
// //       .catch((error) => console.log(error));
// //   }, []);

// //  const Adminlogout=()=>{
// //  setadmin(null)
// //  localStorage.removeItem("Admin")
// //  navigate('/')
// //  }
// //   const handleblock=async(userid,isblock)=>{
// //     try {
// //       const blockstatus=!isblock
// //       await axios.patch(`http://localhost:3000/Users/${userid}`, { block: blockstatus });
    
// //     setblock( blockstatus)
// //     navigate('/userslist')
// //     } catch (error) {
// //       console.log(error)
      
// //     }
    
// //   }


// //   return (
// //     <MyLogin.Provider value={{ handleChange, handleSubmit, handleCreateAccount, datas, current,products,setCurrent,admin,Adminlogout,handleblock,block }}>
// //       {children}
// //     </MyLogin.Provider>
// //   );
// // }

// // export default Logincontext;


import React, { createContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios/api';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
export const MyLogin = createContext();

function Logincontext({ children }) {
  const[block,setblock]=useState(false)
  const [wishlist, setWishlist] = useState([]);
  
  

  const [datas, setDatas] = useState({
    username: '',
    password: ''
  });
  
  
const [current, setCurrent] = useState()
const [admin, setadmin] = useState()




  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", {username:datas.username, password:datas.password});
      console.log(response);
      //  alert('login successfully')
      toast.success('login successfully')
      setDatas({ username: '', password: '' });
     navigate('/')
      
      
    } catch (error) {
      console.log("Error occurred during login:", error.response.data.message);
      
     
    }
  };

useEffect(() => {
  const userCookie = Cookies.get("user");
  console.log("Cookie value:", userCookie);
   console.log('allcokies',Cookies.get());

   const adminCookie=Cookies.get("admin")
   console.log("adminCookie",adminCookie);
   
   
  if (userCookie) {
    
    const userJson = userCookie.startsWith("j:") ? userCookie.slice(2) : userCookie;

    try {
      const user = JSON.parse(userJson);
      // console.log("Parsed User Object:", user);
      // console.log("Username:", user.username);
      setCurrent(user)
    } catch (error) {
      console.error("Failed to parse user cookie:", error);
    }
  } else if(adminCookie) {
    const adminJson = adminCookie.startsWith("j:") ? adminCookie.slice(2) : adminCookie;

    try {
      const admin = JSON.parse(adminJson);
      console.log("Parsed User Object:", admin);
      console.log("Username:", admin.username);
      setadmin(admin)
    } catch (error) {
      console.error("Failed to parse user cookie:", error);
    }
  }else{
    console.log("user not found");
    
  }
}, [datas]);




  const handleCreateAccount = () => {
    navigate('/signup');
  };









//To fetch all products

  
  const [products, setProducts] = useState([]);
 const [loading,setloading]=useState(true)
  useEffect(() => {
    const fetchproducts=async()=>{
      try{
        const response=await api.get('/allproducts')
        console.log("allllll",response);
        
        setProducts(response.data)
      
      
    } catch (error) {
      console.log(error);
      
    }finally{
setloading(false)
    }
    
    
  }
  fetchproducts()
},[]);



  //Admin logout
 const Adminlogout=async()=>{
  try {
    const response=  await api.post('/admin/adminlogout')
console.log("responselogoutadmin",response);

 setadmin(null)
 navigate('/')
 toast.success(response.data.message)
  } catch (error) {
    console.log(error);
    
  }

 }




//To add product to wishlist
  const addToWishlist = async(productId) => {
   if(current){
    try {
      const response=await api.post('/wishlist',{productId:productId})
      // console.log('reeee......',response);
      
      if (response.data.populatedWishlist) {
        setWishlist(response.data.populatedWishlist.products);
        
      } else if(response.data.wishlist) {
        setWishlist(response.data.wishlist.products)
      }
      toast.success(response.data.message)
    } catch (error) {
      console.log(error);
      
    }
   }else{
    toast.warn('please login')
    navigate('/login')
   }
      
   
    
  };




  //To remove products from wishlist

  const removeFromWishlist = async(productId) => {
   
      try {
        const response=await api.delete('/removewishlist',{data:{productId:productId}})
        // console.log("remmoooo",response);
        setWishlist(response.data.data.products);
      } catch (error) {
        console.log(error);
        
      }
    }
    
    
   
  

  

  return (
    <MyLogin.Provider value={{ handleChange, handleSubmit, handleCreateAccount, datas, current,products,setCurrent,admin,Adminlogout,block,removeFromWishlist ,addToWishlist,wishlist,setWishlist,loading}}>
      {children}
    </MyLogin.Provider>
  );
}

export default Logincontext;


// import React, { createContext, useState,useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



// export const MyLogin = createContext();

// function Logincontext({ children }) {
//   const[block,setblock]=useState(false)
  

//   const [datas, setDatas] = useState({
//     username: '',
//     password: ''
//   });
//   const storedcurrent = localStorage.getItem("current");
//   const [current, setCurrent] = useState(storedcurrent ? JSON.parse(storedcurrent) : null);
  

//   const storedadmin=localStorage.getItem("Admin")
//   const[admin,setadmin]=useState(storedadmin? JSON.parse(storedadmin):null)
  


//   const navigate = useNavigate();

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDatas({ ...datas, [name]: value });
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get("http://localhost:3000/Users");
//       const users = response.data;
//       const user = users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===false);

//         const Admin=users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===true);
      
      
//       if (user) {
        
//         if (user.block === false) {
//           console.log(user.block)
//           localStorage.setItem("current", JSON.stringify(user));
//           setCurrent(user);
//           alert('Login successfully completed');
//           setDatas({ username: '', password: '' });
//           navigate('/');
//         } else {
//           alert("You are blocked by admin");
//           setDatas({ username: '', password: '' });
//         }
          
        
//       }else if (Admin) {
//         localStorage.setItem("Admin", JSON.stringify(Admin));
//         setadmin(Admin)
//         setDatas({ username: '', password: '' }); 
//         navigate('/');
//       }
//        else {
//         alert('Incorrect username & password');
//       }
//     } catch (error) {
//       console.log("Error occurred during login:", error);
//     }
//   };


//   const handleCreateAccount = () => {
//     navigate('/signup');
//   };






  

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/allproducts')
//       .then((response) => {
//         console.log("data",response)
//         setProducts(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//  const Adminlogout=()=>{
//  setadmin(null)
//  localStorage.removeItem("Admin")
//  navigate('/')
//  }
//   const handleblock=async(userid,isblock)=>{
//     try {
//       const blockstatus=!isblock
//       await axios.patch(`http://localhost:3000/Users/${userid}`, { block: blockstatus });
    
//     setblock( blockstatus)
//     navigate('/userslist')
//     } catch (error) {
//       console.log(error)
      
//     }
    
//   }


//   return (
//     <MyLogin.Provider value={{ handleChange, handleSubmit, handleCreateAccount, datas, current,products,setCurrent,admin,Adminlogout,handleblock,block }}>
//       {children}
//     </MyLogin.Provider>
//   );
// }

// export default Logincontext;





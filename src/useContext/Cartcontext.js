// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { MyLogin } from './Logincontext'; 

// export const MyCart = createContext();

// function Cartcontext({ children }) {
//   const navigate = useNavigate();
//   const { current } = useContext(MyLogin); 
//   const [cart, setCart] = useState([]);

//   // const clearCart=()=>{
//   //      setCart([])
//   //    }

//   useEffect(() => {
//     if (current) {
//       const fetchCart = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/Users/${current.id}`);
//           setCart(response.data.cart);
//         } catch (error) {
//           alert(error);
//         }
//       };
//       fetchCart();
//     }
//   }, [current]);

//   const updateCart = async (updatedCart) => {
//     try {
//       await axios.patch(`http://localhost:3000/Users/${current.id}`, { cart: updatedCart });
//       setCart(updatedCart);
//     } catch (error) {
//       console.error("Error updating cart", error);
//     }
//   };

//   const addToCart = async (product) => {
//     if (current) {
//       console.log('currentuser',current);
      
//       const response = await axios.post(`http://localhost:3000/cart/${current.id}`,{product},{withCredentials:true});
//       const existingItem = response.data.cart.find(item => item.id === product._id);

//       if (existingItem) {
//         alert("This item is already in your cart");
//       } else {
//         const newCart = [...response.data.cart, { ...product, qty: 1 }];
//         await updateCart(newCart);
//       }
//     } else {
//       navigate("/login");
//       alert("Please login");
//     }
//   };

//   const handleremove = async (itemId) => {
//     const updatedCart = cart.filter(item => item.id !== itemId);
//     await updateCart(updatedCart);
//   };

//   const incrementQuantity = async (itemId) => {
    
//     const updatedCart = cart.map(item => {
//       if (item.id === itemId) {
//         return { ...item, qty: item.qty + 1 };
//       }
//       return item;
//     });
//     await updateCart(updatedCart);
//   };

//   const decrementQuantity = async (itemId) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === itemId && item.qty > 1) {
//         return { ...item, qty: item.qty - 1 };
//       }
//       return item;
//     });
//     await updateCart(updatedCart);
//   };

//   const handlecheckout = () => {
//     navigate('/payment')
//     // if (cart.length > 0) {
//     //   navigate('/payment');
//     // } else {
//     //   alert("Your cart is empty.");
//     // }

   
//   };

//   return (
//     <MyCart.Provider value={{ addToCart, cart,setCart, handleremove, incrementQuantity, decrementQuantity, handlecheckout }}>
//       {children}
//     </MyCart.Provider>
//   );
// }

// export default Cartcontext;




import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyLogin } from './Logincontext';
import api from '../axios/api';
import { toast } from 'react-toastify';
export const MyCart = createContext();

function Cartcontext({ children }) {
  const navigate = useNavigate();
  const { current } = useContext(MyLogin); 
  const [cart, setCart] = useState([]);
const [clientSecret,setclientSecret]=useState()
const [orders,setorder]=useState([])
  
  
  
useEffect(() => {
  if (current ) {
    const fetchCart = async () => {
      try {
        const response = await api.get(`/cartproducts`);
        // console.log("responseuseeffect",response);
       
        setCart(response.data.allcartitems.products);
       
      } catch (error) {
       console.log(error);
       
      }
    };
    fetchCart();
  }
},[current]);




  const updateCart = async (productId,action) => {
    
    
    try {
      console.log("action id",productId,action);
  const response=await api.put(`/updatecart`, { productId,action } );
  // console.log('res',response);
  // console.log(response.data.updatecart.products);
  
      setCart(response.data.updatecart.products);
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  const incrementQuantity = async (productId) => {
    updateCart(productId,'increment')
    
    
  };

  const decrementQuantity = async (productId) => {
    updateCart(productId,'decrement')
    
    
  };



  const addToCart = async (product) => {
    console.log('product',product);
    
    if (current) {
      console.log('currentuser',current);
      
      const response = await api.post('/cart', { productId: product });
      // console.log('response',response.data.addProductTocart.products);

      
      if(response.data.addProductTocart){
        
        setCart(response.data.addProductTocart.products)
      }else if(response.data.cartsend){
        setCart(response.data.cartsend.products)
      }
      toast.success(response.data.message)
      
    } else {
      navigate("/login");
      toast.warn("Please login");
    }
  };

  


  

  const handleremove = async (productId) => {
    console.log("produc .......t",productId);
    
    const response=await api.delete('/removecart',{data:{productId:productId}})
    console.log("remo",response.data.cartdata);
    
    setCart(response.data.cartdata.products)
    
  };
 




  
  


  useEffect(() => {
    
      const fetchorders = async () => {
        try {
            const response = await api.get('/allorders');
            console.log("API Response:", response.data); // Inspect the API response structure
            setorder(response.data.allorders); // Make sure allorders is an array
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    fetchorders();
    
    
}, []);




  const handlecheckout = async() => {
    
    // setCart(response.data.savedOrder.products);
    navigate('/payment')
    
    
   };

   const handleCancel=async(id)=>{
    const response=await api.delete(`/removeorder/${id}`)
    console.log('resssssssss.........',response);
    
   
}



  return (
    <MyCart.Provider value={{ addToCart, cart,setCart, handleremove, incrementQuantity, decrementQuantity, handlecheckout ,clientSecret,orders,setclientSecret,setorder,handleCancel}}>
      {children}
    </MyCart.Provider>
  );
}

export default Cartcontext;





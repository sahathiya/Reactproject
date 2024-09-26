import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyLogin } from './Logincontext'; 

export const MyCart = createContext();

function Cartcontext({ children }) {
  const navigate = useNavigate();
  const { current } = useContext(MyLogin); 
  const [cart, setCart] = useState([]);

  // const clearCart=()=>{
  //      setCart([])
  //    }

  useEffect(() => {
    if (current) {
      const fetchCart = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/Users/${current.id}`);
          setCart(response.data.cart);
        } catch (error) {
          alert(error);
        }
      };
      fetchCart();
    }
  }, [current]);

  const updateCart = async (updatedCart) => {
    try {
      await axios.patch(`http://localhost:3000/Users/${current.id}`, { cart: updatedCart });
      setCart(updatedCart);
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  const addToCart = async (product) => {
    if (current) {
      const response = await axios.get(`http://localhost:3000/Users/${current.id}`);
      const existingItem = response.data.cart.find(item => item.id === product.id);

      if (existingItem) {
        alert("This item is already in your cart");
      } else {
        const newCart = [...response.data.cart, { ...product, qty: 1 }];
        await updateCart(newCart);
      }
    } else {
      navigate("/login");
      alert("Please login");
    }
  };

  const handleremove = async (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    await updateCart(updatedCart);
  };

  const incrementQuantity = async (itemId) => {
    
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    await updateCart(updatedCart);
  };

  const decrementQuantity = async (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    await updateCart(updatedCart);
  };

  const handlecheckout = () => {
    navigate('/payment')
    // if (cart.length > 0) {
    //   navigate('/payment');
    // } else {
    //   alert("Your cart is empty.");
    // }

   
  };

  return (
    <MyCart.Provider value={{ addToCart, cart,setCart, handleremove, incrementQuantity, decrementQuantity, handlecheckout }}>
      {children}
    </MyCart.Provider>
  );
}

export default Cartcontext;



import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyLogin } from "./Logincontext";
import api from "../axios/api";
import { toast } from "react-toastify";
export const MyCart = createContext();

function Cartcontext({ children }) {
  const navigate = useNavigate();
  const { current } = useContext(MyLogin);
  const [cart, setCart] = useState([]);
  const [clientSecret, setclientSecret] = useState();
  const [orders, setorder] = useState([]);

  useEffect(() => {
    if (current) {
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
  }, [current]);

  const updateCart = async (productId, action) => {
    try {
      console.log("action id", productId, action);
      const response = await api.put(`/updatecart`, { productId, action });
      setCart(response.data.updatecart.products);
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  const incrementQuantity = async (productId) => {
    updateCart(productId, "increment");
  };

  const decrementQuantity = async (productId) => {
    updateCart(productId, "decrement");
  };

  const addToCart = async (product) => {
    console.log("product", product);

    if (current) {
      console.log("currentuser", current);

      const response = await api.post("/cart", { productId: product });

      if (response.data.addProductTocart) {
        setCart(response.data.addProductTocart.products);
      } else if (response.data.cartsend) {
        setCart(response.data.cartsend.products);
      }
      toast.success(response.data.message);
    } else {
      navigate("/login");
      toast.warn("Please login");
    }
  };

  const handleremove = async (productId) => {
    console.log("produc .......t", productId);

    const response = await api.delete("/removecart", {
      data: { productId: productId },
    });
    console.log("remo", response.data.cartdata);

    setCart(response.data.cartdata.products);
    toast.error(response.data.message);
  };

  
    const fetchorders = async () => {
      try {
        const response = await api.get("/allorders");
        console.log("API Response:", response.data);
        setorder(response.data.allorders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
   
  

  const handlecheckout = async () => {
    navigate("/payment");
  };

  const handleCancel = async (id) => {
    const response = await api.delete(`/removeorder/${id}`);
    toast.success(response.data.message);
  };

  return (
    <MyCart.Provider
      value={{
        addToCart,
        cart,
        setCart,
        handleremove,
        incrementQuantity,
        decrementQuantity,
        handlecheckout,
        fetchorders,
        clientSecret,
        orders,
        setclientSecret,
        setorder,
        handleCancel,
      }}
    >
      {children}
    </MyCart.Provider>
  );
}

export default Cartcontext;

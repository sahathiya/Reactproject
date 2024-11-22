import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const MyLogin = createContext();

function Logincontext({ children }) {
  
  const [wishlist, setWishlist] = useState([]);

  const [datas, setDatas] = useState({
    username: "",
    password: "",
  });

  const [current, setCurrent] = useState();
  const [admin, setadmin] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login",{
        username: datas.username,
        password: datas.password,
      });
      console.log(response);
   
  toast.success(response.data.message);
  setDatas({ username: "", password: "" });
  navigate("/");
  
      
      
    } catch (error) {
      if(error.response.status>=500){
        toast.error("server error");
      }else if(error.response.status===400){
        toast.warn(error.response.data.message)
      }else if(error.response.status===404){
        toast.warn(error.response.data.message)
      }
      
    }
    }
  

  useEffect(() => {
    const userCookie = Cookies.get("user");
    console.log("Cookie value:", userCookie);
    console.log("allcokies", Cookies.get());

    const adminCookie = Cookies.get("admin");
    console.log("adminCookie", adminCookie);

    if (userCookie) {
      const userJson = userCookie.startsWith("j:")
        ? userCookie.slice(2)
        : userCookie;

      try {
        const user = JSON.parse(userJson);
        setCurrent(user);
      } catch (error) {
        console.error("Failed to parse user cookie:", error);
      }
    } else if (adminCookie) {
      const adminJson = adminCookie.startsWith("j:")
        ? adminCookie.slice(2)
        : adminCookie;

      try {
        const admin = JSON.parse(adminJson);
        console.log("Parsed User Object:", admin);
        console.log("Username:", admin.username);
        setadmin(admin);
      } catch (error) {
        console.error("Failed to parse user cookie:", error);
      }
    } else {
      console.log("user not found");
    }
  }, [datas]);

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  //To fetch all products

  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await api.get("/allproducts");
        console.log("allllll", response);

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    fetchproducts();
  }, []);

  //Admin logout
  const Adminlogout = async () => {
    try {
      const response = await api.post("/admin/adminlogout");
      console.log("responselogoutadmin", response);

      setadmin(null);
      navigate("/");
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  //To add product to wishlist
  const addToWishlist = async (productId) => {
    if (current) {
      try {
        const response = await api.post("/wishlist", { productId: productId });
        // console.log('reeee......',response);

        if (response.data.populatedWishlist) {
          setWishlist(response.data.populatedWishlist.products);
        } else if (response.data.wishlist) {
          setWishlist(response.data.wishlist.products);
        }
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warn("please login");
      navigate("/login");
    }
  };

  //To remove products from wishlist

  const removeFromWishlist = async (productId) => {
    try {
      const response = await api.delete("/removewishlist", {
        data: { productId: productId },
      });
      // console.log("remmoooo",response);
      setWishlist(response.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyLogin.Provider
      value={{
        handleChange,
        handleSubmit,
        handleCreateAccount,
        datas,
        current,
        products,
        setCurrent,
        admin,
        Adminlogout,
        removeFromWishlist,
        addToWishlist,
        wishlist,
        setWishlist,
        loading,
      }}
    >
      {children}
    </MyLogin.Provider>
  );
}

export default Logincontext;


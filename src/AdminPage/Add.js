// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styles from './Add.module.css'; 

// function Add() {
//   const initialvalue = {
//     name: "",
//     type: "",
//     image: "",
//     price: "",
//     description: "",
//     brand: "",
//     rating: "",
//     reviews: "",
//   };

//   const [addproduct, setaddproduct] = useState(initialvalue);
//   const navigate = useNavigate();

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:3000/Product`, addproduct);
//       alert("Added new product");
//       navigate('/products');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setaddproduct({ ...addproduct, [name]: value });
//   };

//   return (
//     <div>
    
//       <form className={styles.form} onSubmit={handlesubmit}>
//       <h1 style={{textAlign:"center" ,marginTop:"-28px"}}>Add Product</h1>
//         <div className={styles.formGroup}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={addproduct.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="type">Type:</label>
//           <input
//             type="text"
//             id="type"
//             name="type"
//             value={addproduct.type}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="image">Image URL:</label>
//           <input
//             type="url"
//             id="image"
//             name="image" 
//             value={addproduct.image}
//             onChange={handleChange}
//             required
//           />
//         </div>
       
//         <div className={styles.formGroup}>
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={addproduct.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={addproduct.description}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="brand">Brand:</label>
//           <input
//             type="text"
//             id="brand"
//             name="brand"
//             min="0"
//             max="5"
//             step="0.1"
//             value={addproduct.brand}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="rating">Rating:</label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             min="0"
//             max="5"
//             step="0.1"
//             value={addproduct.rating}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="reviews">Reviews:</label>
//           <input
//             type="number"
//             id="reviews"
//             name="reviews"
//             value={addproduct.reviews}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className={styles.submitButton}>
//           Add
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Add;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './Add.module.css'; 
// import api from '../axios/api';

// function Add() {
//   const initialvalue = {
//     name: "",
//     category: "",
//     price: "",
//     description: "",
//     brand: "",
//     qty:'',
//     rating: "",
//     reviews: "",
//   };

//   const [addproduct, setaddproduct] = useState(initialvalue);
//   const[image,setimage]=useState(null)
  
//   const navigate = useNavigate();

//   const handlesubmit = async (e) => {
//     e.preventDefault();
   
//     try {
//        const formData = new FormData();
//        formData.append('image',image)
//         Object.keys(addproduct).forEach((key) => {
//             formData.append(key, addproduct[key]);
//         });
//    const res=   await api.post(`/admin/newproduct`, formData);
//    console.log("new",res);
   
//       alert("Added new product");
//       navigate('/products');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
    
//     const{name,value}=e.target
    
//     setaddproduct({ ...addproduct, [name]: value });
//   };
// const handleimage=(e)=>{
//   setimage(e.target.files[0])
// }
//   return (
//     <div>
    
//       <form className={styles.form} onSubmit={handlesubmit}>
//       <h1 style={{textAlign:"center" ,marginTop:"-28px"}}>Add Product</h1>
//         <div className={styles.formGroup}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={addproduct.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             name="category"
//             value={addproduct.category}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="image">Image URL:</label>
//           <input
//              type="file"
//              id="image"
//              name="image"
//              onChange={handleimage} 
//              required
//           />
//         </div>
       
//         <div className={styles.formGroup}>
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={addproduct.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={addproduct.description}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="brand">Brand:</label>
//           <input
//             type="text"
//             id="brand"
//             name="brand"
//             min="0"
//             max="5"
//             step="0.1"
//             value={addproduct.brand}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="qty">Quantity:</label>
//           <input
//             type="number"
//             id="qty"
//             name="qty"
//             min="0"
//             max="5"
//             step="0.1"
//             value={addproduct.qty}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="rating">Rating:</label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             min="0"
//             max="5"
//             step="0.1"
//             value={addproduct.rating}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="reviews">Reviews:</label>
//           <input
//             type="number"
//             id="reviews"
//             name="reviews"
//             value={addproduct.reviews}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className={styles.submitButton}>
//           Add
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Add;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";
import { toast } from "react-toastify";
function Add() {
  const initialvalue = {
    name: "",
    category: "",
    price: "",
    description: "",
    brand: "",
    qty: "",
    rating: "",
    reviews: "",
  };

  const [addproduct, setaddproduct] = useState(initialvalue);
  const [image, setimage] = useState(null);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      Object.keys(addproduct).forEach((key) => {
        console.log("debyug",key, addproduct[key]); 
        formData.append(key, addproduct[key]);
      });
      const res = await api.post(`/admin/newproduct`, formData);
      console.log("formData",formData)
      
      console.log("new", res);

      toast.success("Added new product");
      navigate("/products");
      setaddproduct(initialvalue)
      setimage(null)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(error);
      
    }
    }
      
    
  


  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddproduct({ ...addproduct, [name]: value });
  };

  const handleimage = (e) => {
    setimage(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 to-indigo-500">
      <form
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl"
        onSubmit={handlesubmit}
      >
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Add New Product
        </h1>
        {/* Two-column grid layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={addproduct.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={addproduct.category}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={addproduct.price}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>


            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Brand:
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={addproduct.brand}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>



            <div className="mb-4">
              <label
                htmlFor="qty"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="qty"
                name="qty"
                value={addproduct.qty}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleimage}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={addproduct.rating}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="reviews"
                className="block text-sm font-medium text-gray-700"
              >
                Reviews:
              </label>
              <input
                type="number"
                id="reviews"
                name="reviews"
                value={addproduct.reviews}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={addproduct.description}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Add;








import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Add.module.css'; 

function Add() {
  const initialvalue = {
    name: "",
    type: "",
    image: "",
    price: "",
    description: "",
    brand: "",
    rating: "",
    reviews: "",
  };

  const [addproduct, setaddproduct] = useState(initialvalue);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/Product`, addproduct);
      alert("Added new product");
      navigate('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddproduct({ ...addproduct, [name]: value });
  };

  return (
    <div>
    
      <form className={styles.form} onSubmit={handlesubmit}>
      <h1 style={{textAlign:"center" ,marginTop:"-28px"}}>Add Product</h1>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={addproduct.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={addproduct.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image" 
            value={addproduct.image}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className={styles.formGroup}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={addproduct.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={addproduct.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            min="0"
            max="5"
            step="0.1"
            value={addproduct.brand}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={addproduct.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="reviews">Reviews:</label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={addproduct.reviews}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add
        </button>
      </form>
    </div>
  )
}

export default Add;

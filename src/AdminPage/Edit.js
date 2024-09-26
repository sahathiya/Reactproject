import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Add.module.css'; 
import { FaEdit } from 'react-icons/fa';

function Edit() {
  const initialstate = {
    name: "",
    type: "",
    image: "",
    brand: "",
    price: "",
    description: "",
    rating: "",
    reviews: "" 
  };
  
  const [edit, setedit] = useState(initialstate);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Product/${id}`);
        setedit(response.data);
        console.log("res", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setedit({ ...edit, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const editUpdating = async () => {
      try {
        await axios.put(`http://localhost:3000/Product/${id}`, edit);
        console.log("this is edited", edit);
        
        navigate(`/productdetailes/${id}`);
      } catch (error) {
        console.log(error);
      }
    };
    
    editUpdating();
  };

  return (
    <div>
    
      <form className={styles.form} onSubmit={handlesubmit}>
      <h1 style={{textAlign:"center" ,marginTop:"-28px"}}>Edit <FaEdit style={{ color: 'black' }} /></h1>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={edit.name}
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
            value={edit.type}
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
            value={edit.image}
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
            value={edit.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={edit.description}
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
            value={edit.brand}
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
            value={edit.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="reviews">Reviews:</label>
          <input
            type="number"
            id="reviews"
            name=""
            
            
            value={edit.reviews}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Edit;

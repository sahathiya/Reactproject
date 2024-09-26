import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductD.css'; 

function ProductD() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Product/${id}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleBack = () => navigate('/products');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/Product/${id}`);
      navigate('/products');
    } catch (error) {
      console.error('Failed to delete the product:', error);
    }
  };

  return (
    <div className="product-page">
      {productDetails ? (
        <div className="product-container">
          <div className="product-image">
            <img src={productDetails.image} alt={productDetails.name} />
          </div>
          <div className="product-details">
            <h2>{productDetails.name}</h2>
            <p>{productDetails.description}</p>
            <p><strong>Category:</strong> {productDetails.type}</p>
            <p><strong>Price:</strong> ${productDetails.price}</p>
            <p><strong>Brand:</strong> {productDetails.brand}</p>
            <p><strong>Rating:</strong> {productDetails.rating}</p>
            <p><strong>Reviews:</strong> {productDetails.reviews}</p>

            <div className="product-actions">
              <button className="btn back-btn" onClick={handleBack}>Back to List</button>
              <button className="btn edit-btn" onClick={() => navigate(`/edit/${productDetails.id}`)}>Edit</button>
              <button className="btn delete-btn" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductD;

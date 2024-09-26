import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CollectionD.css';
import { MyLogin } from '../useContext/Logincontext';
import { MyCart } from '../useContext/Cartcontext';

function CollectionD() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {addToCart}=useContext(MyCart)
  const [collectiondetailes, setcollectiondetailes] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const {products}=useContext(MyLogin)

  useEffect(() => {
    if (products) {
      const fulldetailes = products.find((product) => product.id === id);
      setcollectiondetailes(fulldetailes ? [fulldetailes] : []);

      if (fulldetailes) {
        const related = products.filter(
          (product) => product.type === fulldetailes.type && product.id !== fulldetailes.id
        );
        setRelatedProducts(related);
      }
    }
  }, [products, id]);



  const Handlecart = (product) => {
    addToCart(product);
  };

  const Handleback = () => {
    navigate('/');
  };

  const convertToStars = (rating) => {
    const star = parseFloat(rating);
    const fullStars = Math.floor(star);
    const hasHalfStar = star % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="star-rating">
        {'★'.repeat(fullStars)}
        {hasHalfStar && <span className="half-star">★</span>}
        {'☆'.repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div className="container mt-5">
      {collectiondetailes && collectiondetailes.map((product) => (
        <div className="product-detail" key={product.id}>
          <div className="product-left">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
          </div>
          <div className="product-right">
            <p className="product-description">{product.description}</p>
            <p className="product-category"><strong>Category:</strong> {product.type}</p>
            <p className="product-price"><strong>Price:</strong> ${product.price}</p>
            <p className="product-brand"><strong>Brand:</strong> {product.brand}</p>
            <p className="product-rating"><strong>Rating:</strong> <span className="text-warning">{convertToStars(product.rating)}</span></p>
            <p className="product-reviews"><strong>Reviews:</strong> {product.reviews}</p>
            <button onClick={() => Handlecart(product)} style={{ border: 'none' ,backgroundColor:'purple',width:'400px'}}>ADD TO CART</button>
            <button onClick={() => Handleback(product)} style={{ border: 'none' ,backgroundColor: '#fcba03',width:'400px'}}>Back to home</button>
          </div>
        </div>
      ))}

      
      <div className="related-products mt-5">
        <h3>Related Products</h3>
        <div className="related-products-list">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <div key={product.id} className="related-product-card">
                <img src={product.image} alt={product.name} className="related-product-image" />
                <h5 className="related-product-name">{product.name}</h5>
                <p className="related-product-price">${product.price}</p>
                <div className='btn-viewdetailes'>
                <button onClick={() => navigate(`/collectiondetailes/${product.id}`)} style={{ border: 'none',backgroundColor:'purple' }}>
                  View Details
                </button>
                </div>
                
              </div>
            ))
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollectionD;

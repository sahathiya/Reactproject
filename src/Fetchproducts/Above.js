import React,{useContext} from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Mycontext } from '../useContext/Context';
import './Above.css';
import { MyLogin } from '../useContext/Logincontext';
function Above() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/Product')
//       .then((response) => {
//         console.log(response)
//         setProducts(response.data); // Use response.data because Axios automatically parses the JSON
//       })
//       .catch((error) => console.log(error));
//   }, []);
// const {ProductAbove}=useContext(Mycontext)
// const products=ProductAbove
const {products}=useContext(MyLogin)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>OUR BEST SELLER PRODUCTS</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Above;

import React,{useContext} from 'react';
import './Collection.css';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { MyLogin } from '../useContext/Logincontext';


function CollectionPage() {
    const {products}=useContext(MyLogin)
    
  return (
    <div>
       <h1 style={{textAlign:'center'}}>OUR BEST SELLER PRODUCTS</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link key={product.id} style={{textDecoration:'none'}}to={(`/collectiondetailes/${product.id}`)}>
          
          <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} / 5</p>
          
          </div>
          </Link>
        
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default CollectionPage

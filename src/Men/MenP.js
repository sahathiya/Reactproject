import React,{useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './MenP.css'
import Footer from '../Components/Footer'
import { MyLogin } from '../useContext/Logincontext'
function MenP() {
    const[Menproducts,setMenproducts]=useState([])
    
    const {products}=useContext(MyLogin)
    useEffect(()=>{
        setMenproducts(products&&products.filter(datas=>datas.type==="men"))
    },[products])
    return (
        <div className="container mt-5">
            <h1  style={{textAlign:'center'}}>MEN</h1>

            <div className="product-grid">
                {Menproducts && Menproducts.map((datas) => (
                    <Link style={{textDecoration:'none'}} className="product-link" to={(`/collectiondetailes/${datas.id}`)} key={datas.id}>
                    <div className="product-card" >
                        <div>
                            <img src={datas.image} alt={datas.name} className="card-img-top product-image" />
                            <div>
                                <h5 style={{textAlign:'center'}}>{datas.name}</h5>
                                <p style={{textAlign:'center'}}>Price: ${datas.price}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            <Footer/>
        </div>
        
            
    
    );

   

}

export default MenP

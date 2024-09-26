import React,{useContext,useState,useEffect} from 'react'
// import { Mycontext } from '../useContext/Context'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { MyLogin } from '../useContext/Logincontext'

function WomenP() {
    const[Womenproducts,setWomenproducts]=useState([])
    // const {ProductAbove}=useContext(Mycontext)
    const {products}=useContext(MyLogin)
    useEffect(()=>{
        setWomenproducts(products&&products.filter(datas=>datas.type==="women"))
    },[products])

  return (
    <div className="container mt-5">
    <h1  style={{textAlign:'center'}}>WOMEN</h1>

    <div className="product-grid">
        {Womenproducts && Womenproducts.map((items) => (
            <Link  key={items.id} style={{textDecoration:'none'}} to={(`/collectiondetailes/${items.id}`)}>
            <div className="product-card" >
                <div className="card">
                    <img src={items.image} alt={items.name} className="card-img-top" />
                    <div >
                        <h5  style={{textAlign:'center'}}>{items.name}</h5>
                        <p  style={{textAlign:'center'}}>Price:$ {items.price}</p>
                    </div>
                </div>
            </div>
            </Link>
        ))}
    </div>
    <Footer/>
</div>
  )
}

export default WomenP

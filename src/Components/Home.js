


// import React from 'react';
// import './Home.css';
// import Above from '../Fetchproducts/Above';
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';
// function Home() {
//   const navigate=useNavigate()
//   return (
//     <div>
//       <div className='home-container'>
//         <h1>LOVE THE PLANET WE WALK ON</h1>
//         <div className="button-group">
//           <button  onClick={()=>navigate('/men')} >SHOP MEN</button>
//           <button  onClick={()=>navigate('/women')} >SHOP WOMEN</button>
//         </div>
//       </div>
//       <div>
//         <Above />
//       </div>
//       <div>
//       <Footer/>
//       </div>
//     </div>
//   );
// }

// export default Home;




import React,{useState} from 'react';
import './Home.css';
import Above from '../Fetchproducts/Above';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();


  return (
    <div>
      <div className='home-container'>
        <h1>LOVE THE PLANET WE WALK ON</h1>
        <div className="button-group">
          <button className='btn btn-men' style={{backgroundColor:'purple',color:'white'}}  onClick={() => navigate('/men')}>SHOP MEN</button>
          <button className='btn btn-women'  style={{backgroundColor:'purple',color:'white'}}onClick={() => navigate('/women')}>SHOP WOMEN</button>
        </div>
      </div>
      <div>
        <Above />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;


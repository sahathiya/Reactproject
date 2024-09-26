import React from 'react'
import './Lookbook.css'
import Always from '../All/Always'
import Footer from '../Components/Footer'

function Lookbook() {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>LookBook</h1>
        <div className='look1'>
            <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg'/>
        </div>
        <div>
            <h1 style={{textAlign:'center'}}>Fall/Winter 2024</h1>
           <h6 style={{textAlign:'center'}}>Shoes are crucial in the fall and winter seasons for providing warmth and protection against the cold,
             wet weather. They help keep feet dry and insulated in rain, snow, and slush, 
             preventing discomfort and health issues like frostbite.
              Sturdy shoes with good traction are essential for safety, 
              reducing the risk of slips and falls on icy or wet surfaces</h6>
        </div>
        <div className='look1'>
            <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg'/>
            </div>
            <div>
            <h1 style={{textAlign:'center'}}>Spring/Summer 2024</h1>
            <p style={{textAlign:'center'}}>In the summer and spring seasons, shoes play a crucial role in comfort and style. Breathable materials like canvas or mesh help keep feet cool and dry during warmer temperatures. 
                Lightweight and flexible designs allow for easy movement, making them perfect for outdoor activities.
                 Additionally, vibrant and bright-colored shoes add a refreshing touch to any outfit, enhancing the seasonal look.</p>
           </div>
           <div className='look1'>
            <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg'/>
           </div>
           <div>
            <h1  style={{textAlign:'center'}}>Go & Play</h1>
            <p  style={{textAlign:'center'}}>Wearing shoes while playing provides essential protection for your feet, reducing the risk of injuries from sharp objects or rough surfaces.
                 They offer support and cushioning, which helps absorb impact and prevent strain on your feet and ankles.
                  Proper footwear also enhances performance by improving grip and stability, allowing for better movement and agility. </p>
           </div>
           <div className='look1'>
            <img src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    
           </div>
           <div>
            <h1 style={{textAlign:'center'}}>Adventurer Gear</h1>
            <p style={{textAlign:'center'}}>Adventurer Gear shoes are designed for the ultimate explorer, offering durability and comfort for any terrain.
                 Built with rugged soles for exceptional grip, these shoes provide stability and support on rocky trails or uneven surfaces. Their breathable and waterproof materials keep your feet dry and comfortable in all weather conditions,
                 ensuring a secure fit throughout your journey.</p>
            </div>
            <Always/>
            <Footer/>
            </div>
            
  )
}

export default Lookbook

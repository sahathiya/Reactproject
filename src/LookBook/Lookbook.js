import React from 'react';
function Lookbook() {
  return (
    <div className="container mx-auto mt-12 px-4 pt-20">
      <div className="relative mb-12 mt-10">
        <img
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg"
          alt="Lookbook Cover"
          className="w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center mb-2">
            Fall/Winter 2024
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white text-center px-2 sm:px-6">
            Shoes are crucial in the fall and winter seasons for providing warmth and protection against the cold, wet weather. They help keep feet dry and insulated in rain, snow, and slush, preventing discomfort and health issues like frostbite. Sturdy shoes with good traction are essential for safety, reducing the risk of slips and falls on icy or wet surfaces.
          </p>
        </div>
      </div>

     
      {[
        {
          img: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg',
          title: 'Spring/Summer 2024',
          description:
            'In the summer and spring seasons, shoes play a crucial role in comfort and style. Breathable materials like canvas or mesh help keep feet cool and dry during warmer temperatures. Lightweight and flexible designs allow for easy movement, making them perfect for outdoor activities. Additionally, vibrant and bright-colored shoes add a refreshing touch to any outfit, enhancing the seasonal look.',
        },
        {
          img: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg',
          title: 'Go & Play',
          description:
            'Wearing shoes while playing provides essential protection for your feet, reducing the risk of injuries from sharp objects or rough surfaces. They offer support and cushioning, which helps absorb impact and prevent strain on your feet and ankles. Proper footwear also enhances performance by improving grip and stability, allowing for better movement and agility.',
        },
        {
          img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Adventurer Gear',
          description:
            'Adventurer Gear shoes are designed for the ultimate explorer, offering durability and comfort for any terrain. Built with rugged soles for exceptional grip, these shoes provide stability and support on rocky trails or uneven surfaces. Their breathable and waterproof materials keep your feet dry and comfortable in all weather conditions, ensuring a secure fit throughout your journey.',
        },
      ].map((section, index) => (
        <div key={index} className="relative mb-12">
          <img
            src={section.img}
            alt={section.title}
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center mb-2">
              {section.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white text-center px-2 sm:px-6">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lookbook;

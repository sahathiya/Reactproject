import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function AboutUs() {
  return (
    <div className="py-16 bg-gray-100 mt-5">
     
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">We are passionate about providing the best products and customer experience.</p>
        </div>

       
        <div className="lg:flex lg:justify-between lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At iFOOT, we are committed to offering the finest quality products and unmatched customer service. Our team works tirelessly to ensure you have a seamless and enjoyable shopping experience.
            </p>
          </div>

          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to revolutionize the way people shop online by offering a curated collection of high-quality products, excellent customer support, and a hassle-free shopping experience.
            </p>
          </div>
        </div>

       
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Connect With Us</h3>
          <div className="flex justify-center space-x-8">
          
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition duration-300">
              <FaFacebook className="w-8 h-8" />
            </a>

            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition duration-300">
              <FaInstagram className="w-8 h-8" />
            </a>

            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition duration-300">
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default AboutUs;

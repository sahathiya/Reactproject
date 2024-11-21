import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyLogin } from "../useContext/Logincontext";
import { MyCart } from "../useContext/Cartcontext";
import { FaShoppingCart, FaHome } from "react-icons/fa";

function CollectionD() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(MyCart);
  const [collectionDetailes, setCollectionDetailes] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { products } = useContext(MyLogin);
  console.log("hjcvdhfd", products);

  useEffect(() => {
    if (products.result) {
      const fulldetailes = products.result.find(
        (product) => product._id === id
      );
      setCollectionDetailes(fulldetailes ? [fulldetailes] : []);
      console.log("full", fulldetailes);

      if (fulldetailes) {
        const related = products.result.filter(
          (product) =>
            product.category === fulldetailes.category &&
            product._id !== fulldetailes.id
        );
        setRelatedProducts(related);
      }
    }
  }, [products, id]);

  const handleCart = (product) => {
    addToCart(product._id);
  };

  const handleBack = () => {
    navigate("/");
  };

  const scroll = (product) => {
    navigate(`/collectiondetailes/${product}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const convertToStars = (rating) => {
    const star = parseFloat(rating);
    const fullStars = Math.floor(star);
    const hasHalfStar = star % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="text-yellow-500">
        {"★".repeat(fullStars)}
        {hasHalfStar && <span>★</span>}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };
  console.log("collection", collectionDetailes);

  return (
    <div className="container mx-auto mt-12 px-4 pt-20">
      {collectionDetailes &&
        collectionDetailes.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-2xl rounded-lg p-6 flex flex-col md:flex-row gap-6 mb-10 transition-transform transform hover:shadow-2xl hover:scale-105"
          >
            <div className="md:w-1/2 flex justify-center items-center relative">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full max-w-sm h-64 object-cover shadow-lg border border-gray-300 transition-transform transform hover:scale-110"
              />

              <span className="absolute top-4 left-4 bg-yellow-500 text-white font-bold px-3 py-1 text-sm rounded">
                ${product.price}
              </span>
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="font-medium">
                    <strong>Category:</strong> {product.type}
                  </li>
                  <li className="font-medium">
                    <strong>Brand:</strong> {product.brand}
                  </li>
                  <li className="font-medium">
                    <strong>Rating:</strong> {convertToStars(product.rating)}
                  </li>
                  <li className="font-medium">
                    <strong>Reviews:</strong> {product.reviews}
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => handleCart(product)}
                  className="bg-black text-white py-3 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-all duration-300 w-full"
                >
                  <FaShoppingCart className="text-white text-lg" />
                  Add to Cart
                </button>

                <button
                  onClick={handleBack}
                  className="bg-gray-800 text-white py-3 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-600 transition-all duration-300 w-full"
                >
                  <FaHome className="text-white text-lg" />
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        ))}

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Related Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-yellow-500 text-xs text-white font-bold px-2 py-1 rounded">
                    ${product.price}
                  </span>
                </div>
                <div className="p-4 text-center">
                  <h5 className="text-lg font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h5>
                  <p className="text-sm text-gray-500 mb-3">
                    {convertToStars(product.rating)}
                  </p>
                  <button
                    onClick={() => scroll(product._id)}
                    className="bg-blue-950 text-white text-sm font-semibold py-2 px-4 rounded  transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No related products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollectionD;

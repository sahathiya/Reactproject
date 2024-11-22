import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../axios/api";
import { toast } from "react-toastify";

function ProductD() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.get(`/admin/productbyId/${id}`);
        setProductDetails(response.data.products);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleBack = () => navigate("/products");

  const handleDelete = async () => {
    try {
      const res = await api.delete(`/admin/remove/${id}`);
      toast.success(res.data.message);
      navigate("/products");
    } catch (error) {
      toast.error("Failed to delete the product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-8">
      {productDetails ? (
        <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={productDetails.image}
                alt={productDetails.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-6 md:w-1/2 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {productDetails.name}
              </h2>
              <p className="text-gray-600 mb-4">{productDetails.description}</p>
              <p className="mb-2">
                <strong>Category:</strong> {productDetails.type}
              </p>
              <p className="mb-2">
                <strong>Price:</strong> ₹{productDetails.price}
              </p>
              <p className="mb-2">
                <strong>Brand:</strong> {productDetails.brand}
              </p>
              <p className="mb-2">
                <strong>Rating:</strong> {productDetails.rating}
              </p>
              <p className="mb-2">
                <strong>Reviews:</strong> {productDetails.reviews}
              </p>

              {/* Action Buttons */}
              <div className="flex mt-6 space-x-4">
                <button
                  className="px-4 py-2 bg-blue-950 text-white rounded-md shadow"
                  onClick={handleBack}
                >
                  Back to List
                </button>
                <button
                  className="px-4 py-2 bg-blue-950  text-white rounded-md shadow"
                  onClick={() => navigate(`/edit/${productDetails._id}`)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-blue-950 text-white rounded-md shadow"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Product not found</p>
      )}
    </div>
  );
}

export default ProductD;

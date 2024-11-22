import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";
import { toast } from "react-toastify";

function Add() {
  const initialvalue = {
    name: "",
    category: "",
    price: "",
    description: "",
    brand: "",
    qty: "",
    rating: "",
    reviews: "",
  };

  const [addproduct, setaddproduct] = useState(initialvalue);
  const [image, setimage] = useState(null);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      Object.keys(addproduct).forEach((key) => {
        formData.append(key, addproduct[key]);
      });
      const res = await api.post(`/admin/newproduct`, formData);

      toast.success(res.data.message);
      navigate("/products");
      setaddproduct(initialvalue);
      setimage(null);
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddproduct({ ...addproduct, [name]: value });
  };

  const handleimage = (e) => {
    setimage(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <form
        className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl"
        onSubmit={handlesubmit}
      >
        <h1 className="text-xl font-bold text-center text-purple-600 mb-4">
          Add New Product
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={addproduct.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={addproduct.category}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={addproduct.price}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Brand:
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={addproduct.brand}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="qty"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="qty"
                name="qty"
                value={addproduct.qty}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-3">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleimage}
                className="mt-1 block w-full text-sm text-gray-500 file:py-1 file:px-3 file:rounded file:border-0 file:bg-purple-50 file:text-blue-950 hover:file:bg-purple-100"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={addproduct.rating}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="reviews"
                className="block text-sm font-medium text-gray-700"
              >
                Reviews:
              </label>
              <input
                type="number"
                id="reviews"
                name="reviews"
                value={addproduct.reviews}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={addproduct.description}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-blue-950 text-white rounded-md shadow"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Add;

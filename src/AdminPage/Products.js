import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterproduct, setFilterProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/admin/products");
        const productList = response.data?.result || [];
        setProducts(productList);
        setFilterProduct(productList); // Initialize filtered products with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "All") {
      setFilterProduct(products); // Show all products
    } else {
      try {
        const response = await api.get(
          `/admin/productbyCategory/${selectedCategory}`
        );
        const categoryProducts = response.data?.products || [];
        setFilterProduct(categoryProducts); // Set filtered products
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Products List</h1>
          <button
            onClick={() => navigate("/add")}
            className="bg-blue-950 text-white px-4 py-2 rounded shadow"
          >
            Add New +
          </button>
        </div>

        {/* Dropdown for category selection */}
        <select
          className="mb-6 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-950 focus:outline-none"
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="py-3 px-6 text-left">Id</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterproduct.length > 0 ? (
                filterproduct.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-100">
                    <td className="py-3 px-6">{product._id}</td>
                    <td className="py-3 px-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </td>
                    <td className="py-3 px-6">{product.name}</td>
                    <td className="py-3 px-6">{product.category}</td>
                    <td className="py-3 px-6">₹{product.price}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() =>
                          navigate(`/productdetailes/${product._id}`)
                        }
                        className="bg-blue-950 text-white px-4 py-2 rounded shadow"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No Products Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;

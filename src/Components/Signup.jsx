import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";
import { toast } from "react-toastify";

function RegistrationForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    admin: false,
    block: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const validate = () => {
    let errors = {};

    // Username validation
    if (!inputs.username) {
      errors.username = "Username is required.";
    } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
      errors.username = "Username should be 3-16 characters and alphanumeric.";
    }

    // Email validation
    if (!inputs.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      errors.email = "Email address is invalid.";
    }

    // Password validation
    if (!inputs.password) {
      errors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(
        inputs.password
      )
    ) {
      errors.password =
        "Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    // Confirm Password validation
    if (!inputs.cpassword) {
      errors.cpassword = "Confirm password is required.";
    } else if (inputs.password !== inputs.cpassword) {
      errors.cpassword = "Passwords do not match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
console.log("inputs...",inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await api.post("/signup", inputs);
        console.log("response", response);
        toast.success(response.data.message);
        setInputs({ username: "", email: "", password: "", cpassword: "" });
        navigate("/login");
      } catch (error) {
        console.log(error);

        if (error.response && error.response.data) {
          toast.error(error.response.data.message || "An error occurred");
        } else {
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-8 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="w-full sm:w-96 bg-white shadow-lg p-6 rounded-lg border-2 border-blue-950">
        <h2 className="text-center text-2xl font-semibold text-blue-950 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.username && (
              <p className="text-red-600 text-sm">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="cpassword"
              value={inputs.cpassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.cpassword && (
              <p className="text-red-600 text-sm">{errors.cpassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;

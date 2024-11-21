import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyLogin } from "../useContext/Logincontext";
import "react-toastify/dist/ReactToastify.css";
import bgimage from "../images/good.gif";

function Login() {
  const { current, handleChange, handleSubmit, datas } = useContext(MyLogin);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  if (!current) {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex flex-col justify-center items-start p-8 md:w-1/2 bg-white">
          <div className="max-w-sm mx-auto w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome back!
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  value={datas.username}
                  placeholder="Enter your username"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={datas.password}
                    placeholder="Enter password"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    <i
                      className={`fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } text-gray-500`}
                    ></i>
                  </button>
                </div>
              </div>
              <button className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900">
                Log In
              </button>
            </form>
            <div className="mt-6 text-center">
              <Link
                className="w-full bg-blue-950 text-white py-3 rounded-lg flex items-center justify-center font-medium border no-underline"
                to="/"
              >
                back to home
              </Link>
            </div>
            <div className="mt-4 text-center">
              <p>
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex items-center justify-center md:w-1/2"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "700px",
          }}
        ></div>
      </div>
    );
  }

  return null;
}

export default Login;

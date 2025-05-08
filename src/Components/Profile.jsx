import React, { useContext } from "react";
import { MyLogin } from "../useContext/Logincontext";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import api from "../axios/api";
import { toast } from "react-toastify";
function Profile() {
  const { current,setCurrent } = useContext(MyLogin);
  const navigate = useNavigate();




  const handleLogout = async () => {
    await api.post("/logout");
    setCurrent(null);
    toast.success("You have been logged out.");
    navigate("/login");
  };
  if (!current) {
    navigate("/login");
    return null;
  }




  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-2xl backdrop-blur-lg text-center">
        <div className="w-32 h-32 mb-4 mx-auto rounded-full bg-blue-950 flex items-center justify-center text-white text-3xl">
          <FaUser />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-blue-950">
          {current.username}
        </h2>
        <p className="text-xl text-blue-950 mb-4">An active user</p>
        <p className="text-gray-700 mb-6">Email Address: {current.email}</p>

        <div className="flex flex-col space-y-4 mt-4">
          <button
            className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
            onClick={handleLogout}
          >
            Log out
          </button>
          <button
            className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

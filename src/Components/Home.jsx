import React from "react";
import { useNavigate } from "react-router-dom";
import bgimage from "../images/new.jpg";
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        className=" bg-cover bg-center   h-screen flex flex-col justify-center items-center text-center p-5"
      >
        <div className="flex flex-col items-end w-full h-full justify-center pr-10">
          {" "}
          <h1 className="text-4xl text-blue-950  leading-snug font-sans mb-8 animate-fadeInUp text-right">
            LOVE <br /> THE PLANET <br /> WE WALK ON
          </h1>
          <div className="flex gap-5 mt-5">
            <button
              className="bg-blue-950 text-white py-3 px-4 rounded transition-transform duration-200  hover:scale-105 shadow-lg"
              onClick={() => navigate("/men")}
            >
              SHOP MEN
            </button>
            <button
              className="bg-blue-950 text-white  py-3 px-4 rounded transition-transform duration-200  hover:scale-105 shadow-lg"
              onClick={() => navigate("/women")}
            >
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
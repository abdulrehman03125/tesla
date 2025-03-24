import React from "react";
import Homepage from "../assets/Homepage.png";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Homepage.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to Our Homepage
        </h1>
      </div>
    </div>
  );
};

export default Home;

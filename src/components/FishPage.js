import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const FishPage = () => {
  const navigate = useNavigate();

  const options = [
    { name: "Exclusive Benefits", path: "benefits" },
    { 
      name: "Nearest Hospital", 
      action: () => {
        const query = "nearest fish hospitals";
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, "_blank");
      } 
    },
    { 
      name: "Accessories Store", 
      action: () => {
        const query = "nearest fish accessories store";
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, "_blank");
      } 
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-8">Explore Fishes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Buy button explicitly */}
          <div
            className="flex flex-col items-center p-6 bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate("/animal/fishes/buy")}
          >
            <p className="text-lg font-medium text-gray-800">Buy Your Favorite Fish</p>
          </div>

          {/* Other options */}
          {options.map((option) => (
            <div
              key={option.name}
              className="flex flex-col items-center p-6 bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => option.action ? option.action() : navigate(`/animal/fishes/${option.path}`)}
            >
              <p className="text-lg font-medium text-gray-800">{option.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishPage;



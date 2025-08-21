import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const AnimalPage = () => {
  const { animal } = useParams();
  const navigate = useNavigate();

  const options = [
    { name: "Exclusive Benefits", path: "benefits" },
    { name: `Buy Your Favorite ${animal.charAt(0).toUpperCase() + animal.slice(1)}`, path: "buy" },
    { name: "Nearest Hospital", path: "hospital", action: () => {
        const query = `nearest ${animal} hospitals`;
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, "_blank");
      } },
    { name: "Accessories Store", path: "accessories", action: () => {
        const query = `nearest ${animal} accessories store`;
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, "_blank");
      } },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
        <h1 className="text-4xl font-bold">Explore {animal.charAt(0).toUpperCase() + animal.slice(1)}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div
            key="benefits"
            className="flex flex-col items-center p-6 bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/animal/${animal}/benefits`)}
          >
            <p className="text-lg font-medium text-gray-800">Exclusive Benefits</p>
          </div>
          {options.slice(1).map((option) => (
            <div
              key={option.path}
              className="flex flex-col items-center p-4 bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => option.action ? option.action() : navigate(`/animal/${animal}/${option.path}`)}
            >
              <p className="text-lg font-medium text-gray-800">{option.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalPage;
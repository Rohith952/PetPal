import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const HamsterPage = () => {
  const navigate = useNavigate();

  const options = [
    { name: "Exclusive Benefits", path: "benefits" },
    { name: "Buy Your Favorite Hamster", path: "buy" },
    { name: "Nearest Hospital", path: "hospital", action: () => {
        const query = "nearest hamster hospitals";
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, "_blank");
      } },
    { name: "Accessories Store", path: "accessories", action: () => {
        const query = "nearest hamster accessories store";
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, "_blank");
      } },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
        <h1 className="text-4xl font-bold">Explore Hamsters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div
            key="benefits"
            className="flex flex-col items-center p-6 bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/animal/hamsters/benefits`)}
          >
            <p className="text-lg font-medium text-gray-800">Exclusive Benefits</p>
          </div>
          {options.slice(1).map((option) => (
            <div
              key={option.path}
              className="flex flex-col items-center p-4 bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => option.action ? option.action() : navigate(`/animal/hamsters/${option.path}`)}
            >
              <p className="text-lg font-medium text-gray-800">{option.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HamsterPage;



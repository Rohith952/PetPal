import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// Fish images
import goldfish from "../assets/images/Goldfish.jpg";
import guppy from "../assets/images/Guppy.jpg";
import bettaFish from "../assets/images/Betta Fish.jpg";
import tetra from "../assets/images/Tetra.jpg";
import angelfish from "../assets/images/Angelfish.jpg";
import discus from "../assets/images/Discus.jpg";
import molly from "../assets/images/Molly.jpg";
import platy from "../assets/images/Platy.jpg";

const FishBuyPage = () => {
  const navigate = useNavigate();

  const fishBreeds = [
    { name: "Goldfish", image: goldfish, description: "Classic and hardy goldfish, perfect for beginners.", originalPrice: "₹800", discountedPrice: "₹640" },
    { name: "Guppy", image: guppy, description: "Colorful and active livebearer fish.", originalPrice: "₹500", discountedPrice: "₹400" },
    { name: "Betta Fish", image: bettaFish, description: "Stunning Siamese fighting fish with flowing fins.", originalPrice: "₹1,200", discountedPrice: "₹960" },
    { name: "Tetra", image: tetra, description: "Peaceful schooling fish that add movement and color.", originalPrice: "₹600", discountedPrice: "₹480" },
    { name: "Angelfish", image: angelfish, description: "Elegant and graceful fish with distinctive triangular shape.", originalPrice: "₹1,500", discountedPrice: "₹1,200" },
    { name: "Discus", image: discus, description: "King of freshwater fish, requires pristine water.", originalPrice: "₹3,000", discountedPrice: "₹2,400" },
    { name: "Molly", image: molly, description: "Peaceful livebearer fish, hardy for beginners.", originalPrice: "₹400", discountedPrice: "₹320" },
    { name: "Platy", image: platy, description: "Small, colorful, perfect for beginners.", originalPrice: "₹350", discountedPrice: "₹280" },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Buy Your Favorite Fish</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fishBreeds.map((item, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <h2 className="text-lg font-bold mb-2">Original Price: {item.originalPrice}</h2>
              <h2 className="text-lg font-bold mb-2 text-green-600">Discounted Price: {item.discountedPrice}</h2>
              <button
                onClick={() => navigate("/payment", { state: { item } })}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishBuyPage;



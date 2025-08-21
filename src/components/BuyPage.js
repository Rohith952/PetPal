import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import cat5 from "../assets/images/cat5.jpg";
import cat6 from "../assets/images/cat6.jpg";
import cat7 from "../assets/images/cat7.jpg";
import cat8 from "../assets/images/cat8.jpg";
import cat9 from "../assets/images/cat9.jpg";
import cat10 from "../assets/images/cat10.jpg";
import redEaredSlider from "../assets/images/Red-Eared Slider.jpg";
import yellowBelliedSlider from "../assets/images/Yellow-Bellied Slider.jpg";
import muskTurtle from "../assets/images/Musk-Turtle.jpg";
import mapTurtle from "../assets/images/Map Turtle.jpg";

const BuyPage = () => {
  const { animal } = useParams();
  const navigate = useNavigate();

  const animalsData = {
    cats: [
      { name: "Persian Cat", image: cat1, description: "Friendly and fluffy Persian cat.", originalPrice: "₹50,000", discountedPrice: "₹40,000" },
      { name: "Siamese Cat", image: cat2, description: "Elegant Siamese cat with blue eyes.", originalPrice: "₹45,000", discountedPrice: "₹36,000" },
      { name: "Maine Coon", image: cat3, description: "Large and gentle Maine Coon cat.", originalPrice: "₹60,000", discountedPrice: "₹50,000" },
      { name: "Bengal Cat", image: cat4, description: "Active and playful Bengal cat.", originalPrice: "₹55,000", discountedPrice: "₹46,000" },
      { name: "Ragdoll Cat", image: cat5, description: "Affectionate and calm Ragdoll cat.", originalPrice: "₹65,000", discountedPrice: "₹55,000" },
      { name: "British Shorthair", image: cat6, description: "Charming British Shorthair cat.", originalPrice: "₹40,000", discountedPrice: "₹32,000" },
      { name: "Abyssinian Cat", image: cat7, description: "Energetic and curious Abyssinian cat.", originalPrice: "₹38,000", discountedPrice: "₹30,000" },
      { name: "Sphynx Cat", image: cat8, description: "Unique and hairless Sphynx cat.", originalPrice: "₹70,000", discountedPrice: "₹60,000" },
      { name: "Scottish Fold", image: cat9, description: "Adorable Scottish Fold cat with folded ears.", originalPrice: "₹55,000", discountedPrice: "₹45,000" },
      { name: "Birman Cat", image: cat10, description: "Sacred and beautiful Birman cat.", originalPrice: "₹60,000", discountedPrice: "₹50,000" },
    ],
    // Add similar data for other animals like dogs, rabbits, etc.
    turtles: [
      { name: "Red-Eared Slider", image: redEaredSlider, description: "Popular aquatic turtle; beginner-friendly with proper UVB & filtration.", originalPrice: "₹2,500", discountedPrice: "₹2,000" },
      { name: "Yellow-Bellied Slider", image: yellowBelliedSlider, description: "Active basker; needs spacious tank and UVB lighting.", originalPrice: "₹2,800", discountedPrice: "₹2,240" },
      { name: "Musk Turtle", image: muskTurtle, description: "Compact species; prefers clean, well-filtered aquariums.", originalPrice: "₹3,500", discountedPrice: "₹2,800" },
      { name: "Map Turtle", image: mapTurtle, description: "Distinctive shell patterns; thrives with strong filtration.", originalPrice: "₹3,200", discountedPrice: "₹2,560" }
    ]
  };

  const animalData = animalsData[animal.toLowerCase()] || [];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Buy Your Favorite {animal.charAt(0).toUpperCase() + animal.slice(1)}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animalData.map((item, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-4"
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

export default BuyPage;

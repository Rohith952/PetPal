import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import africanGreyParrot from "../assets/images/African Grey Parrot.jpg";
import macaw from "../assets/images/Macaw.jpg";
import cockatiel from "../assets/images/Cockatiel.jpg";
import budgerigar from "../assets/images/Budgerigar.jpg";
import lovebird from "../assets/images/Lovebird.jpg";
import canary from "../assets/images/Canary.jpg";
import finch from "../assets/images/Finch.jpg";
import cockatoo from "../assets/images/Cockatoo.jpg";
import conure from "../assets/images/Conure.jpg";
import quakerParrot from "../assets/images/Quaker Parrot.jpg";

const BirdBuyPage = () => {
  const navigate = useNavigate();

  const birdBreeds = [
    { 
      name: "African Grey Parrot", 
      image: africanGreyParrot, 
      description: "Highly intelligent African Grey Parrot with exceptional talking ability. Known for their cognitive skills and affectionate nature.", 
      originalPrice: "₹40,000", 
      discountedPrice: "₹30,000" 
    },
    { 
      name: "Macaw", 
      image: macaw, 
      description: "Colorful and majestic Macaw with vibrant plumage. Social birds that form strong bonds with their owners.", 
      originalPrice: "₹55,000", 
      discountedPrice: "₹45,000" 
    },
    { 
      name: "Cockatiel", 
      image: cockatiel, 
      description: "Gentle and friendly Cockatiel, perfect for beginners. Known for their sweet whistling and gentle temperament.", 
      originalPrice: "₹8,000", 
      discountedPrice: "₹6,400" 
    },
    { 
      name: "Budgerigar (Budgie)", 
      image: budgerigar, 
      description: "Small and cheerful Budgie, excellent first bird. Playful, social, and easy to care for.", 
      originalPrice: "₹3,500", 
      discountedPrice: "₹2,800" 
    },
    { 
      name: "Lovebird", 
      image: lovebird, 
      description: "Affectionate Lovebird that bonds deeply with owners. Small size with big personality and beautiful colors.", 
      originalPrice: "₹6,000", 
      discountedPrice: "₹4,800" 
    },
    { 
      name: "Canary", 
      image: canary, 
      description: "Melodious Canary with beautiful singing voice. Perfect for those who enjoy bird songs and gentle companionship.", 
      originalPrice: "₹5,000", 
      discountedPrice: "₹4,000" 
    },
    { 
      name: "Finch", 
      image: finch, 
      description: "Delicate and beautiful Finch, great for aviaries. Peaceful birds that enjoy socializing with their own kind.", 
      originalPrice: "₹4,000", 
      discountedPrice: "₹3,200" 
    },
    { 
      name: "Cockatoo", 
      image: cockatoo, 
      description: "Playful and affectionate Cockatoo with distinctive crest. Known for their loving nature and entertaining antics.", 
      originalPrice: "₹35,000", 
      discountedPrice: "₹25,000" 
    },
    { 
      name: "Conure", 
      image: conure, 
      description: "Energetic and colorful Conure with playful personality. Great family birds that love attention and interaction.", 
      originalPrice: "₹12,000", 
      discountedPrice: "₹9,600" 
    },
    { 
      name: "Quaker Parrot", 
      image: quakerParrot, 
      description: "Intelligent Quaker Parrot with excellent talking ability. Compact size with big personality and strong bonding.", 
      originalPrice: "₹15,000", 
      discountedPrice: "₹12,000" 
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Buy Your Favorite Bird</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {birdBreeds.map((item, index) => (
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

export default BirdBuyPage;

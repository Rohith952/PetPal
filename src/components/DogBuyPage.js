import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import goldenRetriever from "../assets/images/golden-retriever.jpg";
import labrador from "../assets/images/labrador.jpg";
import germanShepherd from "../assets/images/german-shepherd.jpg";
import pomeranian from "../assets/images/pomeranian.jpg";
import pug from "../assets/images/pug.jpg";
import beagle from "../assets/images/beagle.jpg";
import rottweiler from "../assets/images/rottweiler.jpg";
import husky from "../assets/images/husky.jpg";
import bulldog from "../assets/images/bulldog.jpg";
import borderCollie from "../assets/images/border-collie.jpg";

const DogBuyPage = () => {
  const navigate = useNavigate();

  const dogBreeds = [
    { 
      name: "Golden Retriever", 
      image: goldenRetriever, 
      description: "Friendly, intelligent, and devoted Golden Retriever. Excellent family pet and highly trainable.", 
      originalPrice: "₹35,000", 
      discountedPrice: "₹26,000" 
    },
    { 
      name: "Labrador Retriever", 
      image: labrador, 
      description: "Outgoing, even-tempered, and intelligent Labrador. America's most popular dog breed.", 
      originalPrice: "₹30,000", 
      discountedPrice: "₹24,000" 
    },
    { 
      name: "German Shepherd", 
      image: germanShepherd, 
      description: "Intelligent, loyal, and courageous German Shepherd. Excellent protector and working dog.", 
      originalPrice: "₹40,000", 
      discountedPrice: "₹30,000" 
    },
    { 
      name: "Pomeranian", 
      image: pomeranian, 
      description: "Lively, bold, and inquisitive Pomeranian. Perfect for apartment living and excellent companion.", 
      originalPrice: "₹25,000", 
      discountedPrice: "₹20,000" 
    },
    { 
      name: "Pug", 
      image: pug, 
      description: "Charming, mischievous, and loving Pug. Excellent companion with a comical personality.", 
      originalPrice: "₹28,000", 
      discountedPrice: "₹22,400" 
    },
    { 
      name: "Beagle", 
      image: beagle, 
      description: "Friendly, curious, and merry Beagle. Great family pet and excellent hunting companion.", 
      originalPrice: "₹22,000", 
      discountedPrice: "₹17,600" 
    },
    { 
      name: "Rottweiler", 
      image: rottweiler, 
      description: "Loyal, confident, and courageous Rottweiler. Excellent guard dog and family protector.", 
      originalPrice: "₹45,000", 
      discountedPrice: "₹36,000" 
    },
    { 
      name: "Husky", 
      image: husky, 
      description: "Independent, energetic, and mischievous Husky. Excellent for active families and cold climates.", 
      originalPrice: "₹50,000", 
      discountedPrice: "₹40,000" 
    },
    { 
      name: "Bulldog", 
      image: bulldog, 
      description: "Gentle, friendly, and determined Bulldog. Excellent family pet despite intimidating appearance.", 
      originalPrice: "₹32,000", 
      discountedPrice: "₹23,000" 
    },
    { 
      name: "Border Collie", 
      image: borderCollie, 
      description: "Intelligent, energetic, and work-oriented Border Collie. Most intelligent dog breed.", 
      originalPrice: "₹38,000", 
      discountedPrice: "₹28,000" 
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Buy Your Favorite Dog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogBreeds.map((item, index) => (
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

export default DogBuyPage;

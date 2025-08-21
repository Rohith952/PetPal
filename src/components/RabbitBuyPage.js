import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import hollandLop from "../assets/images/Holland Lop.jpg";
import netherlandDwarf from "../assets/images/Netherland Dwarf.jpg";
import lionhead from "../assets/images/Lionhead.jpg";
import rex from "../assets/images/Rex.jpg";
import angora from "../assets/images/Angora.jpg";
import flemishGiant from "../assets/images/Flemish Giant.jpg";
import miniRex from "../assets/images/Mini Rex.jpg";
import englishLop from "../assets/images/English Lop.jpg";
import jerseyWooly from "../assets/images/Jersey Wooly.jpg";
import polish from "../assets/images/Polish.jpg";

const RabbitBuyPage = () => {
  const navigate = useNavigate();

  const rabbitBreeds = [
    { 
      name: "Holland Lop", 
      image: hollandLop, 
      description: "Adorable and friendly Holland Lop with floppy ears. Perfect family pet and excellent companion.", 
      originalPrice: "₹8,000", 
      discountedPrice: "₹6,400" 
    },
    { 
      name: "Netherland Dwarf", 
      image: netherlandDwarf, 
      description: "Tiny and cute Netherland Dwarf rabbit. One of the smallest rabbit breeds, perfect for small spaces.", 
      originalPrice: "₹7,500", 
      discountedPrice: "₹6,000" 
    },
    { 
      name: "Lionhead", 
      image: lionhead, 
      description: "Unique Lionhead rabbit with distinctive mane-like fur around the head. Gentle and affectionate nature.", 
      originalPrice: "₹9,000", 
      discountedPrice: "₹7,200" 
    },
    { 
      name: "Rex", 
      image: rex, 
      description: "Soft and velvety Rex rabbit with plush fur. Known for their calm temperament and beautiful coat.", 
      originalPrice: "₹8,500", 
      discountedPrice: "₹6,800" 
    },
    { 
      name: "Angora", 
      image: angora, 
      description: "Luxurious Angora rabbit with long, silky fur. Requires regular grooming but extremely soft and beautiful.", 
      originalPrice: "₹12,000", 
      discountedPrice: "₹9,600" 
    },
    { 
      name: "Flemish Giant", 
      image: flemishGiant, 
      description: "Gentle giant Flemish Giant rabbit. Large size but very docile and great with children.", 
      originalPrice: "₹15,000", 
      discountedPrice: "₹12,000" 
    },
    { 
      name: "Mini Rex", 
      image: miniRex, 
      description: "Compact Mini Rex with velvety fur and friendly personality. Perfect for apartment living.", 
      originalPrice: "₹7,000", 
      discountedPrice: "₹5,600" 
    },
    { 
      name: "English Lop", 
      image: englishLop, 
      description: "Elegant English Lop with extremely long ears. Calm and gentle, makes an excellent companion.", 
      originalPrice: "₹10,000", 
      discountedPrice: "₹8,000" 
    },
    { 
      name: "Jersey Wooly", 
      image: jerseyWooly, 
      description: "Small Jersey Wooly with wooly fur and sweet temperament. Great for families and first-time rabbit owners.", 
      originalPrice: "₹8,500", 
      discountedPrice: "₹6,800" 
    },
    { 
      name: "Polish", 
      image: polish, 
      description: "Tiny Polish rabbit with compact size and friendly nature. Perfect for small homes and gentle handling.", 
      originalPrice: "₹6,500", 
      discountedPrice: "₹5,200" 
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Buy Your Favorite Rabbit</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rabbitBreeds.map((item, index) => (
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

export default RabbitBuyPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// Import hamster images
import syrianHamster from "../assets/images/Syrian Hamster.jpg";
import dwarfHamster from "../assets/images/Dwarf Hamster.jpg";
import roborovskiHamster from "../assets/images/Roborovski Hamster.jpg";
import chineseHamster from "../assets/images/Chinese Hamster.jpg";
import campbellHamster from "../assets/images/Campbell Hamster.jpg";
import winterWhiteHamster from "../assets/images/Winter White Hamster.jpg";
import teddyBearHamster from "../assets/images/Teddy Bear Hamster.jpg";
import pandaHamster from "../assets/images/Panda Hamster.jpg";

const HamsterBuyPage = () => {
  const navigate = useNavigate();
  
  const hamsterBreeds = [
    {
      name: "Syrian Hamster",
      image: syrianHamster,
      description: "The largest and most popular hamster breed. Known for their gentle temperament and beautiful golden coat. Perfect for first-time hamster owners and great with children.",
      originalPrice: "₹1,200",
      discountedPrice: "₹960"
    },
    {
      name: "Dwarf Hamster",
      image: dwarfHamster,
      description: "Small and adorable dwarf hamsters that are very active and social. They love to run on wheels and explore their environment. Great for experienced owners.",
      originalPrice: "₹800",
      discountedPrice: "₹640"
    },
    {
      name: "Roborovski Hamster",
      image: roborovskiHamster,
      description: "The smallest hamster breed with incredible speed and energy. They are very active and love to dig and burrow. Perfect for owners who enjoy watching active pets.",
      originalPrice: "₹1,000",
      discountedPrice: "₹800"
    },
    {
      name: "Chinese Hamster",
      image: chineseHamster,
      description: "Unique hamster with a long tail and slender body. They are intelligent and can be trained to do simple tricks. Great for owners who want an interactive pet.",
      originalPrice: "₹900",
      discountedPrice: "₹720"
    },
    {
      name: "Campbell Hamster",
      image: campbellHamster,
      description: "Friendly and social dwarf hamsters that love company. They come in various colors and patterns. Perfect for families and great with gentle handling.",
      originalPrice: "₹750",
      discountedPrice: "₹600"
    },
    {
      name: "Winter White Hamster",
      image: winterWhiteHamster,
      description: "Beautiful dwarf hamsters that change color with seasons. They are very social and love to play. Great for owners who want an active and engaging pet.",
      originalPrice: "₹850",
      discountedPrice: "₹680"
    },
    {
      name: "Teddy Bear Hamster",
      image: teddyBearHamster,
      description: "Long-haired Syrian hamsters with a soft, fluffy coat that resembles a teddy bear. They are gentle and love to be held. Perfect for families with children.",
      originalPrice: "₹1,100",
      discountedPrice: "₹880"
    },
    {
      name: "Panda Hamster",
      image: pandaHamster,
      description: "Stunning Syrian hamsters with black and white coloring that resembles a panda. They have a sweet temperament and are very photogenic. Great for all ages.",
      originalPrice: "₹950",
      discountedPrice: "₹760"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Buy Your Favorite Hamster</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hamsterBreeds.map((item, index) => (
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

export default HamsterBuyPage;



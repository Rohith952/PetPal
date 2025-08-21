import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  const animals = [
    { name: "Cats", emoji: "😺" },
    { name: "Dogs", emoji: "🐶" },
    { name: "Rabbits", emoji: "🐰" },
    { name: "Birds", emoji: "🐦" },
    { name: "Hamsters", emoji: "🐹" },
    { name: "Turtles", emoji: "🐢" },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to PetPal!</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Choose your favorite to buy and explore the various pets.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {animals.map((animal) => (
            <div
              key={animal.name}
              className="flex flex-col items-center p-4 bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => {
                if (animal.name === "Dogs") {
                  navigate("/animal/dogs");
                } else if (animal.name === "Birds") {
                  navigate("/animal/birds");
                } else if (animal.name === "Hamsters") {
                  navigate("/animal/hamsters");
                } else {
                  navigate(`/animal/${animal.name.toLowerCase()}`);
                }
              }}
            >
              <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-6xl">
                {animal.emoji}
              </div>
              <p className="mt-3 text-lg font-medium text-gray-800">
                {animal.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="text-center">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.instagram.com/fake_petpal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/fake_petpal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/fake_petpal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
          </div>
          <p className="mt-4">&copy; 2025 Rohith Mangalaharathi</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

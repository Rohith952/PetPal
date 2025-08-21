import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

// Import fish images
import goldfish from "../assets/images/Goldfish.jpg";
import guppy from "../assets/images/Guppy.jpg";
import bettaFish from "../assets/images/Betta Fish.jpg";
import tetra from "../assets/images/Tetra.jpg";
import angelfish from "../assets/images/Angelfish.jpg";
import discus from "../assets/images/Discus.jpg";
import molly from "../assets/images/Molly.jpg";
import platy from "../assets/images/Platy.jpg";

// Import rabbit images
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

// Import cat images (generic breed representations)
import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import cat5 from "../assets/images/cat5.jpg";
import cat6 from "../assets/images/cat6.jpg";
import cat7 from "../assets/images/cat7.jpg";
import cat8 from "../assets/images/cat8.jpg";

// Import dog images
import goldenRetriever from "../assets/images/golden-retriever.jpg";
import labrador from "../assets/images/labrador.jpg";
import germanShepherd from "../assets/images/german-shepherd.jpg";
import pomeranian from "../assets/images/pomeranian.jpg";
import pug from "../assets/images/pug.jpg";
import beagle from "../assets/images/beagle.jpg";
import rottweiler from "../assets/images/rottweiler.jpg";
import husky from "../assets/images/husky.jpg";

// Import bird images
import budgerigar from "../assets/images/Budgerigar.jpg";
import cockatiel from "../assets/images/Cockatiel.jpg";
import lovebird from "../assets/images/Lovebird.jpg";
import canary from "../assets/images/Canary.jpg";
import macaw from "../assets/images/Macaw.jpg";
import africanGreyParrot from "../assets/images/African Grey Parrot.jpg";
import cockatoo from "../assets/images/Cockatoo.jpg";
import quakerParrot from "../assets/images/Quaker Parrot.jpg";

// Import turtle images
import redEaredSlider from "../assets/images/Red-Eared Slider.jpg";
import yellowBelliedSlider from "../assets/images/Yellow-Bellied Slider.jpg";
import muskTurtle from "../assets/images/Musk-Turtle.jpg";
import mapTurtle from "../assets/images/Map Turtle.jpg";

// Import hamster images
import syrianHamster from "../assets/images/Syrian Hamster.jpg";
import dwarfHamster from "../assets/images/Dwarf Hamster.jpg";
import roborovskiHamster from "../assets/images/Roborovski Hamster.jpg";
import chineseHamster from "../assets/images/Chinese Hamster.jpg";
import campbellHamster from "../assets/images/Campbell Hamster.jpg";
import winterWhiteHamster from "../assets/images/Winter White Hamster.jpg";
import teddyBearHamster from "../assets/images/Teddy Bear Hamster.jpg";
import pandaHamster from "../assets/images/Panda Hamster.jpg";

const BenefitsPage = () => {
  const { animal } = useParams();
  const [selectedPet, setSelectedPet] = useState("");

  // Comprehensive pricing for cats, dogs, birds, fishes, and hamsters
  const animalPricing = {
    cats: {
      "Persian": { original: 50000, discounted: 40000, savings: 10000, image: cat1 },
      "Maine Coon": { original: 60000, discounted: 50000, savings: 10000, image: cat2 },
      "Siamese": { original: 45000, discounted: 35000, savings: 10000, image: cat3 },
      "British Shorthair": { original: 40000, discounted: 30000, savings: 10000, image: cat4 },
      "Ragdoll": { original: 65000, discounted: 55000, savings: 10000, image: cat5 },
      "Bengal": { original: 55000, discounted: 45000, savings: 10000, image: cat6 },
      "Sphynx": { original: 70000, discounted: 60000, savings: 10000, image: cat7 },
      "Abyssinian": { original: 38000, discounted: 28000, savings: 10000, image: cat8 }
    },
    dogs: {
      "Golden Retriever": { original: 35000, discounted: 26000, savings: 9000, image: goldenRetriever },
      "Labrador": { original: 30000, discounted: 24000, savings: 6000, image: labrador },
      "German Shepherd": { original: 40000, discounted: 30000, savings: 10000, image: germanShepherd },
      "Pomeranian": { original: 25000, discounted: 20000, savings: 5000, image: pomeranian },
      "Pug": { original: 28000, discounted: 22400, savings: 5600, image: pug },
      "Beagle": { original: 22000, discounted: 17600, savings: 4400, image: beagle },
      "Rottweiler": { original: 45000, discounted: 36000, savings: 9000, image: rottweiler },
      "Husky": { original: 50000, discounted: 40000, savings: 10000, image: husky }
    },
    birds: {
      "Budgerigar": { original: 3000, discounted: 2400, savings: 600, image: budgerigar },
      "Cockatiel": { original: 8000, discounted: 6400, savings: 1600, image: cockatiel },
      "Lovebird": { original: 5000, discounted: 4000, savings: 1000, image: lovebird },
      "Parakeet": { original: 4000, discounted: 3200, savings: 800, image: quakerParrot },
      "Canary": { original: 6000, discounted: 4800, savings: 1200, image: canary },
      "Macaw": { original: 55000, discounted: 45000, savings: 10000, image: macaw },
      "African Grey": { original: 40000, discounted: 30000, savings: 10000, image: africanGreyParrot },
      "Cockatoo": { original: 35000, discounted: 25000, savings: 10000, image: cockatoo }
    },
    fishes: {
      "Goldfish": { original: 800, discounted: 640, savings: 160, image: goldfish },
      "Guppy": { original: 500, discounted: 400, savings: 100, image: guppy },
      "Betta Fish": { original: 1200, discounted: 960, savings: 240, image: bettaFish },
      "Tetra": { original: 600, discounted: 480, savings: 120, image: tetra },
      "Angelfish": { original: 1500, discounted: 1200, savings: 300, image: angelfish },
      "Discus": { original: 3000, discounted: 2400, savings: 600, image: discus },
      "Molly": { original: 400, discounted: 320, savings: 80, image: molly },
      "Platy": { original: 350, discounted: 280, savings: 70, image: platy }
    },
    hamsters: {
      "Syrian Hamster": { original: 1200, discounted: 960, savings: 240, image: syrianHamster },
      "Dwarf Hamster": { original: 800, discounted: 640, savings: 160, image: dwarfHamster },
      "Roborovski Hamster": { original: 1000, discounted: 800, savings: 200, image: roborovskiHamster },
      "Chinese Hamster": { original: 900, discounted: 720, savings: 180, image: chineseHamster },
      "Campbell Hamster": { original: 750, discounted: 600, savings: 150, image: campbellHamster },
      "Winter White Hamster": { original: 850, discounted: 680, savings: 170, image: winterWhiteHamster },
      "Teddy Bear Hamster": { original: 1100, discounted: 880, savings: 220, image: teddyBearHamster },
      "Panda Hamster": { original: 950, discounted: 760, savings: 190, image: pandaHamster }
    },
    rabbits: {
      "Holland Lop": { original: 8000, discounted: 6400, savings: 1600, image: hollandLop },
      "Netherland Dwarf": { original: 7500, discounted: 6000, savings: 1500, image: netherlandDwarf },
      "Lionhead": { original: 9000, discounted: 7200, savings: 1800, image: lionhead },
      "Rex": { original: 8500, discounted: 6800, savings: 1700, image: rex },
      "Angora": { original: 12000, discounted: 9600, savings: 2400, image: angora },
      "Flemish Giant": { original: 15000, discounted: 12000, savings: 3000, image: flemishGiant },
      "Mini Rex": { original: 7000, discounted: 5600, savings: 1400, image: miniRex },
      "English Lop": { original: 10000, discounted: 8000, savings: 2000, image: englishLop },
      "Jersey Wooly": { original: 8500, discounted: 6800, savings: 1700, image: jerseyWooly },
      "Polish": { original: 6500, discounted: 5200, savings: 1300, image: polish }
    },
    turtles: {
      "Red-Eared Slider": { original: 2500, discounted: 2000, savings: 500, image: redEaredSlider },
      "Yellow-Bellied Slider": { original: 2800, discounted: 2240, savings: 560, image: yellowBelliedSlider },
      "Musk Turtle": { original: 3500, discounted: 2800, savings: 700, image: muskTurtle },
      "Map Turtle": { original: 3200, discounted: 2560, savings: 640, image: mapTurtle }
    }
  };

  // Partner hospitals for cats, dogs, birds, fishes, and hamsters - UPDATED TO HYDERABAD
  const partnerHospitals = {
    cats: [
      {
        name: "Paws & Care Veterinary Hospital",
        location: "15th Cross, Banjara Hills, Hyderabad - 500034",
        phone: "+91 80 2345 6789",
        services: ["General Checkup", "Vaccinations", "Emergency Care", "Surgery"],
        rating: "4.8/5"
      },
      {
        name: "PetCare Animal Medical Center",
        location: "100 Feet Road, Jubilee Hills, Hyderabad - 500033",
        phone: "+91 80 2987 6543",
        services: ["Specialized Care", "Dental Care", "Diagnostic Services", "24/7 Emergency"],
        rating: "4.9/5"
      }
    ],
    dogs: [
      {
        name: "Canine Care Veterinary Clinic",
        location: "MG Road, Gachibowli, Hyderabad - 500032",
        phone: "+91 80 1234 5678",
        services: ["Vaccinations", "Training Support", "Emergency Care", "Surgery"],
        rating: "4.7/5"
      },
      {
        name: "Doggy Wellness Center",
        location: "Jayanagar, Madhapur, Hyderabad - 500081",
        phone: "+91 80 8765 4321",
        services: ["Behavioral Therapy", "Nutrition Counseling", "24/7 Emergency", "Grooming"],
        rating: "4.8/5"
      }
    ],
    birds: [
      {
        name: "Avian Care Specialists",
        location: "Whitefield, HITEC City, Hyderabad - 500081",
        phone: "+91 80 7777 8888",
        services: ["Bird Health Check", "Wing Clipping", "Emergency Care", "Behavioral Advice"],
        rating: "4.5/5"
      },
      {
        name: "Feathered Friends Hospital",
        location: "Electronic City, Kondapur, Hyderabad - 500084",
        phone: "+91 80 9999 0000",
        services: ["Specialized Avian Care", "Nutrition Counseling", "24/7 Emergency", "Training Support"],
        rating: "4.6/5"
      }
    ],
    fishes: [
      {
        name: "Aquatic Care Center",
        location: "Lakdi-ka-pul, Secunderabad, Hyderabad - 500003",
        phone: "+91 80 5555 6666",
        services: ["Water Quality Testing", "Fish Health Check", "Disease Treatment", "Tank Maintenance"],
        rating: "4.4/5"
      },
      {
        name: "Fish & Marine Hospital",
        location: "Begumpet, Hyderabad - 500016",
        phone: "+91 80 4444 3333",
        services: ["Aquarium Setup", "Fish Nutrition", "Emergency Care", "Breeding Support"],
        rating: "4.3/5"
      }
    ],
    hamsters: [
      {
        name: "Small Pet Care Clinic",
        location: "Kukatpally, Hyderabad - 500072",
        phone: "+91 80 3333 2222",
        services: ["Hamster Health Check", "Dental Care", "Emergency Treatment", "Nutrition Advice"],
        rating: "4.2/5"
      },
      {
        name: "Rodent Wellness Center",
        location: "Dilsukhnagar, Hyderabad - 500060",
        phone: "+91 80 2222 1111",
        services: ["General Checkup", "Disease Prevention", "24/7 Emergency", "Behavioral Support"],
        rating: "4.1/5"
      }
    ],
    rabbits: [
      {
        name: "Bunny Care Veterinary Center",
        location: "Himayatnagar, Hyderabad - 500029",
        phone: "+91 80 1212 3434",
        services: ["General Checkup", "Vaccinations", "Dental & Fur Care", "Emergency Treatment"],
        rating: "4.6/5"
      },
      {
        name: "Exotic & Small Pet Hospital",
        location: "Madhapur, Hyderabad - 500081",
        phone: "+91 80 5656 7878",
        services: ["Specialized Small Mammal Care", "Nutrition Counseling", "24/7 Emergency", "Surgery"],
        rating: "4.7/5"
      }
    ],
    turtles: [
      {
        name: "Reptile & Aquatic Care Center",
        location: "Kothapet, Hyderabad - 500035",
        phone: "+91 80 4545 6767",
        services: ["Aquatic Turtle Checkup", "Shell & Skin Care", "Water Quality Diagnostics", "Emergency Care"],
        rating: "4.5/5"
      },
      {
        name: "Exotics Veterinary Hospital",
        location: "Banjara Hills, Hyderabad - 500034",
        phone: "+91 80 9898 1212",
        services: ["Exotic Pet Specialist", "Nutrition & UVB Guidance", "24/7 Emergency", "Surgery & Recovery"],
        rating: "4.6/5"
      }
    ]
  };

  // Free accessories for different animals
  const freeAccessories = {
    cats: [
      {
        category: "Premium Cat Food",
        items: ["Royal Canin Kitten Food (2kg/month)", "Whiskas Wet Food (24 pouches/month)", "Hills Science Diet (1.5kg/month)"],
        value: "₹3,200/month"
      },
      {
        category: "Essential Supplies",
        items: ["Cat Litter & Litter Box", "Grooming Kit", "Scratching Posts", "Interactive Toys"],
        value: "₹1,800/month"
      },
      {
        category: "Health & Wellness",
        items: ["Vitamins & Supplements", "Flea & Tick Treatment", "Dental Care Products", "Hairball Control"],
        value: "₹1,500/month"
      },
      {
        category: "Comfort & Safety",
        items: ["Cozy Cat Bed", "Travel Carrier", "ID Tags", "Safety Collar"],
        value: "₹2,000/month"
      }
    ],
    dogs: [
      {
        category: "Premium Dog Food",
        items: ["Pedigree Adult Food (3kg/month)", "Royal Canin Puppy Food (2kg/month)", "Hills Science Diet (2.5kg/month)"],
        value: "₹4,500/month"
      },
      {
        category: "Essential Supplies",
        items: ["Leash & Collar", "Grooming Kit", "Chew Toys", "Training Treats"],
        value: "₹2,500/month"
      },
      {
        category: "Health & Wellness",
        items: ["Vitamins & Supplements", "Flea & Tick Treatment", "Dental Care", "Joint Supplements"],
        value: "₹2,000/month"
      },
      {
        category: "Comfort & Safety",
        items: ["Comfortable Dog Bed", "Travel Crate", "ID Tags", "Safety Harness"],
        value: "₹3,000/month"
      }
    ],
    birds: [
      {
        category: "Premium Bird Food",
        items: ["Seed Mix (1kg/month)", "Fresh Fruits", "Pellets (500g/month)", "Nutritious Treats"],
        value: "₹800/month"
      },
      {
        category: "Essential Supplies",
        items: ["Spacious Cage", "Natural Perches", "Interactive Toys", "Food & Water Dishes"],
        value: "₹600/month"
      },
      {
        category: "Health & Wellness",
        items: ["Vitamins", "Mineral Blocks", "Grooming Tools", "Health Supplements"],
        value: "₹400/month"
      },
      {
        category: "Training & Enrichment",
        items: ["Training Perches", "Foraging Toys", "Mirror & Bells", "Climbing Structures"],
        value: "₹500/month"
      }
    ],
    fishes: [
      {
        category: "Premium Fish Food",
        items: ["Tropical Fish Flakes (100g/month)", "Live Food (Bloodworms)", "Frozen Food (Brine Shrimp)", "Vegetable Pellets"],
        value: "₹300/month"
      },
      {
        category: "Aquarium Equipment",
        items: ["Filter System", "Heater", "Air Pump", "LED Lighting"],
        value: "₹200/month"
      },
      {
        category: "Tank Accessories",
        items: ["Gravel & Substrate", "Live Plants", "Decorations", "Cleaning Tools"],
        value: "₹150/month"
      },
      {
        category: "Water Care",
        items: ["Water Conditioner", "Test Kits", "Algae Control", "Medication"],
        value: "₹100/month"
      }
    ],
    hamsters: [
      {
        category: "Premium Hamster Food",
        items: ["Seed Mix (500g/month)", "Fresh Vegetables", "Protein Pellets", "Treats & Snacks"],
        value: "₹250/month"
      },
      {
        category: "Habitat Essentials",
        items: ["Spacious Cage", "Bedding Material", "Hideouts", "Exercise Wheel"],
        value: "₹180/month"
      },
      {
        category: "Health & Wellness",
        items: ["Vitamins", "Dental Chews", "Grooming Tools", "Health Supplements"],
        value: "₹120/month"
      },
      {
        category: "Enrichment Items",
        items: ["Tunnels & Tubes", "Chew Toys", "Climbing Structures", "Foraging Toys"],
        value: "₹100/month"
      }
    ],
    rabbits: [
      {
        category: "Premium Rabbit Food",
        items: ["Timothy Hay (2kg/month)", "Pellets (1kg/month)", "Fresh Greens", "Healthy Treats"],
        value: "₹1,200/month"
      },
      {
        category: "Habitat Essentials",
        items: ["Spacious Hutch/Cage", "Absorbent Bedding", "Litter Box", "Water Bottle & Bowl"],
        value: "₹900/month"
      },
      {
        category: "Health & Wellness",
        items: ["Vitamins & Probiotics", "Flea & Mite Control", "Dental Care Items", "Grooming Tools"],
        value: "₹600/month"
      },
      {
        category: "Enrichment & Grooming",
        items: ["Chew Toys", "Tunnels", "Exercise Pen", "Brush & Nail Clippers"],
        value: "₹400/month"
      }
    ],
    turtles: [
      {
        category: "Premium Turtle Diet",
        items: ["Floating Pellets (500g/month)", "Dried Shrimps", "Calcium Blocks", "Leafy Greens"],
        value: "₹400/month"
      },
      {
        category: "Aquarium Essentials",
        items: ["Power Filter", "Heater (if needed)", "UVB Lighting", "Basking Platform"],
        value: "₹1,000/month"
      },
      {
        category: "Water Care",
        items: ["Water Conditioner", "Test Kits", "Algae Control", "Cleaning Tools"],
        value: "₹300/month"
      },
      {
        category: "Enrichment & Safety",
        items: ["Floating Logs", "Caves/Hideouts", "Thermometer & Hygrometer", "Secure Tank Lid"],
        value: "₹250/month"
      }
    ]
  };

  // 24/7 services for all animals
  const services247 = {
    cats: [
      {
        category: "Medical Services",
        services: ["Emergency Veterinary Care", "24/7 Helpline Support", "Remote Health Consultations", "Emergency Medicine Delivery"]
      },
      {
        category: "General Support",
        services: ["Cat Behavior Consultation", "Nutritional Guidance", "Grooming Tips & Support", "Training Assistance"]
      }
    ],
    dogs: [
      {
        category: "Medical Services",
        services: ["Emergency Veterinary Care", "24/7 Helpline Support", "Remote Health Consultations", "Emergency Medicine Delivery"]
      },
      {
        category: "General Support",
        services: ["Dog Training Consultation", "Behavioral Therapy", "Nutritional Guidance", "Grooming Support"]
      }
    ],
    birds: [
      {
        category: "Medical Services",
        services: ["Emergency Avian Care", "24/7 Helpline Support", "Remote Health Consultations", "Emergency Medicine Delivery"]
      },
      {
        category: "General Support",
        services: ["Bird Care Consultation", "Training Support", "Nutritional Guidance", "Behavioral Advice"]
      }
    ],
    fishes: [
      {
        category: "Aquatic Care Services",
        services: ["Emergency Fish Care", "24/7 Water Quality Support", "Remote Tank Consultations", "Emergency Medicine Delivery"]
      },
      {
        category: "General Support",
        services: ["Aquarium Setup Guidance", "Fish Care Tips", "Nutritional Advice", "Breeding Support"]
      }
    ],
    hamsters: [
      {
        category: "Small Pet Care Services",
        services: ["Emergency Hamster Care", "24/7 Helpline Support", "Remote Health Consultations", "Emergency Medicine Delivery"]
      },
      {
        category: "General Support",
        services: ["Hamster Care Tips", "Habitat Setup Guidance", "Nutritional Advice", "Behavioral Support"]
      }
    ],
    rabbits: [
      {
        category: "Medical Services",
        services: ["Emergency Veterinary Care", "24/7 Helpline Support", "Remote Health Consultations", "Emergency Medicine Delivery"]
      },
      {
        category: "General Support",
        services: ["Rabbit Diet Guidance", "Grooming Support", "Litter Training Tips", "Behavioral Advice"]
      }
    ],
    turtles: [
      {
        category: "Medical Services",
        services: ["Emergency Exotic Care", "24/7 Helpline Support", "Remote Water Setup Consultations", "Emergency Medicine Delivery"]
      },
      {
        category: "General Support",
        services: ["Tank Setup Guidance", "UVB & Heating Advice", "Diet & Nutrition Planning", "Shell Health Monitoring"]
      }
    ]
  };

  // Get current animal data
  const currentAnimalType = animal.toLowerCase();
  const currentHospitals = useMemo(() => partnerHospitals[currentAnimalType] || [], [currentAnimalType, partnerHospitals]);
  const currentAccessories = useMemo(() => freeAccessories[currentAnimalType] || [], [currentAnimalType, freeAccessories]);
  const currentServices = useMemo(() => services247[currentAnimalType] || [], [currentAnimalType, services247]);

  // Set default selected pet for the animal type - using useMemo to avoid dependency issues
  const defaultPet = useMemo(() => {
    const pricing = animalPricing[currentAnimalType] || {};
    if (pricing && Object.keys(pricing).length > 0) {
      return Object.keys(pricing)[0];
    }
    return null;
  }, [currentAnimalType, animalPricing]);

  // Set selected pet when defaultPet changes
  useEffect(() => {
    if (defaultPet && defaultPet !== selectedPet) {
      setSelectedPet(defaultPet);
    }
  }, [defaultPet, selectedPet]);

  const currentPet = animalPricing[currentAnimalType]?.[selectedPet] || {};

  // Calculate total accessories value
  const calculateAccessoriesValue = () => {
    if (!currentAccessories.length) return 0;
    return currentAccessories.reduce((total, category) => {
      const value = parseInt(category.value.match(/\d+/)[0]);
      return total + value;
    }, 0) * 4; // 4 months
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🎉 Exclusive Benefits for {animal.charAt(0).toUpperCase() + animal.slice(1)} Purchase
        </h1>

        {/* Pet Selection */}
        {Object.keys(animalPricing[currentAnimalType] || {}).length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Choose Your {animal.charAt(0).toUpperCase() + animal.slice(1)} Breed</h2>
            
            {/* Visual Breed Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.keys(animalPricing[currentAnimalType] || {}).map((pet) => {
                const petData = animalPricing[currentAnimalType]?.[pet];
                const isSelected = selectedPet === pet;
                return (
                  <div
                    key={pet}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      isSelected 
                        ? 'border-blue-500 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPet(pet)}
                  >
                    {/* Pet Image */}
                    {petData.image && (
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={petData.image}
                          alt={pet}
                          className="w-full h-full object-cover"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="text-sm">✓</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Pet Info */}
                    <div className="p-3 bg-gray-50">
                      <h3 className="font-semibold text-sm text-gray-800 mb-1 text-center">{pet}</h3>
                      <div className="text-center">
                        <p className="text-xs text-red-600 line-through">₹{petData.original?.toLocaleString()}</p>
                        <p className="text-sm font-bold text-green-600">₹{petData.discounted?.toLocaleString()}</p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                          Save ₹{petData.savings?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Pet Summary */}
            {selectedPet && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {animalPricing[currentAnimalType]?.[selectedPet]?.image && (
                      <img
                        src={animalPricing[currentAnimalType]?.[selectedPet]?.image}
                        alt={selectedPet}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-blue-800">{selectedPet}</h3>
                      <p className="text-sm text-gray-600">Selected for benefits calculation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">You Save</p>
                    <p className="text-xl font-bold text-green-600">₹{animalPricing[currentAnimalType]?.[selectedPet]?.savings?.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pricing Comparison */}
        {Object.keys(animalPricing[currentAnimalType] || {}).length > 0 && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              💰 Incredible Price Savings
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Original Price</h3>
                <p className="text-3xl font-bold text-red-600 line-through">₹{currentPet.original?.toLocaleString() || "N/A"}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Our Price</h3>
                <p className="text-3xl font-bold text-green-600">₹{currentPet.discounted?.toLocaleString() || "N/A"}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">You Save</h3>
                <p className="text-3xl font-bold text-blue-600">₹{currentPet.savings?.toLocaleString() || "N/A"}</p>
              </div>
            </div>
            {currentPet.savings && (
              <div className="text-center mt-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  🎯 {Math.round((currentPet.savings / currentPet.original) * 100)}% OFF
                </span>
              </div>
            )}
          </div>
        )}

        {/* Partner Hospitals */}
        {currentHospitals.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
              🏥 Free Medical Services at Partner Hospitals in Hyderabad
            </h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              Enjoy <strong>4 months of FREE medical services</strong> including checkups, vaccinations, and emergency care
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {currentHospitals.map((hospital, index) => (
                <div key={index} className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{hospital.name}</h3>
                  <p className="text-gray-600 mb-2">📍 {hospital.location}</p>
                  <p className="text-gray-600 mb-3">📞 {hospital.phone}</p>
                  <div className="mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      ⭐ {hospital.rating}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Services Included:</h4>
                  <ul className="space-y-1">
                    {hospital.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Free Accessories */}
        {currentAccessories.length > 0 && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
              🎁 FREE {animal.charAt(0).toUpperCase() + animal.slice(1)} Accessories for 4 Months
            </h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              Get <strong>₹{calculateAccessoriesValue().toLocaleString()} worth of premium accessories</strong> absolutely FREE for the first 4 months
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {currentAccessories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">{category.category}</h3>
                  <p className="text-sm text-gray-500 mb-3">Value: {category.value}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
                        <span className="text-purple-500 mr-2">🎯</span>
                        {item}
              </li>
            ))}
          </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Free Delivery */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
            🚚 FREE Home Delivery
          </h2>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Your {animal} will be delivered to your doorstep at <strong>ZERO COST</strong>
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <p className="text-4xl font-bold text-green-600 mb-2">₹0</p>
              <p className="text-gray-600">Delivery Charges</p>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-lg text-gray-700">✓ Safe & Comfortable Transportation</p>
              <p className="text-lg text-gray-700">✓ Professional Pet Handlers</p>
              <p className="text-lg text-gray-700">✓ Climate-Controlled Vehicle</p>
              <p className="text-lg text-gray-700">✓ Insurance Coverage During Transit</p>
            </div>
          </div>
        </div>

        {/* 24/7 Services */}
        {currentServices.length > 0 && (
          <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
              🕐 24/7 Round-the-Clock Services
            </h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              We're here for you and your {animal} <strong>24 hours a day, 7 days a week</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {currentServices.map((serviceCategory, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">{serviceCategory.category}</h3>
                  <ul className="space-y-3">
                    {serviceCategory.services.map((service, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
                        <span className="text-indigo-500 mr-3 text-xl">🔄</span>
                        {service}
              </li>
            ))}
          </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <div className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full inline-block">
                <span className="text-xl font-bold">📞 24/7 Helpline: +91 98765 43210</span>
              </div>
            </div>
          </div>
        )}

        {/* Total Value Summary */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            💎 Total Value of Your Benefits
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600">{animal.charAt(0).toUpperCase() + animal.slice(1)} Price Savings</p>
              <p className="text-xl font-bold text-green-600">₹{currentPet.savings?.toLocaleString() || "0"}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600">Free Medical Services</p>
              <p className="text-xl font-bold text-blue-600">₹12,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600">Free Accessories</p>
              <p className="text-xl font-bold text-purple-600">₹{calculateAccessoriesValue().toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600">Free Delivery</p>
              <p className="text-xl font-bold text-orange-600">₹2,500</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <p className="text-2xl font-bold text-gray-800 mb-2">Total Benefits Value</p>
            <p className="text-4xl font-bold text-green-600">
              ₹{((currentPet.savings || 0) + 12000 + calculateAccessoriesValue() + 2500).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
            🐾 Adopt Your Perfect {animal.charAt(0).toUpperCase() + animal.slice(1)} Today!
          </button>
          <p className="text-gray-600 mt-4">
            Limited time offer! Don't miss out on these incredible benefits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;

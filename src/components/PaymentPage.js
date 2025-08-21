import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const purchasedItem = location.state?.item;

  console.log("Purchased Item:", purchasedItem); // Debug log

  // Function to get detailed cat breed descriptions
  const getCatBreedDescription = (catName) => {
    const catDescriptions = {
      "Persian": {
        breed: "Persian Cat",
        description: "The Persian cat is one of the oldest and most popular cat breeds, known for its luxurious long coat and sweet, gentle personality. These cats have a calm, quiet demeanor and make excellent indoor companions.",
        personality: "Calm, gentle, affectionate, and quiet. Persians are perfect for quiet households and enjoy peaceful environments.",
        care: "Requires daily grooming due to long fur. Regular brushing prevents matting and keeps their coat healthy and beautiful.",
        lifespan: "12-16 years",
        size: "Medium to large",
        temperament: "Docile and loving"
      },
      "Maine Coon": {
        breed: "Maine Coon Cat",
        description: "The Maine Coon is America's native longhaired cat, known for its impressive size, intelligence, and gentle giant personality. These cats are excellent hunters and family companions.",
        personality: "Intelligent, playful, and affectionate. Maine Coons are known as 'gentle giants' and get along well with children and other pets.",
        care: "Weekly brushing is sufficient. They enjoy interactive play and mental stimulation. Regular exercise helps maintain their health.",
        lifespan: "12-15 years",
        size: "Large",
        temperament: "Friendly and outgoing"
      },
      "Siamese": {
        breed: "Siamese Cat",
        description: "The Siamese cat is famous for its striking blue eyes, distinctive color points, and vocal personality. These cats are highly intelligent and form strong bonds with their human families.",
        personality: "Vocal, intelligent, and social. Siamese cats love attention and will follow their owners around the house.",
        care: "Minimal grooming needed due to short coat. They require lots of mental stimulation and social interaction.",
        lifespan: "15-20 years",
        size: "Medium",
        temperament: "Active and talkative"
      },
      "British Shorthair": {
        breed: "British Shorthair Cat",
        description: "The British Shorthair is a sturdy, round-faced cat with a dense coat and calm temperament. These cats are independent yet affectionate, making them perfect for busy households.",
        personality: "Calm, independent, and loyal. British Shorthairs are not demanding and enjoy their own space while still being affectionate.",
        care: "Weekly brushing is adequate. They are low-maintenance cats that adapt well to various living situations.",
        lifespan: "14-20 years",
        size: "Medium to large",
        temperament: "Easygoing and reserved"
      },
      "Ragdoll": {
        breed: "Ragdoll Cat",
        description: "The Ragdoll is a large, semi-longhaired cat known for its striking blue eyes and relaxed, floppy nature when picked up. These cats are extremely gentle and patient.",
        personality: "Gentle, calm, and affectionate. Ragdolls are known for going limp when held and are excellent with children and other pets.",
        care: "Moderate grooming needed. They enjoy being brushed and are very tolerant of handling.",
        lifespan: "12-17 years",
        size: "Large",
        temperament: "Docile and loving"
      },
      "Bengal": {
        breed: "Bengal Cat",
        description: "The Bengal cat is a domestic cat breed with wild ancestry, featuring distinctive leopard-like spots and an athletic build. These cats are highly energetic and intelligent.",
        personality: "Energetic, intelligent, and playful. Bengals love climbing, jumping, and interactive play. They need lots of stimulation.",
        care: "Minimal grooming required. They need plenty of exercise and mental stimulation. Interactive toys and climbing structures are essential.",
        lifespan: "12-16 years",
        size: "Medium to large",
        temperament: "Active and curious"
      },
      "Sphynx": {
        breed: "Sphynx Cat",
        description: "The Sphynx is a hairless cat breed known for its wrinkled skin, large ears, and warm body temperature. Despite their unusual appearance, they are extremely affectionate and social.",
        personality: "Affectionate, intelligent, and energetic. Sphynx cats love attention and are very social with their families.",
        care: "Regular bathing needed due to lack of fur. They need protection from sun and cold. Regular ear cleaning is important.",
        lifespan: "8-14 years",
        size: "Medium",
        temperament: "Outgoing and friendly"
      },
      "Abyssinian": {
        breed: "Abyssinian Cat",
        description: "The Abyssinian is one of the oldest cat breeds, known for its ticked coat pattern and active, playful nature. These cats are highly intelligent and love to explore.",
        personality: "Active, intelligent, and curious. Abyssinians love to climb, explore, and play. They form strong bonds with their families.",
        care: "Minimal grooming needed. They require lots of mental and physical stimulation. Interactive play is essential.",
        lifespan: "9-15 years",
        size: "Medium",
        temperament: "Energetic and playful"
      }
    };

    // Check if the cat name contains any breed keywords
    for (const [breed, info] of Object.entries(catDescriptions)) {
      if (catName.toLowerCase().includes(breed.toLowerCase()) || 
          catName.toLowerCase().includes("cat") || 
          catName.toLowerCase().includes("kitten")) {
        return info;
      }
    }

    // Default cat description if no specific breed is found
    return {
      breed: "Cat",
      description: "Cats are wonderful companions known for their independence, grace, and affectionate nature. They make excellent pets for various households and lifestyles.",
      personality: "Independent, curious, and loving. Cats are known for their ability to adapt to different environments and form strong bonds with their families.",
      care: "Regular grooming, proper nutrition, and veterinary care are essential. Cats also need mental stimulation through play and exploration.",
      lifespan: "12-18 years",
      size: "Varies by breed",
      temperament: "Adaptable and affectionate"
    };
  };

  // Function to get detailed dog breed descriptions
  const getDogBreedDescription = (dogName) => {
    const dogDescriptions = {
      "Golden Retriever": {
        breed: "Golden Retriever",
        description: "The Golden Retriever is one of the most popular dog breeds, known for its friendly, intelligent, and devoted nature. These dogs are excellent family pets and are highly trainable.",
        personality: "Friendly, intelligent, devoted, and eager to please. Golden Retrievers are known for their gentle temperament and love for children.",
        care: "Requires regular exercise (1-2 hours daily), weekly brushing, and mental stimulation. They thrive on human interaction and training.",
        lifespan: "10-12 years",
        size: "Large",
        temperament: "Gentle and friendly"
      },
      "Labrador Retriever": {
        breed: "Labrador Retriever",
        description: "The Labrador Retriever is America's most popular dog breed, known for its outgoing, even temperament, and versatility. These dogs excel in various roles from family pets to working dogs.",
        personality: "Outgoing, even-tempered, intelligent, and athletic. Labs are known for their loyalty and adaptability to different environments.",
        care: "Needs daily exercise (1-2 hours), regular grooming, and mental stimulation. They love swimming and retrieving activities.",
        lifespan: "10-12 years",
        size: "Large",
        temperament: "Outgoing and friendly"
      },
      "German Shepherd": {
        breed: "German Shepherd",
        description: "The German Shepherd is a working dog breed known for its intelligence, loyalty, and versatility. These dogs are excellent protectors and are widely used in police and military work.",
        personality: "Intelligent, loyal, courageous, and confident. German Shepherds are protective of their families and highly trainable.",
        care: "Requires extensive exercise (2+ hours daily), mental stimulation, and consistent training. They need socialization from an early age.",
        lifespan: "7-10 years",
        size: "Large",
        temperament: "Loyal and protective"
      },
      "Pomeranian": {
        breed: "Pomeranian",
        description: "The Pomeranian is a small, fluffy dog breed known for its lively personality and fox-like appearance. These dogs are perfect for apartment living and make excellent companions.",
        personality: "Lively, bold, and inquisitive. Pomeranians are confident little dogs with big personalities and lots of energy.",
        care: "Daily brushing required due to thick double coat, moderate exercise needs, and regular dental care. They're sensitive to cold weather.",
        lifespan: "12-16 years",
        size: "Small",
        temperament: "Lively and bold"
      },
      "Pug": {
        breed: "Pug",
        description: "The Pug is a small dog breed known for its wrinkled face, curly tail, and charming personality. These dogs are excellent companions and adapt well to various living situations.",
        personality: "Charming, mischievous, and loving. Pugs are known for their sense of humor and devotion to their families.",
        care: "Moderate exercise needs, regular face cleaning due to wrinkles, and temperature control (they don't handle heat well).",
        lifespan: "12-15 years",
        size: "Small",
        temperament: "Charming and loving"
      },
      "Beagle": {
        breed: "Beagle",
        description: "The Beagle is a small to medium-sized dog breed known for its excellent sense of smell and friendly disposition. These dogs are great family pets and excellent hunting companions.",
        personality: "Friendly, curious, and merry. Beagles are known for their gentle nature and love for exploration and sniffing.",
        care: "Moderate exercise needs, regular ear cleaning, and secure fencing (they love to follow scents). They're food-motivated.",
        lifespan: "12-15 years",
        size: "Medium",
        temperament: "Friendly and curious"
      },
      "Rottweiler": {
        breed: "Rottweiler",
        description: "The Rottweiler is a powerful dog breed known for its strength, loyalty, and protective instincts. These dogs make excellent guard dogs and loyal family protectors.",
        personality: "Loyal, confident, and courageous. Rottweilers are protective of their families and need proper socialization and training.",
        care: "Requires extensive exercise, consistent training, and early socialization. They need strong leadership and clear boundaries.",
        lifespan: "8-10 years",
        size: "Large",
        temperament: "Loyal and protective"
      },
      "Husky": {
        breed: "Husky",
        description: "The Siberian Husky is a medium-sized dog breed known for its striking appearance, endurance, and independent spirit. These dogs are excellent for active families and cold climates.",
        personality: "Independent, energetic, and mischievous. Huskies are known for their love of running and need for mental and physical stimulation.",
        care: "Extensive exercise needs (2+ hours daily), regular grooming, and secure fencing. They're escape artists and love to run.",
        lifespan: "12-15 years",
        size: "Medium",
        temperament: "Independent and energetic"
      },
      "Bulldog": {
        breed: "Bulldog",
        description: "The Bulldog is a medium-sized dog breed known for its wrinkled face, pushed-in nose, and gentle disposition. These dogs are excellent family pets despite their intimidating appearance.",
        personality: "Gentle, friendly, and determined. Bulldogs are known for their patience with children and calm demeanor.",
        care: "Moderate exercise needs, regular face and skin care, and temperature control (they don't handle heat well).",
        lifespan: "8-10 years",
        size: "Medium",
        temperament: "Gentle and friendly"
      },
      "Border Collie": {
        breed: "Border Collie",
        description: "The Border Collie is a medium-sized dog breed known for its intelligence, work ethic, and herding abilities. These dogs are considered the most intelligent dog breed and excel in various dog sports.",
        personality: "Intelligent, energetic, and work-oriented. Border Collies need a job to do and thrive on mental and physical challenges.",
        care: "Extensive exercise and mental stimulation required, regular grooming, and consistent training. They need an active lifestyle.",
        lifespan: "12-15 years",
        size: "Medium",
        temperament: "Intelligent and energetic"
      }
    };

    // Check if the dog name contains any breed keywords
    for (const [breed, info] of Object.entries(dogDescriptions)) {
      if (dogName.toLowerCase().includes(breed.toLowerCase()) || 
          dogName.toLowerCase().includes("dog") || 
          dogName.toLowerCase().includes("puppy")) {
        return info;
      }
    }

    // Default dog description if no specific breed is found
    return {
      breed: "Dog",
      description: "Dogs are loyal companions known for their devotion, intelligence, and loving nature. They make excellent pets for various households and lifestyles.",
      personality: "Loyal, intelligent, and loving. Dogs are known for their ability to form strong bonds with their families and provide unconditional love.",
      care: "Regular exercise, proper nutrition, and veterinary care are essential. Dogs also need mental stimulation through play and training.",
      lifespan: "10-15 years",
      size: "Varies by breed",
      temperament: "Loyal and affectionate"
    };
  };

  // Function to get detailed rabbit breed descriptions
  const getRabbitBreedDescription = (rabbitName) => {
    const rabbitDescriptions = {
      "Holland Lop": {
        breed: "Holland Lop",
        description: "The Holland Lop is a small, friendly rabbit breed known for its adorable floppy ears and sweet temperament. These rabbits are excellent family pets and adapt well to various living situations.",
        personality: "Friendly, gentle, and affectionate. Holland Lops are known for their calm nature and love for human interaction.",
        care: "Requires regular grooming, proper diet with hay, and safe exercise space. They need social interaction and gentle handling.",
        lifespan: "7-12 years",
        size: "Small",
        temperament: "Gentle and friendly"
      },
      "Netherland Dwarf": {
        breed: "Netherland Dwarf",
        description: "The Netherland Dwarf is one of the smallest rabbit breeds, known for its tiny size and cute appearance. Despite their small stature, they have big personalities.",
        personality: "Active, curious, and sometimes feisty. Netherland Dwarfs are intelligent and can be quite playful when comfortable.",
        care: "Minimal grooming needed, requires proper diet and exercise. They need careful handling due to small size.",
        lifespan: "7-10 years",
        size: "Very small",
        temperament: "Active and curious"
      },
      "Lionhead": {
        breed: "Lionhead",
        description: "The Lionhead rabbit is distinctive for its mane-like fur around the head, resembling a lion. These rabbits are gentle and make excellent companions.",
        personality: "Gentle, affectionate, and calm. Lionheads are known for their sweet nature and love for attention.",
        care: "Regular grooming required for the mane, proper diet, and gentle handling. They enjoy being brushed.",
        lifespan: "7-10 years",
        size: "Small",
        temperament: "Gentle and affectionate"
      },
      "Rex": {
        breed: "Rex",
        description: "The Rex rabbit is famous for its velvety, plush fur that feels like velvet to the touch. These rabbits have a calm temperament and beautiful appearance.",
        personality: "Calm, gentle, and intelligent. Rex rabbits are known for their docile nature and love for human companionship.",
        care: "Minimal grooming needed due to short fur, requires proper diet and exercise. They enjoy being petted.",
        lifespan: "8-11 years",
        size: "Medium",
        temperament: "Calm and gentle"
      },
      "Angora": {
        breed: "Angora",
        description: "The Angora rabbit is known for its luxurious, long silky fur that requires regular grooming. Despite the maintenance, they are extremely soft and beautiful.",
        personality: "Gentle, calm, and patient. Angoras are known for their sweet temperament and tolerance for grooming.",
        care: "Extensive grooming required daily, proper diet, and careful handling. They need regular fur maintenance.",
        lifespan: "7-12 years",
        size: "Medium",
        temperament: "Gentle and patient"
      },
      "Flemish Giant": {
        breed: "Flemish Giant",
        description: "The Flemish Giant is one of the largest rabbit breeds, known for its impressive size and gentle giant personality. Despite their size, they are extremely docile.",
        personality: "Gentle, calm, and patient. Flemish Giants are known for their docile nature and love for children.",
        care: "Regular grooming, proper diet, and spacious living area needed. They're very gentle despite their size.",
        lifespan: "5-8 years",
        size: "Very large",
        temperament: "Gentle and docile"
      },
      "Mini Rex": {
        breed: "Mini Rex",
        description: "The Mini Rex is a compact version of the Rex breed with the same velvety fur but smaller size. These rabbits are perfect for smaller living spaces.",
        personality: "Friendly, active, and intelligent. Mini Rex rabbits are playful and enjoy interactive play.",
        care: "Minimal grooming needed, requires proper diet and exercise. They enjoy toys and mental stimulation.",
        lifespan: "7-10 years",
        size: "Small",
        temperament: "Friendly and active"
      },
      "English Lop": {
        breed: "English Lop",
        description: "The English Lop is famous for its extremely long ears that can reach up to 21 inches. These rabbits are elegant and have a calm temperament.",
        personality: "Calm, gentle, and affectionate. English Lops are known for their peaceful nature and love for attention.",
        care: "Regular ear cleaning needed, proper diet, and gentle handling. They need protection for their long ears.",
        lifespan: "5-7 years",
        size: "Large",
        temperament: "Calm and gentle"
      },
      "Jersey Wooly": {
        breed: "Jersey Wooly",
        description: "The Jersey Wooly is a small rabbit with wooly fur and a sweet temperament. These rabbits are perfect for families and first-time rabbit owners.",
        personality: "Sweet, gentle, and affectionate. Jersey Woolies are known for their calm nature and love for cuddling.",
        care: "Regular grooming needed for wooly fur, proper diet, and gentle handling. They enjoy being brushed.",
        lifespan: "7-10 years",
        size: "Small",
        temperament: "Sweet and gentle"
      },
      "Polish": {
        breed: "Polish",
        description: "The Polish rabbit is one of the smallest breeds with a compact size and friendly personality. These rabbits are perfect for small homes and gentle handling.",
        personality: "Friendly, curious, and gentle. Polish rabbits are known for their sweet nature and adaptability.",
        care: "Minimal grooming needed, requires proper diet and exercise. They need careful handling due to small size.",
        lifespan: "6-10 years",
        size: "Very small",
        temperament: "Friendly and gentle"
      }
    };

    // Check if the rabbit name contains any breed keywords
    for (const [breed, info] of Object.entries(rabbitDescriptions)) {
      if (rabbitName.toLowerCase().includes(breed.toLowerCase()) || 
          rabbitName.toLowerCase().includes("rabbit") || 
          rabbitName.toLowerCase().includes("bunny")) {
        return info;
      }
    }

    // Default rabbit description if no specific breed is found
    return {
      breed: "Rabbit",
      description: "Rabbits are gentle and affectionate companions known for their soft fur, long ears, and gentle nature. They make excellent pets for various households.",
      personality: "Gentle, intelligent, and social. Rabbits are known for their ability to form strong bonds with their families and provide gentle companionship.",
      care: "Regular grooming, proper diet with hay, and safe exercise space are essential. Rabbits also need mental stimulation and social interaction.",
      lifespan: "7-12 years",
      size: "Varies by breed",
      temperament: "Gentle and affectionate"
    };
  };

  // Function to get detailed bird breed descriptions
  const getBirdBreedDescription = (birdName) => {
    const birdDescriptions = {
      "African Grey Parrot": {
        breed: "African Grey Parrot",
        description: "Highly intelligent African Grey Parrot with exceptional talking ability. Known for their cognitive skills and affectionate nature.",
        characteristics: "Smart, Talkative, Affectionate",
        lifespan: "40-60 years",
        careLevel: "High",
        diet: "Pellets, fruits, vegetables, nuts"
      },
      "Macaw": {
        breed: "Macaw",
        description: "Colorful and majestic Macaw with vibrant plumage. Social birds that form strong bonds with their owners.",
        characteristics: "Colorful, Social, Playful",
        lifespan: "50-80 years",
        careLevel: "High",
        diet: "Pellets, fruits, vegetables, nuts"
      },
      "Cockatiel": {
        breed: "Cockatiel",
        description: "Gentle and friendly Cockatiel, perfect for beginners. Known for their sweet whistling and gentle temperament.",
        characteristics: "Gentle, Friendly, Whistling",
        lifespan: "15-25 years",
        careLevel: "Medium",
        diet: "Pellets, seeds, fruits, vegetables"
      },
      "Budgerigar (Budgie)": {
        breed: "Budgerigar (Budgie)",
        description: "Small and cheerful Budgie, excellent first bird. Playful, social, and easy to care for.",
        characteristics: "Small, Cheerful, Social",
        lifespan: "5-10 years",
        careLevel: "Low",
        diet: "Seeds, pellets, fruits, vegetables"
      },
      "Lovebird": {
        breed: "Lovebird",
        description: "Affectionate Lovebird that bonds deeply with owners. Small size with big personality and beautiful colors.",
        characteristics: "Affectionate, Colorful, Bonding",
        lifespan: "15-20 years",
        careLevel: "Medium",
        diet: "Pellets, seeds, fruits, vegetables"
      },
      "Canary": {
        breed: "Canary",
        description: "Melodious Canary with beautiful singing voice. Perfect for those who enjoy bird songs and gentle companionship.",
        characteristics: "Melodious, Gentle, Singing",
        lifespan: "10-15 years",
        careLevel: "Low",
        diet: "Seeds, pellets, fruits, vegetables"
      },
      "Finch": {
        breed: "Finch",
        description: "Delicate and beautiful Finch, great for aviaries. Peaceful birds that enjoy socializing with their own kind.",
        characteristics: "Delicate, Peaceful, Social",
        lifespan: "5-10 years",
        careLevel: "Low",
        diet: "Seeds, pellets, fruits, vegetables"
      },
      "Cockatoo": {
        breed: "Cockatoo",
        description: "Playful and affectionate Cockatoo with distinctive crest. Known for their loving nature and entertaining antics.",
        characteristics: "Playful, Affectionate, Crested",
        lifespan: "40-70 years",
        careLevel: "High",
        diet: "Pellets, fruits, vegetables, nuts"
      },
      "Conure": {
        breed: "Conure",
        description: "Energetic and colorful Conure with playful personality. Great family birds that love attention and interaction.",
        characteristics: "Energetic, Colorful, Playful",
        lifespan: "20-30 years",
        careLevel: "Medium",
        diet: "Pellets, fruits, vegetables, nuts"
      },
      "Quaker Parrot": {
        breed: "Quaker Parrot",
        description: "Intelligent Quaker Parrot with excellent talking ability. Compact size with big personality and strong bonding.",
        characteristics: "Intelligent, Talking, Bonding",
        lifespan: "20-30 years",
        careLevel: "Medium",
        diet: "Pellets, fruits, vegetables, nuts"
      }
    };

    for (const [breed, info] of Object.entries(birdDescriptions)) {
      if (birdName.toLowerCase().includes(breed.toLowerCase()) ||
          birdName.toLowerCase().includes("bird") ||
          birdName.toLowerCase().includes("parrot") ||
          birdName.toLowerCase().includes("parakeet")) {
        return info;
      }
    }
    return {
      breed: "Bird",
      description: "Beautiful and intelligent bird companion. Birds make excellent pets with their colorful plumage and engaging personalities.",
      characteristics: "Colorful, Intelligent, Social",
      lifespan: "Varies by breed",
      careLevel: "Medium",
      diet: "Species-specific diet"
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (paymentMethod === "Card") {
      // Validate card holder name
      if (!formData.cardHolderName || formData.cardHolderName.trim() === "") {
        newErrors.cardHolderName = "Card holder name is required";
      } else if (typeof formData.cardHolderName !== "string" || !/^[a-zA-Z\s]+$/.test(formData.cardHolderName.trim())) {
        newErrors.cardHolderName = "Card holder name must contain only letters and spaces";
      }

      // Validate card number
      if (!formData.cardNumber || formData.cardNumber.replace(/-/g, "").length !== 16) {
        newErrors.cardNumber = "Please enter a valid 16-digit card number";
      }

      // Validate expiry date
      if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Please enter expiry date in MM/YY format";
      }

      // Validate CVV
      if (!formData.cvv || formData.cvv.length !== 3 || !/^\d{3}$/.test(formData.cvv)) {
        newErrors.cvv = "Please enter a valid 3-digit CVV";
      }
    } else if (paymentMethod === "UPI") {
      if (!formData.upiId || formData.upiId.trim() === "") {
        newErrors.upiId = "UPI ID is required";
      }
    } else if (paymentMethod === "Net Banking") {
      if (!formData.bankName || formData.bankName.trim() === "") {
        newErrors.bankName = "Bank name is required";
      }
      if (!formData.accountNumber || formData.accountNumber.trim() === "") {
        newErrors.accountNumber = "Account number is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Validate all required fields
    if (!validateForm()) {
      alert("Please fill in all required fields correctly before proceeding.");
      return;
    }

    // Simulate saving the order
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...orders, purchasedItem]));

    // Show success popup
    alert("Your purchase was successful!");

    // Navigate to Orders page
    navigate("/orders");
  };

  if (!purchasedItem) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Error</h1>
        <p className="text-gray-700">
          No item selected for purchase. Please go back and try again.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Payment</h1>

        {purchasedItem && (
          <div className="bg-white rounded shadow p-4 mb-6">
            <img
              src={purchasedItem.image}
              alt={purchasedItem.name}
              className="w-full h-80 object-contain rounded mb-4"
            />
            
            {/* Enhanced breed information display for cats, dogs, and rabbits */}
            {purchasedItem.name && (
              (() => {
                const catInfo = getCatBreedDescription(purchasedItem.name);
                const dogInfo = getDogBreedDescription(purchasedItem.name);
                const rabbitInfo = getRabbitBreedDescription(purchasedItem.name);
                const birdInfo = getBirdBreedDescription(purchasedItem.name);
                
                if (catInfo.breed !== "Cat") {
                  return (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {catInfo.breed}
                      </h2>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">About This Breed</h3>
                        <p className="text-gray-700 mb-3">
                          {catInfo.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Personality</h4>
                            <p className="text-sm text-gray-600">
                              {catInfo.personality}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Care Requirements</h4>
                            <p className="text-sm text-gray-600">
                              {catInfo.care}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Lifespan</h4>
                            <p className="text-sm text-gray-600">
                              {catInfo.lifespan}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Size & Temperament</h4>
                            <p className="text-sm text-gray-600">
                              {catInfo.size} • {catInfo.temperament}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Why Choose This Cat?</h3>
                        <p className="text-gray-700">
                          {purchasedItem.description || "This breed is known for its friendly and affectionate nature. They are playful, intelligent, and make great companions for families and individuals alike."}
                        </p>
                      </div>
                    </div>
                  );
                } else if (dogInfo.breed !== "Dog") {
                  return (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {dogInfo.breed}
                      </h2>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">About This Breed</h3>
                        <p className="text-gray-700 mb-3">
                          {dogInfo.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Personality</h4>
                            <p className="text-sm text-gray-600">
                              {dogInfo.personality}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Care Requirements</h4>
                            <p className="text-sm text-gray-600">
                              {dogInfo.care}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Lifespan</h4>
                            <p className="text-sm text-gray-600">
                              {dogInfo.lifespan}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Size & Temperament</h4>
                            <p className="text-sm text-gray-600">
                              {dogInfo.size} • {dogInfo.temperament}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Why Choose This Dog?</h3>
                        <p className="text-gray-700">
                          {purchasedItem.description || "This breed is known for its friendly and affectionate nature. They are playful, intelligent, and make great companions for families and individuals alike."}
                        </p>
                      </div>
                    </div>
                  );
                } else if (rabbitInfo.breed !== "Rabbit") {
                  return (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {rabbitInfo.breed}
                      </h2>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">About This Breed</h3>
                        <p className="text-gray-700 mb-3">
                          {rabbitInfo.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Personality</h4>
                            <p className="text-sm text-gray-600">
                              {rabbitInfo.personality}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Care Requirements</h4>
                            <p className="text-sm text-gray-600">
                              {rabbitInfo.care}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Lifespan</h4>
                            <p className="text-sm text-gray-600">
                              {rabbitInfo.lifespan}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Size & Temperament</h4>
                            <p className="text-sm text-gray-600">
                              {rabbitInfo.size} • {rabbitInfo.temperament}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Why Choose This Rabbit?</h3>
                        <p className="text-gray-700">
                          {purchasedItem.description || "This breed is known for its gentle and affectionate nature. They are calm, intelligent, and make great companions for families and individuals alike."}
                        </p>
                      </div>
                    </div>
                  );
                } else if (birdInfo.breed !== "Bird") {
                  return (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {birdInfo.breed}
                      </h2>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">About This Breed</h3>
                        <p className="text-gray-700 mb-3">
                          {birdInfo.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Characteristics</h4>
                            <p className="text-sm text-gray-600">
                              {birdInfo.characteristics}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Care Level</h4>
                            <p className="text-sm text-gray-600">
                              {birdInfo.careLevel}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Diet</h4>
                            <p className="text-sm text-gray-600">
                              {birdInfo.diet}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-blue-700 mb-1">Lifespan</h4>
                            <p className="text-sm text-gray-600">
                              {birdInfo.lifespan}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Why Choose This Bird?</h3>
                        <p className="text-gray-700">
                          {purchasedItem.description || "This breed is known for its friendly and affectionate nature. They are playful, intelligent, and make great companions for families and individuals alike."}
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <h2 className="text-xl font-bold mb-2">{purchasedItem.name}</h2>
                      <p className="text-gray-700 mb-4">
                        {purchasedItem.description || "This breed is known for its friendly and affectionate nature. They are playful, intelligent, and make great companions for families and individuals alike."}
                      </p>
                    </div>
                  );
                }
              })()
            )}
          </div>
        )}

        <div className="space-y-4">
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Card Payment
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            UPI Payment
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Net Banking"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Net Banking
          </label>
        </div>

        {paymentMethod === "Card" && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Card Holder Name *</label>
              <input
                type="text"
                name="cardHolderName"
                placeholder="Full Name"
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cardHolderName ? "border-red-500" : ""
                }`}
                onChange={handleInputChange}
                value={formData.cardHolderName || ""}
              />
              {errors.cardHolderName && (
                <p className="text-red-500 text-sm mt-1">{errors.cardHolderName}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Card Number *</label>
              <input
                type="text"
                name="cardNumber"
                maxLength="19"
                placeholder="####-####-####-####"
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cardNumber ? "border-red-500" : ""
                }`}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 16);
                  const formattedValue = value.match(/.{1,4}/g)?.join("-") || "";
                  setFormData({ ...formData, cardNumber: formattedValue });
                  e.target.value = formattedValue;
                }}
                value={formData.cardNumber || ""}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">Expiry Date *</label>
                <input
                  type="text"
                  name="expiryDate"
                  maxLength="5"
                  placeholder="MM/YY"
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.expiryDate ? "border-red-500" : ""
                  }`}
                  onChange={(e) => {
                    let value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
                    
                    // Auto-add "/" after month (MM)
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + "/" + value.slice(2);
                    }
                    
                    setFormData({ ...formData, expiryDate: value });
                    e.target.value = value;
                  }}
                  value={formData.expiryDate || ""}
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">CVV *</label>
                <input
                  type="password"
                  name="cvv"
                  maxLength="3"
                  placeholder="CVV"
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cvv ? "border-red-500" : ""
                  }`}
                  onChange={handleInputChange}
                  value={formData.cvv || ""}
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "UPI" && (
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">UPI ID *</label>
              <input
                type="text"
                name="upiId"
                placeholder="UPI ID"
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded ${
                  errors.upiId ? "border-red-500" : ""
                }`}
                value={formData.upiId || ""}
              />
              {errors.upiId && (
                <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>
              )}
            </div>
          </div>
        )}

        {paymentMethod === "Net Banking" && (
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Bank Name *</label>
              <input
                type="text"
                name="bankName"
                placeholder="Bank Name"
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded ${
                  errors.bankName ? "border-red-500" : ""
                }`}
                value={formData.bankName || ""}
              />
              {errors.bankName && (
                <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Account Number *</label>
              <input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded ${
                  errors.accountNumber ? "border-red-500" : ""
                }`}
                value={formData.accountNumber || ""}
              />
              {errors.accountNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
              )}
            </div>
          </div>
        )}

        <button
          onClick={handleConfirm}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

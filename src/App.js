import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./components/Home";
import AnimalPage from "./components/AnimalPage";
import DogPage from "./components/DogPage";
import DogBuyPage from "./components/DogBuyPage";
import RabbitBuyPage from "./components/RabbitBuyPage";
import BirdPage from "./components/BirdPage";
import BirdBuyPage from "./components/BirdBuyPage";
import HamsterPage from "./components/HamsterPage";
import HamsterBuyPage from "./components/HamsterBuyPage";
import BuyPage from "./components/BuyPage";
import PaymentPage from "./components/PaymentPage";
import OrdersPage from "./components/OrdersPage";
import BenefitsPage from "./components/BenefitsPage";
import TurtlePage from "./components/TurtlePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/animal/:animal" element={<AnimalPage />} />
        <Route path="/animal/dogs" element={<DogPage />} />
        <Route path="/animal/dogs/buy" element={<DogBuyPage />} />
        <Route path="/animal/rabbits/buy" element={<RabbitBuyPage />} />
        <Route path="/animal/birds" element={<BirdPage />} />
        <Route path="/animal/birds/buy" element={<BirdBuyPage />} />
        <Route path="/animal/hamsters" element={<HamsterPage />} />
        <Route path="/animal/hamsters/buy" element={<HamsterBuyPage />} />
        <Route path="/animal/turtles" element={<TurtlePage />} />
        <Route path="/animal/:animal/buy" element={<BuyPage />} />
        <Route path="/animal/:animal/benefits" element={<BenefitsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;

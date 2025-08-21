import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
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

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  console.log("ProtectedRoute - user:", user, "loading:", loading);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    console.log("No user, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Main App Component with Authentication Check
const AppContent = () => {
  const [user, loading] = useAuthState(auth);

  console.log("AppContent - user:", user, "loading:", loading);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/animal/:animal" element={<ProtectedRoute><AnimalPage /></ProtectedRoute>} />
      <Route path="/animal/dogs" element={<ProtectedRoute><DogPage /></ProtectedRoute>} />
      <Route path="/animal/dogs/buy" element={<ProtectedRoute><DogBuyPage /></ProtectedRoute>} />
      <Route path="/animal/rabbits/buy" element={<ProtectedRoute><RabbitBuyPage /></ProtectedRoute>} />
      <Route path="/animal/birds" element={<ProtectedRoute><BirdPage /></ProtectedRoute>} />
      <Route path="/animal/birds/buy" element={<ProtectedRoute><BirdBuyPage /></ProtectedRoute>} />
      <Route path="/animal/hamsters" element={<ProtectedRoute><HamsterPage /></ProtectedRoute>} />
      <Route path="/animal/hamsters/buy" element={<ProtectedRoute><HamsterBuyPage /></ProtectedRoute>} />
      <Route path="/animal/turtles" element={<ProtectedRoute><TurtlePage /></ProtectedRoute>} />
      <Route path="/animal/:animal/buy" element={<ProtectedRoute><BuyPage /></ProtectedRoute>} />
      <Route path="/animal/:animal/benefits" element={<ProtectedRoute><BenefitsPage /></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
      <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

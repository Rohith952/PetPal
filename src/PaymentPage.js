import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleConfirm = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Simulate saving the order
    const purchasedItem = location.state?.item;
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...orders, purchasedItem]));

    // Show success popup
    alert("Your purchase was successful!");

    // Navigate to Orders page
    navigate("/orders");
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Payment</h1>
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
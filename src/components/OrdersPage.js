import React from "react";
import Navbar from "./Navbar";

const OrdersPage = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Filter out invalid orders
  const validOrders = orders.filter(
    (order) => order.image && order.name && order.description
  );

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
        {validOrders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {validOrders.map((order, index) => (
              <div key={index} className="bg-white rounded shadow p-4">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{order.name}</h2>
                <p className="text-gray-700 mb-4">{order.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;

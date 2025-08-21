import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-500 text-white">
      <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        PetPal
      </div>
      <div className="space-x-4">
        <button onClick={() => navigate("/")} className="hover:underline">
          Home
        </button>
        {user && (
          <>
            <button onClick={() => navigate("/orders")} className="hover:underline">
              Your Orders
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
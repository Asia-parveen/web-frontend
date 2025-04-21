import React from "react";
import { Link } from "react-router-dom"; // 👈 Link import kiya

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My App</h1>
        <p className="text-gray-700 text-lg mb-6">
          This is the Home Page of your MERN project.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go to Signup
          </Link>
          <Link
            to="/login"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-center p-6">
      <h1 className="text-[8rem] md:text-[10rem] font-bold font-[Poppins] text-gray-800 leading-none">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-[Poppins] font-semibold text-gray-700 mt-2">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-4 max-w-md font-[IBM Plex Mono]">
        The page you’re looking for doesn’t exist or has been moved.
        Don’t worry — you can go back to the homepage safely.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 rounded-2xl bg-gray-900 text-white font-[Poppins] font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../assets/404-illustration.jpg"; 

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gray-50 text-center md:text-left">
    <img
      src={notFoundImg}
      alt="Page not found"
      className="w-72 h-auto mb-6 md:mb-0 md:mr-10"
    />
    <div className="flex flex-col items-center md:items-start max-w-md space-y-4">
      <p className="text-2xl font-semibold text-gray-800">
        Oops! Page not found.
      </p>
      <p className="text-md text-gray-600">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#0EA106] cursor-pointer text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition"
      >
        Go Back Home
      </button>
    </div>
  </div>
  
  );
};

export default NotFound;

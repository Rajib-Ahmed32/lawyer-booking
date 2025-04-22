import React from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Add useLocation
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation(); // Get the current route path

  // Function to check if the link is active
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "focus:outline-none relative pb-1 mb-1 focus:after:content-[''] focus:after:absolute focus:after:left-0 focus:after:bottom-0 focus:after:h-[2px] focus:after:w-full focus:after:bg-[#0EA106] text-[#0EA106] font-semibold"
      : "focus:outline-none relative pb-1 mb-1 focus:after:content-[''] focus:after:absolute focus:after:left-0 focus:after:bottom-0 focus:after:h-[2px] focus:after:w-full focus:after:bg-[#0EA106] text-[#0F0F0FB3]";
  };

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-7 h-7 md:w-8 md:h-8" />
          <span className="text-[22px] md:text-2xl font-semibold">Law.BD</span>
        </div>


        <nav className="hidden md:flex gap-6 font-medium text-sm md:text-base text-[#0F0F0FB3]">
          <Link
            to="/"
            className={getLinkClass("/")}
          >
            Home
          </Link>
          <Link
            to="/bookings"
            className={getLinkClass("/bookings")}
          >
            Bookings
          </Link>
          <Link
            to="/blogs"
            className={getLinkClass("/blogs")}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className={getLinkClass("/contact")}
          >
            Contact Us
          </Link>
        </nav>


        <div>
          <button className="bg-green-600 cursor-pointer text-white px-4 md:px-4 py-2 font-medium text-[12px] rounded-full md:text-sm">
            Contact Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

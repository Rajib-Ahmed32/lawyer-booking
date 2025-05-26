import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const getLinkClass = (path) => {
    const baseClass =
      "block px-3 py-2 rounded-md focus:outline-none relative font-medium";
    const activeClass = "text-[#0EA106] font-semibold";
    const inactiveClass = "text-[#0F0F0FB3]";
    return `${baseClass} ${
      location.pathname === path ? activeClass : inactiveClass
    }`;
  };

  return (
    <header className="w-full shadow-sm bg-white z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 lg:px-0">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-7 h-7 md:w-8 md:h-8" />
          <span className="text-[22px] md:text-2xl font-semibold">Law.BD</span>
        </div>

        <nav className="hidden md:flex gap-6 font-medium text-sm md:text-base">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/bookings" className={getLinkClass("/bookings")}>
            Bookings
          </Link>
          <Link to="/blogs" className={getLinkClass("/blogs")}>
            Blogs
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")}>
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:block">
          <button className="bg-[#0EA106] cursor-pointer text-white px-4 py-2 font-medium text-[12px] rounded-full md:text-sm">
            Contact Now
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#0F0F0FB3] focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center gap-2 p-4">
            <Link to="/" className={getLinkClass("/")} onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/bookings"
              className={getLinkClass("/bookings")}
              onClick={toggleMenu}
            >
              Bookings
            </Link>
            <Link
              to="/blogs"
              className={getLinkClass("/blogs")}
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className={getLinkClass("/contact")}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <button
              className="bg-[#0EA106] mt-2 text-white px-4 py-2 rounded-full text-sm font-medium"
              onClick={toggleMenu}
            >
              Contact Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

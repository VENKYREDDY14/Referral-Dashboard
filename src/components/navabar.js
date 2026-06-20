import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link
          to="/"
          aria-label="Go to dashboard home"
          className="text-xl font-bold text-blue-600"
        >
          Go Business
        </Link>

        {/* Mobile*/}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <span className="text-lg">✕</span>
          ) : (
            <span className="text-lg">☰</span>
          )}
        </button>

        {/* Desktop */}
        <nav
          aria-label="Primary"
          className="hidden md:flex md:items-center md:space-x-6"
        >
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            to="/#"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/#"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop logout button */}
        <button
          onClick={handleLogout}
          className="hidden md:block bg-transparent border border-red-500 text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
        >
          Log out
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="#"
            className="block text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="#"
            className="block text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={handleLogout}
            className="w-full bg-transparent border border-red-500 text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

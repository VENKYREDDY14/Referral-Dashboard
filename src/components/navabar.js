import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Link
            to="/"
            aria-label="Go to dashboard home"
            className="text-xl font-bold text-blue-600"
          >
            Go Business
          </Link>

          <nav aria-label="Primary">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li className="opacity-50 cursor-not-allowed">
                <span className="text-gray-400">Details (coming soon)</span>
              </li>
              <li className="opacity-50 cursor-not-allowed">
                <span className="text-gray-400">Reports (coming soon)</span>
              </li>
            </ul>
          </nav>

          <button
            onClick={handleLogout}
            className="bg-transparent border border-red-500 text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
          >
            Log out
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

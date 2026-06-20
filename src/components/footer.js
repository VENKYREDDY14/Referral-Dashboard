import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <Link
            to="/"
            aria-label="Go to dashboard home"
            className="text-xl font-bold text-blue-600"
          >
            Go Business
          </Link>
        </div>
        <nav aria-label="Footer" className="flex  space-x-6 mt-2 md:mt-0">
          <Link
            to="#"
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="#"
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <Link
            to="#"
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Privacy
          </Link>
          <Link
            to="#"
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Terms
          </Link>
        </nav>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">© 2024 Go Business</p>
      </div>
    </footer>
  );
};

export default Footer;

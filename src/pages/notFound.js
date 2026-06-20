import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text=4xl font-bold text-gray-800 mb-4">
      4404 - Page Not Found
    </h1>
    <p className="text-lg text-gray-600 mb-6">Page not found</p>
    <Link to="/" className="text-blue-600 hover:underline">
      ← Back to dashboard
    </Link>
  </section>
);

export default NotFound;

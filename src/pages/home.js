import React from "react";
import Navbar from "../components/navabar";
import Dashboard from "./dashboard";

const Home = () => {
  return (
    <div className="min-h-screen md:px-20 bg-gray-100">
      <Navbar />
      <Dashboard />
      <section></section>
    </div>
  );
};

export default Home;

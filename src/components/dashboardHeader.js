import React from "react";

const DashboardHeader = () => {
  return (
    <header className="p-6 md:px-0 md:py-2 mt-2">
      <h1 className="text-3xl font-bold text-gray-800">Referral Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Track your referrals, earnings, and partner activity in one place.
      </p>
    </header>
  );
};

export default DashboardHeader;

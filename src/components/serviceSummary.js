import React from "react";

const ServiceSummary = (props) => {
  const { summary } = props;

  if (!summary) {
    return (
      <section
        aria-label="Service summary"
        className="p-6 bg-white rounded-lg shadow-md mt-6"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Service summary
        </h1>
        <p className="text-gray-600">No summary available</p>
      </section>
    );
  }

  return (
    <section
      aria-label="Service summary"
      className="p-6 bg-white rounded-lg shadow-md mt-6"
    >
      <h1 className="text-xl font-bold text-gray-800 mb-4">Service summary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-blue-200">
          <p className="text-sm font-medium text-gray-600">Service</p>
          <p className="mt-1 text-lg font-bold text-blue-600">
            {summary.service}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-blue-200">
          <p className="text-sm font-medium text-gray-600">Your Referrals</p>
          <p className="mt-1 text-xl font-bold text-gray-900">
            {summary.yourReferrals}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-blue-200">
          <p className="text-sm font-medium text-gray-600">Active Referrals</p>
          <p className="mt-1 text-xl font-bold text-gray-900">
            {summary.activeReferrals}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-blue-200">
          <p className="text-sm font-medium text-gray-600">
            Total Ref. Earnings
          </p>
          <p className="mt-1 text-xl font-bold text-gray-900">
            {summary.totalRefEarnings}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;

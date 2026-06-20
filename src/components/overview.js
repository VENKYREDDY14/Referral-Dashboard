import React from "react";
import {
  FaDollarSign,
  FaPercentage,
  FaHashtag,
  FaListOl,
} from "react-icons/fa";

const Overview = (props) => {
  const { metrics } = props;
  if (!metrics || metrics.length === 0) {
    return (
      <section
        role="region"
        aria-label="Overview metrics"
        className="p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h1>
        <p className="text-gray-600">No metrics available.</p>
      </section>
    );
  }

  const getIcon = (kind) => {
    switch (kind) {
      case "currency":
        return <FaDollarSign className="text-white text-xl" />;
      case "percent":
        return <FaPercentage className="text-white text-xl" />;
      case "number":
        return <FaListOl className="text-white text-xl" />;
      default:
        return <FaHashtag className="text-white text-xl" />;
    }
  };

  return (
    <section
      role="region"
      aria-label="Overview metrics"
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-xl font-bold text-gray-800 mb-4">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-gray-50 p-4 rounded-md shadow-sm  border-2 border-blue-200"
          >
            <div className="flex items-center justify-center w-12 h-12  mb-2 rounded-full bg-blue-500">
              {getIcon(metric.kind)}
            </div>
            <p className="text-xl font-bold text-gray-900">{metric.value}</p>
            <p className="mt-1 text-sm font-medium text-gray-600">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;

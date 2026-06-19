import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReferralsTable = (props) => {
  const { referrals, onSearch } = props;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  if (!referrals || referrals.length === 0) {
    return (
      <section
        aria-label="All referrals"
        className="p-6 bg-white rounded-lg shadow-md mt-6"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">All referrals</h2>
        <p className="text-gray-600">No matching entries</p>
      </section>
    );
  }

  const totalEntries = referrals.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalEntries);
  const currentRows = referrals.slice(startIndex, endIndex);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <section
      arial-label="All referrals"
      className="p-6 bg-white rounded-lg shadow-md mt-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">All referrals</h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Name or service..."
          aria-label="Search referrals"
          value={searchTerm}
          onChange={handleSearchInput}
          className="border rounded-md px-3 py-2 text-gray-700 w-full md:w-1/3 outline-none"
        />

        <label className="flex items-center gap-2 text-gray-700">
          Sort by date:
          <select
            defaultValue="desc"
            className="border rounded-md px-2 py-1 text-gray-700 outline-none"
            onChange={(e) => {
              if (onSearch) {
                onSearch(searchTerm, e.target.value);
              }
            }}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Service
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Profit
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((referral) => (
              <tr
                key={referral.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  navigate(`/referral/${referral.id}`);
                }}
              >
                <td className="px-4 py-2 text-sm text-gray-800">
                  {referral.name || "No matching entries"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {referral.serviceName || "No matching entries"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {referral.date
                    ? new Date(referral.date)
                        .toISOString()
                        .slice(0, 10)
                        .replace(/-/g, "/")
                    : "No matching entries"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {referral.profit !== undefined
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                      }).format(referral.profit)
                    : "No matching entries"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <p>
          Showing {startIndex + 1}-{endIndex} of {totalEntries} entries
        </p>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded-md text-gray-700 bg-gray-100 disabled:opacity-50"
            onClick={() => {
              setCurrentPage((p) => p - 1);
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 border rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => {
                setCurrentPage(i + 1);
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded-md text-gray-700 bg-gray-100 disabled:opacity-50"
            onClick={() => {
              setCurrentPage((p) => p + 1);
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferralsTable;

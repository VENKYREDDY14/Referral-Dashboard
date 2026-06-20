import React from "react";

const Referral = (props) => {
  const { referral } = props;

  if (!referral) {
    return (
      <section
        aria-label="Share referral"
        className="p-6 bg-white rounded-lg shadow-md mt-6"
      >
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Refer friends and earn more
        </h1>
        <p className="text-gray-600">No referral information available.</p>
      </section>
    );
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section
      aria-label="Share referral"
      className="p-6 bg-white rounded-lg shadow-md mt-6"
    >
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        Refer friends and earn more
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Referral Link
          </label>
          <div className="flex">
            <input
              type="text"
              readOlny
              value={referral.link}
              className="flex-grow broder rounded-1-md px-3 py-2 text-gray-700 bg-gray-100 outline-none"
            />
            <button
              onClick={() => copyToClipboard(referral.link)}
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              Copy
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Referral Code
          </label>
          <div className="flex">
            <input
              type="text"
              readOnly
              value={referral.code}
              className="flex-grow border rounded-l-md px-3 py-2 text-gray-700 bg-gray-100 outline-none"
            />
            <button
              onClick={() => copyToClipboard(referral.code)}
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;

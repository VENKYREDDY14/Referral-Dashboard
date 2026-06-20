import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../components/navabar";
import Loader from "../components/loader";

const ReferralDetails = () => {
  const { id } = useParams();
  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReferral = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`;

        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt_token")}`,
            "Content-type": "application/json",
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        let referralData = null;

        // Case A: referrals array nested inside data
        if (Array.isArray(data?.data?.referrals)) {
          referralData = data.data.referrals.find(
            (r) => String(r.id) === String(id),
          );
        }
        // Case B: referrals array at root
        else if (Array.isArray(data?.referrals)) {
          referralData = data.referrals.find(
            (r) => String(r.id) === String(id),
          );
        }
        // Case C: single referral object inside data
        else if (data?.data?.id) {
          referralData = String(data.data.id) === String(id) ? data.data : null;
        }
        // Case D: single referral object at root
        else if (data?.id) {
          referralData = String(data.id) === String(id) ? data : null;
        }

        if (referralData) {
          setReferral(referralData);
        } else {
          setError("Referral not found");
        }
      } catch (e) {
        setError("Referral not found");
      } finally {
        setLoading(false);
      }
    };
    fetchReferral();
  }, [id]);

  const renderLoading = () => <Loader loading={loading} />;

  const renderError = () => (
    <section
      className="bg-gray-100 min-h-screen p-6 bg-white rounded-lg shadow-md mt-6"
      role="alert"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Referral not found
      </h2>
      <p className="text-red-600">{error}</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 block">
        ← Back to dashboard
      </Link>
    </section>
  );

  const renderSuccess = () => (
    <section className="md:px-20 bg-gray-100 min-h-screen">
      <Navbar />
      <Link
        to="/"
        className="text-blue-600 hover:underline mt-6 block text-semibold p-2"
      >
        ← Back to dashboard
      </Link>
      {referral && (
        <div className="mt-6 p-2">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Referral Details
          </h1>
          <p className="text-gray-600 mb-6">
            Full information for this referral partner.
          </p>

          <div className=" p-6 bg-white rounded-lg shadow-md max-w-2xl">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold text-gray-700 mb-6 ">
                {referral.name}
              </h1>
              <span className="cursor-default bg-gray-200 rounded-2xl px-4 py-2 h-10 text-blue-800 font-semibold font-medium items-baseline">
                {referral.serviceName}
              </span>
            </div>

            <hr className="border-t border-gray-300 opacity-70 mb-6" />

            <dl className="grid grid-cols-2 gap-y-4 ">
              <div className="contents">
                <dt className="text-gray-500 text-sm">Referral ID</dt>
                <dd className="text-gray-900 font-medium">{referral.id}</dd>
              </div>

              <div className="contents">
                <dt className="text-gray-500 text-sm">Service Name</dt>
                <dd className="text-gray-900 font-medium">
                  {referral.serviceName}
                </dd>
              </div>
              <div className="contents">
                <dt className="text-gray-500 text-sm">Date</dt>
                <dd className="text-gray-900 font-medium">
                  {new Date(referral.date)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, "/")}
                </dd>
              </div>
              <div className="contents">
                <dt className="text-gray-500 text-sm">Profit</dt>
                <dd className="text-gray-900 font-medium">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  }).format(referral.profit)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </section>
  );

  switch (true) {
    case loading:
      return renderLoading();
    case !!error:
      return renderError();
    case !!referral:
      return renderSuccess();
    default:
      return null;
  }
};

export default ReferralDetails;

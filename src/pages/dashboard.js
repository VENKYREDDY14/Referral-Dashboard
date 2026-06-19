import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/dashboardHeader";
import Cookies from "js-cookie";
import Overview from "../components/overview";
import ServiceSummary from "../components/serviceSummary";
import Referral from "../components/referral";
import ReferralsTable from "../components/referralsTable";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(data?.data);

  const fetchReferrals = async (searchTerm = "", sortOrder = "desc") => {
    const url = `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${searchTerm}&sort=${sortOrder}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt_token")}`,
      },
    };
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(`${res.status}: ${json.message || "Error"}`);
      }

      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, []);

  const handleSearch = (searchTerm, sortOrder = "desc") => {
    fetchReferrals(searchTerm, sortOrder);
  };

  return (
    <>
      <DashboardHeader />

      {loading && (
        <p role="alert" className="text-center text-gray-600 mt-4">
          Loading referrals…
        </p>
      )}

      {error && (
        <p role="alert" className="text-center text-red-600 mt-4">
          {error}
        </p>
      )}

      {data && <Overview metrics={data?.data?.metrics} />}
      {data && <ServiceSummary summary={data?.data?.serviceSummary} />}
      {data && <Referral referral={data?.data?.referral} />}
      {data && (
        <ReferralsTable
          referrals={data?.data?.referrals}
          onSearch={handleSearch}
        />
      )}
    </>
  );
};

export default Dashboard;

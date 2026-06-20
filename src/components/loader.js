import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({ loading, height = 80, width = 80, color = "#2563EB" }) => {
  if (!loading) return null;

  return (
    <div
      role="alert"
      aria-label="Loading content"
      className="flex justify-center items-center min-h-screen"
    >
      <ThreeDots
        visible={loading}
        height={height}
        width={width}
        color={color}
        ariaLabel="three-dots-loading"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default Loader;

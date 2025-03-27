import React from "react";

const TotalCard = ({ total }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 mb-4`}>
      Total: {total.toFixed(8)} BTC
    </div>
  );
};

export default TotalCard;

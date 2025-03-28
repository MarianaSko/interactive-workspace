const TotalCard = ({ total }) => {
  return (
    <div
      className={`bg-emerald-900 text-emerald-200 shadow-md rounded-lg p-4 mb-4`}
    >
      Total: {total.toFixed(8)} BTC
    </div>
  );
};

export default TotalCard;

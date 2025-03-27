import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full max-w-full border-collapse border border-gray-600 bg-emerald-100">
        <thead className="sticky top-0">
          <tr className="bg-emerald-900 text-emerald-200">
            <th className="border border-gray-600 px-4 py-2">From</th>
            <th className="border border-gray-600 px-4 py-2">To</th>
            <th className="border border-gray-600 px-4 py-2">Sum</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {transactions.map((tx, index) => (
            <tr key={index} className="border border-gray-600">
              <td className="border border-gray-600 px-4 py-2 text-sm break-words max-w-[200px]">
                {tx.from}
              </td>
              <td className="border border-gray-600 px-4 py-2 text-sm break-words max-w-[200px]">
                {tx.to}
              </td>
              <td className="border border-gray-600 px-4 py-2 text-sm">
                {tx.amount.toFixed(8)} BTC
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

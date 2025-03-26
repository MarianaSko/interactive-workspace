import React from "react";
import Link from "../components/Link";

const HomePage = () => {
  return (
    <nav className="flex gap-2 justify-center">
      <Link path="interactive-workspace">Interactive workspace</Link>
      <Link path="bitcoin-transactions"> Bitcoin Transactions</Link>
    </nav>
  );
};

export default HomePage;

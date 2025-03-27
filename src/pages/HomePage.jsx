import React from "react";
import Link from "../components/Link";
import Container from "../components/Container";

const HomePage = () => {
  return (
    <Container>
      <nav className="flex gap-2 justify-center">
        <Link path="interactive-workspace">Interactive workspace</Link>
        <Link path="bitcoin-transactions"> Bitcoin Transactions</Link>
      </nav>
    </Container>
  );
};

export default HomePage;

import Link from "../components/Link";
import Container from "../components/Container";

const HomePage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-full py-16">
        <nav className="flex gap-6 flex-wrap justify-center">
          <Link path="interactive-workspace">Interactive Workspace</Link>
          <Link path="bitcoin-transactions">Bitcoin Transactions</Link>
        </nav>
      </div>
    </Container>
  );
};

export default HomePage;

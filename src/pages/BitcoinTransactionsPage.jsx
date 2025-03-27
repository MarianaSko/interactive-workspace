import React, { useEffect, useRef, useState } from "react";
import ControlButtons from "../components/interactiveWorkspace/bitcoinTransactions/ControlButtons";
import TotalCard from "../components/interactiveWorkspace/bitcoinTransactions/TotalCard";
import TransactionTable from "../components/interactiveWorkspace/bitcoinTransactions/TransactionTable";
import Heading from "../components/Heading";
import Container from "../components/Container";

const BitcoinTransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const wsRef = useRef(null);

  const startTracking = () => {
    if (wsRef.current) return;

    wsRef.current = new WebSocket("wss://ws.blockchain.info/inv");
    wsRef.current.onopen = () => {
      wsRef.current.send(JSON.stringify({ op: "unconfirmed_sub" }));
    };
    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const inputs = data.x.inputs
        .map((input) => input.prev_out.addr)
        .join(", ");
      const outputs = data.x.out.map((output) => output.addr).join(", ");
      const amount =
        data.x.out.reduce((sum, output) => sum + output.value, 0) / 1e8;
      setTransactions((prev) => [
        { from: inputs, to: outputs, amount },
        ...prev,
      ]);
      setTotal((prev) => prev + amount);
    };
    setIsRunning(true);
  };

  const stopTracking = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTracking = () => {
    setTransactions([]);
    setTotal(0);
  };

  useEffect(() => {
    return () => stopTracking();
  }, []);

  return (
    <Container className={"max-w-2xl"}>
      <Heading>Bitcoin Transaction Tracker</Heading>
      <ControlButtons
        startTracking={startTracking}
        stopTracking={stopTracking}
        resetTracking={resetTracking}
        isRunning={isRunning}
      />
      <TotalCard total={total} />
      {transactions.length !== 0 && (
        <TransactionTable transactions={transactions} />
      )}
    </Container>
  );
};

export default BitcoinTransactionsPage;

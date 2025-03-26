import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import InteractiveWorkspacePage from "./pages/InteractiveWorkspacePage";
import BitcoinTransactionsPage from "./pages/BitcoinTransactionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="interactive-workspace"
        element={<InteractiveWorkspacePage />}
      />
      <Route
        path="bitcoin-transactions"
        element={<BitcoinTransactionsPage />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

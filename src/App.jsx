import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const InteractiveWorkspacePage = lazy(() =>
  import("./pages/InteractiveWorkspacePage")
);
const BitcoinTransactionsPage = lazy(() =>
  import("./pages/BitcoinTransactionsPage")
);

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

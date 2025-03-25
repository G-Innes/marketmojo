import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { TradingPlanner } from "./pages/TradingPlanner";
import { SetupAnalyzer } from "./pages/SetupAnalyzer";
import { TradeJournal } from "./pages/TradeJournal";
import { PersonalJournal } from "./pages/PersonalJournal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="planner" element={<TradingPlanner />} />
          <Route path="setups" element={<SetupAnalyzer />} />
          <Route path="journal" element={<TradeJournal />} />
          <Route path="personal-journal" element={<PersonalJournal />} />
          {/* Placeholders for future routes */}
          <Route path="strategy" element={<div className="container py-8"><h1 className="text-3xl font-bold">Strategy Guide</h1><p className="mt-4">Coming soon</p></div>} />
          <Route path="health" element={<div className="container py-8"><h1 className="text-3xl font-bold">Health & Discipline</h1><p className="mt-4">Coming soon</p></div>} />
          <Route path="settings" element={<div className="container py-8"><h1 className="text-3xl font-bold">Settings</h1><p className="mt-4">Coming soon</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/Dashboard";
import CeaserCipher from "./components/Expirements/CeaserCipher";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/caesar" element={<CeaserCipher />} />
            {/* Add other experiment routes here */}
            {/* <Route path="/hill" element={<HillCipher />} /> */}
            {/* <Route path="/sha" element={<SHA />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

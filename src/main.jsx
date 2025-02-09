import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Home page
import TravelForm from "./TravelForm"; // Travel planning form page
import "./index.css"; // Global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home page */}
        <Route path="/plan" element={<TravelForm />} /> {/* Travel planning form page */}
      </Routes>
    </Router>
  </React.StrictMode>
);
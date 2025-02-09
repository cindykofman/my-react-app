import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import TripPlanner from "./TripPlanner";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <h1>Welcome to Travel Planner ✈️</h1>
        <p>Your journey starts here! Plan your next adventure effortlessly.</p>
      </header>

      <div className="buttons">
        {/* Fix the navigation button */}
        <button onClick={() => navigate("/plan")}>
          Start Planning 🚀
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<TripPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;

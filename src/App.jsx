<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate
=======
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import TripPlanner from "./TripPlanner";
import "./App.css";

function Home() {
  const navigate = useNavigate();
>>>>>>> 88c8067459997c9299db70982a6b579e532c66de

  return (
    <div className="container">
      <header>
        <h1>Welcome to Travel Planner ✈️</h1>
        <p>Your journey starts here! Plan your next adventure effortlessly.</p>
      </header>

      <div className="buttons">
<<<<<<< HEAD
        <button onClick={() => navigate("/plan")}> {/* Navigate to /plan */}
          Start Planning 🚀
        </button>
        <button onClick={() => alert("Explore Destinations!")}>
          Explore Destinations 🌍
        </button>
      </div>

      <footer>
        <p>Made with ❤️ for travelers</p>
      </footer>
=======
        {/* Fix the navigation button */}
        <button onClick={() => navigate("/plan")}>
          Start Planning 🚀
        </button>
      </div>
>>>>>>> 88c8067459997c9299db70982a6b579e532c66de
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
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
>>>>>>> 88c8067459997c9299db70982a6b579e532c66de

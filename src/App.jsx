import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container">
      <header>
        <h1>Welcome to Travel Planner ✈️</h1>
        <p>Your journey starts here! Plan your next adventure effortlessly.</p>
      </header>

      <div className="buttons">
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
    </div>
  );
}

export default App;
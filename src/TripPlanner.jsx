import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TripPlanner.css";  // Ensure this file exists for styling

function TripPlanner() {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city || !startDate || !days) {
      alert("Please fill out all fields before confirming your trip.");
      return;
    }

    alert(`Trip planned to ${city} starting on ${startDate} for ${days} days!`);
    navigate("/");
  };

  return (
    <div className="trip-container">
      <h1>Plan Your Trip 🗺️</h1>
      <form onSubmit={handleSubmit}>
        <label>🏙️ Destination City:</label>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label>📅 Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label>⏳ Number of Days to Stay:</label>
        <input
          type="number"
          placeholder="Enter number of days"
          min="1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />

        <button type="submit">Confirm Trip 🚀</button>
      </form>
      <button className="back-btn" onClick={() => navigate("/")}>⬅️ Back to Home</button>
    </div>
  );
}

export default TripPlanner;

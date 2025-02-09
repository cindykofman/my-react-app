import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the datepicker
import "./TripPlanner.css"; // Ensure this file exists for styling

const TripPlanner = () => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(null); // Start date as Date object
  const [days, setDays] = useState("");
  const [endDate, setEndDate] = useState(""); // New state for calculated end date
  const navigate = useNavigate();

  // Function to calculate the end date
  const calculateEndDate = (start, days) => {
    if (start && days > 0) {
      const endDateObj = new Date(start);
      endDateObj.setDate(endDateObj.getDate() + parseInt(days));

      // Format the date as "Feb 11, 2025"
      return endDateObj.toLocaleDateString("en-US", {
        month: "short", // "Feb"
        day: "numeric", // "11"
        year: "numeric", // "2025"
      });
    }
    return "";
  };

  // Handle changes to the start date or number of days
  const handleStartDateChange = (date) => {
    setStartDate(date); // Set start date as Date object
    setEndDate(calculateEndDate(date, days)); // Update end date
  };

  const handleNumDaysChange = (e) => {
    const newNumDays = e.target.value;
    setDays(newNumDays);
    setEndDate(calculateEndDate(startDate, newNumDays)); // Update end date
  };

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
        <div className="form-group">
          <label>🏙️ Destination City:</label>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>📅 Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="MMM dd, yyyy" // Format as "Feb 11, 2025"
            placeholderText="Select a start date"
            required
          />
        </div>

        <div className="form-group">
          <label>⏳ Number of Days to Stay:</label>
          <input
            type="number"
            placeholder="Enter number of days"
            min="1"
            value={days}
            onChange={handleNumDaysChange}
            required
          />
        </div>

        <div className="form-group">
          <label>📅 End Date:</label>
          <div id="end-date">{endDate || ""}</div> {/* Display end date as plain text */}
        </div>

        <button type="submit">Confirm Trip 🚀</button>
      </form>

      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅️ Back to Home
      </button>
    </div>
  );
};

export default TripPlanner;

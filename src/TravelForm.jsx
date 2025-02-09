import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the datepicker
import "./TravelForm.css";

const TravelForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null); // Start date as Date object
  const [numDays, setNumDays] = useState(0);
  const [endDate, setEndDate] = useState(""); // New state for calculated end date
  const navigate = useNavigate();

  // Function to calculate the end date
  const calculateEndDate = (start, days) => {
    if (start && days > 0) {
      const endDateObj = new Date(start);
      endDateObj.setDate(endDateObj.getDate() + days);
  
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
    setEndDate(calculateEndDate(date, numDays)); // Update end date
  };

  const handleNumDaysChange = (e) => {
    const newNumDays = parseInt(e.target.value, 10);
    setNumDays(newNumDays);
    setEndDate(calculateEndDate(startDate, newNumDays)); // Update end date
  };

  return (
    <div className="travel-form">
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        Back to Home
      </button>
      <h1>Plan Your Trip</h1>
      <form>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where are you going?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="MMM dd, yyyy" // Display format as "Feb 11, 2025"
            placeholderText="Select a start date"
          />
        </div>

        <div className="form-group">
          <label htmlFor="num-days">Number of Days</label>
          <input
            type="number"
            id="num-days"
            value={numDays}
            onChange={handleNumDaysChange}
            min="1"
          />
        </div>

        {/* Display the calculated end date */}
        {endDate && (
          <div className="form-group">
            <p>
              <strong>Prospective End Date:</strong> {endDate}
            </p>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TravelForm;

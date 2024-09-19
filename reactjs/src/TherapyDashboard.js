import React, { useState, useEffect } from 'react';
import './TherapyDashboard.css';  // Import the CSS for styling

const TherapyDashboard = () => {
  const [therapyData, setTherapyData] = useState(null);

  useEffect(() => {
    // Fetch therapy data (dummy URL used here)
    fetch('/api/therapy')
      .then(response => response.json())
      .then(data => setTherapyData(data));
  }, []);

  return (
    <div className="therapy-dashboard-container">
      <div className="background-animation"></div>
      <div className="content">
        <h1>Therapy Dashboard</h1>
        {therapyData ? (
          <div className="dashboard-info">
            <p><strong>Start Date:</strong> {therapyData.start_date}</p>
            <p><strong>End Date:</strong> {therapyData.end_date}</p>
            <p><strong>Reassessment Date:</strong> {therapyData.reassessment_date}</p>
            <p><strong>Reassessment Score:</strong> {therapyData.reassessment_score}</p>
          </div>
        ) : (
          <p>Loading therapy data...</p>
        )}
      </div>
    </div>
  );
};

export default TherapyDashboard;

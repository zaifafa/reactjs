import React from 'react';
import "../styles/statistics.css";

const Statistics = ({ stats }) => {
    return (
      <div className="statistics">
        <h3>System Statistics</h3>
        <div className="stats-item">
          <p><strong>Total Users:</strong> {stats.totalUsers}</p>
        </div>
        <div className="stats-item">
          <p><strong>Active Users:</strong> {stats.activeUsers}</p>
        </div>
        <div className="stats-item">
          <p><strong>New Signups:</strong> {stats.newSignups}</p>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${stats.activePercentage}%` }}></div>
        </div>
      </div>
    );
  };

export default Statistics;

import React from "react";
import { userData, statistics, messages, projectData } from './data/data'; 
import UserProfile from './Components/userprofile';
import Statistics from './Components/statistics';
import Messages from './Components/messages';
import Project from './Components/project';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to User Dashboard</h1>
      </header>
      <div className="main-content">
        <div className="sidebar">
          <UserProfile user={userData} />
        </div>
        <div className="content">
          <Statistics stats={statistics} />
          <Messages messages={messages} />
          <Project project={projectData} />
        </div>
      </div>
    </div>
  );
};

export default App;

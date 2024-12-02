import React from "react";
import ProfileCard from "./Components/profilecard";

function App() {
  return (
    <div className="app">
      <h1>Krufter Employee Profiles</h1>
      <div className="profile-card-container">
        {/* First card */}
        <ProfileCard
          name="Moosa"
          age={30}
          occupation="Owner"
          location="New York"
        />
        
        <ProfileCard
          name="Ahmed"
          age={25}
          occupation="Designer"
          location="India"
        />
        
        <ProfileCard
          name="Ibrahim"
          age={28}
          occupation="Developer"
          location="Pakistan"
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "../styles/style.css";

const ProfileCard = ({ name, age, occupation, location }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Occupation:</strong> {occupation}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default ProfileCard;

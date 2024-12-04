import React from 'react';
import "../styles/userprofile.css";
import userProfileImage from '../assets/userprofile.png';


const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={userProfileImage} alt="User Profile" className="profileimage" />
      <div className="user-details">
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p className={`role ${user.role.toLowerCase()}`}>{user.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;

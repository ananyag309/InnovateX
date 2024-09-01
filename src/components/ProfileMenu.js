import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-menu">
      <div onClick={() => setIsOpen(!isOpen)} className="profile">
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
        <span className="profile-name">Admin Name</span>
        <i className={`arrow ${isOpen ? 'open' : ''}`}></i>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/profile" onClick={() => setIsOpen(false)}> {/* Navigate to profile page */}
              View Profile
            </Link>
          </li>
          <li>Change Password</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default ProfileMenu;

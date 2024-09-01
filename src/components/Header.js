import React from 'react';
import { Link } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Railway Complaint Management</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/complaints">Complaints</Link>
      </nav>
      <ProfileMenu /> {/* ProfileMenu will contain the link to Profile */}
    </header>
  );
}

export default Header;

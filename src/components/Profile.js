import React from 'react';
import './Profile.css';

const Profile = () => {
    const adminDetails = {
        name: "Admin Name",
        age: "35",
        email: "admin@example.com",
        role: "Administrator",
        contact: "123-456-7890",
        aadhar: "XXXX-XXXX-XXXX"
    };

    return (
        <div className="profile-container">
            <h2 className="profile-header">Admin Profile</h2>
            <div className="profile-section">
                <div className="profile-picture">
                    <img src="profile.jpg" alt="Profile" />
                </div>
                <div className="profile-info">
                    <p><strong>Name:</strong> {adminDetails.name}</p>
                    <p><strong>Age:</strong> {adminDetails.age}</p>
                    <p><strong>Email:</strong> {adminDetails.email}</p>
                    <p><strong>Role:</strong> {adminDetails.role}</p>
                    <p><strong>Contact:</strong> {adminDetails.contact}</p>
                    <p><strong>Aadhar No:</strong> {adminDetails.aadhar}</p>
                </div>
            </div>
            <div className="profile-actions">
                <button className="btn btn-primary">Edit Profile</button>
                <button className="btn btn-secondary">Change Password</button>
            </div>
        </div>
    );
}

export default Profile;

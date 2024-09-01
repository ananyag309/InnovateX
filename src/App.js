import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Complaints from './components/Complaints';
import Profile from './components/Profile'; // Import the Profile component
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
            {/* Add other routes here */}
          </Routes>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

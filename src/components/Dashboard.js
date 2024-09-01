import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';
import { FaTasks, FaCheck, FaSpinner, FaClipboardCheck } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const complaintData = [
  { name: 'Pending', value: 12 },
  { name: 'Approved', value: 8 },
  { name: 'Resolved', value: 20 },
];

const COLORS = ['#FFBB28', '#FF8042', '#0088FE'];

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark' : 'light'}`}>
      <div className="header">
        <h1>Dashboard</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
      <div className="stats-cards">
        <div className="card">
          <FaTasks className="card-icon" />
          <h3>Total Registered Complaints</h3>
          <p>40</p>
        </div>
        <div className="card">
          <FaSpinner className="card-icon" />
          <h3>Pending Complaints</h3>
          <p>12</p>
        </div>
        <div className="card">
          <FaClipboardCheck className="card-icon" />
          <h3>Approved Complaints</h3>
          <p>8</p>
        </div>
        <div className="card">
          <FaCheck className="card-icon" />
          <h3>Resolved Complaints</h3>
          <p>20</p>
        </div>
      </div>
      <div className="chart-container">
        <h3>Complaint Status</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={complaintData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {complaintData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#333', color: '#fff', borderRadius: '8px' }} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;

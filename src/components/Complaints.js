// src/components/Complaints.js
import React, { useState } from 'react';
import './Complaints.css';

const complaints = [
  { id: 1, date: '2024-08-01', category: 'Service', urgency: 'High', status: 'Pending' },
  { id: 2, date: '2024-08-02', category: 'Maintenance', urgency: 'Mid', status: 'Approved' },
  { id: 3, date: '2024-08-03', category: 'Lost Luggage', urgency: 'High', status: 'Resolved' },
  { id: 4, date: '2024-08-04', category: 'Service', urgency: 'Low', status: 'Pending' },
  { id: 5, date: '2024-08-05', category: 'Maintenance', urgency: 'Mid', status: 'Pending' },
  { id: 6, date: '2024-08-06', category: 'Lost Luggage', urgency: 'High', status: 'Approved' },
  { id: 7, date: '2024-08-07', category: 'Security', urgency: 'High', status: 'Resolved' },
  { id: 8, date: '2024-08-08', category: 'Cleanliness', urgency: 'Low', status: 'Pending' },
  { id: 9, date: '2024-08-09', category: 'Maintenance', urgency: 'Mid', status: 'Resolved' },
  { id: 10, date: '2024-08-10', category: 'Service', urgency: 'Low', status: 'Approved' },
  { id: 11, date: '2024-08-11', category: 'Lost Luggage', urgency: 'High', status: 'Pending' },
  { id: 12, date: '2024-08-12', category: 'Security', urgency: 'High', status: 'Approved' },
  { id: 13, date: '2024-08-13', category: 'Cleanliness', urgency: 'Low', status: 'Resolved' },
  { id: 14, date: '2024-08-14', category: 'Service', urgency: 'Mid', status: 'Resolved' },
  { id: 15, date: '2024-08-15', category: 'Lost Luggage', urgency: 'High', status: 'Pending' },
  // More complaints can be added as needed...
];

function Complaints() {
  const [sortKey, setSortKey] = useState('id');
  const [filterStatus, setFilterStatus] = useState('');

  const sortedComplaints = [...complaints].sort((a, b) => {
    if (sortKey === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  const filteredComplaints = sortedComplaints.filter(
    (complaint) => !filterStatus || complaint.status === filterStatus
  );

  return (
    <div className="complaints">
      <h2>Complaints Management</h2>
      <div className="filters">
        <label>
          Sort by:
          <select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
            <option value="id">ID</option>
            <option value="date">Date</option>
            <option value="category">Category</option>
          </select>
        </label>
        <label>
          Filter by status:
          <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Resolved">Resolved</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Category</th>
            <th>Urgency</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.date}</td>
              <td>{complaint.category}</td>
              <td>{complaint.urgency}</td>
              <td>{complaint.status}</td>
              <td>
                <button>Approve</button>
                <button>Resolve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Complaints;

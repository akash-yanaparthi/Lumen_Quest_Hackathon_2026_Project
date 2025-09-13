// src/pages/UserDashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md px-4 py-3 flex justify-between">
        <h1 className="text-xl font-bold">User Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
      <main className="p-8">
        <h2 className="text-2xl mb-4">Welcome, {user?.email}</h2>
        <p className="mb-6">Here are the available subscription plans:</p>
        <Link
          to="/plans"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Plans
        </Link>
      </main>
    </div>
  );
};

export default UserDashboard;

// src/pages/AdminDashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md px-4 py-3 flex justify-between">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
      <main className="p-8">
        <h2 className="text-2xl mb-4">Welcome, {user?.email}</h2>
        <p className="mb-6">Here you can manage subscription plans and users.</p>
        {/* Example: a list of plans with CRUD options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold">Plan A</h3>
            <p>Price: $10/month</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold">Plan B</h3>
            <p>Price: $20/month</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

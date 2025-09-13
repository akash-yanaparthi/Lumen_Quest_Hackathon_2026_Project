// src/pages/Subscribe.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Subscribe = () => {
  const { planId } = useParams();
  const { user } = useAuth();
  const [status, setStatus] = useState(null);

  const handleSubscribe = () => {
    // Call backend to subscribe user to planId
    setStatus('success');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Subscribe Page</h2>
        <p className="mb-4">Plan: <span className="font-semibold">{planId}</span></p>
        <p className="mb-4">User: {user?.email}</p>
        {status === 'success' ? (
          <p className="text-green-600">Subscription successful!</p>
        ) : (
          <button
            onClick={handleSubscribe}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Confirm Subscription
          </button>
        )}
      </div>
    </div>
  );
};

export default Subscribe;

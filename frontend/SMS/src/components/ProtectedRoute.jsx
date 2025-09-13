// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Show loading spinner or placeholder
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Optional: redirect or display "Not authorized"
    return <div className="p-8 text-center text-red-500">Not authorized to view this page</div>;
  }

  return <Outlet />;
};

export default ProtectedRoute;

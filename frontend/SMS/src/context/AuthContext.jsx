// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy functions: replace with actual API / Firebase etc.
const fakeAuthApi = {
  login: async ({ email, password, role }) => {
    // call backend, return user object, token etc
    // here dummy:
    if (email && password) {
      return { email, role, token: 'fake-token' };
    }
    throw new Error('Invalid credentials');
  },
  signup: async ({ email, password, role }) => {
    // call backend to create user
    return { email, role, token: 'fake-token' };
  },
};

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // { email, role, token }
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // On mount, check localStorage
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password, role }) => {
    let endpoint;
    if (role === 'admin') {
      endpoint = 'http://localhost:5000/signup/admin/login';
    } else {
      endpoint = 'http://localhost:5000/signup/user/login';
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.msg || 'Login failed');

    // Save token and user info to localStorage or state as needed
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    // Optionally update context state here
    return data;
  };

  const signup = async ({ email, password, role }) => {
    const u = await fakeAuthApi.signup({ email, password, role });
    setUser(u);
    localStorage.setItem('user', JSON.stringify(u));
    if (u.role === 'admin') navigate('/admin/dashboard');
    else navigate('/user/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

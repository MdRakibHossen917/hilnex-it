// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// ✅ AuthContext কে export করুন
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on app start
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    console.log("🔍 AuthProvider Checking:", { token, userData, userName, userEmail });

    if (token) {
      setIsLoggedIn(true);
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUser({
            name: userName || 'User',
            email: userEmail || ''
          });
        }
      } else {
        setUser({
          name: userName || 'User',
          email: userEmail || ''
        });
      }
      console.log("✅ AuthProvider: User is authenticated");
    } else {
      setIsLoggedIn(false);
      setUser(null);
      console.log("❌ AuthProvider: User is not authenticated");
    }
    setLoading(false);
  };

  const login = (userData, token) => {
    console.log("🔑 AuthProvider Login:", userData);
    
    localStorage.setItem('authToken', token || 'user-authenticated');
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userEmail', userData.email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));

    setIsLoggedIn(true);
    setUser(userData);
  };

  const register = (userData, token) => {
    console.log("👤 AuthProvider Register:", userData);
    
    localStorage.setItem('authToken', token || 'user-registered');
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userEmail', userData.email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));

    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    console.log("🚪 AuthProvider Logout");
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');

    setIsLoggedIn(false);
    setUser(null);
  };

  const value = {
    isLoggedIn,
    user,
    loading,
    login,
    register,
    logout,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
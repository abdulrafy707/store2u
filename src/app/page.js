'use client';

import { useState, useEffect } from 'react';
import Login from './customer/pages/login/page';
// import Login from '../customer/pages/login/page';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Welcome to the Home Page</h1>
      {/* Add any other content you want to display after login here */}
    </main>
  );
}

import React from 'react';
import LogoutButton from './LogoutButton';

const Header = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl">My App</h1>
      <LogoutButton logout={logout} />
    </header>
  );
};

export default Header;

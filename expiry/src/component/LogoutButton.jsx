import React from 'react';

const LogoutButton = ({ logout }) => {
  return (
    <button
      onClick={logout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

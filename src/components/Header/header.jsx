// src/components/Header.jsx
import React from 'react';

const Header = ({ links, userName }) => {
  return (
    <header className="bg-blue-500 text-white p-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="" alt="Logo" className="h-10 mr-4" /> 
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-gray-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <span>{userName}</span>
          <img src="" alt="User Avatar" className="h-8 w-8 rounded-full border border-white" /> 
        </div>
      </div>
    </header>
  );
};

export default Header;

// src/components/Header.jsx
import React from 'react';

export default function Header_APP({ links, userName }) {
  return (
    <header className="w-full fixed top-0 left-0 bg-blue-500 text-white flex items-center justify-between px-6 py-3 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <span>{userName}</span>
          <img
            src="/user-icon.png"
            alt="User Icon"
            className="h-8 w-8 rounded-full bg-white p-1"
          />
        </div>
      </div>
    </header>
  );
}

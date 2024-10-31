// src/components/Header.jsx
import React, { useState } from 'react';
import Logo from "../../assets/logo.svg"
import Avarta from "../../assets/avarta.svg"

export default function Header_APP({ links, userName, highlightedIndex }) {
  const [activeLink, setActiveLink] = useState(null); // State to track active link

  const handleLinkClick = (label) => {
    setActiveLink(activeLink === label ? null : label); // Toggle active link
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-[#46A0DE] text-white flex items-center justify-between px-4 py-3">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        {/* Navigation Links */}
        <nav className="flex">
          {links.map((link, index) => (
            <div key={link.label} className="relative">
              <a
                href={link.href}
                className={`px-5 py-4 text-white transition-colors ${
                  index === highlightedIndex ? 'bg-[#1488D8]' : 'hover:bg-[#1488D8]'
                } hover:text-black`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleLinkClick(link.label); // Handle link click
                }}
              >
                {link.label}
              </a>
              {/* Dropdown menu for 'Setting' */}
              {link.subLinks && activeLink === link.label && (
                <div className="absolute left-0 mt-2 bg-[#46A0DE] text-white shadow-lg rounded">
                  {link.subLinks.map((subLink) => (
                    <a
                      key={subLink.label}
                      href={subLink.href}
                      className="block px-5 py-3 text-white hover:text-black hover:bg-[#1488D8] transition-colors"
                    >
                      {subLink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* User Info (đẩy về bên phải) */}
        <div className="flex items-center space-x-2 ml-auto">
          <span>{userName}</span>
          <img
            src={Avarta}
            alt="User Icon"
            className="h-8 w-8 rounded-full p-1"
          />
        </div>
      </div>
    </header>
  );
}


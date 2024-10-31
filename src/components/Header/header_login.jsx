// src/components/Header.jsx
import React, { useState } from 'react';
import Logo from "../../assets/login.jpg"


export default function Header_Login({ links, userName, highlightedIndex }) {
  const [activeLink, setActiveLink] = useState(null); // State to track active link

  const handleLinkClick = (label) => {
    setActiveLink(activeLink === label ? null : label); // Toggle active link
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-[#46A0DE] text-white flex items-center justify-between px-4 py-2">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
      </div>
    </header>
  );
}


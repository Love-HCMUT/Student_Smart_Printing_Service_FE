// src/components/Header.jsx
import React, { useState } from "react";
import Logo from "../../assets/login.jpg";
import { NavLink } from "react-router-dom";

export default function Header_Login({ links, userName, highlightedIndex }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (label) => {
    setActiveLink(activeLink === label ? null : label);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-[#46A0DE] text-white flex items-center justify-between px-4 py-2">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
      </div>
      <NavLink to={`login`} className="items-end">
        Login
      </NavLink>
    </header>
  );
}

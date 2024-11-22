// src/components/Header.jsx
import React, { useState } from "react";
import Logo from "../../assets/login.jpg";
import { NavLink } from "react-router-dom";

export default function Header_Login({
  links = [
    { label: "Home", href: "#home" },
    { label: "Manage Printer", href: "#manage-printer" },
    { label: "Log", href: "#log" },
    {
      label: "Setting",
      href: "#setting",
      subLinks: [
        { label: "Paper", href: "#paper" },
        { label: "File", href: "#file" },
      ],
    },
    { label: "Report", href: "#report" },
  ],
  userName = "Dương Hải Lâm",
  highlightedIndex = 0,
}) {
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

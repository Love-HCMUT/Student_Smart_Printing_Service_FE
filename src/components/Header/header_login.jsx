// src/components/Header.jsx
import React, { useState } from "react";
import Logo from "../../assets/login.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      <NavLink onClick={() => navigate("/login")} className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 ml-4 items-end">
        Login
      </NavLink>
    </header>
  );
}
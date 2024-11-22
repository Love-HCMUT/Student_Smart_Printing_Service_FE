// src/components/Header.jsx
import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Avarta from "../../assets/avarta.svg";
import { NavLink } from "react-router-dom";

// onLogout là function để gửi yêu cầu tới server,.... và chuyển hướng ra trang login
export default function Header_APP({
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
  onLogout,
}) {
  const [activeLink, setActiveLink] = useState("Home");
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link.label);
    if (link.subLinks) {
      setShowSubLinks(true);
    }
    console.log(showSubLinks, activeLink, link.label);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-[#1488D8] text-white flex items-center justify-between px-4 py-3">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        <nav className="flex">
          {links.map((link, index) => (
            <div key={link.label} className="relative">
              {link.subLinks ? (
                <a
                  className={`px-5 py-4 h-[40px] text-white transition-colors ${
                    activeLink === link.label ? "bg-[#030391]" : "bg-[#1488D8]"
                  } hover:opacity-50`}
                  onClick={(e) => {
                    // e.preventDefault();
                    handleLinkClick(link);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.href}
                  className={`px-5 py-4 h-[40px] text-white transition-colors ${
                    activeLink === link.label ? "bg-[#030391]" : "bg-[#1488D8]"
                  } hover:opacity-50`}
                  onClick={(e) => {
                    // e.preventDefault();
                    handleLinkClick(link);
                  }}
                >
                  {link.label}
                </NavLink>
              )}

              {link.subLinks && activeLink === link.label && showSubLinks && (
                <div className="absolute left-0 mt-2 bg-[#1488D8] text-white shadow-lg rounded">
                  {link.subLinks.map((subLink) => (
                    <NavLink
                      key={subLink.label}
                      to={subLink.href}
                      className="block px-5 py-3 text-white hover:text-black hover:bg-[#1488D8] transition-colors"
                      onClick={() => setShowSubLinks(false)}
                    >
                      {subLink.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-2 ml-auto">
          <span>{userName}</span>
          <img
            src={Avarta}
            alt="User Icon"
            className="h-8 w-8 rounded-full p-1"
          />
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 ml-4"
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
}

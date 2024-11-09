// src/components/Header.jsx
import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Avarta from "../../assets/avarta.svg";
import { NavLink } from "react-router-dom";

export default function Header_APP({ links, userName, highlightedIndex }) {
  const [activeLink, setActiveLink] = useState(null);
  const [currentTab, setCurrentTab] = useState(highlightedIndex);
  const handleLinkClick = (label, index) => {
    setCurrentTab(index);
  };
  const handleOnMouseover = () => {
    setActiveLink(activeLink === label ? null : label);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-[#46A0DE] text-white flex items-center justify-between px-4 py-3">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        <nav className="flex">
          {links.map((link, index) => (
            <div
              key={link.label}
              className="relative"
              onMouseOver={() => handleOnMouseover()}
            >
              <NavLink
                to={link.href}
                className={`px-5 py-4 text-white transition-colors ${
                  index === currentTab ? "bg-[#1488D8]" : "hover:bg-[#1488D8]"
                } hover:text-black`}
                onClick={(e) => {
                  // e.preventDefault();
                  handleLinkClick(link.label, index);
                }}
              >
                {link.label}
              </NavLink>

              {link.subLinks && activeLink === link.label && (
                <div className="absolute left-0 mt-2 bg-[#46A0DE] text-white shadow-lg rounded">
                  {link.subLinks.map((subLink) => (
                    <NavLink
                      key={subLink.label}
                      to={subLink.href}
                      className="block px-5 py-3 text-white hover:text-black hover:bg-[#1488D8] transition-colors"
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
        </div>
      </div>
    </header>
  );
}

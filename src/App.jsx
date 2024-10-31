// src/App.jsx
import React from "react";
import Header_APP from "./components/Header/header";
import Footer from "./components/Footer/footer"
import Header_Login from "./components/Header/header_login"
import LoginForm from "./components/Login/login"
function HeaderApp() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Manage Printer', href: '#manage-printer' },
    { label: 'Log', href: '#log' },
    {
      label: 'Setting',
      href: '#setting',
      subLinks: [
        { label: 'Paper', href: '#paper' },
        { label: 'File', href: '#file' },
      ],
    },
    { label: 'Report', href: '#report' },
  ];

  const userName = "Phan Tuấn Kiệt";

  return (
    <div className="App">
      <Header_Login/>
      {/* Nội dung chính */}
      <main><LoginForm/></main>
      <Footer/>
    </div>
  );
}

export default HeaderApp;

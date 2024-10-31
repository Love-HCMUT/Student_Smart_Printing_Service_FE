// src/App.jsx
import React from "react";
import Header_APP from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Header_Login from "./components/Header/header_login";
import LoginForm from "./components/Login/login";
import WelcomeBanner from "./components/Home/home";
import backgroundImage from './assets/background.jpg';

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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header_APP links={links} userName={userName} />

      {/* Main Content with Background Image */}

      <main 
        className="flex-grow bg-cover flex items-center justify-start p-10 pt-5"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Move WelcomeBanner to the left */}
        <div className="ml-[70px] mt-[-150px]">
          <WelcomeBanner userName={userName} />
        </div>
      </main>
      
      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
}

export default HeaderApp;

// src/App.jsx
import React from "react";
import Header_APP from "../components/Header/header";
import Footer from "../components/Footer/footer";
import WelcomeBanner from "../components/Home/home";
import backgroundImage from '../assets/background.jpg';

function Home_App() {
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
  <header className="fixed top-0 left-0 w-full z-50">
    <Header_APP links={links} userName={userName} />
  </header>

  {/* Main Content with Background Image */}
  <main 
    className="flex-grow bg-cover flex items-center justify-start min-h-screen" // Tăng khoảng cách với `pt-20` để tránh bị header che
  >
    {/* Move WelcomeBanner to the left */}
    <div >
      <WelcomeBanner userName={userName} />
    </div>
  </main>

  {/* Footer Stays at Bottom */}
  <footer >
    <Footer />

</footer>
</div>

  );
}

export default Home_App;
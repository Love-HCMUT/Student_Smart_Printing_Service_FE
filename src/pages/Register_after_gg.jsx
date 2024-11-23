// src/App.jsx
import React from "react";
import Footer from "../components/Footer/footer"
import Header_Login from "../components/Header/header_login"
import RegisterForm from "../components/Login/register_after_gg"
function Register_after_gg() {
  return (
    <div className="App">
    {/* Header */}
    <header className="fixed top-0 left-0 w-full z-50">
      <Header_Login />
    </header>
  
    {/* Main Content with Background Image */}
            <main className="pt-20 pb-50 "><RegisterForm/></main>
  
    {/* Footer Stays at Bottom */}
    <footer className="mt-16">
    <Footer />
  </footer>
    
  </div>
  );
}

export default Register_after_gg;

// src/App.jsx
import React from "react";
import Footer from "../components/Footer/footer"
import Header_Login from "../components/Header/header_login"
import LoginForm from "../components/Login/login"
function Login_page() {
  return (
    <div className="App">
    {/* Header */}
    <header className="fixed top-0 left-0 w-full z-50">
      <Header_Login />
    </header>
  
    {/* Main Content with Background Image */}
            <main><LoginForm/></main>
  
    {/* Footer Stays at Bottom */}
    <Footer />
  </div>
  );
}

export default Login_page;

// src/App.jsx
import React from "react";
import Footer from "../components/Footer/footer"
import Header_Login from "../components/Header/header_login"
import LoginForm from "../components/Login/login"
function Login_page() {
  return (
    <div className="App">
      <Header_Login/>
      <main><LoginForm/></main>
      <Footer/>
    </div>
  );
}

export default Login_page;

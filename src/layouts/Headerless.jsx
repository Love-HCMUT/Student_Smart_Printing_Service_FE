// src/App.jsx
import React from "react";
import Footer from "../components/Footer/footer";
import LoginForm from "../components/Login/login";

function HeaderlessLayout() {
  return (
    <div className="App">
      {/* Main Content with Background Image */}
      <main>
        <LoginForm />
      </main>

      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
}

export { HeaderlessLayout };

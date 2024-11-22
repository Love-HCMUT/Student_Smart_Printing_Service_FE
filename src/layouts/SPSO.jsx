// src/App.jsx
import React from "react";
import Footer from "../components/Footer/footer";
import LoginForm from "../components/Login/login";
import { SPSOHeader } from "../components/demo/SPSOHeader";
import { Outlet } from "react-router-dom";

function SPSOLayout() {
  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <SPSOHeader />
      </header>

      {/* Main Content with Background Image */}
      <main className="mt-10">
        <Outlet />
      </main>

      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
}

export { SPSOLayout };

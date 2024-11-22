// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import LoginForm from "../components/Login/login";
import { StaffHeader } from "../components/demo/StaffHeader";

function StaffLayout() {
  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <StaffHeader />
      </header>

      {/* Main Content with Background Image */}
      <main className="mt-[3.5rem] mx-auto min-h-[70vh]">
        <Outlet />
      </main>

      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
}

export { StaffLayout };

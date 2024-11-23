// src/App.jsx
import React from "react";
import Footer from "../components/Footer/footer";
import { UserHeader } from "../components/demo/UserHeader";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <UserHeader />
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

export { UserLayout };

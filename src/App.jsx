import { MainTable } from "./components/Table/MainTable";
// src/App.jsx
import React from "react";
import { Header } from "./components/Table/Header/header";

function HeaderApp() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Manage Printer", href: "#manage-printer" },
    { label: "Log", href: "#log" },
    { label: "Setting", href: "#setting" },
    { label: "Report", href: "#report" },
  ];

  const userName = "Phan Tuấn Kiệt";

  return (
    <div className="App">
      <Header links={links} userName={userName} />
      {/* Nội dung chính */}
      <main className="p-4">
        <h2 className="text-xl">Welcome to the Dashboard!</h2>
      </main>
    </div>
  );
}

export default HeaderApp;

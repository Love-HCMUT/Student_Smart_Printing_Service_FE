// src/App.jsx
import React from "react";
import Header_APP from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Header_Login from "./components/Header/header_login";
import LoginForm from "./components/Login/login";
import WelcomeBanner from "./components/Home/home";
import backgroundImage from "./assets/background.jpg";
import PrinterForm from "./components/Form/Printer_form";
import PackageForm from "./components/Form/Package_form";
import InfoCards from "./components/Card/Info_card";
function HeaderApp() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Manage Printer", href: "#manage-printer" },
    { label: "Log", href: "#log" },
    {
      label: "Setting",
      href: "#setting",
      subLinks: [
        { label: "Paper", href: "#paper" },
        { label: "File", href: "#file" },
      ],
    },
    { label: "Report", href: "#report" },
  ];

  const userName = "Phan Tuấn Kiệt";

  return (
    <div className="App flex flex-col min-h-screen">
      {" "}
      {/* Set to flex and full height */}
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header_APP links={links} userName={userName} />
      </header>
      {/* Main Content with Background Image */}
      <main className="flex-grow pt-16">
        {" "}
        {/* Allow main to grow and add padding */}
        {/* Move WelcomeBanner to the left */}
        <PrinterForm />
        {/* <PackageForm 
    documents={["Document name.pdf", "Another document.pdf"]} // Pass documents as an array
    papers="10"
    sides="2"
    copies="1"
    scale="100%"
    paperSize="A4"
    paperSheet="1"
    printingPages={[
        { fromPage: "1", endPage: "10", isColor: "True", orientation: "Portrait" },
        { fromPage: "11", endPage: "20", isColor: "False", orientation: "Landscape" }
    ]}
    isCover="True"
    isGlass="False"
    isBinding="True"
    isColorAllPages="True"
    isColorCover="False"
/> */}
        {/* <InfoCards 
  totalPapers="357" 
  paperSize="A4 - papers" 
  recentTransitions={[
    { color: 'red', text: '400 papers at 12/12/2024 ' },
    { color: 'green', text: '200 papers at 01/01/2025 ' },
    { color: 'green', text: '200 papers at 01/01/2025 ' },
  ]}
/> */}
      </main>
      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
}

export default App;

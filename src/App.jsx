// // src/App.jsx
// import React from "react";
// // Components
// import InfoCards from "./components/Card/Info_card";
// import Files from "./components/Files/Files.jsx";
// import Footer from "./components/Footer/footer.jsx";
// import PackageForm from "./components/Form/Package_form.jsx";
// import PrinterForm from "./components/Form/Printer_form.jsx";
// import Header_Login from "./components/Header/header_login.jsx";
// import Header_APP from "./components/Header/header.jsx";
// import WelcomeBanner from "./components/Home/home.jsx";
// import LoginForm from "./components/Login/login.jsx";
// import RegisterForm from "./components/Login/register.jsx";
// import Announce from "./components/Order/Announce.jsx";
// import ConfirmPackage from "./components/Order/ConfirmPackage.jsx";
// import { Detail } from "./components/ReportDetail/Detail.jsx";
// import { ReportList } from "./components/ReportList/ReportList.jsx";
// import { PSMainTable } from "./components/Table/PS/orders_tables.jsx";
// import { Printers_list } from "./components/Table/PS/printers_list.jsx";
// import AuthorizationTable from "./components/Table/SPSO/Authorization/authorization_table.jsx";
// import PageSettingTable from "./components/Table/SPSO/PageSetting/page_setting_tables.jsx";
// import PaymentHistoryTable from "./components/Table/SPSO/PaymentHistory/payment_history_table.jsx";
// import PrinterManagerTable from "./components/Table/SPSO/PrinterManager/printer_manager_table.jsx";
// import PrintingHistoryPayment from "./components/Table/SPSO/PrintingHistory/printing_history_table.jsx";
// import OrdersHistoryPayment from "./components/Table/Student/Payment/orders_history_payment.jsx";
// import PrinterTable from "./components/Table/Student/Printer/printer_table.jsx";
// import OrdersHistoryTable from "./components/Table/Student/Printing/orders_history_tables.jsx";
// // Pages
// import LoginPage from "./pages/Login_page.jsx";
// import ConfirmOrderPage from "./pages/ConfirmOrderPage.jsx";
// import { PreLogin } from "./components/demo/PreLogin.jsx";
// import * as layout from "./layouts/index.js";
// import Home_App from "./pages/Home_page.jsx";

// const App = () => {
//   return <PreLogin />;
// };

// export default App;




// src/App.jsx
import React from "react";
import Header_APP from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Header_Login from "./components/Header/header_login";
import LoginForm from "./components/Login/login";
import WelcomeBanner from "./components/Home/home";
import backgroundImage from './assets/background.jpg';
import PrinterForm from "./components/Form/Printer_form";
import PackageForm from "./components/Form/Package_form";
import InfoCards from "./components/Card/Info_card";
function HeaderApp() {
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
    <div className="App flex flex-col min-h-screen"> {/* Set to flex and full height */}
  {/* Header */}

  {/* Main Content with Background Image */}
   <main className="flex-grow pt-16"> {/* Allow main to grow and add padding */}
    {/* Move WelcomeBanner to the left */}
    <PrinterForm printerId={1} />
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
  
</div>


  );
}

export default HeaderApp;

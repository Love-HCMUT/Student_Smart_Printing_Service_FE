// src/App.jsx
import React from "react";
// Components
import InfoCards from "./components/Card/Info_card";
import Files from "./components/Files/Files.jsx";
import Footer from "./components/Footer/footer.jsx";
import PackageForm from "./components/Form/Package_form.jsx";
import PrinterForm from "./components/Form/Printer_form.jsx";
import Header_Login from "./components/Header/header_login.jsx";
import Header_APP from "./components/Header/header.jsx";
import WelcomeBanner from "./components/Home/home.jsx";
import LoginForm from "./components/Login/login.jsx";
import RegisterForm from "./components/Login/register.jsx";
import Announce from "./components/Order/Announce.jsx";
import ConfirmPackage from "./components/Order/ConfirmPackage.jsx";
import { Detail } from "./components/ReportDetail/Detail.jsx";
import { ReportList } from "./components/ReportList/ReportList.jsx";
import { PSMainTable } from "./components/Table/PS/orders_tables.jsx";
import { Printers_list } from "./components/Table/PS/printers_list.jsx";
import AuthorizationTable from "./components/Table/SPSO/Authorization/authorization_table.jsx";
import PageSettingTable from "./components/Table/SPSO/PageSetting/page_setting_tables.jsx";
import PaymentHistoryTable from "./components/Table/SPSO/PaymentHistory/payment_history_table.jsx";
import PrinterManagerTable from "./components/Table/SPSO/PrinterManager/printer_manager_table.jsx";
import PrintingHistoryPayment from "./components/Table/SPSO/PrintingHistory/printing_history_table.jsx";
import OrdersHistoryPayment from "./components/Table/Student/Payment/orders_history_payment.jsx";
import PrinterTable from "./components/Table/Student/Printer/printer_table.jsx";
import OrdersHistoryTable from "./components/Table/Student/Printing/orders_history_tables.jsx";
// Pages
import LoginPage from "./pages/Login_page.jsx";
import ConfirmOrderPage from "./pages/ConfirmOrderPage.jsx";
import { PreLogin } from "./components/demo/PreLogin.jsx";
import * as layout from "./layouts/index.js";
import Home_App from "./pages/Home_page.jsx";

const App = () => {
  return <PreLogin />;
};

export default App;

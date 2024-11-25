import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";


import App from "./App.jsx";

import { PreLogin } from "./components/demo/PreLogin.jsx";
import LoginPage from "./pages/Login_page.jsx";
import {
  HeaderlessLayout,
  UserLayout,
  SPSOLayout,
  StaffLayout,
} from "./layouts/index.js";
import WelcomeBanner from "./components/Home/home.jsx";
import { UserBalance } from "./components/demo/UserBalance.jsx";
import OrdersHistoryTable from "./components/Table/Student/Printing/orders_history_tables.jsx";
import { UserOrder } from "./components/demo/UserOrder.jsx";
import { Printers_list } from "./components/Table/PS/printers_list.jsx";
import PrinterManagerTable from "./components/Table/SPSO/PrinterManager/printer_manager_table.jsx";
import { ReportList } from "./components/ReportList/ReportList.jsx";
import { Detail } from "./components/ReportDetail/Detail.jsx";
import { SPSOLog } from "./components/demo/SPSOLog.jsx";
import PrintingHistoryPayment from "./components/Table/SPSO/PrintingHistory/printing_history_table.jsx";
import PaymentHistoryTable from "./components/Table/SPSO/PaymentHistory/payment_history_table.jsx";
import { SPSOSetting } from "./components/demo/SPSOSetting.jsx";
import PageSettingTable from "./components/Table/SPSO/PageSetting/page_setting_tables.jsx";
import Files from "./components/Files/Files.jsx";
import AuthorizationTable from "./components/Table/SPSO/Authorization/authorization_table.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import PrinterTable from "./components/Table/Student/Printer/printer_table.jsx";
import ConfirmOrderPage from "./pages/ConfirmOrderPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import Register_page from "./pages/Register_page.jsx";
import RegisterForm from "./components/Login/register.jsx";
import SettingPaper from "./pages/SettingPaper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PreLogin />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <WelcomeBanner userName={"Dương Hải Lâm"} />,
      },
      {
        path: "/user/balance",
        element: <UserBalance />,
      },
      {
        path: "/user/balance/deposit",
        element: <PaymentPage />,
      },
      {
        path: "/user/balance",
        element: <UserBalance />,
      },
      {
        path: "/user/history",
        element: <OrdersHistoryTable />,
      },
      {
        path: "/user/order",
        element: <OrderPage />,
      },
      {
        path: "/user/order/printer",
        element: <PrinterTable />,
      },
      {
        path: "/user/order/confirm",
        element: <ConfirmOrderPage />,
      },
    ],
  },
  {
    path: "/staff",
    element: <StaffLayout />,
    children: [
      {
        index: true,
        element: <WelcomeBanner userName={"Dương Hải Lâm"} />,
      },
      {
        path: "/staff/printing",
        element: <Printers_list />,
      },
    ],
  },
  {
    path: "/spso",
    element: <SPSOLayout />,
    children: [
      {
        index: true,
        element: <WelcomeBanner userName={"Dương Hải Lâm"} />,
      },
      {
        path: "/spso/printer",
        element: <PrinterManagerTable />,
      },
      {
        path: "/spso/report",
        element: <ReportList />,
      },
      {
        path: "/spso/report/detail",
        element: <Detail />,
      },
      {
        path: "/spso/log/printing",
        element: <PrintingHistoryPayment />,
      },
      {
        path: "/spso/log/payment",
        element: <PaymentHistoryTable />,
      },
      {
        path: "/spso/setting/paper",
        element: <SettingPaper />,
      },
      {
        path: "/spso/setting/file",
        element: <Files />,
      },
      {
        path: "/spso/author",
        element: <RegisterForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
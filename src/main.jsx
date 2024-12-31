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
import TransactionHistoryPage from "./pages/TransactionHistoryPage.jsx";
import ManagePrinterPage from "./pages/ManagePrinterPage.jsx";
import ManageTransactionPage from "./pages/ManageTransactionPage.jsx";
import RegisterFormSPSO from "./components/Login/register-spso.jsx";
import ProtectedRoute from "./helpers/index.jsx";

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
    path: "/register",
    element: <Register_page />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute element={<WelcomeBanner />} requiredRole="User" />
        ),
      },
      {
        path: "/user/balance",
        element: (
          <ProtectedRoute element={<UserBalance />} requiredRole="User" />
        ),
      },
      {
        path: "/user/balance/deposit",
        element: (
          <ProtectedRoute element={<PaymentPage />} requiredRole="User" />
        ),
      },
      {
        path: "/user/balance",
        element: (
          <ProtectedRoute element={<UserBalance />} requiredRole="User" />
        ),
      },
      {
        path: "/user/history",
        element: (
          <ProtectedRoute
            element={<TransactionHistoryPage />}
            requiredRole="User"
          />
        ),
      },
      {
        path: "/user/order",
        element: <ProtectedRoute element={<OrderPage />} requiredRole="User" />,
      },
      {
        path: "/user/order/printer",
        element: (
          <ProtectedRoute element={<PrinterTable />} requiredRole="User" />
        ),
      },
      {
        path: "/user/order/confirm",
        element: (
          <ProtectedRoute element={<ConfirmOrderPage />} requiredRole="User" />
        ),
      },
    ],
  },
  {
    path: "/staff",
    element: <StaffLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute
            element={<WelcomeBanner />}
            requiredRole="Printing Staff"
          />
        ),
      },
      {
        path: "/staff/printing",
        element: (
          <ProtectedRoute
            element={<Printers_list />}
            requiredRole="Printing Staff"
          />
        ),
      },
    ],
  },
  {
    path: "/spso",
    element: <SPSOLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute element={<WelcomeBanner />} requiredRole="SPSO" />
        ),
      },
      {
        path: "/spso/printer",
        element: (
          <ProtectedRoute
            element={<PrinterManagerTable />}
            requiredRole="SPSO"
          />
        ),
      },
      {
        path: "/spso/report",
        element: (
          <ProtectedRoute element={<ReportList />} requiredRole="SPSO" />
        ),
      },
      {
        path: "/spso/report/detail",
        element: <ProtectedRoute element={<Detail />} requiredRole="SPSO" />,
      },
      {
        path: "/spso/log/printing",
        element: (
          <ProtectedRoute element={<ManagePrinterPage />} requiredRole="SPSO" />
        ),
      },
      {
        path: "/spso/log/payment",
        element: (
          <ProtectedRoute
            element={<ManageTransactionPage />}
            requiredRole="SPSO"
          />
        ),
      },
      {
        path: "/spso/setting/paper",
        element: (
          <ProtectedRoute element={<SettingPaper />} requiredRole="SPSO" />
        ),
      },
      {
        path: "/spso/setting/file",
        element: <ProtectedRoute element={<Files />} requiredRole="SPSO" />,
      },
      {
        path: "/spso/author",
        element: (
          <ProtectedRoute element={<RegisterFormSPSO />} requiredRole="SPSO" />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <div className="bg-gray-100"> */}
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </div> */}
  </StrictMode>
  // <RouterProvider router={router} />
);

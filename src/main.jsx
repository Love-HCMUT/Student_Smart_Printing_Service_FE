import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "regenerator-runtime/runtime";
import "./styles/index.css";
import LoginForm from "./components/Login/login";
import { PreLogin } from "./components/demo/PreLogin";
import { AfterLogin } from "./components/demo/AfterLogin";
import { UserRoot } from "./components/demo/UserRoot";
import { StaffRoot } from "./components/demo/StaffRoot";
import { SPSORoot } from "./components/demo/SPSORoot";
import { SPSOLog } from "./components/demo/SPSOLog";
import WelcomeBanner from "./components/Home/home";
import PrinterManagerTable from "./components/Table/SPSO/PrinterManager/printer_manager_table";
import { ReportList } from "./components/ReportList/ReportList";
import PrintingHistoryPayment from "./components/Table/SPSO/PrintingHistory/printing_history_table";
import PaymentHistoryTable from "./components/Table/SPSO/PaymentHistory/payment_history_table";
import { SPSOSetting } from "./components/demo/SPSOSetting";
import { Files } from "./components/Files/Files";
import PageSettingTable from "./components/Table/SPSO/PageSetting/page_setting_tables";
import { Printers_list } from "./components/Table/PS/printers_list";
import { Detail } from "./components/ReportDetail/Detail";
import InfoCards from "./components/Card/Info_card";
import OrdersHistoryPayment from "./components/Table/Student/Payment/orders_history_payment";
import OrdersHistoryTable from "./components/Table/Student/Printing/orders_history_tables";
import Package from "./components/Order/Package";
import Note from "./components/Payment/Note";
import { UserOrder } from "./components/demo/UserOrder";
import { UserBalance } from "./components/demo/UserBalance";
import AuthorizationTable from "./components/Table/SPSO/Authorization/authorization_table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PreLogin />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/login/loginSuccess",
    element: <AfterLogin />,
  },
  {
    path: "/user",
    element: <UserRoot />,
    children: [
      {
        path: "/user/home",
        element: <WelcomeBanner userName={"Dương Hải Lâm"} />,
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
        element: <UserOrder />,
      },
    ],
  },
  {
    path: "/staff",
    element: <StaffRoot />,
    children: [
      {
        path: "/staff/home",
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
    element: <SPSORoot />,
    children: [
      {
        path: "/spso/home",
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
        path: "/spso/log",
        element: <SPSOLog />,
        children: [
          {
            path: "/spso/log/printing",
            element: <PrintingHistoryPayment />,
          },
          {
            path: "/spso/log/payment",
            element: <PaymentHistoryTable />,
          },
        ],
      },
      {
        path: "/spso/setting",
        element: <SPSOSetting />,
        children: [
          {
            path: "/spso/setting/paper",
            element: <PageSettingTable />,
          },
          {
            path: "/spso/setting/file",
            element: <Files />,
          },
        ],
      },
      {
        path: "/spso/auth",
        element: <AuthorizationTable />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);

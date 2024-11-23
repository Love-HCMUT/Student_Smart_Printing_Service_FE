import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import  HeaderApp  from "./App.jsx";
import Login_page from "./pages/Login_page.jsx";
import Home_App from "./pages/Home_page.jsx";
import Register_page from "./pages/Register_page.jsx";
import Register_after_gg from "./pages/Register_after_gg.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HeaderApp /> */}
    {/* <Login_page /> */}
    {/* <Home_App/> */}
    <Register_page/>
    {/* <Register_after_gg/> */}
  </StrictMode>
);

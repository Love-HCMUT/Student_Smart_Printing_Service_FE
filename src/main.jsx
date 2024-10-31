import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import  HeaderApp  from "./App.jsx";
import Login_page from "./pages/Login_page.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HeaderApp /> */}
    <Login_page />
  </StrictMode>
);

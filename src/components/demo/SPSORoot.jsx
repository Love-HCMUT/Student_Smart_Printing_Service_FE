import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";
import { AfterLoginHeader } from "./AfterLoginHeader";
import { SPSOHeader } from "./SPSOHeader";

export const SPSORoot = () => {
  return (
    <>
      <div className="flex flex-col w-screen justify-center align-middle items-center">
        <SPSOHeader />
        <div className="mt-[40px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";
import { AfterLoginHeader } from "./AfterLoginHeader";
import { SPSOHeader } from "./SPSOHeader";
import { SPSOHeaderLog } from "./SPSOHeaderLog";
import { SPSOHeaderSetting } from "./SPSOHeaderSetting";

export const SPSOSetting = () => {
  return (
    <>
      <div className="flex flex-col w-screen justify-center align-middle items-center">
        <SPSOHeaderSetting />
        <div className="mt-[40px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

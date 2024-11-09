<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";
import { AfterLoginHeader } from "./AfterLoginHeader";
import { SPSOHeader } from "./SPSOHeader";
import { SPSOHeaderLog } from "./SPSOHeaderLog";

export const SPSOLog = () => {
  return (
    <>
      <div className="flex flex-col w-screen justify-center align-middle items-center">
        <SPSOHeaderLog />
        <div className="mt-[40px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
=======
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";
import { AfterLoginHeader } from "./AfterLoginHeader";
import { SPSOHeader } from "./SPSOHeader";
import { SPSOHeaderLog } from "./SPSOHeaderLog";

export const SPSOLog = () => {
  return (
    <>
      <div className="flex flex-col w-screen justify-center align-middle items-center">
        <SPSOHeaderLog />
        <div className="mt-[40px] w-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
>>>>>>> b9d5b91f579a6cdc7b6bc1210f23d4fa66ca8221

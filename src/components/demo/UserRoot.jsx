import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";
import { AfterLoginHeader } from "./AfterLoginHeader";
import { UserHeader } from "./UserHeader";

export const UserRoot = () => {
  return (
    <>
      <div className="flex flex-col w-screen justify-center align-middle items-center">
        <UserHeader />
        <div className="mt-[40px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";
import { AfterLoginHeader } from "./AfterLoginHeader";

export const AfterLogin = () => {
  return (
    <>
      <div className="flex flex-col w-screen justify-center align-middle items-center">
        <AfterLoginHeader />
        <div className="mt-[40px]">
          <WelcomeBanner userName={"Dương Hải Lâm"} />
        </div>
        <Footer />
      </div>
    </>
  );
};

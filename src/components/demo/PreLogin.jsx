import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";

export const PreLogin = () => {
  return (
    <>
      <div className="flex flex-col w-screen justify-center align-middle items-center">
        <Header_Login />
        <div className="mt-[40px]">
          <WelcomeBanner />
        </div>
        <Footer />
      </div>
    </>
  );
};

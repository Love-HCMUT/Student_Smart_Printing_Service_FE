import Footer from "../Footer/footer";
import Header_Login from "../Header/header_login";
import WelcomeBanner from "../Home/home";
import backgroundImage from "../../assets/background.jpg";

export const PreLogin = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header_Login />
      </header>

      {/* Main Content with Background Image */}
      <main
      // className="flex-grow bg-cover flex items-center justify-start p-10 pt-20 min-h-screen" // Tăng khoảng cách với `pt-20` để tránh bị header che
      // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Move WelcomeBanner to the left */}
        <div className="mt-10">
          <WelcomeBanner />
        </div>
      </main>

      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
};

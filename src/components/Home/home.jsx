// WelcomeBanner.jsx
import React from "react";
import iccon from "../../assets/iccon.svg";
import background from "../../assets/background.jpg";

const WelcomeBanner = ({ userName }) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen w-screen bg-relative flex bg-cover bg-center rounded-lg shadow-lg text-white"
    >
      <div className="mt-16 ml-20 bg-black bg-opacity-50 rounded-3xl p-4 text-center min-w-[400px] max-h-[150px] space-y-4">
        <div className="text-left">
          {userName ? (
            <h2 className="text-2xl font-semibold">Welcome {userName} !</h2>
          ) : null}
          <p className="text-2xl">Student Smart Printing Service.</p>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#41CF29] text-white font-semibold rounded-full hover:bg-[#116104] focus:outline-none">
            <img src={iccon} alt="Plus icon" className="h-5 w-5" />
            <span>New Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
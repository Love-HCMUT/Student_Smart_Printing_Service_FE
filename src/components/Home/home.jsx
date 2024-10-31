// WelcomeBanner.jsx
import React from 'react';
import iccon from "../../assets/iccon.svg";

const WelcomeBanner = ({ userName }) => {
  return (
    <div className="relative flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg text-white">
      <div className="bg-black bg-opacity-50 rounded-lg p-4 text-center min-w-[400px] min-h-[100px] space-y-4">
        {/* Welcome Message */}
        <div className="text-left">
          {userName ? (
            <h2 className="text-2xl font-semibold">Welcome {userName} !</h2>
          ) : null}
          <p className="text-2xl">Student Smart Printing Service.</p>
        </div>

        {/* New Order Button aligned to the right */}
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

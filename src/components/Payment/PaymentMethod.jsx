import React, { useState } from "react";

const PaymentMethod = ({ byBank = true }) => {
  const [toggle, setToggle] = useState(false)

  return !byBank ? (
    <div
      onClick={() => setToggle(prev => !prev)}
      className={`p-2 h-[100px] bg-white flex rounded-lg shadow-lg gap-3 w-[230px] px-3 py-2 border-4 ${!toggle ? "border-transparent" : "border-blue-600"} scale-75 cursor-pointer justify-around items-center`}>
      <img
        src="/momo.png"
        alt="Bank Payment"
        className="w-1/3 h-full object-cover rounded-t-lg" // Ensures the image fills the div while maintaining its aspect ratio
      />
      <span className="text-center text-xl font-bold">Bank</span>
    </div>
  ) : (
    <div
      onClick={() => setToggle(prev => !prev)}
      className={`p-2 h-[100px] bg-white flex rounded-lg shadow-lg gap-3 w-[230px] px-3 py-2 border-4 ${!toggle ? "border-transparent" : "border-blue-600"} scale-75 cursor-pointer justify-around items-center`}>
      <img
        src="/bank.png"
        alt="Bank Payment"
        className="w-1/3 h-full object-cover rounded-t-lg" // Ensures the image fills the div while maintaining its aspect ratio
      />
      <span className="text-center text-xl font-bold">Bank</span>
    </div>
  );
};

export default PaymentMethod;

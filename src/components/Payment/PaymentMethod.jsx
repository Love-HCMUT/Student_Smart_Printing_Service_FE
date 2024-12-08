import React, { useEffect, useState } from "react";

const PaymentMethod = ({ byBank = true, func, init = false }) => {
  const [toggle, setToggle] = useState(init)

  useEffect(() => {
    if (init === "Bank" && byBank) setToggle(true)
    else if (init === "Momo" && !byBank) setToggle(true)
    else setToggle(false)
  }, [init])

  const handleClick = () => {
    if (toggle) func(undefined)
    else if (byBank) func("Bank")
    else func("Momo")
    setToggle(prev => !prev)
  }

  return !byBank ? (
    <div
      onClick={handleClick}
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
      onClick={handleClick}
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

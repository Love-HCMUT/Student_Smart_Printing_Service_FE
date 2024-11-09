import React from "react";

const PaymentMethod = ({ byBank = false }) => {
  return byBank ? (
    <div className="bg-slate-200 flex flex-col rounded-lg shadow-lg gap-3 w-[100px] px-3 py-2 border-4 border-transparent hover:border-blue-600 scale-75 cursor-pointer">
      <img src="/momo.png" alt="Momo Payment" className="w-full h-auto" />
      <span className="text-center text-xl font-bold">Momo</span>
    </div>
  ) : (
    <div className="bg-slate-200 flex flex-col rounded-lg shadow-lg gap-3 w-[100px] px-3 py-2 border-4 border-transparent hover:border-blue-600 scale-75 cursor-pointer">
      <img src="/bank.png" alt="Momo Payment" className="w-full h-auto" />
      <span className="text-center text-xl font-bold">Bank</span>
    </div>
  );
};

export default PaymentMethod;

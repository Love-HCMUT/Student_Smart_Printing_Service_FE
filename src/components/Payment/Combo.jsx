import React from "react";

const Combo = ({ name, paper, price }) => {
  return (
    <div className="bg-white flex flex-col rounded-lg shadow-lg gap-3 w-[230px] px-3 py-2 border-4 border-transparent hover:border-blue-600 scale-75 cursor-pointer">
      <span className="mt-2 text-xl text-left">Combo 1</span>

      <div className="flex items-center">
        <span className="text-4xl font-bold text-green-600">100</span>
        <p className="ml-3">A4 - paper</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold">100.000</span>
        <p>VND</p>
      </div>
    </div>
  );
};

export default Combo;

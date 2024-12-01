import React, { useEffect, useState } from "react";

const Combo = ({ index, name, paper, price, putitem, removeitem }) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) putitem(index)
    else removeitem(index)
  }, [toggle])

  return (
    <div
      onClick={() => setToggle(prev => !prev)}
      className={`bg-white flex flex-col rounded-lg shadow-lg gap-3 w-[230px] px-3 py-2 border-4  ${toggle ? 'border-blue-600' : 'border-transparent'} scale-75 cursor-pointer`} >
      <span className="mt-2 text-xl text-left">{name}</span>

      <div className="flex items-center">
        <span className="text-4xl font-bold text-green-600">{paper}</span>
        <p className="ml-3">A4 paper</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold">{price}</span>
        <p>VND</p>
      </div>
    </div >
  );
};

export default Combo;

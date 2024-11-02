import { useState } from "react";

const CheckBox = ({ type, init }) => {
  const [checked, setChecked] = useState(init);
  return (
    <div className="w-[60px] mb-5 ml-5 flex gap-2">
      <input
        className="min-w-[30px] min-h-[30px] mr-2 rounded-[5px] border border-[#1d98a9]"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div className=" text-black text-base font-normal font-['Roboto Condensed']">
        {type}
      </div>
    </div>
  );
};

export const Body = ({ types }) => {
  return (
    <>
      <div className="w-[50%] relative bg-white p-10 items-center grid grid-cols-3">
        {Object.keys(types).map((type, index) => {
          return <CheckBox type={type} init={types[type]} key={index} />;
        })}
      </div>
    </>
  );
};

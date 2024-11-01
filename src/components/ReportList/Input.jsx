import { useEffect, useState } from "react";
import calender from "../../assets/calendar.svg";
export const Input = ({ label, min, max }) => {
  const [date, setDate] = useState();
  const handleOnChange = (e) => {
    setDate(e.target.value);
  };
  console.log(date);
  return (
    <>
      <div className="overflow-hidden px-[15px] py-2 bg-white rounded-lg border border-[#dddddd] justify-start items-center gap-2 inline-flex">
        <img src={calender} alt="calender" className="ml-2 w-4 h-4 relative" />
        <input
          value={date}
          placeholder={label}
          className="outline-none shrink basis-0 text-[#bbbbbb] text-[15px] font-normal font-['Open Sans'] inline-block"
          onChange={handleOnChange}
          type="number"
          min={min}
          max={max}
        />
      </div>
    </>
  );
};

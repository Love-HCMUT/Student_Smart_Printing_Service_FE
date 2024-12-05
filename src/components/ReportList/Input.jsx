import { useEffect, useState } from "react";
import calender from "../../assets/calendar.svg";
export const Input = ({ label, min = 0, max = 0 }) => {
  const [date, setDate] = useState();
  const handleOnChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      <div className="px-[16px] py-2 bg-white rounded-lg border border-[#dddddd] justify-center items-center gap-2 inline-flex">
        <img src={calender} alt="calender" className="ml-2 w-4 h-4 relative" />
        <input
          value={date}
          placeholder={label}
          className="outline-none basis-0 text-[#bbbbbb] text-[16px] font-normal font-['Open Sans'] inline-block"
          onChange={handleOnChange}
          type="number"
          min={min}
          max={max}
        />
      </div>
    </>
  );
};

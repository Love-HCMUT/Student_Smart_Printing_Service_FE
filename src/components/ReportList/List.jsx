import prevIcon from "../../assets/prev-icon.svg";
import nextIcon from "../../assets/next-icon.svg";
import { useState } from "react";
import { Year } from "./Year";
import { Month } from "./Month";
export const List = ({ names, year }) => {
  const [startIndex, setStartIndex] = useState(0);
  return (
    <>
      <div className="my-[16px] mx-auto flex w-[90%] justify-center align-middle items-center gap-4 transition-all:">
        <button
          className={`w-[55px] h-[70px] px-[6.88px] py-[8.75px] bg-white rounded border border-[#dfe3e8] flex-col justify-center items-center inline-flex mr-2 hover:bg-slate-700 ${
            startIndex === 0 ? "disabled bg-black" : ""
          }`}
          onClick={() => {
            if (year) {
              startIndex == 0
                ? setStartIndex(names.length - 2)
                : setStartIndex(startIndex - 1);
            } else {
              startIndex == 0
                ? setStartIndex(names.length - 2)
                : setStartIndex(startIndex - 1);
            }
          }}
        >
          <img
            src={prevIcon}
            className="w-[41.25px] h-[52.50px] relative flex-col justify-start items-start flex"
          />
        </button>
        <div className="flex grow w-full justify-between align-middle items-center gap-6 overflow-hidden">
          {names.map((name, index) => {
            const number = year ? 2 : 2;
            if (index < startIndex + number && index >= startIndex)
              return year ? (
                <Year
                  key={name}
                  year={name}
                  onClick={() => console.log(name)}
                />
              ) : (
                <Month
                  key={name}
                  month={name[0]}
                  year={name[1]}
                  onClick={() => console.log(name)}
                />
              );
          })}
        </div>
        <button
          className={`w-[55px] h-[70px] px-[6.88px] py-[8.75px] bg-white rounded border border-[#dfe3e8] flex-col justify-center items-center inline-flex mr-2 hover:bg-slate-700 ${
            startIndex === (year ? names.length - 2 : names.length - 2)
              ? "disabled bg-black"
              : ""
          }`}
          onClick={() => {
            if (year) {
              startIndex == names.length - 2
                ? setStartIndex(0)
                : setStartIndex(startIndex + 1);
            } else {
              startIndex == names.length - 2
                ? setStartIndex(0)
                : setStartIndex(startIndex + 1);
            }
          }}
        >
          <img
            src={nextIcon}
            className="w-[41.25px] h-[52.50px] relative flex-col justify-start items-start flex"
          />
        </button>
      </div>
    </>
  );
};

import prevIcon from "../../assets/prev-icon.svg";
import nextIcon from "../../assets/next-icon.svg";
import { useState } from "react";
import { Year } from "./Year";
import { Month } from "./Month";
export const List = ({ names, year }) => {
  return (
    <>
      <div className={`grid grid-cols-${names.length} gap-2`}>
        {names.map((item) => {
          console.log(item);
          return year ? <Year data={item} /> : <Month data={item} />;
        })}
      </div>
    </>
  );
};

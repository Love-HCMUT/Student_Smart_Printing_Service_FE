import { useState } from "react";
import { Year } from "./Year";
import { Month } from "./Month";
import { NavLink } from "react-router-dom";
export const List = ({ names, year }) => {
  return (
    <>
      <div className={`grid grid-cols-${names.length} gap-2`}>
        {names.map((item, index) => {
          return year ? (
            <Year key={index} data={item} />
          ) : (
            <Month key={index} data={item} />
          );
        })}
      </div>
    </>
  );
};

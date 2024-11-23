import { NavLink } from "react-router-dom";
import chart from "../../assets/chart.svg";
export const Month = ({ data = { month: 9, year: 2024 } }) => {
  const { month, year } = data;
  console.log;
  return (
    <>
      <div className="flex flex-col ml-6 my-4 w-fit h-fit min-w-[45%] p-6 bg-white rounded-2xl shadow hover:cursor-pointer hover:opacity-90">
        <img
          className="w-full"
          src={chart}
          alt={`T${month}-${year}`}
          title={`T${month}-${year}`}
        />
        <NavLink
          to={"detail"}
          className="text-center text-black text-xl font-normal font-['Open Sans']"
        >
          {`Tháng ${month} - ${year}`}
        </NavLink>
      </div>
    </>
  );
};

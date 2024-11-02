import { NavLink } from "react-router-dom";
import chart from "../../assets/chart.svg";
export const Month = ({ month = 9, year = 2024 }) => {
  return (
    <>
      <div className="ml-6 my-4 min-w-[45%] max-h-[30%] p-6 bg-white rounded-2xl shadow hover:cursor-pointer hover:opacity-90">
        <img
          className="w-full"
          src={chart}
          alt={`T${month}-${year}`}
          title={`T${month}-${year}`}
        />
        <NavLink
          to={`detail`}
          className="text-center text-black text-xl font-normal font-['Open Sans']"
        >
          {`Tháng ${month} - ${year}`}
        </NavLink>
      </div>
    </>
  );
};

import { NavLink } from "react-router-dom";
import chart from "../../assets/chart.svg";
export const Year = ({ data = { year: 2023 } }) => {
  const { year } = data;
  return (
    <>
      <div className="flex flex-col ml-6 my-4 min-w-[70%] w-fit h-fit p-6 bg-white rounded-2xl shadow hover:cursor-pointer hover:opacity-90">
        <img
          className="w-full max-h-[50%]"
          src={chart}
          alt={`Năm ${year}`}
          title={`Năm ${year}`}
        />
        <NavLink
          to={"detail"}
          className="text-center text-black text-xl font-normal font-['Open Sans']"
        >
          {`Năm ${year}`}
        </NavLink>
      </div>
    </>
  );
};

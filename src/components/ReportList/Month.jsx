import CustomBarChart from "../Chart/BarChart";
import returnValue from "./ReturnValue";

export const Month = ({ data = { month: 9, year: 2024 }, chartData }) => {
  const { month, year } = data;
  console.log("Month component data:", data); // Debug log
  console.log("Month component chartData:", chartData); // Debug log
  if (!chartData || chartData === undefined) {
    return returnValue({
      context: (
        <div className="flex items-center justify-center">
          <p className="text-center text-black text-xl font-normal font-['Open Sans']  w-[250px] h-[100px]">
            ...Loading
          </p>
        </div>
      ),
      month,
      year
    });
  } else {
    return returnValue({
      context: (
        <CustomBarChart data={chartData} year={year} month={month} />
      ),
      month,
      year
    });
  }
};

export default Month;
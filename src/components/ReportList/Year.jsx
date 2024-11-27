import CustomChart from "../Chart/CustomChart";
import returnValue from "./ReturnValue"

const gradientColors = [
  { offset: "0%", color: "darkorange", opacity: 0.75 },
];

export const Year = ({ data = { year: 2023 }, chartData }) => {
  const { year } = data;

  if (!chartData) {
    return returnValue({
      context: (
        <div className="flex items-center justify-center">
          <p className="text-center text-black text-xl font-normal font-['Open Sans']  w-[250px] h-[100px]">
            ...Loading
          </p>
        </div>
      ),
      year
    })
  } else {
    return returnValue({
      context: (
        <CustomChart
          data={chartData}
          xAccessor={d => new Date(d.MonthYear)}
          yAccessor={d => d.OrderCount}
          // xLabel="Month"
          yLabel="Order Count"
          gradientColors={gradientColors} />
      ),
      year
    })
  }
};

export default Year;
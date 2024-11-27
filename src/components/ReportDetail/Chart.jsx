import CustomLineChart from "../Chart/CustomChart";
export const Chart = ({ title, chartData, xLabel, yLabel, type }) => {

  const gradientColors = [
    { offset: "0%", color: "darkorange", opacity: 0.75 },
  ];

  if (!chartData) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-center text-black text-xl font-normal font-['Open Sans']  w-[250px] h-[100px]">
          ...Loading
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-md w-full">
      <div className="text-center text-xl font-semibold mb-4">{title}</div>
      <CustomLineChart
        data={chartData}
        xAccessor={d => new Date(d.MonthYear)}
        yAccessor={
          type === "Orders" ? d => d.OrderCount : d => d.TransactionCount
        }
        yLabel={yLabel}
        gradientColors={gradientColors}
        tooltipLabel={
          type === "Orders" ? "Order Count" : "Transaction Count"
        }
      />
    </div>
  );

};

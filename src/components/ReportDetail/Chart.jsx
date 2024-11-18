import chart from "../../assets/chart-axis.svg";
export const Chart = ({ title }) => {
  return (
    <>
      <div className="flex flex-col justify-center align-middle">
        <div className="items-center text-center">{title}</div>
        <img src={chart} alt="Chart" />
      </div>
    </>
  );
};

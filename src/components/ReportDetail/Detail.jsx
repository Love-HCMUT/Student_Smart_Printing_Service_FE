import { Stats } from "./Stats.jsx";
import payment from "../../assets/credit-card.svg";
import cancel from "../../assets/cancel.svg";
import { Chart } from "./Chart.jsx";
export const Detail = () => {
  return (
    <>
      <div className="flex justify-center align-middle mb-8">
        <Stats title={"Orders"} number={75} />
        <Stats title={"Payments"} number={75} icon={payment} />
        <Stats title={"Cancel"} number={75} icon={cancel} />
      </div>
      <div className="flex gap-16 justify-center align-middle">
        <Chart title={"Number of Orders"} />
        <Chart title={"Number of Payments"} />
      </div>
    </>
  );
};

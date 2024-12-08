import { Stats } from "./Stats.jsx";
import payment from "../../assets/credit-card.svg";
import cancel from "../../assets/cancel.svg";
import { Chart } from "./Chart.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentMonthlyOrder } from "../../services/statistic-spso-api.js"

export const Detail = () => {
  let location = useLocation()
  const { month, year } = location.state

  const [order, setOrder] = useState([])
  const [transaction, setTransaction] = useState([])
  const [total, setTotal] = useState({
    totalOrder: 0,
    totalTransaction: 0,
    totalCanceledOrder: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentMonthlyOrder(month, year);
        setTotal({
          totalOrder: data.countOrder[0].totalOrders,
          totalTransaction: data.countTransaction[0].totalTransactions,
          totalCanceledOrder: data.countCancel[0].totalCanceledOrder
        })
        setOrder(data.order)
        setTransaction(data.transaction)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [month, year]);


  return (
    <>
      <div className=" flex flex-col max-w-[80vw] p-8 m-auto">
        <div className="flex w-full justify-center align-middle mb-8">
          <Stats title={"Orders"} number={total.totalOrder} />
          <Stats title={"Payments"} number={total.totalTransaction} icon={payment} />
          <Stats title={"Cancel"} number={total.totalCanceledOrder} icon={cancel} />
        </div>
        <div className="flex gap-16 justify-center align-middle">
          <Chart title={"Number of Orders"} chartData={order} yLabel={"Order Count"} type="Orders" month={month} year={year} />
          <Chart title={"Number of Payments"} chartData={transaction} yLabel={"Transaction Count"} type="Transaction" month={month} year={year} />
        </div>
      </div>
    </>
  );
};
import { Stats } from "./Stats.jsx";
import payment from "../../assets/credit-card.svg";
import cancel from "../../assets/cancel.svg";
import { Chart } from "./Chart.jsx";
import { getNumberOfOrdersByMonthYear, getNumberOfTransactionsByMonthYear, getTotalCountService } from "../../services/statistic-spso-api";
import { useEffect, useState } from "react";

export const Detail = () => {
  const [total, setTotal] = useState({
    totalOrder: 0,
    totalTransaction: 0,
    totalCanceledOrder: 0
  })
  const [order, setOrder] = useState([])
  const [transaction, setTransaction] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getTotalCountService()
        setTotal(data)

        data = await getNumberOfOrdersByMonthYear()
        setOrder(data)

        data = await getNumberOfTransactionsByMonthYear()
        setTransaction(data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className=" flex flex-col max-w-[80vw] p-8 m-auto">
        <div className="flex w-full justify-center align-middle mb-8">
          <Stats title={"Orders"} number={total.totalOrder} />
          <Stats title={"Payments"} number={total.totalTransaction} icon={payment} />
          <Stats title={"Cancel"} number={total.totalCanceledOrder} icon={cancel} />
        </div>
        <div className="flex gap-16 justify-center align-middle">
          <Chart title={"Number of Orders"} chartData={order} yLabel={"Order Count"} type="Orders" />
          <Chart title={"Number of Payments"} chartData={transaction} yLabel={"Transaction Count"} type="Transaction" />
        </div>
      </div>
    </>
  );
};
import InfoCards from "../Card/Info_card";
import OrdersHistoryPayment from "../Table/Student/Payment/orders_history_payment";
import { getUserBalance, getRecentTransactions, getPaymentHistory } from "../../services/user-balance-api";
import { useEffect, useState, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const useUserBalanceData = () => {


  const [data, setData] = useState({
    balance: 0,
    recentTransactions: [],
    paymentHistory: [],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // localStorage.setItem("id", 1);

    const fetchData = async () => {
      try {
        const [balanceData, transactionsData, paymentHistoryData] = await Promise.all([
          getUserBalance(),
          getRecentTransactions(),
          getPaymentHistory(),
        ]);

        setData({
          balance: balanceData.balance || 0,
          recentTransactions: transactionsData,
          paymentHistory: paymentHistoryData,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { ...data, error, loading };
};

export const UserBalance = () => {
  const navigate = useNavigate()
  const { balance, recentTransactions, paymentHistory, error, loading } = useUserBalanceData();

  const recentTransitionsData = useMemo(() => {
    return recentTransactions.map((transaction) => ({
      color: transaction.paymentStatus === "AddCoin" ? "blue" : "red",
      text: `${transaction.money} coins ${new Date(transaction.time).toLocaleDateString()}`,
    }));
  }, [recentTransactions]);

  const paymentHistoryData = useMemo(() => {
    return paymentHistory.map((paymentLog) => ({
      date_of_transaction: new Date(paymentLog.date_of_transaction).toLocaleDateString(),
      number_of_coins: paymentLog.number_of_coins,
      charge: paymentLog.charge,
      method: paymentLog.method,
      combo_list: paymentLog.combo_list,
      note: paymentLog.note,
    }));
  }, [paymentHistory]);

  if (loading) {
    return <div className="m-8 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="m-8 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <div className="w-2/5">
        <InfoCards totalCoins={balance} recentTransitions={recentTransitionsData} />
      </div>
      <div className="w-2/3">
        <OrdersHistoryPayment values={paymentHistoryData} />
      </div>

      <div className="mt-8 relative col-span-1 flex items-end justify-end">
        <button
          //   to="printer"
          // onClick={}
          type="Link"
          onClick={() => { navigate("/user/balance/deposit") }}
          className="min-w-[100px] text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add more coins
        </button>
      </div>
    </div>
  );
};

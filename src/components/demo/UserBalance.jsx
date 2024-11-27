import InfoCards from "../Card/Info_card";
import OrdersHistoryPayment from "../Table/Student/Payment/orders_history_payment";
import { getUserBalance, getRecentTransactions, getPaymentHistory } from "../../services/user-balance-api";
import { useEffect, useState, useMemo } from "react";

const useUserBalanceData = () => {
  const [data, setData] = useState({
    balance: 0,
    recentTransactions: [],
    paymentHistory: [],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("id", 1);

    const fetchData = async () => {
      try {
        const [balanceData, transactionsData, paymentHistoryData] = await Promise.all([
          getUserBalance(),
          getRecentTransactions(),
          getPaymentHistory(),
        ]);

        setData({
          balance: balanceData.balance,
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
    </div>
  );
};

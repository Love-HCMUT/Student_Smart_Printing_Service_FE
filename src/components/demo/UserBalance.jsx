import InfoCards from "../Card/Info_card";
import OrdersHistoryPayment from "../Table/Student/Payment/orders_history_payment";

export const UserBalance = () => {
  return (
    <>
      <div className="mt-8 flex flex-col justify-center align-middle items-center">
        <div className="items-center">
          <InfoCards />
        </div>
        <OrdersHistoryPayment />
      </div>
    </>
  );
};

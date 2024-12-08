import React, { useEffect, useState } from "react";
import Combo from "../components/Payment/Combo";
import PaymentMethod from "../components/Payment/PaymentMethod";
import Note from "../components/Payment/Note";
import TotalPayment from "../components/Payment/TotalPayment";
import axios from "axios";

const PaymentPage = () => {
  const [combo, setCombo] = useState([]);
  const [cart, setCart] = useState([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    const fetchComboData = async () => {
      try {
        const host = import.meta.env.VITE_HOST;
        const combo = await axios.get(`${host}/payment/combo`);
        setCombo(combo.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComboData();
  }, []);

  const putItem = (comboId) => {
    const item = cart.find((e) => e.id === comboId);
    if (item) {
      const newcart = cart.map((e) => {
        if (e.id === comboId) {
          return {
            ...e,
            quantity: e.quantity + 1,
            numCoins: (e.numCoins / e.quantity) * (e.quantity + 1),
            price: (e.price / e.quantity) * (e.quantity + 1),
          };
        } else return e;
      });
      setCart(newcart);
    } else {
      const checkitem = combo.find((e) => e.id === comboId);
      if (!checkitem) return;
      const newitem = { ...checkitem, quantity: 1 };
      setCart([...cart, newitem]);
    }
  };

  const decreaseItem = (comboId) => {
    const item = cart.find((e) => e.id === comboId);
    if (!item || item.quantity === 1) return;
    const newcart = cart.map((e) => {
      if (e.id === comboId) {
        return {
          ...e,
          quantity: e.quantity - 1,
          numCoins: (e.numCoins / e.quantity) * (e.quantity - 1),
          price: (e.price / e.quantity) * (e.quantity - 1),
        };
      } else return e;
    });
    setCart(newcart);
  };

  const removeItem = (comboId) => {
    const newcart = cart.filter((e) => e.id !== comboId);
    setCart(newcart);
  };

  const confirmTransaction = async () => {
    let money = cart.reduce((acc, curr) => acc + curr.price, 0);
    if (money < 5000) money = 50000;
    const data = {
      money: money,
      note: note ? note : "Giao dich moi",
      id: localStorage.getItem("id"),
      combo: cart,
    };

    const headers = {
      "Content-Type": "application/json", // Sửa lại typo
    };
    const host = import.meta.env.VITE_HOST;

    try {
      const response = await axios.post(`${host}/payment/momo`, data, {
        headers,
      });
      const url = response.data.data.payUrl;
      const orderId = response.data.data.orderId;

      // open momo gateway 
      window.open(url);
      const checkstatus = await axios.get(`${host}/payment/status/${orderId}`);


      if (checkstatus.data.data.resultCode === 0)
        alert("Your payment is successfull");
      else alert("your payment is fail, money will be refunded");

      // const combo = JSON.parse(checkstatus.data.data.extraData);
      // const body = {
      //   resultCode: checkstatus.data.data.resultCode,
      //   extraData: combo,
      //   orderInfo: note,
      //   amount: checkstatus.data.data.amount,
      //   id: localStorage.getItem("id"),
      // };

      // const updatePaymentLog = await axios.post(
      //   `${host}/payment/result`,
      //   body,
      //   { headers }
      // );

      // const updateCoins = await axios.patch(
      //   `${host}/payment/balance`,
      //   {
      //     id: localStorage.getItem("id"),
      //     money: checkstatus.data.data.amount,
      //   },
      //   { headers }
      // );
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div className="justify-center w-lvw min-h-screen bg-light-gray flex gap-10">
      <div className="mb-[40px] mt-[50px] w-1/2p-4 flex flex-col items-center gap-6">
        <h1 className="p-2 font-bold text-2xl text-blue-800 w-full">
          Choose your combo papers
        </h1>
        <p className="px-2 self-start text-left">
          Double click to remove combo
        </p>
        <div className="grid grid-cols-4">
          {combo.map((e, i) => (
            <Combo
              key={i}
              index={e.id}
              name={`Combo ${e.id}`}
              paper={e.numCoins}
              price={e.price}
              putitem={putItem}
              removeitem={removeItem}
            ></Combo>
          ))}

          <div className="col-span-4 grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <PaymentMethod byBank={false} />
            </div>
            <div className="col-span-1">
              <PaymentMethod />
            </div>
            <div className="col-span-1"></div> {/* Cột trống */}
            <div className="col-span-1"></div> {/* Cột trống */}
          </div>

          {/* Ghi chú */}
          <div className="col-span-4 px-5 mt-10">
            <Note mess={note} func={setNote} />
          </div>
        </div>
      </div>

      <div className="mb-[40px] mt-[80px] w-1/5 flex flex-col gap-5 items-center">
        <TotalPayment
          combo={cart}
          putitem={putItem}
          removeitem={removeItem}
          decreaseitem={decreaseItem}
        />

        <div className="w-full flex justify-center items-center">
          <button
            onClick={async () => confirmTransaction()}
            type="button"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Confirm transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

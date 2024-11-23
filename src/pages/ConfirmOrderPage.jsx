import React, { useEffect, useState } from "react";
import ConfirmPackage from "../components/Order/ConfirmPackage";
import TotalOrder from "../components/Order/TotalOrder";
import Note from "../components/Payment/Note";

const ConfirmOrderPage = () => {
  const [order, setOrder] = useState([]);
  const [message, setMessage] = useState("");

  console.log(order);

  useEffect(() => {
    const neworder = JSON.parse(sessionStorage.getItem("order"));
    const newmess = JSON.parse(sessionStorage.getItem("message"));
    setOrder(neworder);
    setMessage(newmess);
  }, []);

  const removePackage = (index) => {
    const neworder = order.filter((_, i) => i !== index);
    setOrder(neworder);
  };

  const updateCopy = (index, num) => {
    const neworder = order.map((e, i) => {
      if (i === index) {
        const newcopy = e.copy + num;
        return { ...e, copy: newcopy };
      } else return e;
    });
    setOrder(neworder);
  };

  const removeFile = (idxpackage, idxfile) => {
    const neworder = order.map((e, i) => {
      if (i === idxpackage) {
        const newfiles = e.files.filter((_, idx) => idx !== idxfile);
        return { ...e, files: newfiles };
      } else return e;
    });
    setOrder(neworder);
  };

  return (
    <div className="justify-center w-lvw min-h-screen bg-light-gray flex gap-10">
      <div className="mb-[40px] mt-[80px] w-1/2 bg-white shadow-xl p-4 flex flex-col items-center gap-6">
        <h1 className="p-2 font-bold text-2xl text-blue-800 w-full">
          Confirm your orders
        </h1>
        {order.map((e, i) => (
          <ConfirmPackage
            key={i}
            index={i}
            data={e}
            func={removePackage}
            removefile={removeFile}
            updatecopy={updateCopy}
          />
        ))}
        <Note mess={message} func={setMessage} />
      </div>

      <div className="mt-[80px] w-1/5">
        <TotalOrder />
      </div>
    </div>
  );
};

export default ConfirmOrderPage;

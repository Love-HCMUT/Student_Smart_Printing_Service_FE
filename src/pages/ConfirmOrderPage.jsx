import React, { useEffect, useState } from "react";
import ConfirmPackage from "../components/Order/ConfirmPackage";
import TotalOrder from "../components/Order/TotalOrder";
import Note from "../components/Payment/Note";
import { useLocation } from "react-router-dom";

const ConfirmOrderPage = () => {
  const location = useLocation();
  const { packages, message, printer, coinPerPaper } = location.state || [];

  const [messageConfirm, setMessageConfirm] = useState(message);
  const [order, setOrder] = useState(packages);
  const [totalPackages, setTotalPackages] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

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
        {order.map((e, i) => {
          return (
            <ConfirmPackage
              key={i}
              index={i}
              data={e}
              location={printer.location}
              setTotalPackages={setTotalPackages}
              coinPerPaper={coinPerPaper}
              func={removePackage}
              removefile={removeFile}
              updatecopy={updateCopy}
              setOrder={setOrder}
            />
          );
        })}
        <Note mess={messageConfirm} func={setMessageConfirm} />
      </div>

      <div className="mt-[80px] w-1/5">
        <TotalOrder
          order={order}
          note={messageConfirm}
          printer={printer}
          totalPackages={totalPackages}
          totalCost={totalCost}
          setTotalCost={setTotalCost}
        />
      </div>
    </div>
  );
};

export default ConfirmOrderPage;

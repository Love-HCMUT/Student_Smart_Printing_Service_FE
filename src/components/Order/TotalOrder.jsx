import React, { useEffect, useState } from "react";
import Announce from "./Announce";
import { useNavigate } from "react-router-dom";

const SERVICE_COST_PERCENT = 0.1;
const DISCOUNT_PERCENT = 0.05;

const TotalOrder = ({
  totalPackages,
  totalCost,
  setTotalCost,
  order,
  note,
  printer,
}) => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const handleOnClick = async () => {
    //getBalance
    const customerID = 1; // localstorage
    fetch(`${import.meta.env.VITE_HOST}/order/${customerID}`)
      .then((res) => res.json())
      .then((data) => {
        setBalance(data.balance);
      })
      .catch((err) => console.log(err));

    //test
    // const arr = order.map((p) => {
    //   const { files, ...config } = p;
    //   return { files, config };
    // });

    // const formData = new FormData();
    // const pages = [];
    // arr.forEach(({ files, config }, index) => {
    //   formData.append(`package${index}`, JSON.stringify(config));
    //   files.forEach((file, idx) => {
    //     formData.append(`${index}-${idx}`, file);
    //   });
    //   pages.push(files.map((file) => file.pages));
    // });

    // formData.append("pages", JSON.stringify(pages));

    // formData.append("printerID", JSON.stringify(printer.printer_id));

    // formData.append("note", JSON.stringify(note));

    // formData.append("customerID", JSON.stringify(customerID));

    // formData.append("totalCost", JSON.stringify(totalCost));

    // fetch(`${import.meta.env.VITE_HOST}/order/create`, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     navigate("/user");
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTotalCost(
      totalPackages.reduce(
        (total, item) => total + (1 + SERVICE_COST_PERCENT) * item,
        0
      ) *
        (1 - DISCOUNT_PERCENT)
    );
  }, [totalPackages]);

  useEffect(() => {
    if (balance > totalCost) {
      const arr = order.map((p) => {
        const { files, ...config } = p;
        return { files, config };
      });

      const formData = new FormData();
      const pages = [];
      arr.forEach(({ files, config }, index) => {
        formData.append(`package${index}`, JSON.stringify(config));
        files.forEach((file, idx) => {
          formData.append(`${index}-${idx}`, file);
        });
        pages.push(files.map((file) => file.pages));
      });

      formData.append("pages", JSON.stringify(pages));

      formData.append("printerID", JSON.stringify(printer.printer_id));

      formData.append("note", JSON.stringify(note));

      formData.append("customerID", JSON.stringify(localStorage.getItem("id")));

      formData.append("totalCost", JSON.stringify(totalCost));

      fetch(`${import.meta.env.VITE_HOST}/order/create`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/user");
        })
        .catch((err) => console.log(err));
    }
  }, [balance]);

  // useEffect(() => {
  //   if (balance < totalCost) return;
  //   const arr = packages.map((p) => {
  //     const { files, ...config } = p;
  //     return { files, config };
  //   });
  //   console.log(arr);
  //   const formData = new FormData();
  //   // return;
  //   arr.forEach(({ files, config }, index) => {
  //     formData.append(`${index}`, JSON.stringify(config));
  //     files.forEach((file, idx) => {
  //       formData.append(`${index}-${idx}`, file);
  //     });
  //   });
  //   // files.forEach((file, index) => {
  //   //   formData.append(`files[${index}]`, file);
  //   // });
  //   // formData.append("config", JSON.stringify(config));
  //   fetch("http://localhost:3001/order/create", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, [balance]);

  // console.log("<<< totalOrder >>>", order);
  // console.log("<<< totalOrder >>>", note);
  // console.log("<<< totalOrder >>>", printer);
  return (
    <>
      <div className="w-full">
        {/* detail */}
        <div className="w-full bg-white p-4 rounded-md shadow-lg">
          <h2 className="text-xl font-bold text-center">Your order</h2>
          {totalPackages.map((total, idx) => (
            <div>
              <span className="font-bold">Package {idx + 1}</span>
              <div className="px-2">
                <div className="grid grid-cols-2">
                  <span className="col-span-1">Cost papers:</span>
                  <span className="col-span-1">{total}</span>

                  <span className="col-span-1">Cost service:</span>
                  <span className="col-span-1">
                    {total * SERVICE_COST_PERCENT}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="p-4 mt-3 bg-white rounded-md shadow-lg">
          <div className="">
            <div className="grid grid-cols-2">
              <span className="font-bold col-span-1">Order cost:</span>
              {totalPackages.length ? (
                <span className="col-span-1">
                  {totalPackages.reduce(
                    (total, item) => total + (1 + SERVICE_COST_PERCENT) * item,
                    0
                  )}
                </span>
              ) : (
                <span className="col-span-1">Calculating...</span>
              )}

              <span className="font-bold col-span-1">Discount:</span>
              {totalPackages.length ? (
                <span className="col-span-1">
                  {totalPackages.reduce(
                    (total, item) => total + (1 + SERVICE_COST_PERCENT) * item,
                    0
                  ) * DISCOUNT_PERCENT}
                </span>
              ) : (
                <span className="col-span-1">Calculating...</span>
              )}

              <span className="font-bold col-span-1">Total cost:</span>
              {totalPackages.length ? (
                <span className="col-span-1">{totalCost}</span>
              ) : (
                <span className="col-span-1">Calculating...</span>
              )}
            </div>
          </div>
        </div>

        {balance && balance < totalCost ? <Announce status={false} /> : <></>}

        <button
          className="p-2 rounded-lg bg-blue-400 w-full mt-3 shadow-lg"
          onClick={handleOnClick}
        >
          Confirm order
        </button>
      </div>
    </>
  );
};

export default TotalOrder;

import React, { useEffect, useState } from "react";
import PRINTER_LIST from "./RawData/PrinterRaw.json";
import { PSMainTable } from "./orders_tables";
import { LoadingSkeleton } from "../../Skeleton/TableSkeleton";

// const sample = {
//   printer_ID: 3,
//   printer_name: "Printer 3",
//   printer_status: "Ready",
//   order: [
//     {
//       order_id: "048bedb3-6c34-4c14-94",
//       order_date: "12:33 PM Thur, Oct 3, 2024",
//       isDeclined: false,
//       isAccepted: false,
//     },
//   ],
// };

export const Printers_list = () => {
  const [printerList, setPrinterList] = useState();

  useEffect(() => {
    const host = import.meta.env.VITE_HOST;
    const staffID = parseInt(localStorage.getItem("id")); // local storage
    fetch(`${host}/printing/${staffID}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((printer, index) => {
          printer.printer_ID = printer.printerID;
          printer.printer_name = `Printer ${index + 1} - ID: ${
            printer.printerID
          }`;
          printer.printer_status = printer.printerStatus;
          printer.orders.forEach((order) => {
            order.order_id = order.id;
            order.order_date = order.orderDate;
            order.isDeclined = false;
            order.isAccepted = false;
          });
        });
        setPrinterList(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return printerList ? (
    <div className="mt-8">
      <StaffHeader />
      <div className="container mx-auto p-4 flex flex-wrap justify-between mt-3">
        {printerList.map((printer, index) => {
          const order_list = printer.orders;
          return (
            <div
              key={printer.printer_ID || index}
              className="w-full md:w-1/2 p-2 max-h-96 min-h-60"
            >
              <PSMainTable printer={printer} data={order_list} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <LoadingSkeleton />
  );
};

const StaffHeader = ({ prop = null }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-blue-black">Printing Manager</h1>
        <span className="text-sm text-table-text-color">
          Printer Information
        </span>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-4">
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Printer</button> */}
        {prop}
      </div>
    </div>
  );
};

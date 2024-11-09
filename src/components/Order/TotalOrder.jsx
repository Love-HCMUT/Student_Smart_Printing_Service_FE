import React from "react";
import Announce from "./Announce";

const TotalOrder = () => {
  return (
    <div className="w-1/5">
      {/* detail */}
      <div className="w-full bg-slate-200 p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold text-center">Your order</h2>
        <div>
          <span className="font-bold">Package 1</span>
          <div className="px-2">
            <div className="grid grid-cols-2">
              <span className="col-span-1">Cost paper:</span>
              <span className="col-span-1">100</span>

              <span className="col-span-1">Cost service:</span>
              <span className="col-span-1">100</span>
            </div>
          </div>
        </div>

        <div>
          <span className="font-bold">Package 1</span>
          <div className="px-2">
            <div className="grid grid-cols-2">
              <span className="col-span-1">Cost paper:</span>
              <span className="col-span-1">100</span>

              <span className="col-span-1">Cost service:</span>
              <span className="col-span-1">100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="p-4 mt-3 bg-slate-200 rounded-md shadow-lg">
        <div className="">
          <div className="grid grid-cols-2">
            <span className="font-bold col-span-1">Order cost:</span>
            <span className="col-span-1">100</span>

            <span className="font-bold col-span-1">Discount:</span>
            <span className="col-span-1">100</span>

            <span className="font-bold col-span-1">Total cost:</span>
            <span className="col-span-1">100</span>
          </div>
        </div>
      </div>

      <Announce status={true} />
      <Announce status={false} />

      <button className="p-2 rounded-lg bg-blue-400 w-full mt-3 shadow-lg">
        Confirm order
      </button>
    </div>
  );
};

export default TotalOrder;

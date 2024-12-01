import React from "react";

const TotalPayment = ({ combo, putitem, removeitem, decreaseitem }) => {

  return (
    <>
      <div className="w-full min-h-[100px] bg-white py-3 px-4 rounded-lg shadow-lg">
        <span className="text-xl font-bold mb-3">Your cart</span>
        {combo.map((e, i) =>
          <div
            key={i}
            className="flex gap-2 justify-between mt-4 px-2">
            <span>Combo {e.id}</span>
            <div className="relative flex items-center">
              <button
                onClick={() => decreaseitem(e.id)}
                type="button" id="decrement-button" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                </svg>
              </button>
              <input type="text" id="counter-input" className="flex-shrink-0 border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder=""
                value={e.quantity}
                onChange={() => { }}
                required />
              <button
                onClick={() => putitem(e.id)}
                type="button" id="increment-button" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
            <span>{e.numCoins} coins</span>
          </div>
        )}
      </div>


      <div className="w-full bg-white py-3 px-4 rounded-lg shadow-lg">
        <span className="mr-10">Total</span>
        <span>{combo.reduce((acc, currentvalue) => acc + currentvalue.price, 0)} VND</span>
      </div>
    </>
  );
};

export default TotalPayment;

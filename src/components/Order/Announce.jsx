import React from "react";

const Announce = ({ status, text }) => {
  return (
    <div>
      <div
        className={`w-full p-2 mt-3 rounded-md border-2 border-dashed ${
          status ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"
        }`}
      >
        <span className={`${status ? "text-green-700" : "text-red-700"}`}>
          {status ? "You have enough coin!" : "You do not have enough coin!"}
        </span>
      </div>
    </div>
  );
};

export default Announce;

import React, { useState } from "react";
import Package from "../components/Order/Package";
import Note from "../components/Payment/Note";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getNumPages } from "../helpers/pdfManipulation";

const isValid = (from_to, minNumPages) => {
  const pages = from_to.split(", ");
  const fromTo = pages.map((item) => {
    const [start, end] = item.split("-").map(Number);
    return { start, end: end || start };
  });
  return !fromTo.some(
    (item) =>
      item.start > item.end ||
      item.end > minNumPages ||
      item.start > minNumPages
  );
};

const validated = async (packages) => {
  const ps = await Promise.all(
    packages.map(async (p, i) => {
      const { copy, files, pages, pages_per_sheet, scale, sides } = p;
      const numPages = await Promise.all(
        files.map(async (file) => await getNumPages(file))
      );
      console.log(numPages);
      if (!(parseInt(copy) > 0)) {
        toast.error(`Numbers of copies in package ${i + 1} is invalid!`);
        return false;
      }
      if (!(parseInt(pages_per_sheet) > 0)) {
        toast.error(
          `Numbers of pages per sheet in package ${i + 1} is invalid!`
        );
        return false;
      }
      if (!(parseFloat(scale) >= 0 && parseFloat(scale) <= 1)) {
        toast.error(`Scale in package ${i + 1} is invalid!`);
        return false;
      }
      if (!(parseInt(sides) === 1 || parseInt(sides) === 2)) {
        toast.error(`Numbers of sides in package ${i + 1} is invalid!`);
        return false;
      }
      if (!files.length) {
        toast.error(`Please upload at least one file into package ${i + 1}.`);
        return false;
      }
      if (pages.length) {
        const regex = /^((\d+-\d+|\d+),\s)*(\d+-\d+|\d+)$/g;
        const { from_to } = pages[0];
        if (!regex.test(from_to) || !isValid(from_to, Math.min(...numPages))) {
          toast.error("Printing pages is invalid.");
          return false;
        }
      }
      return true;
    })
  );
  return ps.every((item) => item);
};

const OrderPage = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([{}]);
  const [message, setMessage] = useState("");

  const addMorePackage = () => {
    const newpackages = [...packages, {}];
    setPackages(newpackages);
  };

  const removePackage = (index) => {
    const newpackages = packages.filter((e, i) => i !== index);
    setPackages(newpackages);
  };

  const updatePackage = (index, value) => {
    const newpackages = packages.map((e, i) => {
      if (i === index) return value;
      else return e;
    });
    setPackages(newpackages);
  };

  const collectData = async () => {
    console.log(packages);
    if (await validated(packages)) {
      navigate("/user/order/printer", { state: { packages, message } });
    }
  };

  return (
    <div className="bg-white w-lwh flex justify-center items-center flex-col">
      <ToastContainer />
      <h1 className="mt-[30px] h-[80px] text-left w-2/3 font-bold text-3xl flex items-center text-blue-800">
        Your orders
      </h1>

      <div className="p-10 border bg-light-gray h-full w-2/3 shadow-xl flex flex-col justify-center items-center gap-10">
        {/* package */}
        {packages.map((e, i) => (
          <Package
            key={i}
            index={i}
            update={updatePackage}
            remove={removePackage}
          />
        ))}

        <div className="col-span-1 flex items-end justify-end">
          <button
            type="button"
            onClick={addMorePackage}
            className="min-w-[100px] text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add more packages
          </button>
        </div>

        <div className="grid grid-cols-6 w-5/6">
          {/* note */}
          <div className="col-span-5">
            <Note func={setMessage} />
          </div>
          {/* button */}
          <div className="col-span-1 flex items-end justify-end">
            <button
              //   to="printer"
              onClick={collectData}
              type="Link"
              className="min-w-[100px] text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

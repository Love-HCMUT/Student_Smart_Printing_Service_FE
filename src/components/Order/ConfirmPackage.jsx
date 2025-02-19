import React, { useEffect, useLayoutEffect, useState } from "react";
import FilePreview from "./FilePreview";
import { getNumPages } from "../../helpers/pdfManipulation";

const getTotalPage = (pages) => {
  const arr = pages.split(", ");
  const totalPage = arr.reduce((result, item) => {
    const [start, end] = item.split("-").map(Number);
    return result + 1 + (end ? end - start : 0);
  }, 0);
  return totalPage;
};

const ConfirmPackage = ({
  index,
  data,
  location,
  coinPerPaper,
  func,
  removefile,
  updatecopy,
  setTotalPackages,
  setOrder,
}) => {
  const [format, setFormat] = useState("");
  const [specificPages, setSpecificPages] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalPaper, setTotalPaper] = useState(0);
  const [total, setTotal] = useState(0);

  const handleRemoveFile = (idx) => {
    removefile(index, idx);
  };

  useEffect(() => {
    const func = async () => {
      const pages = await Promise.all(
        data.files.map(async (file) => {
          const numPages = await getNumPages(file);
          file.pages = numPages;
          return numPages;
        })
      );

      if (!data.pages.length) {
        setTotalPage(
          pages.reduce((total, page) => page * data.copy + total, 0)
        );
        setTotalPaper(
          pages.reduce(
            (total, page) =>
              Math.ceil(Math.ceil(page / data.pages_per_sheet) / data.sides) *
              data.copy +
              total,
            0
          )
        );
      } else {
        const packagePages = getTotalPage(data.pages[0].from_to);
        setTotalPage(packagePages * data.files.length * data.copy);
        setTotalPaper(
          Math.ceil(
            Math.ceil(packagePages / data.pages_per_sheet) / data.sides
          ) *
          data.copy *
          data.files.length
        );
      }
    };
    func();
    setOrder((prev) => prev.map((p, idx) => (idx === index ? data : p)));
  }, []);

  useEffect(() => {
    setTotalPackages((prev) => {
      if (prev.length === index) return [...prev, total];
      const newTotalPackages = prev.map((item, idx) => {
        return idx === index ? total : item;
      });
      return newTotalPackages;
    });
  }, [total]);

  useEffect(() => {
    setTotal(totalPaper * coinPerPaper);
  }, [totalPaper]);

  useLayoutEffect(() => {
    const formatData = Object.entries(data)
      .filter(([key, value]) => key !== "pages" && key !== "files")
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");
    setFormat(formatData);

    const pages = data.pages.map((entries) => {
      return Object.entries(entries)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
    });
    setSpecificPages(pages);
  }, []);

  return (
    <div className="w-full mx-5 bg-slate-100 p-5 rounded shadow-md">
      <div className="flex px-2">
        <div className="w-full font-bold text-center flex justify-center items-center">
          <h3 className="w-2/3 text-center bg-blue-400 rounded-md">
            Package {index + 1}
          </h3>
        </div>
        <button onClick={() => func(index)} className="">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="System Icons">
              <path
                id="Vector"
                d="M2.25 4.5H3.75H15.75"
                stroke="#111827"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5"
                stroke="#111827"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M7.5 8.25V12.75"
                stroke="#111827"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M10.5 8.25V12.75"
                stroke="#111827"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>

      {/* SUMMARY */}
      <div>
        {/* INFOMATION */}
        <div className="my-2">
          <span className="font-bold">Infomation</span>
          <div className="px-4 flex flex-col gap-1">
            <p>
              <span className="text-blue-500 font-bold">Format: </span>
              {format}
            </p>
            <p>
              <span className="text-blue-500 font-bold">Location:</span>{" "}
              {location}
            </p>
            {specificPages.length ? (
              <p>
                <span className="text-blue-500 font-bold">Specific pages:</span>
                <br></br>
                {specificPages.map((e, i) => (
                  <React.Fragment key={i}>
                    {e}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* COPY */}
        {/* <div className="flex items-center my-2">
          <span className="font-bold mr-3">Copy</span>

          <div class="relative flex items-center max-w-[6rem]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              class="flex items-center justify-center bg-white border border-gray-300 rounded-l-lg p-1 h-8 text-xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <span onClick={() => updatecopy(index, -1)}>-</span>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              class="bg-white border border-gray-300 h-8 text-center text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1 placeholder-gray-500"
              placeholder={data.copy}
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              class="flex items-center justify-center bg-white border border-gray-300 rounded-r-lg p-1 h-8 text-xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <span onClick={() => updatecopy(index, 1)}>+</span>
            </button>
          </div>
        </div> */}

        {/* FILE */}
        <div>
          <span className="font-bold">Files</span>
          <div className="px-3">
            {data.files.map((e, i) => (
              <FilePreview
                key={i}
                index={i}
                name={e.name}
                weight={e.size}
                func={handleRemoveFile}
              />
            ))}
          </div>
        </div>
      </div>

      {/* TOTAL */}
      <div className="h-0.5 bg-gray-400 my-4"></div>

      <div className="grid grid-cols-7 gap-2">
        <span className="font-bold col-span-2">Total pages:</span>
        {totalPage ? (
          <span className="col-span-5">{totalPage}</span>
        ) : (
          <span className="col-span-5">Calculating...</span>
        )}

        <span className="font-bold col-span-2">Total papers:</span>
        {totalPaper ? (
          <span className="col-span-5">{totalPaper}</span>
        ) : (
          <span className="col-span-5">Calculating...</span>
        )}

        {/* <span className="font-bold col-span-2">Cost service:</span>
        <span className="col-span-5">100</span> */}

        <span className="font-bold col-span-2">Total coins:</span>
        {total ? (
          <span className="col-span-5">{total}</span>
        ) : (
          <span className="col-span-5">Calculating...</span>
        )}
      </div>
    </div>
  );
};

export default ConfirmPackage;

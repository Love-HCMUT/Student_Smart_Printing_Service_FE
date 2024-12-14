import React, { useEffect, useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useRowSelect,
} from "react-table";
import { COLUMNS } from "./printer_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { PrinterSearch } from "./printer_search";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import { useLocation, useNavigate } from "react-router-dom";
import { PrinterSkeleton } from "../../../Skeleton";
const MOCK_DATA = [
  {
    printer_id: "PRINTER-001",
    type_of_printer: "Laser Printer",
    location: "Library",
    requests: 6,
  },
  {
    printer_id: "PRINTER-002",
    type_of_printer: "Inkjet Printer",
    location: "Library",
    requests: 5,
  },
];

const COIN_PER_COLOR_PAPER = 1200;
const COIN_PER_NORMAL_PAPER = 1000;

const PrinterTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => MOCK_DATA, []);
  const [data, setData] = useState([]);
  const [coinPerPaper, setCoinPerPaper] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  const { packages, message } = location.state || [];
  console.log(packages, message);
  useEffect(() => {
    // sides
    const s = packages.map((p) => p.sides);
    const condition = { side: s.some((side) => side == 2) ? 2 : 1 };

    // color
    const c = packages.map((p) => {
      return (
        p.pages.map((item) => item.color).some((item) => item) || p.color_all
      );
    });
    condition.color = c.some((item) => item);
    const host = import.meta.env.VITE_HOST;
    console.log(
      `${host}/order/printers/${condition.color ? 1 : 0}/${condition.side}`
    );
    fetch(`${host}/order/printers/${condition.color ? 1 : 0}/${condition.side}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(
          resData.map((item) => ({
            printer_id: item.id,
            type_of_printer: item.printingMethod,
            location: `${item.campus} - ${item.building} - ${item.room}`,
            requests: item.requests,
          }))
        );
      })
      .catch((err) => console.log("error", err));

    setCoinPerPaper(
      condition.color ? COIN_PER_COLOR_PAPER : COIN_PER_NORMAL_PAPER
    );
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const handleOnClick = (e) => {
    if (!selectedFlatRows.length) {
      console.error("Choose a printer.");
      return;
    }
    navigate("/user/order/confirm", {
      state: {
        packages,
        message,
        printer: selectedFlatRows[0].original,
        coinPerPaper,
      },
    });
  };

  const { globalFilter } = state;

  return data.length ? (
    <div className="container mx-auto p-4">
      <PrinterSearch filter={globalFilter} setFilter={setGlobalFilter} />
      <OrderPrintingHeader />
      <div className="w-full">
        <table
          {...getTableProps()}
          className="min-w-full bg-white border border-gray-300 rounded-md"
        >
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-4 py-2 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                    key={column.id}
                  >
                    <div className="flex items-center">
                      {column.render("Header")}
                      {column.isSorted && (
                        <img
                          src={arrow}
                          alt={column.isSortedDesc ? "desc" : "asc"}
                          className="ml-1"
                          style={{
                            transform: column.isSortedDesc
                              ? "rotate(0deg)"
                              : "rotate(180deg)",
                            verticalAlign: "middle",
                          }}
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="max-w-40 px-4 py-2 text-sm text-gray-700 break-words"
                      key={cell.column.id}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-8 mr-8 flex items-end justify-end">
          <button
            //   to="printer"
            onClick={handleOnClick}
            // type="Link"
            className="min-w-[100px] text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  ) : (
    <PrinterSkeleton />
  );
};

const OrderPrintingHeader = () => {
  return (
    <div className="p-4 shadow-lg">
      <h1 className="text-xl font-bold">Printer information</h1>
      <span className="text-sm text-gray-600">
        Click the box on the left side of print to choose
      </span>{" "}
      <br />
      <span className="text-sm text-gray-600">
        You can only choose one printer
      </span>
    </div>
  );
};

export default PrinterTable;

import React, { useMemo, useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import arrow from "../../../assets/arrow-down.svg";
import { COLUMNS } from "./orders_columns";
import { PSOrderHeader } from "./orders_tables_header";
import PackageForm from "../../Form/Package_form";

// const sample = {
// documents: ["a.txt", "b.txt"], // List of documents
// papers: "A4",
// sides: 2,
// copies: 1,
// scale: 1,
// paperSize: "A4",
// paperSheet: 1,
// printingPages: [], // Array for multiple printing pages options
// isCover: true,
// isGlass: false,
// isBinding: false,
// isColorAllPages: false,
// isColorCover: false,
// };

const getPapers = (p) => {
  const pages = p.files.map((file) => file.numPages);
  if (!p.printingPages.length) {
    return pages.reduce(
      (total, page) =>
        Math.ceil(Math.ceil(page / p.pagePerSheet) / p.side) * p.numOfCopies +
        total,
      0
    );
  } else {
    const packagePages = p.printingPages.reduce(
      (total, page) => page.toPage - page.fromPage + 1 + total,
      0
    );
    return (
      Math.ceil(Math.ceil(packagePages / p.pagePerSheet) / p.side) *
      p.numOfCopies *
      p.files.length
    );
  }
};

export const PSMainTable = ({ data, printer }) => {
  const columns = COLUMNS;
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoizedData = useMemo(() => data, [data]);

  const [OL, setOL] = useState(false);
  const [packages, setPackages] = useState([]);

  const handleDialog = (status) => {
    setOL(status);
  };

  console.log(packages);

  const staffID = parseInt(localStorage.getItem("id")); // Local storage

  const handleDecline = (orderID, staffID) => {
    console.log(orderID, staffID);
  };

  const handleAccept = (orderID, staffID) => {
    setOL(true);
    fetch(`${import.meta.env.VITE_HOST}/printing/${orderID}/details`)
      .then((res) => res.json())
      .then((order) => {
        setPackages(
          order.map((p, index) => {
            const papers = getPapers(p);
            return {
              documents: p.files, // List of documents
              papers: papers,
              sides: p.side,
              copies: p.numOfCopies,
              scale: p.scale,
              paperSize: p.paperSize,
              paperSheet: p.pagePerSheet,
              printingPages: p.printingPages, // Array for multiple printing pages options
              isCover: p.cover,
              isGlass: p.glass,
              isBinding: p.binding,
              isColorAllPages: p.colorAllPages,
              isColorCover: p.colorCover,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: memoizedColumns,
      data: memoizedData,
      initialState: { pageIndex: 0, pageSize: 4 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <div>
        <PSOrderHeader
          printer_name={printer.printer_name}
          printer_status={printer.printer_status}
          previousPage={previousPage}
          nextPage={nextPage}
          gotoPage={gotoPage}
          pageIndex={pageIndex}
          pageCount={pageCount}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          setPageSize={setPageSize}
          pageSize={pageSize}
        />
        <div className="border border-gray-300 rounded-md">
          <table
            {...getTableProps()}
            className="border-l border-r border-gray-light w-full"
          >
            <thead className="top-0 bg-white z-10">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="pl-2 cursor-pointer text-center border-t border-b border-gray-light py-2.5 text-gray-dark text-xs font-inter leading-[15px] bg-pure-white flex-row items-center"
                      key={column.id}
                      scope="col"
                      aria-sort={
                        column.isSorted
                          ? column.isSortedDesc
                            ? "descending"
                            : "ascending"
                          : "none"
                      }
                    >
                      <div
                        className={`flex items-center ${
                          ["isDeclined", "isAccepted"].includes(column.id)
                            ? "justify-center"
                            : ""
                        }`}
                      >
                        {column.render("Header")}
                        {column.isSorted && (
                          <img
                            src={arrow}
                            alt={
                              column.isSortedDesc ? "Descending" : "Ascending"
                            }
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
              {page.length > 0 ? (
                page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="py-2.5" key={row.id}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-2 py-1"
                          key={cell.column.id}
                        >
                          {cell.column.Header == "Accept" ? (
                            <div
                              onClick={() =>
                                handleAccept(row.original.id, staffID)
                              }
                            >
                              {cell.render("Cell")}
                            </div>
                          ) : cell.column.Header == "Decline" ? (
                            <div
                              onClick={() =>
                                handleDecline(row.original.id, staffID)
                              }
                            >
                              {cell.render("Cell")}
                            </div>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center py-4">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {OL && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setOL(false)}
        >
          <div
            className="mb-96 max-h-[80%] relative top-0"
            onClick={(e) => e.stopPropagation()}
          >
            {packages.length ? <PackageForm data={packages[0]} /> : <></>}
          </div>
        </div>
      )}
    </div>
  );
};

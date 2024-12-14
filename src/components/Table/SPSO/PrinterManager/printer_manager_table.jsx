import React, { useEffect, useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useRowSelect,
  usePagination,
} from "react-table";
import { COLUMNS } from "./printer_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import Pagination from "../../Table_Lib/Components/Pagination";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import group from "../../../../assets/group.svg";
import { SPSOHeader1 } from "../Header1/Header1";
import PrinterForm from "../../../Form/Printer_form";
import axios from "axios";

const PrinterManagerTable = () => {
  //const spsoEx = 1;
  const spsoEx = localStorage.getItem("id");
  if (!spsoEx) {
    console.error("spsoID not found in localStorage");
    return { error: "spsoID is required" };
  }
  // Giá trị mẫu
  const [OL, setOL] = useState(false);
  const handleOL = (b) => {
    setOL(b);
  };
  const [PrinterId, setPrinterId] = useState(null);
  const [MOCK_DATA, setMOCK_DATA] = useState([]); // Dùng để lưu dữ liệu từ API
  const [loading, setLoading] = useState(true); // Để hiển thị trạng thái tải dữ liệu
  const [selectedPrinters, setSelectedPrinters] = useState([]);
  // Hàm lấy dữ liệu từ API
  const fetchMOCK_DATA = async () => {
    try {
      const host = import.meta.env.VITE_HOST;
      const response = await axios.get(
        `${host}/api/printer/get_printer?spsoID=${spsoEx}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("call API")
      setMOCK_DATA(response.data.data); // Cập nhật state với dữ liệu từ API
      setLoading(false); // Kết thúc trạng thái tải
    } catch (error) {
      console.error("Error fetching printers:", error.message);
      setLoading(false); // Kết thúc trạng thái tải
    }
  };

  // Dùng useEffect để gọi API khi component được render
  useEffect(() => {
    fetchMOCK_DATA();
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = MOCK_DATA;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, globalFilter, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
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

  useEffect(() => {
    const selected = Object.keys(selectedRowIds).map(
      (rowId) => MOCK_DATA[rowId]?.printer_id
    );
    const validSelectedPrinters = selected.filter(Boolean); // Loại bỏ giá trị undefined nếu có
    setSelectedPrinters(validSelectedPrinters);

    // Log danh sách máy in được chọn
  }, [selectedRowIds, MOCK_DATA]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4 min-h-screen">
        <div className="w-full rounded-lg mt-6 shadow-lg">
          <SearchBar1
            filter={globalFilter}
            setFilter={setGlobalFilter}
            param={
              <PrinterManagerControl
                selectedPrinters={selectedPrinters}
                onStatusChange={fetchMOCK_DATA}
                Id={spsoEx}
              />
            }
          />
          <SPSOHeader1 />
          <div className="h-[600px] overflow-auto">
            <table {...getTableProps()} className="w-full border rounded-md">
              <thead className="bg-gray-light">
                {headerGroups.map((headerGroup, i) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    key={`headerGroup-${i}`}
                  >
                    {headerGroup.headers.map((column, j) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="p-3 text-left text-xs font-medium text-gray-700 tracking-wider cursor-pointer"
                        key={`header-${j}`}
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
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={`row-${i}`}
                      className="hover:bg-gray-50"
                    >
                      {row.cells.map((cell, j) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-4 py-2 text-sm font-normal text-gray-700 break-words"
                          key={`cell-${i}-${j}`}
                        >
                          {cell.column.id === "edit" ? (
                            <div
                              onClick={() => {
                                setPrinterId(row.original.printer_id);
                                handleOL(!OL);
                              }}
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
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center items-center bg-white py-2">
            <Pagination
              previousPage={previousPage}
              nextPage={nextPage}
              gotoPage={gotoPage}
              pageIndex={pageIndex}
              pageCount={pageCount}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              width={"w-8"}
              height={"h-8"}
            />
          </div>
        </div>
      </div>
      {OL && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setOL(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <PrinterForm
              printerId={PrinterId}
              onChange={fetchMOCK_DATA}
              Id={spsoEx}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const PrinterManagerControl = ({ selectedPrinters, onStatusChange, Id }) => {
  const [OL, setOL] = useState(false);
  const handleOL = (b) => {
    setOL(b);
  };
  const handleStatus = async (status) => {
    if (selectedPrinters.length === 0) {
      alert("No printers selected to update.");
      return;
    }

    try {
      const host = import.meta.env.VITE_HOST;
      await axios.put(
        `${host}/api/printer/update-status?spsoID=${Id}`,
        {
          printerStatus: status,
          printerIds: selectedPrinters, // Truyền danh sách các máy in
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(`Updated ${selectedPrinters.length} printer(s) to ${status}.`);
      onStatusChange();
    } catch (error) {
      console.error("Error updating printer status:", error.message);
      alert("Failed to update printer status. Please try again.");
    }
  };

  return (
    <div className="flex items-center space-x-2 p-4 w-[22rem]">
      <button
        onClick={() => handleOL(!OL)}
        className="bg-button-blue hover:bg-button-blue-hover
                           text-white text-sm px-4 py-2 rounded-full flex items-center space-x-1"
      >
        <img src={group} alt="add" className="w-4 h-4 text-gray-400 mr-2" />
        <span>Add Printer</span>
      </button>
      <button
        className="bg-button-green hover:bg-button-green-hover text-white text-sm px-4 py-2 rounded-full"
        onClick={() => handleStatus("Available")} // Gọi hàm với trạng thái "Enable"
      >
        Enable
      </button>
      <button
        className="bg-button-red hover:bg-button-red-hover text-white text-sm px-4 py-2 rounded-full"
        onClick={() => handleStatus("Unavailable")} // Gọi hàm với trạng thái "Disable"
      >
        Disable
      </button>

      {OL && (
        <div
          // className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setOL(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <PrinterForm onChange={onStatusChange} Id={Id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PrinterManagerTable;

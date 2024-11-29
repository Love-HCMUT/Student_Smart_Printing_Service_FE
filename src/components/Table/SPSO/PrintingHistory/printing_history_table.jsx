import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import { COLUMNS } from "./printing_history_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import { CustomDateInput } from "../DateInputComponent.jsx/customDateInputComponent";
import { countOrders, getAllOrderPagination } from "../../../../services/spso-get-all-api";

const PrintingHistoryPayment = () => {
    const columns = useMemo(() => COLUMNS, []);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllOrderPagination(currentPage + 1, 10);
                setData(Array.isArray(result) ? result : []);

                const totalOrders = await countOrders();
                setTotalOrders(totalOrders.totalOrder);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]);
            }
        };
        fetchData();
    }, [currentPage]);

    const parseCustomDate = (DateString) => {
        if (DateString) {
            const [datePart, hourPart] = DateString.split(" ");
            if (datePart && hourPart) {
                const [day, month, year] = datePart.split("/");
                const [hour, minute] = hourPart.split(":");

                if (day && month && year && hour && minute) {
                    return new Date(year, month - 1, day, hour, minute);
                }
            }
        }
        return null;
    };

    const filterDataByDateRange = (rows, id, filterValue) => {
        const { startDate, endDate } = filterValue;

        return rows.filter(row => {
            const rowStartTime = parseCustomDate(row.original.startTime);
            const rowEndTime = parseCustomDate(row.original.endTime);

            if (!rowStartTime || !rowEndTime) {
                return false;
            }

            const rowStartDateOnly = new Date(rowStartTime.getFullYear(), rowStartTime.getMonth(), rowStartTime.getDate());
            const rowEndDateOnly = new Date(rowEndTime.getFullYear(), rowEndTime.getMonth(), rowEndTime.getDate());

            if (startDate) {
                const startOnly = new Date(new Date(startDate).getFullYear(), new Date(startDate).getMonth(), new Date(startDate).getDate());
                if (rowStartDateOnly < startOnly) return false;
            }

            if (endDate) {
                const endOnly = new Date(new Date(endDate).getFullYear(), new Date(endDate).getMonth(), new Date(endDate).getDate());
                if (rowEndDateOnly > endOnly) return false;
            }

            return true;
        });
    };

    const filterDataBySearch = (rows, id, filterValue) => {
        if (!filterValue) return rows;
        return rows.filter(row => {
            const { userID, printerID, printingStaffID } = row.original;
            return (
                (userID && String(userID).toLowerCase().includes(filterValue.toLowerCase())) ||
                (printerID && String(printerID).toLowerCase().includes(filterValue.toLowerCase())) ||
                (printingStaffID && String(printingStaffID).toLowerCase().includes(filterValue.toLowerCase()))
            );
        });
    };

    const combinedFilter = (rows, id, filterValue) => {
        const { startDate, endDate, searchInput } = filterValue;
        let filteredRows = filterDataByDateRange(rows, id, { startDate, endDate });
        filteredRows = filterDataBySearch(filteredRows, id, searchInput);
        return filteredRows;
    };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        pageCount,
        nextPage,
        previousPage,
        state: { globalFilter },
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
            manualPagination: true,
            pageCount: Math.ceil(totalOrders / 10),
            globalFilter: combinedFilter,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
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

    const handleGoToPage = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            previousPage();
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageCount - 1) {
            nextPage();
            setCurrentPage(currentPage + 1);
        }
    };

    const canPreviousPage2 = () => {
        return (currentPage > 0)
    }

    const canNextPage2 = () => {
        return (currentPage < pageCount - 1)
    }

    return (
        <div className="container mx-auto px-6 w-4/5">
            <div className="flex flex-col gap-4 mb-4">
                <SearchBar1
                    value={searchInput}
                    setValue={setSearchInput}
                    setFilter={(value) => setGlobalFilter({ startDate, endDate, searchInput: value })}
                    param={
                        <DateInputComponent
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            setGlobalFilter={(value) => setGlobalFilter({ ...globalFilter, ...value })}
                        />
                    }
                />
            </div>
            <div className="shadow-md rounded-lg p-4 bg-white">
                <SPSOHeader1 header="Printing Log" content="A printing log service for SPSO" />
                <div className="overflow-auto">
                    <table {...getTableProps()} className="mx-auto w-full">
                        <thead className="bg-gray-light">
                            {headerGroups.map((headerGroup, i) => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup${i}`}>
                                    {headerGroup.headers.map((column, j) => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className="p-4 text-base font-medium text-gray-700 tracking-wider cursor-pointer"
                                            key={`header${j}`}
                                        >
                                            <div className="flex">
                                                {column.render('Header')}
                                                {column.isSorted && (
                                                    <img
                                                        src={arrow}
                                                        alt={column.isSortedDesc ? 'desc' : 'asc'}
                                                        className="ml-1"
                                                        style={{ transform: column.isSortedDesc ? 'rotate(0deg)' : 'rotate(180deg)', verticalAlign: 'middle' }}
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
                                    <tr {...row.getRowProps()} key={`row-${i}`} className="hover:bg-gray-50">
                                        {row.cells.map((cell, j) => (
                                            <td {...cell.getCellProps()} className="px-4 py-2 mt-4" key={`cell-${i}-${j}`}>
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center items-center mb-10 mt-10">
                <CustomPagination
                    previousPage={handlePreviousPage}
                    nextPage={handleNextPage}
                    gotoPage={handleGoToPage}
                    pageIndex={currentPage}
                    pageCount={Math.ceil(totalOrders / 10)}
                    canPreviousPage={canPreviousPage2}
                    canNextPage={canNextPage2}
                    width={'w-12'}
                    height={'h-12'}
                />
            </div>
        </div>
    );
};

const CustomPagination = ({
    previousPage,
    nextPage,
    gotoPage,
    pageIndex,
    pageCount,
    canPreviousPage,
    canNextPage,
    width = 'w-6',
    height = 'h-6'
}) => {
    const [isInputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState(pageIndex + 1);
    useEffect(() => {
        setInputValue(pageIndex + 1);
    }, [pageIndex]);

    const handlePageInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handlePageSubmit = () => {
        const page = Math.max(0, Math.min(pageCount - 1, Number(inputValue) - 1));
        gotoPage(page);
        setInputVisible(false);
    };

    const handleBlur = () => {
        setInputVisible(false);
    };

    return (
        <div className="flex items-center text-black text-base font-inter gap-1">
            <button
                onClick={previousPage}
                disabled={(!canPreviousPage())}
                className={`${width} ${height} bg-white 
                rounded-md
                border border-gray-300 
                hover:bg-gray-400 
                focus:outline-none 
                focus:ring-2 focus:ring-gray-500 
                focus:ring-opacity-50 
                disabled:bg-gray-200 
                disabled:cursor-not-allowed 
                disabled:text-gray-400 flex items-center justify-center`}
            >
                {'<'}
            </button>

            <button
                onClick={() => gotoPage(0)}
                className={`${width} ${height} bg-white 
               rounded-md
               border border-gray-300 
               hover:bg-gray-400 
               focus:outline-none 
               focus:ring-2 focus:ring-gray-500 
               focus:ring-opacity-50 flex items-center justify-center`}
            >
                {'1'}
            </button>

            {pageCount > 3 && (
                isInputVisible ? (
                    <input
                        type="number"
                        min={1}
                        max={pageCount}
                        value={inputValue}
                        onChange={handlePageInput}
                        onBlur={handleBlur}
                        onKeyDown={(e) => e.key === 'Enter' && handlePageSubmit()}
                        className={`w-10 ${height} p-1 border rounded-md 
                     border-gray-300 focus:ring-2 
                     focus:ring-gray-500 focus:outline-none 
                     text-center`}
                    />
                ) : (
                    <button
                        onClick={() => setInputVisible(true)}
                        className={`${width} ${height} bg-white 
                                    rounded-md
                                    border border-gray-300  text-gray-400 
                     flex items-center justify-center`}
                    >
                        ...
                    </button>
                )
            )}

            {pageCount > 1 && (
                <button
                    onClick={() => gotoPage(pageCount === 2 ? 1 : pageCount - 2)}
                    className={`${width} ${height} bg-white 
                   rounded-md
                   border border-gray-300 
                   hover:bg-gray-400 
                   focus:outline-none 
                   focus:ring-2 focus:ring-gray-500 
                   focus:ring-opacity-50 flex items-center justify-center`}
                >
                    {pageCount === 2 ? '2' : pageCount - 1}
                </button>
            )}

            {pageCount > 2 && (
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    className={`${width} ${height} bg-white 
                   rounded-md
                   border border-gray-300 
                   hover:bg-gray-400 
                   focus:outline-none 
                   focus:ring-2 focus:ring-gray-500 
                   focus:ring-opacity-50 flex items-center justify-center`}
                >
                    {pageCount}
                </button>
            )}

            <button
                onClick={nextPage}
                disabled={!canNextPage()}
                className={`${width} ${height} bg-white 
                rounded-md
                border border-gray-300 
                hover:bg-gray-400 
                focus:outline-none 
                focus:ring-2 focus:ring-gray-500 
                focus:ring-opacity-50 
                disabled:bg-gray-200 
                disabled:cursor-not-allowed 
                disabled:text-gray-400 flex items-center justify-center`}
            >
                {'>'}
            </button>
        </div>
    );
};

const DateInputComponent = ({ startDate, setStartDate, endDate, setEndDate, setGlobalFilter }) => {
    const handleStartDateChange = (date) => {
        setStartDate(date);
        setGlobalFilter({ startDate: date, endDate });
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        setGlobalFilter({ startDate, endDate: date });
    };

    return (
        <div className="flex items-center gap-1">
            <CustomDateInput value={startDate} onChange={handleStartDateChange} placeholder="Start Date" />
            <CustomDateInput value={endDate} onChange={handleEndDateChange} placeholder="End Date" />
        </div>
    );
};

export default PrintingHistoryPayment;
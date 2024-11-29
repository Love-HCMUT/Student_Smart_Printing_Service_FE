import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter, useRowSelect, usePagination } from "react-table";
import { COLUMNS } from "./payment_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";
import { CustomDateInput } from "../DateInputComponent.jsx/customDateInputComponent";
import { getAllTransactionPagination, countTransactions } from "../../../../services/spso-get-all-api";
const PaymentHistoryTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState([]);
    const [totalTransactions, setTotalTransactions] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllTransactionPagination(currentPage + 1, 10);
                setData(Array.isArray(result) ? result : []);

                const totalTransactions = await countTransactions();
                setTotalTransactions(totalTransactions.totalTransaction);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]);
            }
        };
        fetchData();
    }, [currentPage]);

    const filterDataByDate = (rows, id, filterValue) => {
        const { startDate, endDate } = filterValue;
        return rows.filter(row => {
            const rowDate = new Date(row.original.date_of_transaction);
            if (startDate && rowDate < new Date(startDate)) return false;
            if (endDate && rowDate > new Date(endDate)) return false;
            return true;
        });
    };

    const filterDataBySearch = (rows, id, filterValue) => {
        if (!filterValue) return rows;
        return rows.filter(row => {
            const { user_ID, printer_ID, printingStaff_ID } = row.original;
            return (
                (user_ID && String(user_ID).toLowerCase().includes(filterValue.toLowerCase())) ||
                (printer_ID && String(printer_ID).toLowerCase().includes(filterValue.toLowerCase())) ||
                (printingStaff_ID && String(printingStaff_ID).toLowerCase().includes(filterValue.toLowerCase()))
            );
        });
    };

    const combinedFilter = (rows, id, filterValue) => {
        const { startDate, endDate, searchInput } = filterValue;
        let filteredRows = filterDataByDate(rows, id, { startDate, endDate });
        filteredRows = filterDataBySearch(filteredRows, id, searchInput);
        return filteredRows;
    };

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
        state: { pageIndex, globalFilter },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
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
                <SPSOHeader1 header="Payment History" content="History of Payment is stored in 120 days " />
                <table {...getTableProps()} className="mx-auto w-full">
                    <thead className="bg-gray-light">
                        {headerGroups.map((headerGroup, i) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup-${i}`}>
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
            <div className="flex justify-center items-center mb-10 mt-10">
                <CustomPagination
                    previousPage={handlePreviousPage}
                    nextPage={handleNextPage}
                    gotoPage={handleGoToPage}
                    pageIndex={currentPage}
                    pageCount={Math.ceil(totalTransactions / 10)}
                    canPreviousPage={canPreviousPage2}
                    canNextPage={canNextPage2}
                    width={'w-12'}
                    height={'h-12'}
                />
            </div>
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

export default PaymentHistoryTable;
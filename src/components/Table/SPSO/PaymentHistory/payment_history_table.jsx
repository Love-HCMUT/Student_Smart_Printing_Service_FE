import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter, useRowSelect, usePagination } from "react-table";
import { COLUMNS } from "./payment_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";
import { CustomDateInput } from "../DateInputComponent.jsx/customDateInputComponent";
import { getAllTransactionPagination, countTransactions } from "../../../../services/spso-get-all-api";
import CustomPagination from "../../Table_Lib/Components/Pagination2";

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
                setTotalTransactions(totalTransactions[0].totalTransaction);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]);
            }
        };
        fetchData();
    }, [currentPage]);

    const filterDataByDate = (rows, id, filterValue) => {
        let { startDate, endDate } = filterValue;
        if (!startDate && !endDate) return rows;
        startDate = new Date(startDate).toISOString();
        endDate = new Date(endDate).toISOString();
        return rows.filter(row => {
            const rowDate = new Date(row.original.dateOfTransaction).toISOString()
            if (startDate && endDate) {
                return rowDate >= startDate && rowDate <= endDate
            }
            if (startDate) {
                return rowDate >= startDate
            }
            if (endDate) {
                return rowDate <= endDate
            }
            return true;
        });
    };

    const filterDataBySearch = (rows, id, filterValue) => {
        if (!filterValue) return rows;
        return rows.filter(row => {
            const { ID } = row.original
            return ID == filterValue
        })
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
        <div className="container mx-auto w-full">
            <div className="flex flex-col gap-4">
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
            <div className="shadow-md rounded-lg bg-white">
                <SPSOHeader1 header="Payment History" content="History of Payment is stored in 120 days " />
                <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 rounded-md">
                    <thead className="bg-gray-100">
                        {headerGroups.map((headerGroup, i) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup-${i}`}>
                                {headerGroup.headers.map((column, j) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-4 py-4 text-left text-base font-medium text-gray-500 tracking-wider cursor-pointer"
                                        key={`header${j}`}
                                    >
                                        <div className="flex items-center">
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
                                        <td {...cell.getCellProps()} className="px-4 py-2 text-sm text-gray-700 break-words" key={`cell-${i}-${j}`}>
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
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

export default PaymentHistoryTable;
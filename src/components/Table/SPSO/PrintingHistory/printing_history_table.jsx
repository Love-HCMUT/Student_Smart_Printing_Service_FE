import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import { COLUMNS } from "./printing_history_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import { CustomDateInput } from "../DateInputComponent.jsx/customDateInputComponent";
import { countOrders, getAllOrderPagination } from "../../../../services/spso-get-all-api";
import CustomPagination from "../../Table_Lib/Components/Pagination2";
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
                const totalOrder = await countOrders();
                setTotalOrders(totalOrder[0].totalOrder);
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
            const rowStartDate = new Date(row.original.startTime).toISOString();
            const rowEndDate = new Date(row.original.endTime).toISOString();

            if (startDate && endDate) {
                return rowStartDate >= startDate && rowEndDate <= endDate
            }
            if (startDate) {
                return rowStartDate >= startDate
            }
            if (endDate) {
                return rowEndDate <= endDate
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
        let filteredRows = filterDataBySearch(rows, id, searchInput);
        filteredRows = filterDataByDate(filteredRows, id, { startDate, endDate });
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
        <div className="container mx-auto px-6">
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
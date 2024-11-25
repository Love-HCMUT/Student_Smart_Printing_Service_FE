import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useRowSelect, usePagination } from "react-table";
import { COLUMNS } from "./payment_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import Pagination from "../../Table_Lib/Components/Pagination";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";
import { CustomDateInput } from "../DateInputComponent.jsx/customDateInputComponent";

const PaymentHistoryTable = ({ data }) => {
    const columns = useMemo(() => COLUMNS, []);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchInput, setSearchInput] = useState("");

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

    return (
        <div className="container mx-auto px-6 h-fit w-3/5 rounded-lg">
            <div className="">
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
                <SPSOHeader1 />
            </div>
            <div className="h-[430px] overflow-auto">
                <table {...getTableProps()} className="mx-auto border rounded-md w-full">
                    <thead className="bg-gray-light">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="p-3 text-left text-xs font-medium text-gray-700 tracking-wider cursor-pointer"
                                        key={column.id}
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
                        {page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={row.id} className="hover:bg-gray-50">
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="px-4 py-2 text-sm font-normal text-gray-700 break-words" key={cell.column.id}>
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center mb-10">
                <Pagination
                    previousPage={previousPage}
                    nextPage={nextPage}
                    gotoPage={gotoPage}
                    pageIndex={pageIndex}
                    pageCount={pageCount}
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    width={'w-8'}
                    height={'h-8'}
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
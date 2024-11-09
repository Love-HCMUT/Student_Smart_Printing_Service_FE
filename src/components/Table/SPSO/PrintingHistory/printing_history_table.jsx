<<<<<<< HEAD
import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./printing_history_columns"
import arrow from "../../../../assets/arrow-down.svg";
import Pagination from "../../Table_Lib/Components/Pagination";

const MOCK_DATA = [
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },

    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "12/12/2023 10:00",
        "end_time": "12/12/2023 10:30",
        "number_of_pages": "A4-300"
    },
]

const PrintingHistoryPayment = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

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
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    );

    // const { globalFilter } = state;
    {/* <PrinterSearch filter={globalFilter} setFilter={setGlobalFilter} />
            <OrderPrintingHeader /> */}
    return (
        <div className="container mx-auto p-4">

            <div className="w-full">
                <div className="h-[600px] overflow-auto">
                    <table {...getTableProps()} className="min-w-full bg-white border
                 border-gray-300 rounded-md">
                        <thead className="bg-gray-100">
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className="px-4 py-2 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
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
                                    <tr {...row.getRowProps()} key={row.id}>
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()} className="max-w-40 px-4 py-2 text-sm text-gray-700 break-words" key={cell.column.id}>
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="bottom-0 left-0 right-0 flex justify-center items-center bg-white py-2">
                    <Pagination previousPage={previousPage}
                        nextPage={nextPage}
                        gotoPage={gotoPage}
                        pageIndex={pageIndex}
                        pageCount={pageCount}
                        canPreviousPage={canPreviousPage}
                        canNextPage={canNextPage}
                        width={'w-8'}
                        height={'h-8'} />
                </div>
            </div>
        </div>
    );
};

// const OrderPrintingHeader = () => {
//     return (
//         <div className="p-4 shadow-lg">
//             <h1 className="text-xl font-bold">Printer information</h1>
//             <span className="text-sm text-gray-600">Click the box on the left side of print to choose</span> <br />
//             <span className="text-sm text-gray-600">You can only choose one printer</span>
//         </div>
//     )
// }

=======
import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import { COLUMNS } from "./printing_history_columns"
import arrow from "../../../../assets/arrow-down.svg";
import Pagination from "../../Table_Lib/Components/Pagination";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import { CustomDateInput } from "../DateInputComponent.jsx/customDateInputComponent";

const MOCK_DATA = [
    {
        "user_ID": "USR001",
        "printer_id": "PRT001",
        "printing_staff_id": "STF001",
        "file_name": "document1.pdf",
        "start_time": "01/11/2024 10:00",
        "end_time": "01/11/2024 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR002",
        "printer_id": "PRT002",
        "printing_staff_id": "STF002",
        "file_name": "document2.pdf",
        "start_time": "05/12/2024 10:00",
        "end_time": "05/12/2024 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR003",
        "printer_id": "PRT003",
        "printing_staff_id": "STF003",
        "file_name": "document3.pdf",
        "start_time": "10/01/2024 10:00",
        "end_time": "10/01/2024 10:30",
        "number_of_pages": "A4-300"
    },
    {
        "user_ID": "USR004",
        "printer_id": "PRT004",
        "printing_staff_id": "STF004",
        "file_name": "document4.pdf",
        "start_time": "15/02/2024 10:00",
        "end_time": "15/02/2024 10:30",
        "number_of_pages": "A4-300"
    }
]

const PrintingHistoryPayment = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    //
    const filterDataByDateRange = (rows, id, filterValue) => {
        const { startDate, endDate } = filterValue;

        return rows.filter(row => {
            const rowStartTime = new Date(row.original.start_time);
            const rowEndTime = new Date(row.original.end_time);

            const rowStartDateOnly = new Date(rowStartTime.getFullYear(), rowStartTime.getMonth(), rowStartTime.getDate());
            const rowEndDateOnly = new Date(rowEndTime.getFullYear(), rowEndTime.getMonth(), rowEndTime.getDate());

            if (startDate) {
                const startOnly = new Date(new Date(startDate).toISOString().split('T')[0]);
                if (rowStartDateOnly < startOnly) return false;
            }

            if (endDate) {
                const endOnly = new Date(new Date(endDate).toISOString().split('T')[0]);
                if (rowEndDateOnly > endOnly) return false;
            }

            return true;
        });
    };

    const filterDataBySearch = (rows, id, filterValue) => {
        if (!filterValue) return rows;
        return rows.filter(row => {
            return Object.values(row.original).some(val =>
                val && String(val).toLowerCase().includes(filterValue.toLowerCase())
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
                < SearchBar1
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



>>>>>>> b9d5b91f579a6cdc7b6bc1210f23d4fa66ca8221
export default PrintingHistoryPayment;
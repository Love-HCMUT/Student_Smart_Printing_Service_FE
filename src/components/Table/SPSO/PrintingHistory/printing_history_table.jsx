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

export default PrintingHistoryPayment;
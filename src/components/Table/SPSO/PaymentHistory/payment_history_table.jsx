import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./payment_columns"
import arrow from "../../../../assets/arrow-down.svg";
import Pagination from "../../Table_Lib/Components/Pagination";

const MOCK_DATA = [
    {
        "user_ID": "USR001",
        "date_of_transaction": "12/12/2023",
        "number_of_paper": 50,
        "charge": "50000 VND",
        "payment_method": "Credit Card",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR002",
        "date_of_transaction": "11/11/2023",
        "number_of_paper": 30,
        "charge": "30000 VND",
        "payment_method": "PayPal",
        "note": "Pending payment"
    },
    {
        "user_ID": "USR003",
        "date_of_transaction": "10/10/2023",
        "number_of_paper": 20,
        "charge": "20000 VND",
        "payment_method": "Bank Transfer",
        "note": "Payment received"
    },
    {
        "user_ID": "USR004",
        "date_of_transaction": "09/09/2023",
        "number_of_paper": 40,
        "charge": "40000 VND",
        "payment_method": "Credit Card",
        "note": "Payment failed"
    },
    {
        "user_ID": "USR005",
        "date_of_transaction": "08/08/2023",
        "number_of_paper": 60,
        "charge": "60000 VND",
        "payment_method": "PayPal",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR006",
        "date_of_transaction": "07/07/2023",
        "number_of_paper": 25,
        "charge": "25000 VND",
        "payment_method": "Bank Transfer",
        "note": "Pending payment"
    },
    {
        "user_ID": "USR007",
        "date_of_transaction": "06/06/2023",
        "number_of_paper": 35,
        "charge": "35000 VND",
        "payment_method": "Credit Card",
        "note": "Payment received"
    },
    {
        "user_ID": "USR008",
        "date_of_transaction": "05/05/2023",
        "number_of_paper": 45,
        "charge": "45000 VND",
        "payment_method": "PayPal",
        "note": "Payment failed"
    },
    {
        "user_ID": "USR009",
        "date_of_transaction": "04/04/2023",
        "number_of_paper": 55,
        "charge": "55000 VND",
        "payment_method": "Bank Transfer",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR010",
        "date_of_transaction": "03/03/2023",
        "number_of_paper": 65,
        "charge": "65000 VND",
        "payment_method": "Credit Card",
        "note": "Pending payment"
    }
]

const PaymentHistoryTable = () => {
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

export default PaymentHistoryTable;
import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./orders_history_payments_columns";
import { OrdersHistoryPaymentSearch } from "./orders_history_payments_search";
import arrow from "../../../../assets/arrow-down.svg";
import Pagination from "../../Table_Lib/Components/Pagination";
import { handleSearch } from "../../../../services/user-transaction-api";
const OrdersHistoryPayment = ({ values }) => {
    const columns = useMemo(() => COLUMNS, []);
    const [data, setData] = useState(values || []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // instead of rows, use page for pagination
        prepareRow,
        state,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination // add usePagination hook
    );

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <div className="container mx-auto p-4">
            <OrdersHistoryPaymentSearch filter={globalFilter} setFilter={setGlobalFilter} onSearch={handleSearch} />
            <OrderPrintingHeader pagination={
                <Pagination
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageOptions={pageOptions}
                    pageCount={pageCount}
                    gotoPage={gotoPage}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    setPageSize={setPageSize}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    width="w-8"
                    height="h-8"
                />
            } />
            <div className="w-full">
                <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 rounded-md">
                    <thead className="bg-gray-100">
                        {headerGroups.map((headerGroup, i) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup-${i}`}>
                                {headerGroup.headers.map((column, j) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-4 py-2 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                                        key={`header-${j}`}
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
                        {page.map((row, i) => { // use page instead of rows
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={`row-${i}`}>
                                    {row.cells.map((cell, j) => (
                                        <td {...cell.getCellProps()} className="max-w-40 px-4 py-2 text-sm text-gray-700 break-words" key={`cell-${i}-${j}`}>
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
    );
};

const OrderPrintingHeader = ({ pagination }) => {
    return (
        <div className="bg-white rounded p-4 shadow-lg flex justify-between">
            <div>
                <h1 className="text-xl font-bold">Payment History</h1>
                <span className="text-sm text-gray-600">History of your payment is stored in 120 days </span>
            </div>

            <div className="flex justify-between items-center mr-8">
                <div>
                    {pagination}
                </div>
            </div>
        </div>
    )
}

export default OrdersHistoryPayment;

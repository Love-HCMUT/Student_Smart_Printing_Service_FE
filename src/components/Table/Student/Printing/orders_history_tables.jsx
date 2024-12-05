import React, { useMemo } from "react";
import { useTable, useSortBy, useRowSelect, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./orders_history_columns";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import { OrdersHistorySearchTables } from "./orders_history_search";
import arrow from "../../../../assets/arrow-down.svg";
import { cancelOrderByUser } from "../../../../services/user-transaction-api";
import Pagination from "../../Table_Lib/Components/Pagination";

const OrdersHistoryTable = ({ data, onCancelOrder }) => {
    const columns = useMemo(() => COLUMNS, []);
    const tableData = useMemo(() => data, [data]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        selectedFlatRows,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data: tableData,
            initialState: { pageIndex: 0, pageSize: 10 },
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

    const { globalFilter } = state;

    const handleCancelOrders = async () => {
        const selectedOrderIds = selectedFlatRows.map(row => row.original.orderID);
        try {
            await Promise.all(selectedOrderIds.map(orderID => cancelOrderByUser(orderID)))
            onCancelOrder(selectedOrderIds);
        } catch (error) {
            console.error("Error cancelling orders:", error);
        }
    };

    return (
        <div className="container mx-auto p-4 mt-8">
            <OrdersHistorySearchTables filter={globalFilter} setFilter={setGlobalFilter} onCancelOrder={handleCancelOrders} />
            <OrderPrintingHeader />
            <div className="w-full">
                <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 rounded-md">
                    <thead className="bg-gray-100">
                        {headerGroups.map(headerGroup => {
                            const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                            return (
                                <tr key={key} {...restHeaderGroupProps}>
                                    {headerGroup.headers.map(column => {
                                        const { key, ...restColumnProps } = column.getHeaderProps(column.getSortByToggleProps());
                                        return (
                                            <th key={key} {...restColumnProps} className="px-4 py-2 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer">
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
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row);
                            const { key, ...restRowProps } = row.getRowProps();
                            return (
                                <tr key={key} {...restRowProps}>
                                    {row.cells.map(cell => {
                                        const { key, ...restCellProps } = cell.getCellProps();
                                        return (
                                            <td key={key} {...restCellProps} className="max-w-40 px-4 py-2 text-sm text-gray-700 break-words">
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center mb-10 mt-4">
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

const OrderPrintingHeader = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Orders History</h1>
            <span className="text-sm text-gray-600">History of your printing orders is stored for 6 months</span>
        </div>
    );
};

export default OrdersHistoryTable;

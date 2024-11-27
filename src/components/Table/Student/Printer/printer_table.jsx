import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useRowSelect } from "react-table";
import { COLUMNS } from "./printer_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { PrinterSearch } from "./printer_search";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";

const MOCK_DATA = [
    {
        "printer_id": "PRINTER-001",
        "type_of_printer": "Laser Printer",
        "location": "Library",
        "requests": 6
    },
    {
        "printer_id": "PRINTER-002",
        "type_of_printer": "Inkjet Printer",
        "location": "Library",
        "requests": 5
    }
];

const PrinterTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
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

    return (
        <div className="container mx-auto p-4">
            <PrinterSearch filter={globalFilter} setFilter={setGlobalFilter} />
            <OrderPrintingHeader />
            <div className="w-full">
                <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 rounded-md">
                    <thead className="bg-gray-100">
                        {headerGroups.map((headerGroup, i) => {
                            const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                            return (
                                <tr key={key || `headerGroup-${i}`} {...restHeaderGroupProps}>
                                    {headerGroup.headers.map((column, j) => {
                                        const { key, ...restColumnProps } = column.getHeaderProps(column.getSortByToggleProps());
                                        return (
                                            <th
                                                key={key || `header-${j}`}
                                                {...restColumnProps}
                                                className="px-4 py-2 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
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
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            const { key, ...restRowProps } = row.getRowProps();
                            return (
                                <tr key={key || `row-${i}`} {...restRowProps}>
                                    {row.cells.map((cell, j) => {
                                        const { key, ...restCellProps } = cell.getCellProps();
                                        return (
                                            <td key={key || `cell-${i}-${j}`} {...restCellProps} className="max-w-40 px-4 py-2 text-sm text-gray-700 break-words">
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
        </div>
    );
};

const OrderPrintingHeader = () => {
    return (
        <div className="p-4 shadow-lg">
            <h1 className="text-xl font-bold">Printer information</h1>
            <span className="text-sm text-gray-600">Click the box on the left side of print to choose</span> <br />
            <span className="text-sm text-gray-600">You can only choose one printer</span>
        </div>
    )
}

export default PrinterTable;

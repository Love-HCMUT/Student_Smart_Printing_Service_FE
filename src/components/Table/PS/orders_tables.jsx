import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import arrow from '../../../assets/arrow-down.svg';
import { COLUMNS } from './orders_columns';
import { PSOrderHeader } from './orders_tables_header';

export const PSMainTable = ({
    data, printer
}) => {
    const columns = COLUMNS
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoizedData = useMemo(() => data, [data]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
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
            columns: memoizedColumns,
            data: memoizedData,
            initialState: { pageIndex: 0, pageSize: 4 },
        },
        useSortBy,
        usePagination
    );

    return (
        <div>
            <PSOrderHeader
                printer_name={printer.printer_name}
                printer_status={printer.printer_status}
                previousPage={previousPage}
                nextPage={nextPage}
                gotoPage={gotoPage}
                pageIndex={pageIndex}
                pageCount={pageCount}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageOptions={pageOptions}
                setPageSize={setPageSize}
                pageSize={pageSize}
            />
            <div className="border border-gray-300 rounded-md">
                <table {...getTableProps()} className="border-l border-r border-gray-light w-full">
                    <thead className="top-0 bg-white z-10">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="pl-2 cursor-pointer text-center border-t border-b border-gray-light py-2.5 text-gray-dark text-xs font-inter leading-[15px] bg-pure-white flex-row items-center"
                                        key={column.id}
                                        scope="col"
                                        aria-sort={column.isSorted ? (column.isSortedDesc ? 'descending' : 'ascending') : 'none'}
                                    >
                                        <div className={`flex items-center ${['isDeclined', 'isAccepted'].includes(column.id) ? 'justify-center' : ''}`}>
                                            {column.render('Header')}
                                            {column.isSorted && (
                                                <img
                                                    src={arrow}
                                                    alt={column.isSortedDesc ? 'Descending' : 'Ascending'}
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
                        {page.length > 0 ? (
                            page.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} className="py-2.5" key={row.id}>
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()} className="px-2 py-1" key={cell.column.id}>
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-4">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
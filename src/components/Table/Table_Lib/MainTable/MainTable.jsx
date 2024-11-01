import React, { useMemo } from 'react';
import MOCK_DATA from '../TableRawdata/MOCK_DATA.json';
import { COLUMNS } from '../TableColumn/columns';
import arrow from '../../../../assets/arrow-down.svg';
import { Checkbox } from '../Components/Checkbox';
import { useTable, useSortBy, useRowSelect, usePagination, useGlobalFilter } from 'react-table';
import Pagination from '../Components/Pagination';
import { GlobalFilter } from '../Components/GlobalFilter';

export const MainTable = ({
    data = MOCK_DATA,
    columns = COLUMNS,
    isUseRowSelect = true,

    isUsePagination = true,
    paginationSize = 10,

    isUseFiltering = true,

    w = '100%',
    h = '100%',
}) => {
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoizedData = useMemo(() => data, [data]);

    const plugins = [];

    if (isUseFiltering) {
        plugins.push(useGlobalFilter);
    }

    plugins.push(useSortBy);

    if (isUsePagination) {
        plugins.push(usePagination);
    }

    if (isUseRowSelect) {
        plugins.push(useRowSelect);
        plugins.push((hooks) => {
            hooks.visibleColumns.push((columns) => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({ row }) => (
                        <Checkbox {...row.getToggleRowSelectedProps()} />
                    ),
                },
                ...columns,
            ]);
        });
    }



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        page,
        prepareRow,
        state: { pageIndex },
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state,
        setGlobalFilter,
    } = useTable(
        {
            columns: memoizedColumns,
            data: memoizedData,
            initialState: { pageIndex: 0, pageSize: paginationSize },
        },
        ...plugins
    );

    const tableRows = isUsePagination ? page : rows;

    const { globalFilter } = state;

    return (
        <div className={`w-[${w}] h-[${h}]`}>

            {/* Global Filter */}
            {isUseFiltering && (
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            )}

            <table {...getTableProps()} className={`border-l border-r border-gray-light w-full`}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="pl-2 cursor-pointer text-left border-t border-b border-gray-light py-2.5 text-gray-dark text-xs font-inter leading-[15px] bg-pure-white flex-row items-center"
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
                    {tableRows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                className="py-2.5"
                            >
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className="px-2 py-1">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Pagination */}
            {isUsePagination && (
                <div className="flex justify-center mt-4">
                    <Pagination
                        {...{
                            previousPage,
                            nextPage,
                            gotoPage,
                            pageIndex,
                            pageCount,
                            canPreviousPage,
                            canNextPage,
                            setPageSize,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

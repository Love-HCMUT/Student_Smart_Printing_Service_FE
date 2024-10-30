import React, { useMemo } from 'react';
import MOCK_DATA from './Table_Lib/MOCK_DATA.json';
import { COLUMNS } from './Table_Lib/columns';
import arrow from '../../assets/arrow-down.svg';
import { Checkbox } from './Table_Lib/Checkbox';
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table';

export const MainTable = ({
    data = MOCK_DATA,
    columns = COLUMNS,
    isUseRowSelect = true,

    isUsePagination = true,
    paginationSize = 10,

}) => {
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoizedData = useMemo(() => data, [data]);

    const plugins = [useSortBy];
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
        state: { pageIndex, pageSize },
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
            columns: memoizedColumns,
            data: memoizedData,
            initialState: { pageIndex: 0, pageSize: paginationSize },
        },
        ...plugins
    );

    const tableRows = isUsePagination ? page : rows;

    return (
        <div>
            <table {...getTableProps()} className="border-l border-r border-gray-light">
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
                                className="text-gray-dark text-xs font-inter font-normal py-2.5"
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
            {isUsePagination && (
                <div className="pagination mt-4 flex items-center justify-between">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>
                    <button onClick={previousPage} disabled={!canPreviousPage}>
                        {'<'}
                    </button>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                    <button onClick={nextPage} disabled={!canNextPage}>
                        {'>'}
                    </button>
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>
                    <span>
                        | Go to page:{' '}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                            }}
                            style={{ width: '50px' }}
                        />
                    </span>
                    <select
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                        {[10, 20, 30, 40, 50].map((size) => (
                            <option key={size} value={size}>
                                Show {size}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

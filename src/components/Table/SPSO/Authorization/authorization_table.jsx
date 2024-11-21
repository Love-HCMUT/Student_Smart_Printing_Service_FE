import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useRowSelect, usePagination } from "react-table";
import { COLUMNS } from "./authorization_column";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import Pagination from "../../Table_Lib/Components/Pagination";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";


const MOCK_DATA = [
    {
        printing_staff_id: 'PS001',
        printing_staff_username: 'john_doe',
        request_time_stamp: '2023-10-01 10:00:00',
        status: true
    },
    {
        printing_staff_id: 'PS002',
        printing_staff_username: 'jane_smith',
        request_time_stamp: '2023-09-25 14:30:00',
        status: false
    },
    {
        printing_staff_id: 'PS003',
        printing_staff_username: 'alice_johnson',
        request_time_stamp: '2023-10-02 09:15:00',
        status: true
    },
    {
        printing_staff_id: 'PS004',
        printing_staff_username: 'bob_brown',
        request_time_stamp: '2023-09-30 16:45:00',
        status: true
    },
    {
        printing_staff_id: 'PS005',
        printing_staff_username: 'charlie_davis',
        request_time_stamp: '2023-09-28 11:20:00',
        status: false
    },
    {
        printing_staff_id: 'PS006',
        printing_staff_username: 'diana_evans',
        request_time_stamp: '2023-10-03 08:50:00',
        status: true
    },
    {
        printing_staff_id: 'PS007',
        printing_staff_username: 'ethan_foster',
        request_time_stamp: '2023-09-27 13:10:00',
        status: false
    },
    {
        printing_staff_id: 'PS008',
        printing_staff_username: 'fiona_green',
        request_time_stamp: '2023-10-01 12:00:00',
        status: true
    },
    {
        printing_staff_id: 'PS009',
        printing_staff_username: 'george_harris',
        request_time_stamp: '2023-10-02 15:30:00',
        status: true
    },
    {
        printing_staff_id: 'PS010',
        printing_staff_username: 'hannah_white',
        request_time_stamp: '2023-09-26 10:40:00',
        status: false
    }
];

const AuthorizationTable = () => {
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
        setGlobalFilter,
        state: { pageIndex, globalFilter },
    } = useTable(
        {
            columns,
            data,
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

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <div className="w-full rounded-lg mt-6 shadow-lg">
                < SearchBar1 filter={globalFilter} setFilter={setGlobalFilter} param={<PrinterManagerControl />} />
                <SPSOHeader1 header="Athorization" content="Student Printing Service Officer set authorization to Printing Staff" />
                <div className="h-[600px] overflow-auto">
                    <table {...getTableProps()} className="w-full border rounded-md">
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
                                            <td {...cell.getCellProps()} className="px-4 py-2 text-sm font-normal
                                                                                    text-gray-700 break-words" key={cell.column.id}>
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center bg-white py-2">
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
        </div>
    );
};

const PrinterManagerControl = () => {
    return (
        <div className="flex items-center space-x-2 p-4">
            <button className=" bg-button-blue hover:bg-button-blue-hover
                                text-white
                                  text-sm px-4 py-2
                                  rounded-full flex items-center space-x-1">

                <span>Authorize</span>
            </button>
            <button className="bg-button-red hover:bg-button-red-hover text-white text-sm px-4 py-2 rounded-full">
                Delete
            </button>
        </div>
    );
};

export default AuthorizationTable;
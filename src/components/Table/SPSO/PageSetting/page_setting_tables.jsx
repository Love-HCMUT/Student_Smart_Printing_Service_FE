import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./page_setting_columns";
import arrow from "../../../../assets/arrow-down.svg";
import Pagination from "../../Table_Lib/Components/Pagination";
import { SPSOHeader1 } from "../Header1/Header1";
import group from "../../../../assets/group.svg";
const MOCK_DATA = [
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    },
    {
        "day": "1",
        "month": "1",
        "number_of_paper": "1",
    }
]

const PageSettingTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [numberOfPaper, setNumberOfPaper] = useState("");


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

    return (

        <div className="container mx-auto p-4">
            <div className="w-full">
                <SPSOHeader1 prop={<PrinterManagerControl />} header="Paper Setting" content="Configure schedule and number of giving paper" />
                <AddPaperSetting
                    value={{ day, month, numberOfPaper }}
                    onChange={{ setDay, setMonth, setNumberOfPaper }}
                />
                <div className="overflow-auto">
                    <table {...getTableProps()} className="min-w-full bg-white border
                 border-gray-300 rounded-md">
                        <thead className="bg-gray-100">
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className="p-3 text-center text-xs font-medium text-gray-700 tracking-wider cursor-pointer"
                                            key={column.id}
                                        >
                                            <div className="flex items-center justify-center">
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
                                            <td
                                                {...cell.getCellProps()}
                                                className="w-48 px-4 py-2 text-sm text-gray-700 break-words text-center"
                                                key={cell.column.id}
                                            >
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

const PrinterManagerControl = () => {
    return (
        <div className="flex items-center space-x-2 p-4">
            <button className=" bg-button-blue hover:bg-button-blue-hover
                                text-white
                                  text-sm px-4 py-2
                                  rounded-full flex items-center space-x-1">
                <img
                    src={group}
                    alt="search"
                    className="w-4 h-4 text-gray-400 mr-2"
                />
                <span>Add</span>
            </button>
        </div>
    );
};

const AddPaperSetting = ({ value, onChange }) => {
    const { setDay, setMonth, setNumberOfPaper } = onChange;

    return (
        <div className="flex justify-between px-2 py-6 bg-white shadow-md border">
            <input
                type="text"
                placeholder="Day"
                value={value.day}
                onChange={(e) => setDay(e.target.value)}
                className="px-4 py-2 border rounded-md text-center"
            />
            <input
                type="text"
                placeholder="Month"
                value={value.month}
                onChange={(e) => setMonth(e.target.value)}
                className="px-4 py-2 border rounded-md text-center"
            />
            <input
                type="text"
                placeholder="Number of paper"
                value={value.number_of_paper}
                onChange={(e) => setNumberOfPaper(e.target.value)}
                className="px-4 py-2 border rounded-md text-center"
            />
        </div>
    );
};

export default PageSettingTable;
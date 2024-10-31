import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useRowSelect, usePagination } from "react-table";
import { COLUMNS } from "./printer_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import Pagination from "../../Table_Lib/Components/Pagination";
const MOCK_DATA = [
    {
        "printer_id": "PRT001",
        "branch": "HP",
        "model": "LaserJet Pro MFP M428fdw",
        "description": "A high-performance multifunction printer.",
        "location": "Room 101",
        "year_of_manufacture": "18-11-2019",
        "status": true
    },
    {
        "printer_id": "PRT001",
        "branch": "HP",
        "model": "LaserJet Pro MFP M428fdw",
        "description": "A high-performance multifunction printer.",
        "location": "Room 101",
        "year_of_manufacture": "18-11-2019",
        "status": true
    },
    {
        "printer_id": "PRT002",
        "branch": "Canon",
        "model": "imageCLASS MF644Cdw",
        "description": "A reliable color laser printer.",
        "location": "Room 102",
        "year_of_manufacture": "20-12-2020",
        "status": false
    },
    {
        "printer_id": "PRT003",
        "branch": "Brother",
        "model": "HL-L2350DW",
        "description": "A compact monochrome laser printer.",
        "location": "Room 103",
        "year_of_manufacture": "30-08-2018",
        "status": true
    },
    {
        "printer_id": "PRT004",
        "branch": "Epson",
        "model": "EcoTank ET-4760",
        "description": "An efficient all-in-one inkjet printer.",
        "location": "Room 104",
        "year_of_manufacture": "15-05-2021",
        "status": false
    },
    {
        "printer_id": "PRT005",
        "branch": "Samsung",
        "model": "Xpress M2070FW",
        "description": "A versatile multifunction printer.",
        "location": "Room 105",
        "year_of_manufacture": "10-10-2017",
        "status": true
    },
    {
        "printer_id": "PRT006",
        "branch": "Lexmark",
        "model": "MB2236adw",
        "description": "A compact multifunction printer.",
        "location": "Room 106",
        "year_of_manufacture": "22-07-2019",
        "status": true
    },
    {
        "printer_id": "PRT007",
        "branch": "Xerox",
        "model": "WorkCentre 6515",
        "description": "A reliable color multifunction printer.",
        "location": "Room 107",
        "year_of_manufacture": "05-03-2020",
        "status": false
    },
    {
        "printer_id": "PRT008",
        "branch": "Ricoh",
        "model": "SP 3710DN",
        "description": "A high-speed monochrome printer.",
        "location": "Room 108",
        "year_of_manufacture": "12-11-2018",
        "status": true
    },
    {
        "printer_id": "PRT009",
        "branch": "Kyocera",
        "model": "ECOSYS M5526cdw",
        "description": "A versatile color multifunction printer.",
        "location": "Room 109",
        "year_of_manufacture": "18-09-2021",
        "status": false
    },
    {
        "printer_id": "PRT010",
        "branch": "Dell",
        "model": "S2830dn",
        "description": "A reliable monochrome laser printer.",
        "location": "Room 110",
        "year_of_manufacture": "25-06-2017",
        "status": true
    },
    {
        "printer_id": "PRT001",
        "branch": "HP",
        "model": "LaserJet Pro MFP M428fdw",
        "description": "A high-performance multifunction printer.",
        "location": "Room 101",
        "year_of_manufacture": "18-11-2019",
        "status": true
    },
    {
        "printer_id": "PRT002",
        "branch": "Canon",
        "model": "imageCLASS MF644Cdw",
        "description": "A reliable color laser printer.",
        "location": "Room 102",
        "year_of_manufacture": "20-12-2020",
        "status": false
    },
    {
        "printer_id": "PRT003",
        "branch": "Brother",
        "model": "HL-L2350DW",
        "description": "A compact monochrome laser printer.",
        "location": "Room 103",
        "year_of_manufacture": "30-08-2018",
        "status": true
    },
    {
        "printer_id": "PRT004",
        "branch": "Epson",
        "model": "EcoTank ET-4760",
        "description": "An efficient all-in-one inkjet printer.",
        "location": "Room 104",
        "year_of_manufacture": "15-05-2021",
        "status": false
    },
    {
        "printer_id": "PRT005",
        "branch": "Samsung",
        "model": "Xpress M2070FW",
        "description": "A versatile multifunction printer.",
        "location": "Room 105",
        "year_of_manufacture": "10-10-2017",
        "status": true
    },
    {
        "printer_id": "PRT006",
        "branch": "Lexmark",
        "model": "MB2236adw",
        "description": "A compact multifunction printer.",
        "location": "Room 106",
        "year_of_manufacture": "22-07-2019",
        "status": true
    },
    {
        "printer_id": "PRT007",
        "branch": "Xerox",
        "model": "WorkCentre 6515",
        "description": "A reliable color multifunction printer.",
        "location": "Room 107",
        "year_of_manufacture": "05-03-2020",
        "status": false
    },
    {
        "printer_id": "PRT008",
        "branch": "Ricoh",
        "model": "SP 3710DN",
        "description": "A high-speed monochrome printer.",
        "location": "Room 108",
        "year_of_manufacture": "12-11-2018",
        "status": true
    },
    {
        "printer_id": "PRT009",
        "branch": "Kyocera",
        "model": "ECOSYS M5526cdw",
        "description": "A versatile color multifunction printer.",
        "location": "Room 109",
        "year_of_manufacture": "18-09-2021",
        "status": false
    },
    {
        "printer_id": "PRT010",
        "branch": "Dell",
        "model": "S2830dn",
        "description": "A reliable monochrome laser printer.",
        "location": "Room 110",
        "year_of_manufacture": "25-06-2017",
        "status": true
    },
    {
        "printer_id": "PRT001",
        "branch": "HP",
        "model": "LaserJet Pro MFP M428fdw",
        "description": "A high-performance multifunction printer.",
        "location": "Room 101",
        "year_of_manufacture": "18-11-2019",
        "status": true
    },
    {
        "printer_id": "PRT002",
        "branch": "Canon",
        "model": "imageCLASS MF644Cdw",
        "description": "A reliable color laser printer.",
        "location": "Room 102",
        "year_of_manufacture": "20-12-2020",
        "status": false
    },
    {
        "printer_id": "PRT003",
        "branch": "Brother",
        "model": "HL-L2350DW",
        "description": "A compact monochrome laser printer.",
        "location": "Room 103",
        "year_of_manufacture": "30-08-2018",
        "status": true
    },
    {
        "printer_id": "PRT004",
        "branch": "Epson",
        "model": "EcoTank ET-4760",
        "description": "An efficient all-in-one inkjet printer.",
        "location": "Room 104",
        "year_of_manufacture": "15-05-2021",
        "status": false
    },
    {
        "printer_id": "PRT005",
        "branch": "Samsung",
        "model": "Xpress M2070FW",
        "description": "A versatile multifunction printer.",
        "location": "Room 105",
        "year_of_manufacture": "10-10-2017",
        "status": true
    },
    {
        "printer_id": "PRT006",
        "branch": "Lexmark",
        "model": "MB2236adw",
        "description": "A compact multifunction printer.",
        "location": "Room 106",
        "year_of_manufacture": "22-07-2019",
        "status": true
    },
    {
        "printer_id": "PRT007",
        "branch": "Xerox",
        "model": "WorkCentre 6515",
        "description": "A reliable color multifunction printer.",
        "location": "Room 107",
        "year_of_manufacture": "05-03-2020",
        "status": false
    },
    {
        "printer_id": "PRT008",
        "branch": "Ricoh",
        "model": "SP 3710DN",
        "description": "A high-speed monochrome printer.",
        "location": "Room 108",
        "year_of_manufacture": "12-11-2018",
        "status": true
    },
    {
        "printer_id": "PRT009",
        "branch": "Kyocera",
        "model": "ECOSYS M5526cdw",
        "description": "A versatile color multifunction printer.",
        "location": "Room 109",
        "year_of_manufacture": "18-09-2021",
        "status": false
    },
    {
        "printer_id": "PRT010",
        "branch": "Dell",
        "model": "S2830dn",
        "description": "A reliable monochrome laser printer.",
        "location": "Room 110",
        "year_of_manufacture": "25-06-2017",
        "status": true
    }
]

const PrinterManagerTable = () => {
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

export default PrinterManagerTable;
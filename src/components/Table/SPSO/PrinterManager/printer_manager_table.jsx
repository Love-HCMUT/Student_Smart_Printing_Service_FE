import React, { useEffect, useMemo, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, useRowSelect, usePagination } from "react-table";
import { COLUMNS } from "./printer_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import Pagination from "../../Table_Lib/Components/Pagination";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import group from "../../../../assets/group.svg";
import { SPSOHeader1 } from "../Header1/Header1";
import axios from "axios";
// const MOCK_DATA = [
//     {
//         "printer_id": "PRT001",
//         "branch": "HP",
//         "model": "LaserJet Pro MFP M428fdw",
//         "description": "A high-performance multifunction printer.",
//         "location": "Room 101",
//         "year_of_manufacture": "18-11-2019",
//         "status": true
//     },
//     {
//         "printer_id": "PRT001",
//         "branch": "HP",
//         "model": "LaserJet Pro MFP M428fdw",
//         "description": "A high-performance multifunction printer.",
//         "location": "Room 101",
//         "year_of_manufacture": "18-11-2019",
//         "status": true
//     },
//     {
//         "printer_id": "PRT002",
//         "branch": "Canon",
//         "model": "imageCLASS MF644Cdw",
//         "description": "A reliable color laser printer.",
//         "location": "Room 102",
//         "year_of_manufacture": "20-12-2020",
//         "status": false
//     },
//     {
//         "printer_id": "PRT003",
//         "branch": "Brother",
//         "model": "HL-L2350DW",
//         "description": "A compact monochrome laser printer.",
//         "location": "Room 103",
//         "year_of_manufacture": "30-08-2018",
//         "status": true
//     },
//     {
//         "printer_id": "PRT004",
//         "branch": "Epson",
//         "model": "EcoTank ET-4760",
//         "description": "An efficient all-in-one inkjet printer.",
//         "location": "Room 104",
//         "year_of_manufacture": "15-05-2021",
//         "status": false
//     },
//     {
//         "printer_id": "PRT005",
//         "branch": "Samsung",
//         "model": "Xpress M2070FW",
//         "description": "A versatile multifunction printer.",
//         "location": "Room 105",
//         "year_of_manufacture": "10-10-2017",
//         "status": true
//     },
//     {
//         "printer_id": "PRT006",
//         "branch": "Lexmark",
//         "model": "MB2236adw",
//         "description": "A compact multifunction printer.",
//         "location": "Room 106",
//         "year_of_manufacture": "22-07-2019",
//         "status": true
//     },
//     {
//         "printer_id": "PRT007",
//         "branch": "Xerox",
//         "model": "WorkCentre 6515",
//         "description": "A reliable color multifunction printer.",
//         "location": "Room 107",
//         "year_of_manufacture": "05-03-2020",
//         "status": false
//     },
//     {
//         "printer_id": "PRT008",
//         "branch": "Ricoh",
//         "model": "SP 3710DN",
//         "description": "A high-speed monochrome printer.",
//         "location": "Room 108",
//         "year_of_manufacture": "12-11-2018",
//         "status": true
//     },
//     {
//         "printer_id": "PRT009",
//         "branch": "Kyocera",
//         "model": "ECOSYS M5526cdw",
//         "description": "A versatile color multifunction printer.",
//         "location": "Room 109",
//         "year_of_manufacture": "18-09-2021",
//         "status": false
//     },
//     {
//         "printer_id": "PRT010",
//         "branch": "Dell",
//         "model": "S2830dn",
//         "description": "A reliable monochrome laser printer.",
//         "location": "Room 110",
//         "year_of_manufacture": "25-06-2017",
//         "status": true
//     },
//     {
//         "printer_id": "PRT001",
//         "branch": "HP",
//         "model": "LaserJet Pro MFP M428fdw",
//         "description": "A high-performance multifunction printer.",
//         "location": "Room 101",
//         "year_of_manufacture": "18-11-2019",
//         "status": true
//     },
//     {
//         "printer_id": "PRT002",
//         "branch": "Canon",
//         "model": "imageCLASS MF644Cdw",
//         "description": "A reliable color laser printer.",
//         "location": "Room 102",
//         "year_of_manufacture": "20-12-2020",
//         "status": false
//     },
//     {
//         "printer_id": "PRT003",
//         "branch": "Brother",
//         "model": "HL-L2350DW",
//         "description": "A compact monochrome laser printer.",
//         "location": "Room 103",
//         "year_of_manufacture": "30-08-2018",
//         "status": true
//     },
//     {
//         "printer_id": "PRT004",
//         "branch": "Epson",
//         "model": "EcoTank ET-4760",
//         "description": "An efficient all-in-one inkjet printer.",
//         "location": "Room 104",
//         "year_of_manufacture": "15-05-2021",
//         "status": false
//     },
//     {
//         "printer_id": "PRT005",
//         "branch": "Samsung",
//         "model": "Xpress M2070FW",
//         "description": "A versatile multifunction printer.",
//         "location": "Room 105",
//         "year_of_manufacture": "10-10-2017",
//         "status": true
//     },
//     {
//         "printer_id": "PRT006",
//         "branch": "Lexmark",
//         "model": "MB2236adw",
//         "description": "A compact multifunction printer.",
//         "location": "Room 106",
//         "year_of_manufacture": "22-07-2019",
//         "status": true
//     },
//     {
//         "printer_id": "PRT007",
//         "branch": "Xerox",
//         "model": "WorkCentre 6515",
//         "description": "A reliable color multifunction printer.",
//         "location": "Room 107",
//         "year_of_manufacture": "05-03-2020",
//         "status": false
//     },
//     {
//         "printer_id": "PRT008",
//         "branch": "Ricoh",
//         "model": "SP 3710DN",
//         "description": "A high-speed monochrome printer.",
//         "location": "Room 108",
//         "year_of_manufacture": "12-11-2018",
//         "status": true
//     },
//     {
//         "printer_id": "PRT009",
//         "branch": "Kyocera",
//         "model": "ECOSYS M5526cdw",
//         "description": "A versatile color multifunction printer.",
//         "location": "Room 109",
//         "year_of_manufacture": "18-09-2021",
//         "status": false
//     },
//     {
//         "printer_id": "PRT010",
//         "branch": "Dell",
//         "model": "S2830dn",
//         "description": "A reliable monochrome laser printer.",
//         "location": "Room 110",
//         "year_of_manufacture": "25-06-2017",
//         "status": true
//     },
//     {
//         "printer_id": "PRT001",
//         "branch": "HP",
//         "model": "LaserJet Pro MFP M428fdw",
//         "description": "A high-performance multifunction printer.",
//         "location": "Room 101",
//         "year_of_manufacture": "18-11-2019",
//         "status": true
//     },
//     {
//         "printer_id": "PRT002",
//         "branch": "Canon",
//         "model": "imageCLASS MF644Cdw",
//         "description": "A reliable color laser printer.",
//         "location": "Room 102",
//         "year_of_manufacture": "20-12-2020",
//         "status": false
//     },
//     {
//         "printer_id": "PRT003",
//         "branch": "Brother",
//         "model": "HL-L2350DW",
//         "description": "A compact monochrome laser printer.",
//         "location": "Room 103",
//         "year_of_manufacture": "30-08-2018",
//         "status": true
//     },
//     {
//         "printer_id": "PRT004",
//         "branch": "Epson",
//         "model": "EcoTank ET-4760",
//         "description": "An efficient all-in-one inkjet printer.",
//         "location": "Room 104",
//         "year_of_manufacture": "15-05-2021",
//         "status": false
//     },
//     {
//         "printer_id": "PRT005",
//         "branch": "Samsung",
//         "model": "Xpress M2070FW",
//         "description": "A versatile multifunction printer.",
//         "location": "Room 105",
//         "year_of_manufacture": "10-10-2017",
//         "status": true
//     },
//     {
//         "printer_id": "PRT006",
//         "branch": "Lexmark",
//         "model": "MB2236adw",
//         "description": "A compact multifunction printer.",
//         "location": "Room 106",
//         "year_of_manufacture": "22-07-2019",
//         "status": true
//     },
//     {
//         "printer_id": "PRT007",
//         "branch": "Xerox",
//         "model": "WorkCentre 6515",
//         "description": "A reliable color multifunction printer.",
//         "location": "Room 107",
//         "year_of_manufacture": "05-03-2020",
//         "status": false
//     },
//     {
//         "printer_id": "PRT008",
//         "branch": "Ricoh",
//         "model": "SP 3710DN",
//         "description": "A high-speed monochrome printer.",
//         "location": "Room 108",
//         "year_of_manufacture": "12-11-2018",
//         "status": true
//     },
//     {
//         "printer_id": "PRT009",
//         "branch": "Kyocera",
//         "model": "ECOSYS M5526cdw",
//         "description": "A versatile color multifunction printer.",
//         "location": "Room 109",
//         "year_of_manufacture": "18-09-2021",
//         "status": false
//     },
//     {
//         "printer_id": "PRT010",
//         "branch": "Dell",
//         "model": "S2830dn",
//         "description": "A reliable monochrome laser printer.",
//         "location": "Room 110",
//         "year_of_manufacture": "25-06-2017",
//         "status": true

//     }
// ]

const PrinterManagerTable = () => {

    const [MOCK_DATA, setMOCK_DATA] = useState([]); // Dùng để lưu dữ liệu từ API
    const [loading, setLoading] = useState(true); // Để hiển thị trạng thái tải dữ liệu
    const [selectedPrinters, setSelectedPrinters] = useState([]);
    // Hàm lấy dữ liệu từ API
    const fetchMOCK_DATA = async () => {
        try {
            // const spsoId = localStorage.getItem("id");
            // if (!spsoId) {
            //         console.error("spsoID not found in localStorage");
            //          return { error: "spsoID is required" };
            //      }
            const spsoEx = 1; // Giá trị mẫu
            const response = await axios.get(
                `http://localhost:3000/api/printer/get_printer?spsoID=${spsoEx}`,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Response:   ", response.data.data)
            setMOCK_DATA(response.data.data); // Cập nhật state với dữ liệu từ API
            setLoading(false); // Kết thúc trạng thái tải
        } catch (error) {
            console.error("Error fetching printers:", error.message);
            setLoading(false); // Kết thúc trạng thái tải
        }
    };

    // Dùng useEffect để gọi API khi component được render
    useEffect(() => {
        fetchMOCK_DATA();
    }, []);


    const columns = useMemo(() => COLUMNS, []);
    const data = MOCK_DATA;
    // console.log("Mock: " , MOCK_DATA)
    // console.log("data: " , data)


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
        state: { pageIndex, globalFilter, selectedRowIds },
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

    useEffect(() => {
        const selected = Object.keys(selectedRowIds).map(rowId => MOCK_DATA[rowId]?.printer_id);
        const validSelectedPrinters = selected.filter(Boolean); // Loại bỏ giá trị undefined nếu có
        setSelectedPrinters(validSelectedPrinters);

        // Log danh sách máy in được chọn
        console.log("Selected Printers:", validSelectedPrinters);
    }, [selectedRowIds, MOCK_DATA]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <div className="w-full rounded-lg mt-6 shadow-lg">
                <SearchBar1 filter={globalFilter} setFilter={setGlobalFilter} param={
                    <PrinterManagerControl selectedPrinters={selectedPrinters} onStatusChange={fetchMOCK_DATA} />
                } />
                <SPSOHeader1 />
                <div className="h-[600px] overflow-auto">
                    <table {...getTableProps()} className="w-full border rounded-md">
                        <thead className="bg-gray-light">
                            {headerGroups.map((headerGroup, i) => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup-${i}`}>
                                    {headerGroup.headers.map((column, j) => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className="p-3 text-left text-xs font-medium text-gray-700 tracking-wider cursor-pointer"
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
                            {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} key={`row-${i}`} className="hover:bg-gray-50">
                                        {row.cells.map((cell, j) => (
                                            <td {...cell.getCellProps()} className="px-4 py-2 text-sm font-normal
                                                                                    text-gray-700 break-words" key={`cell-${i}-${j}`}>
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

const PrinterManagerControl = ({ selectedPrinters, onStatusChange }) => {
    const handleStatus = async (status) => {
        if (selectedPrinters.length === 0) {
            alert("No printers selected to update.");
            return;
        }

        try {
            await axios.put(
                `http://localhost:5000/api/printer/update-status`,
                {
                    printerStatus: status,
                    printerIds: selectedPrinters, // Truyền danh sách các máy in
                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            alert(`Updated ${selectedPrinters.length} printer(s) to ${status}.`);
            onStatusChange();
        } catch (error) {
            console.error("Error updating printer status:", error.message);
            alert("Failed to update printer status. Please try again.");
        }
    };

    return (
        <div className="flex items-center space-x-2 p-4 w-[22rem]">
            <button

                className="bg-button-blue hover:bg-button-blue-hover
                           text-white text-sm px-4 py-2 rounded-full flex items-center space-x-1"
            >
                <img
                    src={group}
                    alt="add"
                    className="w-4 h-4 text-gray-400 mr-2"
                />
                <span>Add Printer</span>
            </button>
            <button
                className="bg-button-green hover:bg-button-green-hover text-white text-sm px-4 py-2 rounded-full"
                onClick={() => handleStatus("true")} // Gọi hàm với trạng thái "Enable"
            >
                Enable
            </button>
            <button
                className="bg-button-red hover:bg-button-red-hover text-white text-sm px-4 py-2 rounded-full"
                onClick={() => handleStatus("false")} // Gọi hàm với trạng thái "Disable"
            >
                Disable
            </button>
        </div>
    );
};


export default PrinterManagerTable;



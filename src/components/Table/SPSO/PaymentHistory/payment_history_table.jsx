// import React, { useMemo } from "react";
// import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
// import { COLUMNS } from "./payment_columns"
// import arrow from "../../../../assets/arrow-down.svg";
// import Pagination from "../../Table_Lib/Components/Pagination";

// const MOCK_DATA = [
//     {
//         "user_ID": "USR001",
//         "date_of_transaction": "12/12/2023",
//         "number_of_paper": 50,
//         "charge": "50000 VND",
//         "payment_method": "Credit Card",
//         "note": "Paid in full"
//     },
//     {
//         "user_ID": "USR002",
//         "date_of_transaction": "11/11/2023",
//         "number_of_paper": 30,
//         "charge": "30000 VND",
//         "payment_method": "PayPal",
//         "note": "Pending payment"
//     },
//     {
//         "user_ID": "USR003",
//         "date_of_transaction": "10/10/2023",
//         "number_of_paper": 20,
//         "charge": "20000 VND",
//         "payment_method": "Bank Transfer",
//         "note": "Payment received"
//     },
//     {
//         "user_ID": "USR004",
//         "date_of_transaction": "09/09/2023",
//         "number_of_paper": 40,
//         "charge": "40000 VND",
//         "payment_method": "Credit Card",
//         "note": "Payment failed"
//     },
//     {
//         "user_ID": "USR005",
//         "date_of_transaction": "08/08/2023",
//         "number_of_paper": 60,
//         "charge": "60000 VND",
//         "payment_method": "PayPal",
//         "note": "Paid in full"
//     },
//     {
//         "user_ID": "USR006",
//         "date_of_transaction": "07/07/2023",
//         "number_of_paper": 25,
//         "charge": "25000 VND",
//         "payment_method": "Bank Transfer",
//         "note": "Pending payment"
//     },
//     {
//         "user_ID": "USR007",
//         "date_of_transaction": "06/06/2023",
//         "number_of_paper": 35,
//         "charge": "35000 VND",
//         "payment_method": "Credit Card",
//         "note": "Payment received"
//     },
//     {
//         "user_ID": "USR008",
//         "date_of_transaction": "05/05/2023",
//         "number_of_paper": 45,
//         "charge": "45000 VND",
//         "payment_method": "PayPal",
//         "note": "Payment failed"
//     },
//     {
//         "user_ID": "USR009",
//         "date_of_transaction": "04/04/2023",
//         "number_of_paper": 55,
//         "charge": "55000 VND",
//         "payment_method": "Bank Transfer",
//         "note": "Paid in full"
//     },
//     {
//         "user_ID": "USR010",
//         "date_of_transaction": "03/03/2023",
//         "number_of_paper": 65,
//         "charge": "65000 VND",
//         "payment_method": "Credit Card",
//         "note": "Pending payment"
//     }
// ]

// const PaymentHistoryTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         page,
//         prepareRow,
//         canPreviousPage,
//         canNextPage,
//         pageCount,
//         gotoPage,
//         nextPage,
//         previousPage,
//         state: { pageIndex },
//     } = useTable(
//         {
//             columns,
//             data,
//             initialState: { pageIndex: 0, pageSize: 10 },
//         },
//         useGlobalFilter,
//         useSortBy,
//         usePagination,
//     );

//     // const { globalFilter } = state;
//     {/* <PrinterSearch filter={globalFilter} setFilter={setGlobalFilter} />
//             <OrderPrintingHeader /> */}
//     return (
//         <div className="container mx-auto p-4">

//             <div className="w-full">
//                 <div className="h-[600px] overflow-auto">
//                     <table {...getTableProps()} className="min-w-full bg-white border
//                  border-gray-300 rounded-md">
//                         <thead className="bg-gray-100">
//                             {headerGroups.map(headerGroup => (
//                                 <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//                                     {headerGroup.headers.map(column => (
//                                         <th
//                                             {...column.getHeaderProps(column.getSortByToggleProps())}
//                                             className="px-4 py-2 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
//                                             key={column.id}
//                                         >
//                                             <div className="flex items-center">
//                                                 {column.render('Header')}
//                                                 {column.isSorted && (
//                                                     <img
//                                                         src={arrow}
//                                                         alt={column.isSortedDesc ? 'desc' : 'asc'}
//                                                         className="ml-1"
//                                                         style={{ transform: column.isSortedDesc ? 'rotate(0deg)' : 'rotate(180deg)', verticalAlign: 'middle' }}
//                                                     />
//                                                 )}
//                                             </div>
//                                         </th>
//                                     ))}
//                                 </tr>
//                             ))}
//                         </thead>
//                         <tbody {...getTableBodyProps()}>
//                             {page.map(row => {
//                                 prepareRow(row);
//                                 return (
//                                     <tr {...row.getRowProps()} key={row.id}>
//                                         {row.cells.map(cell => (
//                                             <td {...cell.getCellProps()} className="max-w-40 px-4 py-2 text-sm text-gray-700 break-words" key={cell.column.id}>
//                                                 {cell.render('Cell')}
//                                             </td>
//                                         ))}
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="bottom-0 left-0 right-0 flex justify-center items-center bg-white py-2">
//                     <Pagination previousPage={previousPage}
//                         nextPage={nextPage}
//                         gotoPage={gotoPage}
//                         pageIndex={pageIndex}
//                         pageCount={pageCount}
//                         canPreviousPage={canPreviousPage}
//                         canNextPage={canNextPage}
//                         width={'w-8'}
//                         height={'h-8'} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// // const OrderPrintingHeader = () => {
// //     return (
// //         <div className="p-4 shadow-lg">
// //             <h1 className="text-xl font-bold">Printer information</h1>
// //             <span className="text-sm text-gray-600">Click the box on the left side of print to choose</span> <br />
// //             <span className="text-sm text-gray-600">You can only choose one printer</span>
// //         </div>
// //     )
// // }

// export default PaymentHistoryTable;
import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useRowSelect, usePagination } from "react-table";
import { COLUMNS } from "./payment_columns";
import arrow from "../../../../assets/arrow-down.svg";
import { Checkbox } from "../../Table_Lib/Components/Checkbox";
import Pagination from "../../Table_Lib/Components/Pagination";
import { SearchBar1 } from "../SearchBar1/searchbar01";
import { SPSOHeader1 } from "../Header1/Header1";
import { CustomDateInput } from "../DateInputComponent.jsx/customDateInputComponent";

const MOCK_DATA = [
    {
        "user_ID": "USR001",
        "date_of_transaction": "12/12/2023",
        "number_of_paper": 50,
        "charge": "50000 VND",
        "payment_method": "Credit Card",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR002",
        "date_of_transaction": "11/11/2023",
        "number_of_paper": 30,
        "charge": "30000 VND",
        "payment_method": "PayPal",
        "note": "Pending payment"
    },
    {
        "user_ID": "USR003",
        "date_of_transaction": "10/10/2023",
        "number_of_paper": 20,
        "charge": "20000 VND",
        "payment_method": "Bank Transfer",
        "note": "Payment received"
    },
    {
        "user_ID": "USR004",
        "date_of_transaction": "09/09/2023",
        "number_of_paper": 40,
        "charge": "40000 VND",
        "payment_method": "Credit Card",
        "note": "Payment failed"
    },
    {
        "user_ID": "USR005",
        "date_of_transaction": "08/08/2023",
        "number_of_paper": 60,
        "charge": "60000 VND",
        "payment_method": "PayPal",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR006",
        "date_of_transaction": "07/07/2023",
        "number_of_paper": 25,
        "charge": "25000 VND",
        "payment_method": "Bank Transfer",
        "note": "Pending payment"
    },
    {
        "user_ID": "USR007",
        "date_of_transaction": "06/06/2023",
        "number_of_paper": 35,
        "charge": "35000 VND",
        "payment_method": "Credit Card",
        "note": "Payment received"
    },
    {
        "user_ID": "USR008",
        "date_of_transaction": "05/05/2023",
        "number_of_paper": 45,
        "charge": "45000 VND",
        "payment_method": "PayPal",
        "note": "Payment failed"
    },
    {
        "user_ID": "USR009",
        "date_of_transaction": "04/04/2023",
        "number_of_paper": 55,
        "charge": "55000 VND",
        "payment_method": "Bank Transfer",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR010",
        "date_of_transaction": "03/03/2023",
        "number_of_paper": 65,
        "charge": "65000 VND",
        "payment_method": "Credit Card",
        "note": "Pending payment"
    },
    {
        "user_ID": "USR001",
        "date_of_transaction": "12/12/2023",
        "number_of_paper": 50,
        "charge": "50000 VND",
        "payment_method": "Credit Card",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR002",
        "date_of_transaction": "11/11/2023",
        "number_of_paper": 30,
        "charge": "30000 VND",
        "payment_method": "PayPal",
        "note": "Pending payment"
    },
    {
        "user_ID": "USR003",
        "date_of_transaction": "10/10/2023",
        "number_of_paper": 20,
        "charge": "20000 VND",
        "payment_method": "Bank Transfer",
        "note": "Payment received"
    },
    {
        "user_ID": "USR004",
        "date_of_transaction": "09/09/2023",
        "number_of_paper": 40,
        "charge": "40000 VND",
        "payment_method": "Credit Card",
        "note": "Payment failed"
    },
    {
        "user_ID": "USR005",
        "date_of_transaction": "08/08/2023",
        "number_of_paper": 60,
        "charge": "60000 VND",
        "payment_method": "PayPal",
        "note": "Paid in full"
    },
    {
        "user_ID": "USR006",
        "date_of_transaction": "07/07/2023",
        "number_of_paper": 25,
        "charge": "25000 VND",
        "payment_method": "Bank Transfer",
        "note": "Pending payment"
    },
    {
        "user_ID": "USR007",
        "date_of_transaction": "06/06/2023",
        "number_of_paper": 35,
        "charge": "35000 VND",
        "payment_method": "Credit Card",
        "note": "Payment received"
    },
    {
        "user_ID": "USR008",
        "date_of_transaction": "05/05/2023",
        "number_of_paper": 45,
        "charge": "45000 VND",
        "payment_method": "PayPal",
        "note": "Payment failed"
    },
]

const PaymentHistoryTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const filterDataByDate = (rows, id, filterValue) => {
        const { startDate, endDate } = filterValue;
        return rows.filter(row => {
            const rowDate = new Date(row.original.date_of_transaction);
            if (startDate && rowDate < new Date(startDate)) return false;
            if (endDate && rowDate > new Date(endDate)) return false;
            return true;
        });
    };

    const filterDataBySearch = (rows, id, filterValue) => {
        if (!filterValue) return rows;
        return rows.filter(row => {
            return Object.values(row.original).some(val =>
                val && String(val).toLowerCase().includes(filterValue.toLowerCase())
            );
        });
    };

    const combinedFilter = (rows, id, filterValue) => {
        const { startDate, endDate, searchInput } = filterValue;
        let filteredRows = filterDataByDate(rows, id, { startDate, endDate });
        filteredRows = filterDataBySearch(filteredRows, id, searchInput);
        return filteredRows;
    };

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
            globalFilter: combinedFilter,
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
        <div className="container mx-auto px-6 h-fit w-3/5 rounded-lg">
            <div className="">
                < SearchBar1
                    value={searchInput}
                    setValue={setSearchInput}
                    setFilter={(value) => setGlobalFilter({ startDate, endDate, searchInput: value })}
                    param={
                        <DateInputComponent
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            setGlobalFilter={(value) => setGlobalFilter({ ...globalFilter, ...value })}
                        />
                    }
                />

                <SPSOHeader1 />
            </div>
            <div className="h-[430px] overflow-auto">
                <table {...getTableProps()} className="mx-auto border rounded-md w-full">
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
                                        <td {...cell.getCellProps()} className="px-4 py-2 text-sm font-normal text-gray-700 break-words" key={cell.column.id}>
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center mb-10">
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
const DateInputComponent = ({ startDate, setStartDate, endDate, setEndDate, setGlobalFilter }) => {
    const handleStartDateChange = (date) => {
        setStartDate(date);
        setGlobalFilter({ startDate: date, endDate });
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        setGlobalFilter({ startDate, endDate: date });
    };

    return (
        <div className="flex items-center gap-1">
            <CustomDateInput value={startDate} onChange={handleStartDateChange} placeholder="Start Date" />
            <CustomDateInput value={endDate} onChange={handleEndDateChange} placeholder="End Date" />
        </div>
    );
};



export default PaymentHistoryTable
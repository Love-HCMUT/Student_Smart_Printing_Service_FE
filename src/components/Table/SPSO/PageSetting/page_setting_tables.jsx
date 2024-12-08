// import React, { useMemo, useState } from "react";
// import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
// import { COLUMNS } from "./page_setting_columns";
// import arrow from "../../../../assets/arrow-down.svg";
// import Pagination from "../../Table_Lib/Components/Pagination";
// import { SPSOHeader1 } from "../Header1/Header1";
// import group from "../../../../assets/group.svg";
// const MOCK_DATA = [
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     },
//     {
//         "day": "1",
//         "month": "1",
//         "number_of_paper": "1",
//     }
// ]

// const PageSettingTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const [day, setDay] = useState("");
//     const [month, setMonth] = useState("");
//     const [numberOfPaper, setNumberOfPaper] = useState("");


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

//     return (

//         <div className="container mx-auto p-4">
//             <div className="w-full">
//                 <SPSOHeader1 prop={<PrinterManagerControl />} header="Paper Setting" content="Configure schedule and number of giving paper" />
//                 <AddPaperSetting
//                     value={{ day, month, numberOfPaper }}
//                     onChange={{ setDay, setMonth, setNumberOfPaper }}
//                 />
//                 <div className="overflow-auto">
//                     <table {...getTableProps()} className="min-w-full bg-white border
//                  border-gray-300 rounded-md">
//                         <thead className="bg-gray-100">
//                             {headerGroups.map(headerGroup => (
//                                 <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//                                     {headerGroup.headers.map(column => (
//                                         <th
//                                             {...column.getHeaderProps(column.getSortByToggleProps())}
//                                             className="p-3 text-center text-xs font-medium text-gray-700 tracking-wider cursor-pointer"
//                                             key={column.id}
//                                         >
//                                             <div className="flex items-center justify-center">
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
//                                             <td
//                                                 {...cell.getCellProps()}
//                                                 className="w-48 px-4 py-2 text-sm text-gray-700 break-words text-center"
//                                                 key={cell.column.id}
//                                             >
//                                                 {cell.render('Cell')}
//                                             </td>
//                                         ))}
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="flex justify-center items-center bg-white py-2">
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

// const PrinterManagerControl = () => {
//     return (
//         <div className="flex items-center space-x-2 p-4">
//             <button className=" bg-button-blue hover:bg-button-blue-hover
//                                 text-white
//                                   text-sm px-4 py-2
//                                   rounded-full flex items-center space-x-1">
//                 <img
//                     src={group}
//                     alt="search"
//                     className="w-4 h-4 text-gray-400 mr-2"
//                 />
//                 <span>Add</span>
//             </button>
//         </div>
//     );
// };

// const AddPaperSetting = ({ value, onChange }) => {
//     const { setDay, setMonth, setNumberOfPaper } = onChange;

//     return (
//         <div className="flex justify-between px-2 py-6 bg-white shadow-md border">
//             <input
//                 type="text"
//                 placeholder="Day"
//                 value={value.day}
//                 onChange={(e) => setDay(e.target.value)}
//                 className="px-4 py-2 border rounded-md text-center"
//             />
//             <input
//                 type="text"
//                 placeholder="Month"
//                 value={value.month}
//                 onChange={(e) => setMonth(e.target.value)}
//                 className="px-4 py-2 border rounded-md text-center"
//             />
//             <input
//                 type="text"
//                 placeholder="Number of paper"
//                 value={value.number_of_paper}
//                 onChange={(e) => setNumberOfPaper(e.target.value)}
//                 className="px-4 py-2 border rounded-md text-center"
//             />
//         </div>
//     );
// };

// export default PageSettingTable;


import React from 'react';

const PageSettingTable = () => {
    return (
        <>
            <div className="p-4 flex items-start justify-center gap-4">
                {/* Form 1 */}
                <form className="w-sm border border-gray-300 rounded-lg shadow-md p-5 bg-white flex flex-col">
                    <span className="mb-3 text-xl font-semibold">FREE PAPER PER MONTH</span>
                    <div className="relative z-0 w-full mb-3 group">
                        <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6">
                            Thang 1
                        </label>
                    </div>


                </form>


                <form className="w-1/3 border border-gray-300 rounded-lg shadow-md p-5 bg-white flex flex-col">
                    <span className="mb-6 text-xl font-semibold">FREE PAPER PER MONTH</span>
                    <div className="relative z-0 w-full mb-3 group">
                        <input type="number" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6">
                            Day to add free papers
                        </label>
                    </div>


                    <button
                        type="submit"
                        className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default PageSettingTable;

import React from 'react';
import Pagination from '../Table_Lib/Components/Pagination';

export const PSOrderHeader = ({
    printer_name = "Printer 1A",
    printer_status = "Ready",
    previousPage,
    nextPage,
    gotoPage,
    pageIndex,
    pageCount,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setPageSize,
    pageSize,
}) => {
    return (
        <div className="bg-white border-b border-gray-light flex flex-col justify-center items-start shadow-md">
            <div className="flex w-full py-3 px-4 justify-between items-center">
                <div className="flex flex-col max-w-xs">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-800 text-base font-medium leading-6">{printer_name}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm leading-5 mt-1">
                        <span>Printer Status: </span>
                        <span className={`flex items-center p-1 rounded-full text-xs font-inter max-w-fit px-3 
                            ${printer_status === 'Ready' ? 'bg-status-green-background text-status-green-text' : 'bg-status-red-background text-status-red-text'} ml-2`}>
                            <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 
                                ${printer_status === 'Ready' ? 'bg-status-green-dot' : 'bg-status-red-text'}`}></span>
                            {printer_status === 'Ready' ? 'Ready' : 'Pending'}
                        </span>
                    </div>
                </div>
                <div className="pagination flex items-center">
                    <Pagination
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
                </div>
            </div>
        </div>
    );
};
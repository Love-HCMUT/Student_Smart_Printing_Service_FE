import React, { useState } from 'react';
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
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleButtonClick = () => {
        setIsOverlayVisible(true);
    };

    const handleOverlayClick = () => {
        setIsOverlayVisible(false);
    };

    return (
        <div className="relative">
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
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleButtonClick}
                    >
                        Show Overlay
                    </button>
                </div>
            </div>
            {isOverlayVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={handleOverlayClick}
                >
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Overlay Content</h2>
                        <p>Click anywhere to close this overlay.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PSOrderHeader;
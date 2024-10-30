import React, { useState } from 'react';

const Pagination = ({
    previousPage,
    nextPage,
    gotoPage,
    pageIndex,
    pageCount,
    canPreviousPage,
    canNextPage,
}) => {
    const [isInputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState(pageIndex + 1);

    const handlePageInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handlePageSubmit = () => {
        const page = Math.max(0, Math.min(pageCount - 1, Number(inputValue) - 1));
        gotoPage(page);
        setInputVisible(false);
    };

    const handleBlur = () => {
        setInputVisible(false);
    };

    return (
        <div className="flex items-center text-black text-xs font-inter gap-1">
            <button
                onClick={previousPage}
                disabled={!canPreviousPage}
                className={`w-6 h-6 bg-white 
                rounded-md text-[10px] 
                border border-gray-300 
                hover:bg-gray-400 
                focus:outline-none 
                focus:ring-2 focus:ring-gray-500 
                focus:ring-opacity-50 
                disabled:bg-gray-200 
                disabled:cursor-not-allowed 
                disabled:text-gray-400 flex items-center justify-center`}
            >
                {'<'}
            </button>

            <button
                onClick={() => gotoPage(0)}
                className="w-6 h-6 bg-white 
               rounded-md text-[10px] 
               border border-gray-300 
               hover:bg-gray-400 
               focus:outline-none 
               focus:ring-2 focus:ring-gray-500 
               focus:ring-opacity-50 flex items-center justify-center"
            >
                {'1'}
            </button>

            {pageCount > 3 && (
                isInputVisible ? (
                    <input
                        type="number"
                        min={1}
                        max={pageCount}
                        value={inputValue}
                        onChange={handlePageInput}
                        onBlur={handleBlur}
                        onKeyDown={(e) => e.key === 'Enter' && handlePageSubmit()}
                        className="w-10 h-6 p-1 border rounded-md 
                     border-gray-300 focus:ring-2 
                     focus:ring-gray-500 focus:outline-none 
                     text-center text-[10px]"
                    />
                ) : (
                    <button
                        onClick={() => setInputVisible(true)}
                        className="w-6 h-6 text-gray-400 
                     flex items-center justify-center text-[10px]"
                    >
                        ...
                    </button>
                )
            )}

            {pageCount > 1 && (
                <button
                    onClick={() => gotoPage(pageCount === 2 ? 1 : pageCount - 2)}
                    className="w-6 h-6 bg-white 
                   rounded-md text-[10px] 
                   border border-gray-300 
                   hover:bg-gray-400 
                   focus:outline-none 
                   focus:ring-2 focus:ring-gray-500 
                   focus:ring-opacity-50 flex items-center justify-center"
                >
                    {pageCount === 2 ? '2' : pageCount - 1}
                </button>
            )}

            {pageCount > 2 && (
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    className="w-6 h-6 bg-white 
                   rounded-md text-[10px] 
                   border border-gray-300 
                   hover:bg-gray-400 
                   focus:outline-none 
                   focus:ring-2 focus:ring-gray-500 
                   focus:ring-opacity-50 flex items-center justify-center"
                >
                    {pageCount}
                </button>
            )}

            <button
                onClick={nextPage}
                disabled={!canNextPage}
                className={`w-6 h-6 bg-white 
                rounded-md text-[10px] 
                border border-gray-300 
                hover:bg-gray-400 
                focus:outline-none 
                focus:ring-2 focus:ring-gray-500 
                focus:ring-opacity-50 
                disabled:bg-gray-200 
                disabled:cursor-not-allowed 
                disabled:text-gray-400 flex items-center justify-center`}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;
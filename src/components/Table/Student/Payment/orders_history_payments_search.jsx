import React, { useState, useEffect } from 'react';
import search from '../../../../assets/search.svg';
import Filter from '../../../../assets/filter.svg';

export const OrdersHistoryPaymentSearch = ({ filter, setFilter, onSearch }) => {
    const [value, setValue] = useState(filter);

    useEffect(() => {
        setValue(filter);
    }, [filter]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setFilter(value);
            onSearch(e);
        }
    };

    return (
        <div className="flex items-center mb-5 justify-between">
            <div className="flex">
                <div className="flex items-center p-2 shadow-md rounded-xl border w-28 bg-white hover:bg-slate-300">
                    <img src={Filter} alt="filter" className="w-4 h-4 text-gray-400 mr-2 ml-2" />
                    <span className="text-gray-600">Filters</span>
                </div>
            </div>
            <div className="relative w-64 max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                        src={search}
                        alt="search"
                        className="w-4 h-4 text-gray-400"
                    />
                </div>
                <input
                    value={value || ''}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search"
                    className="text-xs font-inter p-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
            </div>
        </div>
    );
};
import React, { useState, useEffect } from 'react';
import search from '../../../../assets/search.svg';
import Filter from '../../../../assets/filter.svg';

export const OrdersHistorySearchTables = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    useEffect(() => {
        setValue(filter);
    }, [filter]);

    return (
        <div className="flex items-center mb-5 justify-between">
            <div className="flex">
                <div className="flex items-center p-3 shadow-md rounded-xl border w-28">
                    <img src={Filter} alt="filter" className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Filters</span>
                </div>

                <div className="flex items-center p-3 shadow-md rounded-xl 
                                border w-fit ml-3 cursor-pointer
                                bg-deep-blue
                                hover:bg-dark-blue">
                    <span className="text-white">Cancel order</span>
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
                    onChange={(e) => {
                        setValue(e.target.value);
                        setFilter(e.target.value);
                    }}
                    placeholder="Search"
                    className="text-xs font-inter p-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
            </div>
        </div>
    );
};
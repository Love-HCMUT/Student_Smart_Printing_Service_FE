import React, { useState, useEffect } from 'react';
import search from '../../../../assets/search.svg';
import Filter from '../../../../assets/filter.svg';

export const SearchBar1 = ({ filter, setFilter, param = null }) => {
    const [value, setValue] = useState(filter);

    useEffect(() => {
        setValue(filter);
    }, [filter]);

    return (
        <div className="flex items-center justify-between space-x-4 p-2">
            <div className="flex items-center space-x-4">
                <div className="flex items-center p-2 rounded-xl border w-28 bg-white">
                    <img src={Filter} alt="filter" className="w-4 h-4 text-gray-400 mr-2 ml-2" />
                    <span className="text-gray-700 text-sm font-medium">Filters</span>
                </div>

            </div>
            <div className="flex items-center bg-gray-100 border shadow-md
                          border-gray-300 rounded-lg w-full max-w-lg p-2">
                <img
                    src={search}
                    alt="search"
                    className="w-4 h-4 text-gray-400 mr-2"
                />
                <input
                    value={value || ''}
                    onChange={(e) => {
                        setValue(e.target.value);
                        setFilter(e.target.value);
                    }}
                    placeholder="Search"
                    className="text-sm bg-gray-100 focus:outline-none w-full"
                />
            </div>
            <div>{param}</div>
        </div>
    );
};
import React, { useState } from 'react';
import calendarIcon from '../../../../assets/calendar.svg';
export const CustomDateInput = ({ value, onChange, placeholder = "Start Date" }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <div className="flex flex-col items-center p-2 text-sm text-table-text-colo">
            {!showDatePicker && (
                <button
                    onClick={() => setShowDatePicker(!showDatePicker)}
                    className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-32 bg-white"
                >
                    <span className={`text-sm ml-1 ${!value ? 'text-gray-400' : 'text-gray-700'}`}>
                        {value ? new Date(value).toLocaleDateString() : placeholder}
                    </span>

                    <img src={calendarIcon} alt="calendar" className="w-4 h-4 ml-2" />
                </button>
            )}
            {showDatePicker && (
                <div className="flex flex-col items-center w-full">
                    <div className="flex justify-center w-full">
                        <input
                            type="date"
                            value={value ? new Date(value).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                            onChange={(e) => {
                                onChange(e.target.value);
                            }}
                            className="block px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-lg 
                                focus:outline-none"
                            onBlur={() => setShowDatePicker(false)}
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
import React, { useState } from 'react';
import calendarIcon from '../../../../assets/Calendar.svg';
export const CustomDateInput = ({ value, onChange, placeholder = "Start Date" }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <div className="flex flex-col items-center p-2 text-sm text-table-text-color">
            <button
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="flex items-center border border-gray-300 rounded-md p-2 w-32"
            >
                <img src={calendarIcon} alt="calendar" className="w-4 h-4 ml-1 mr-2" />
                <span className={`text-sm ${!value ? 'text-gray-400' : 'text-gray-700'}`}>
                    {value ? new Date(value).toLocaleDateString() : placeholder}
                </span>
            </button>

            {showDatePicker && (
                <div className="flex flex-col items-center mt-2 w-full">
                    <div className="flex justify-center w-full">
                        <input
                            type="date"
                            value={value}
                            onChange={(e) => {
                                onChange(e.target.value);
                                setShowDatePicker(false);
                            }}
                            className="block w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            onBlur={() => setShowDatePicker(false)}
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
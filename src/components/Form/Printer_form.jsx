// src/PrinterForm.jsx
import React from 'react';

const PrinterForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg"> 
        <h2 className="text-center text-gray-600 text-lg font-semibold mb-6">PRINTER INFORMATION</h2>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Brand/Manufacturer Name"
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
          />
          <input
            type="text"
            placeholder="Model"
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
          />
          
          <div className="relative">
            <select className="w-full p-3 border border-gray-200 rounded-md text-gray-500 appearance-none text-center">
              <option value="" disabled selected>Status</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Campus"
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="text"
              placeholder="Building"
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="text"
              placeholder="Room"
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
          </div>

          <textarea
            placeholder="Description"
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 h-24 resize-none text-center"
          ></textarea>

          <div className="flex space-x-4 justify-center">
            <button
              type="button"
              className="w-24 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-center shadow-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-24 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center shadow-md"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrinterForm;

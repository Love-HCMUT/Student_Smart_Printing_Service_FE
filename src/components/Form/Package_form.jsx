import React from 'react';

const PackageForm = ({
  document1,
  document2,
  papers,
  sides,
  copies,
  fromPage,
  endPage,
  isCover,
  isGlass,
  isBinding,
  isColorAllPages,
  isColorCover,
}) => {
  return (
    <div className="p-8 mx-auto w-1/2 bg-white shadow-lg rounded-lg"> 
      <h2 className="text-2xl font-semibold mb-6 text-left">Packages view point</h2>
      
      <div className="border-2 border-dashed border-purple-300 rounded-lg p-8">
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Package ID</h3>
          <label className="block text-gray-700">Documents</label>
          <div className="space-y-2">
            <div className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-100">
              <input
                type="text"
                value={document1 || ""}
                placeholder="Document name.pdf"
                readOnly
                className="flex-grow bg-gray-100 focus:outline-none"
              />
              <button className="ml-2 text-gray-600">
                <i className="fas fa-download"></i>
              </button>
            </div>
            <div className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-100">
              <input
                type="text"
                value={document2 || ""}
                placeholder="Document name.pdf"
                readOnly
                className="flex-grow bg-gray-100 focus:outline-none"
              />
              <button className="ml-2 text-gray-600">
                <i className="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Package's option</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Papers</label>
              <input
                type="text"
                value={papers || ""}
                placeholder="Number of papers"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Sides</label>
              <input
                type="text"
                value={sides || ""}
                placeholder="Number of sides"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Copies</label>
              <input
                type="text"
                value={copies || ""}
                placeholder="Number of copies"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">From</label>
              <input
                type="text"
                value={fromPage || ""}
                placeholder="From Page"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">End</label>
              <input
                type="text"
                value={endPage || ""}
                placeholder="End Page"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Package's after print option</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Is cover</label>
              <input
                type="text"
                value={isCover || ""}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Is glass</label>
              <input
                type="text"
                value={isGlass || ""}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Is binding</label>
              <input
                type="text"
                value={isBinding || ""}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>
        </div>


        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Package's color print option</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Is color for all pages</label>
              <input
                type="text"
                value={isColorAllPages || ""}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Is color for only cover</label>
              <input
                type="text"
                value={isColorCover || ""}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PackageForm;

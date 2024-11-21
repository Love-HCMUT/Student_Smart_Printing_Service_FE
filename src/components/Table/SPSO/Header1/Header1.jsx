export const SPSOHeader1 = ({ header = 'Manage Printer', content = 'A printers manager service for SPSO', prop = null }) => {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white shadow-md">
            <div>
                <h1 className="text-2xl font-bold text-blue-black">{header}</h1>
                <span className="text-sm text-table-text-color">{content}</span>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Printer</button> */}
                {prop}
            </div>
        </div>
    );
};
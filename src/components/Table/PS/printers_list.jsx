import React from 'react'
import PRINTER_LIST from './RawData/PrinterRaw.json'
import { PSMainTable } from './orders_tables'

export const Printers_list = ({
    list_printer = PRINTER_LIST
}) => {
    return (
        <div className='mt-8'>
            <StaffHeader />
            <div className="container mx-auto p-4 flex flex-wrap justify-between mt-3">
                {list_printer.map((printer, index) => {
                    const order_list = printer.order;
                    return (
                        <div key={printer.printer_ID || index} className="w-full md:w-1/2 p-2 h-96">
                            <PSMainTable printer={printer} data={order_list} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const StaffHeader = ({ prop = null }) => {
    return (
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white shadow-md">
            <div>
                <h1 className="text-2xl font-bold text-blue-black">Printing Manager</h1>
                <span className="text-sm text-table-text-color">Printer Information</span>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
                {prop}
            </div>
        </div>
    );
};
import React from 'react'
import PRINTER_LIST from './RawData/PrinterRaw.json'
import { PSMainTable } from './orders_tables'

export const Printers_list = ({
    list_printer = PRINTER_LIST
}) => {
    return (
        <div className="container mx-auto p-4 flex flex-wrap justify-between">
            {list_printer.map((printer, index) => {
                const order_list = printer.order;
                return (
                    <div key={printer.printer_ID || index} className="w-full md:w-1/2 p-2 h-96">
                        <PSMainTable printer={printer} data={order_list} />
                    </div>
                );
            })}
        </div>
    )
}
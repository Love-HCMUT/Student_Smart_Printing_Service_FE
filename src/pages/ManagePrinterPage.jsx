import React from 'react';
import PrintingHistoryPayment from '../components/Table/SPSO/PrintingHistory/printing_history_table';

const ManagePrinterPage = () => {

    return (
        <div className="min-h-screen p-6 mt-24">
            <div className="p-6">
                <PrintingHistoryPayment />
            </div>
        </div>
    );
};

export default ManagePrinterPage;
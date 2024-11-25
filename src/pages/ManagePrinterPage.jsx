import React, { useEffect, useState } from 'react';
import PrintingHistoryPayment from '../components/Table/SPSO/PrintingHistory/printing_history_table';
import { getAllOrder } from '../services/spso-get-all-api';

const ManagePrinterPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllOrder();
                setData(response);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen p-6 mt-24">
            <div className="rounded-lg shadow-md p-6">
                <PrintingHistoryPayment values={data} />
            </div>
        </div>
    );
};

export default ManagePrinterPage;
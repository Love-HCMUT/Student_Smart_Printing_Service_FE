import React, { useEffect, useState } from 'react';
import OrdersHistoryTable from "../components/Table/Student/Printing/orders_history_tables.jsx";
import { getOrdersHistory } from "../services/user-transaction-api.js";

const TransactionHistoryPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getOrdersHistory();
                setData(response);
            } catch (error) {
                console.error("Error fetching order history:", error);
            }
        };
        fetchData();
    }, []);

    const handleCancelOrder = (cancelledOrderIds) => {
        setData(prevData => prevData.filter(order => !cancelledOrderIds.includes(order.order_id)));
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden mt-4 p-6">
            <OrdersHistoryTable data={data} onCancelOrder={handleCancelOrder} />
        </div>
    );
};

export default TransactionHistoryPage;
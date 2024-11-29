import React, { useState, useEffect } from 'react'
import PaymentHistoryTable from "../components/Table/SPSO/PaymentHistory/payment_history_table.jsx";
import { getAllTransaction } from "../services/spso-get-all-api";
const ManageTransactionPage = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await getAllTransaction();
    //             setData(response);
    //         } catch (error) {
    //             console.error("Error fetching orders:", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <div className="min-h-screen p-6 mt-24">
            <div className="rounded-lg shadow-md p-6">
                <PaymentHistoryTable />
            </div>
        </div>
    );
};

export default ManageTransactionPage;
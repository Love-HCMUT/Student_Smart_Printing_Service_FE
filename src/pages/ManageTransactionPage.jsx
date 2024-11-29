import PaymentHistoryTable from "../components/Table/SPSO/PaymentHistory/payment_history_table.jsx";

const ManageTransactionPage = () => {

    return (
        <div className="min-h-screen p-6 mt-24">
            <div className="rounded-lg shadow-md p-6">
                <PaymentHistoryTable />
            </div>
        </div>
    );
};

export default ManageTransactionPage;
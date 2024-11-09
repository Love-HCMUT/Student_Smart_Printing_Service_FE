import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OrderPage from "./pages/OrderPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OrderPage />} />
                <Route path="/confirm-order" element={<ConfirmOrderPage />} />
                <Route path="/payment" element={<PaymentPage />} />
            </Routes>
        </Router>
    );
}

export default App;

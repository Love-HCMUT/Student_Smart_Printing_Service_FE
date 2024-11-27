import axios from "axios";

export const getOrdersHistory = async () => {
    const userId = localStorage.getItem("id");
    if (!userId) {
        throw new Error("User ID is missing");
    }
    const API_BASE_URL = `http://localhost:3000/order/order-history/${userId}`;
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching order history:", error);
        throw new Error("Failed to get order history");
    }
}

export const cancelOrderByUser = async (orderId) => {
    const API_BASE_URL = `http://localhost:3000/order/cancel-order/${orderId}`;
    try {
        const response = await axios.post(API_BASE_URL, { note: 'Order Cancelled by User' });
        if (response.status !== 200) {
            throw new Error("Failed to cancel order");
        }
        return response.data;
    } catch (error) {
        console.error("Error canceling order:", error);
        throw new Error("Failed to cancel order");
    }
}
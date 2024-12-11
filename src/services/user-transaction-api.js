import axios from "axios";
const host = import.meta.env.VITE_HOST


export const getOrdersHistory = async () => {
    const userId = localStorage.getItem("id");
    if (!userId) {
        throw new Error("User ID is missing");
    }
    const API_BASE_URL = `${host}/logOrder/order-history/${userId}`;
    try {
        const response = await axios.get(API_BASE_URL,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching order history:", error);
        throw new Error("Failed to get order history");
    }
}

export const cancelOrderByUser = async (orderId) => {
    const API_BASE_URL = `${host}/logOrder/cancel-order/${orderId}`;
    try {
        const response = await axios.post(API_BASE_URL,
            { note: "User cancelled" },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        alert(`Order: ${orderId} has been cancelled`);
        return response.data;
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data.error || `Unknown error occurred`;
            alert(`Cannot cancel order: ${errorMessage}`);
        } else if (error.request) {
            alert(`Cannot cancel order: No response received`);
        } else {
            alert(`Cannot cancel order: ${error.message}`);
        }
    } finally {
        window.location.reload();
    }
}
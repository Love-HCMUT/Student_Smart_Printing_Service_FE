import axios from "axios";

const host = import.meta.env.VITE_HOST

export const getRecentlyMonthlyOrder = async () => {
    const API_BASE_URL = `${host}/statistic/spso/get-recently-monthly-order`;
    try {
        const response = await axios.post(API_BASE_URL);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to get all orders');
        }
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw new Error('Failed to get all orders');
    }
};

export const getTotalCountService = async () => {
    const API_BASE_URL = `${host}/statistic/spso/get-total-count`;

    try {
        const response = await axios.post(API_BASE_URL);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to get all orders');
        }
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw new Error('Failed to get all orders');
    }
}

export const getNumberOfOrdersByMonthYear = async () => {
    const API_BASE_URL = `${host}/statistic/spso/get-number-of-orders-by-month-year`;
    try {
        const response = await axios.post(API_BASE_URL)
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to get all orders');
        }
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw new Error('Failed to get all orders');
    }
}

export const getNumberOfTransactionsByMonthYear = async () => {
    const API_BASE_URL = `${host}/statistic/spso/get-number-of-transaction-by-month-year`
    try {
        const response = await axios.post(API_BASE_URL)
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to get all orders');
        }
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw new Error('Failed to get all orders');
    }
}
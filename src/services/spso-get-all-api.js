import axios from "axios";
const host = import.meta.env.VITE_HOST

export const countOrders = async () => {

    const API_BASE_URL = `${host}/order/spso/get-order-count`;
    try {
        const response = await axios.get(API_BASE_URL);
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

export const getAllOrderPagination = async (page, limit) => {
    const API_BASE_URL = `${host}/order/spso/get-all-orders-pagination?page=${page}&limit=${limit}`;
    try {
        const response = await axios.get(API_BASE_URL)
        if (response.status === 200) {
            return response.data
        }
        else {
            throw new Error('Failed to get all orders')
        }
    } catch (error) {
        console.error('Error fetching all orders:', error)
        throw new Error('Failed to get all orders')
    }
}


export const getAllTransaction = async () => {
    const API_BASE_URL = `${host}/payment/spso/get-transaction/all`;
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

export const getAllTransactionPagination = async (page, limit) => {
    const API_BASE_URL = `${host}/payment/spso/get-transaction-pagination?page=${page}&limit=${limit}`;
    try {
        const response = await axios.get(API_BASE_URL)
        if (response.status === 200) {
            return response.data
        }
        else {
            throw new Error('Failed to get all orders')
        }
    } catch (error) {
        console.error('Error fetching all orders:', error)
        throw new Error('Failed to get all orders')
    }
}

export const countTransactions = async () => {
    const API_BASE_URL = `${host}/payment/spso/get-transaction-count`;
    try {
        const response = await axios.get(API_BASE_URL);
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
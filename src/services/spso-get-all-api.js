import axios from "axios";

export const getAllOrder = async () => {
    const API_BASE_URL = 'http://localhost:3000/order/spso/get-all-orders';
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


export const getAllTransaction = async () => {
    const API_BASE_URL = 'http://localhost:3000/payment/spso/get-transaction/all';
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